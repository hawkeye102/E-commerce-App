
import Rating from  '@mui/material/Rating'
import Button from  '@mui/material/Button'
import TextField from '@mui/material/TextField';
import React, { useEffect, useState,useContext } from "react";
import { MyContext } from "../../../App";
import { postData } from '../../../utils/api';
import { fetchData } from '../../../utils/api';

const Reviews = ({ productId,setReviewCount }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [allReviews, setAllReviews] = useState([]);

  const context = useContext(MyContext);

  // Fetch existing reviews for the product
  const loadReviews = async () => {
    const res = await fetchData(`/api/users/getReviews?productId=${productId}`);
    if (res.success) {
      setAllReviews(res.reviews || []);
      setReviewCount?.(res.reviews.length);
    }
  };

  useEffect(() => {
    if (productId) {
      loadReviews();
    }
  }, [productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Guard: prevent empty comment or rating
    if (!comment || rating === 0) {
      return context.openAlertBox("error", "Please provide both rating and Review comment.");
    }

    const payload = {
      userId: context.userData.id,
      Username: context.userData.name,
      image: context.userData.avatar,
      productId: productId,
      rating,
      comment,
    };

    const res = await postData("/api/users/addReviews", payload);

    if (res.success) {
      context.openAlertBox("success", "Review submitted!");
      setComment("");
      setRating(0);
      loadReviews(); // Refresh review list
    } else {
     context.openAlertBox("error", "Login first to add review");
    }
  };

  return (
    <>
      <div className="w-full bg-white rounded-lg shadow-md p-5">
        <h2 className="text-2xl font-semibold text-center mb-6">Customer Reviews</h2>

        <div className="w-full max-h-[320px] overflow-y-auto pr-2 space-y-4">
          {allReviews.length > 0 ? (
            allReviews.map((review, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-4 bg-gray-100 rounded-lg shadow-sm"
              >
                <img
                  src={review.image|| "/default-avatar.png"}
                  alt="User"
                  className="w-16 h-16 rounded-full object-cover shadow-md"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-[16px]">{review.Username}</h3>
                    <p className="text-sm text-gray-500">{new Date(review.date || Date.now()).toLocaleDateString()}</p>
                  </div>
                  <p className="text-gray-700 mt-1 text-sm italic">{`"${review.comment}"`}</p>
                  <div className="text-yellow-400 mt-1 text-sm">
                    {"⭐".repeat(review.rating)}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-center text-gray-500 italic">No reviews yet.</p>
          )}
        </div>
      </div>

      <br />

      {context?.userData ? (
        <div className="review form bg-gray-300 rounded-md py-4 px-2 ml-3">
          <h2 className="text-[16px] font-[600] mb-2">Add a Review</h2>
          <form className="w-full" onSubmit={handleSubmit}>
            <TextField
              label="Write a review"
              multiline
              maxRows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full"
            />
            <br />
            <Rating
              name="product-rating"
              value={rating}
              onChange={(_, newValue) => setRating(newValue)}
            />
            <div className="flex justify-start mt-4">
              <button
                type="submit"
                className="text-[12px] bg-blue-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      ) : (
        <p className="text-sm italic text-gray-600 mt-4 ml-4">Please log in to leave a review.</p>
      )}
    </>
  );
};
export default Reviews
