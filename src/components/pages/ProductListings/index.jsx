import React, { useState, useEffect, useContext } from "react";
import { Heart, ShoppingCart, Expand, List, Grid } from "lucide-react";
import { useParams } from "react-router-dom";
import { MyContext } from "../../../App";
import { fetchData } from "../../../utils/api";
import {useNavigate,useLocation } from "react-router-dom";

const ProductListing = () => {
  const { category, subcategory } = useParams();
  const context = useContext(MyContext);
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 60000]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [viewType, setViewType] = useState("grid");
  const [sortOption, setSortOption] = useState("Name, A To Z");

  // Fetch products from backend
  useEffect(() => {
    fetchData("/api/product").then((res) => {
      if (res?.success && res.rootProducts?.length > 0) {
        setProducts(res.rootProducts);
      }
    });
  }, []);

  // Update selected category from URL param
 const location = useLocation();

useEffect(() => {
  if (category) {
    setSelectedCategory(category.charAt(0).toUpperCase() + category.slice(1));
  } else {
    setSelectedCategory("All");
  }
}, [location.pathname]);


  // Handle sorting
  const sortedProducts = (filtered) => {
    switch (sortOption) {
      case "Name, A To Z":
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
      case "Name, Z To A":
        return filtered.sort((a, b) => b.name.localeCompare(a.name));
      case "Price, Low to High":
        return filtered.sort((a, b) => a.price - b.price);
      case "Price, High to Low":
        return filtered.sort((a, b) => b.price - a.price);
      default:
        return filtered;
    }
  };

  // Combine all filters: category, subcategory, price, rating
  const filteredProducts = sortedProducts(
    products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" ||
        product.catName?.toLowerCase() === selectedCategory.toLowerCase();

      const matchesSubcategory =
        !subcategory || product.subcatName?.toLowerCase() === subcategory.toLowerCase();

      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      const matchesRating =
        selectedRating === null || product.rating >= selectedRating;

      return (
        matchesCategory && matchesSubcategory && matchesPrice && matchesRating
      );
    })
  );

  

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold capitalize p-5">
        Showing Products for: {category || "All"}{" "}
        {subcategory && `> ${subcategory}`}
      </h2>

      <div className="flex flex-col md:flex-row p-5">
        {/* Sidebar Filters */}
        <div className="md:w-1/4 p-5 bg-gray-100 rounded-lg h-fit">
          <h3 className="text-lg font-semibold mb-3">Shop by Category</h3>
          {[
  "All",
  "Fashion",
  "Electronics",
  "Bags",
  "Footwear",
  "Groceries",
  "Beauty",
  "Jewellery",
  "Wellness",
].map((cat) => {
  const catSlug = cat.toLowerCase() === "all" ? "" : cat.toLowerCase();
  return (
    <div key={cat}>
      <input
        type="radio"
        name="category"
        value={cat}
        checked={(category || "all").toLowerCase() === cat.toLowerCase()}
        onChange={() => navigate(`/listingproducts/${catSlug}`)}
      />
      <label className="ml-2">{cat}</label>
    </div>
  );
})}


          {/* Fashion Subcategories */}
          {selectedCategory.toLowerCase() === "fashion" && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">
                Fashion Subcategories
              </h3>
              {["Men", "Women", "Kids"].map((type) => (
  <div key={type}>
    <input
      type="radio"
      name="fashionSub"
      checked={subcategory?.toLowerCase() === type.toLowerCase()}
      onChange={() =>
        navigate(`/listingproducts/fashion/${type.toLowerCase()}`)
      }
    />
    <label className="ml-2">{type}</label>
  </div>
))}

            </div>
          )}

          {/* Price Filter */}
          <h3 className="text-lg font-semibold mt-5">Filter by Price</h3>
          <div className="flex flex-col">
            <input
              type="range"
              min="0"
              max="60000"
              step="100"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], parseInt(e.target.value)])
              }
              className="w-full mt-2"
            />
            <p className="text-sm mt-1">
              Price: ₹{priceRange[0]} - ₹{priceRange[1]}
            </p>
          </div>

          {/* Rating Filter */}
          <h3 className="text-lg font-semibold mt-5">Filter by Rating</h3>
          {[5, 4, 3, 2, 1].map((star) => (
            <button
              key={star}
              onClick={() => setSelectedRating(star)}
              className={`w-full text-left p-2 rounded-lg ${
                selectedRating === star
                  ? "bg-red-500 text-white"
                  : "bg-white"
              }`}
            >
              {"★".repeat(star)} {star} Star{star > 1 ? "s" : ""}
            </button>
          ))}
          <button
            onClick={() => setSelectedRating(null)}
            className="w-full mt-2 p-2 bg-gray-200 rounded-lg"
          >
            Clear Rating Filter
          </button>
        </div>

        {/* Main Content */}
        <div className="md:w-3/4 p-5">
          {/* View and Sort */}
          <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg mb-5">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setViewType("list")}
                className={`p-2 rounded-full ${
                  viewType === "list" ? "bg-red-500 text-white" : "bg-white"
                }`}
                title="List View"
              >
                <List className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewType("grid")}
                className={`p-2 rounded-full ${
                  viewType === "grid" ? "bg-red-500 text-white" : "bg-white"
                }`}
                title="Grid View"
              >
                <Grid className="w-5 h-5" />
              </button>
              <p>There are {filteredProducts.length} products.</p>
            </div>
            <div>
              <label>Sort By: </label>
              <select
                className="ml-2 border rounded p-1"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option>Name, A To Z</option>
                <option>Name, Z To A</option>
                <option>Price, Low to High</option>
                <option>Price, High to Low</option>
              </select>
            </div>
          </div>

          {/* Products */}
          {filteredProducts.length === 0 ? (
            <div className="text-center text-gray-500">
              No products found.
            </div>
          ) : (
            <div
              className={`${
                viewType === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                  : "flex flex-col gap-5"
              }`}
            >
             {filteredProducts.map((product) => {
  const discount =
    product.oldPrice && product.price
      ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
      : 0;

  return (
    <div
      key={product._id}
      className={`border rounded-lg p-4 shadow relative group bg-white ${
        viewType === "list" ? "flex gap-4" : ""
      }`}
    >
      <div className="relative overflow-hidden rounded-lg w-full md:w-auto">
        {discount > 0 && (
          <div className="absolute top-2 left-2 z-50 bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow">
            {discount}%
          </div>
        )}

        <img
          src={product.images?.[0]}
          alt={product.name}
          onClick={() => navigate(`/ProductDetails/${product._id}`)}
          className="w-full h-48 object-contain transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white p-2 rounded-full shadow hover:bg-red-500 hover:text-white transition-colors">
            <Heart className="w-4 h-4" />
          </button>
          <button
            className="bg-white p-2 rounded-full shadow hover:bg-blue-500 hover:text-white transition-colors"
            onClick={() => context.setopenProductDetailsModal(true)}
          >
            <Expand className="w-4 h-4" />
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-red-500 hover:text-white transition-colors">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div>
        {product.brand && (
    <p className=" mt-1 text-sm text-gray-700 opacity-50">{product.brand}</p>
  )}
        <h3 className="mt-1 font-medium">{product.name}</h3>
        <div className="mt-2 flex items-center gap-3">
          <p className="text-red-500 font-semibold text-lg">
            ₹{product.price.toLocaleString()}
          </p>
          {product.oldPrice && (
            <p className="line-through text-gray-400">
              ₹{product.oldPrice.toLocaleString()}
            </p>
          )}
        </div>
        <p className="text-yellow-400">{"★".repeat(product.rating)}</p>
        <button className=" w-full mt-3 px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white flex items-center gap-2 transition-colors">
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
})}

            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default ProductListing;

