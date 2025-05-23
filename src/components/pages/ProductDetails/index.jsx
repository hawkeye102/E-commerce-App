import React, { useEffect, useState,useRef } from "react";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductZoom from "../../ProductZoom";

import QtyBox from "../../Qtybox";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";

import ProductDetailComponent from "../../dialogProductDetails";
import RelatedProducts from "./Relatedproducts";
import { useParams } from "react-router-dom";
import { fetchData } from "../../../utils/api";
import CircularProgress from '@mui/material/CircularProgress';
import Reviews from './reviews';


const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [ActiveTab, setActiveTab] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedproducts,setrelatedProducts] = useState([]);
  const { id } = useParams();
const [reviewCount, setReviewCount] = useState(0);
const reviewSectionRef = useRef(null);

  useEffect(() => {
  setLoading(true);
  fetchData("/api/product").then((res) => {
    if (res?.success && res.rootProducts?.length > 0) {
      setProducts(res.rootProducts);
      const matchedProduct = res.rootProducts.find(p => String(p._id) === String(id));
      setSelectedProduct(matchedProduct);

      if (matchedProduct?._id) {
        fetchData(`/api/users/getReviews?productId=${matchedProduct._id}`)
          .then((res) => {
            if (res.success) {
              setReviewCount(res.reviews.length);
            } else {
              setReviewCount(0);
            }
          })
          .catch(() => setReviewCount(0));
      }

      if (matchedProduct) {
  const related = res.rootProducts.filter(
  (p) =>
    p._id !== matchedProduct._id &&
    p.category === matchedProduct.category
);

  
  setrelatedProducts(related);
}

    }
    setTimeout(() => setLoading(false), 700);
  });
}, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <CircularProgress />
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="#">
            Fashion
          </Link>
        </Breadcrumbs>
      </div>

      <section className="py-5 bg-white">
        <div className="container flex gap-4 items-center">
          <div className="Product-zoom container w-[40%] h-[70vh] overflow-hidden">
            <ProductZoom
              images={
                Array.isArray(selectedProduct?.images)
                  ? selectedProduct.images.map(img => img.url || img)
                  : selectedProduct?.images
                  ? [selectedProduct.images]
                  : []
              }
            />
          </div>
          <div className="Product-content w-[60%] pr-10">
            <ProductDetailComponent
  product={selectedProduct}
  setActiveTab={setActiveTab}
  reviewCount={reviewCount}
  scrollToReviews={() => {
    setActiveTab(1);
    setTimeout(() => {
      reviewSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); 
  }}
/>
          </div>
        </div>

        <div className="container mt-8">
          <div className="ml-6 link flex items-center gap-4 mb-5">
            <span
              className={`text-[15px] cursor-pointer font-[500] ${
                ActiveTab === 0 ? "text-blue-500" : ""
              }`}
              onClick={() => setActiveTab(0)}
            >
              Description
            </span>

            <span
  className={`text-[15px] cursor-pointer font-[500] ${
    ActiveTab === 1 ? "text-blue-500" : ""
  }`}
  onClick={() => setActiveTab(1)}
>
  Reviews ({reviewCount})
</span>

          </div>

          {ActiveTab === 0 && (
            <div className="bg-gray-100 shadow-md w-full rounded-md py-5 px-8">
              {selectedProduct?.description || "No description available."}
            </div>
          )}
{ActiveTab === 1 && selectedProduct && (
  <div ref={reviewSectionRef}>
    <Reviews productId={selectedProduct._id} setReviewCount={setReviewCount} />
  </div>
)}



          <div className="container mt-5 px-6">
            <h2 className="text-[20px] font-[600] mb-2">Related Products</h2>
            <RelatedProducts products={relatedproducts}/>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductDetails