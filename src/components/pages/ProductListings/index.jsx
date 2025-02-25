import React, { useState, useEffect, useContext } from "react";
import { Heart, ShoppingCart, Expand, List, Grid } from "lucide-react";
import { useParams } from "react-router-dom";
import { MyContext } from "../../../App";

const ProductListing = () => {
  const context =useContext(MyContext)
  const { category, subcategory } = useParams(); 
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 60000]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [viewType, setViewType] = useState("grid");
  const [sortOption, setSortOption] = useState("Name, A To Z");

  useEffect(() => {
    if (category) {
      setSelectedCategory(category.charAt(0).toUpperCase() + category.slice(1)); 
    }
  }, [category]);

  const products = [
    { id: 1, name: "LIVE FASHION Black Women PU SI", category: "Bags", price: 1450, rating: 4, image: "banV2/ban1.jpg" },
    { id: 2, name: "FLORES Stylish Fashion Backpack", category: "Bags", price: 1400, rating: 3, image: "banV2/ban2.jpg" },
    { id: 3, name: "ZAALIQ Girls Black Handbag", category: "Bags",subcategory: "Handbags", price: 100, rating: 5, image: "banV2/ban3.jpg" },
    { id: 4, name: "T-Shirt", category: "Fashion",subcategory: "Men", price: 800, rating: 4, image: "banV2/ban4.jpg" },
  ];

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

  const filteredProducts = sortedProducts(
    products.filter(
      (product) =>
        (selectedCategory === "All" || product.category.toLowerCase() === selectedCategory.toLowerCase()) &&
        (!subcategory || (product.subcategory && product.subcategory.toLowerCase() === subcategory.toLowerCase())) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        (!selectedRating || product.rating === selectedRating)
    )
  );
  
  

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold">
        Showing Products for: {category} {subcategory && `> ${subcategory}`}
      </h2>
      <div className="flex flex-col md:flex-row p-5">
        {/* Sidebar */}
        <div className="md:w-1/4 p-5 bg-gray-100 rounded-lg  h-[400px] overflow-y-auto">
          <h3 className="text-lg font-semibold mb-3">Shop by Category</h3>
          {['All', 'Fashion', 'Electronics', 'Bags', 'Footwear', 'Grocery', 'Beauty', 'Jewellery', 'Wellness'].map((cat) => (
            <div key={cat}>
              <input
                type="radio"
                value={cat}
                checked={selectedCategory === cat}
                onChange={() => setSelectedCategory(cat)}
              />
              <label className="ml-2">{cat}</label>
            </div>
          ))}

          {/* Price Range Filter */}
          <h3 className="text-lg font-semibold mt-5">Filter by Price</h3>
          <div className="flex flex-col">
            <input
              type="range"
              min="0"
              max="60000"
              step="100"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full mt-2"
            />
            <p className="text-sm mt-1">Price: ₹{priceRange[0]} - ₹{priceRange[1]}</p>
          </div>

          {/* Rating Filter */}
          <h3 className="text-lg font-semibold mt-5">Filter by Rating</h3>
          {[5, 4, 3, 2, 1].map((star) => (
            <button
              key={star}
              onClick={() => setSelectedRating(star)}
              className={`w-full text-left p-2 rounded-lg ${selectedRating === star ? "bg-red-500 text-white" : "bg-white"}`}
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
          <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg mb-5">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setViewType("list")}
                className={`p-2 rounded-full ${viewType === "list" ? "bg-red-500 text-white" : "bg-white"}`}
                title="List View"
              >
                <List className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewType("grid")}
                className={`p-2 rounded-full ${viewType === "grid" ? "bg-red-500 text-white" : "bg-white"}`}
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

          {/* Product Section */}
          <div className={`${viewType === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" : "flex flex-col gap-5"}`}>
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`border rounded-lg p-4 shadow relative group bg-white ${
                  viewType === "list" ? "flex gap-4" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-lg w-full md:w-auto">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain transform group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* icons-section */}
                  <div className="absolute top-4 right-4 flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button title="Add to Wishlist" className="bg-white p-2 rounded-full shadow hover:bg-red-500 hover:text-white transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                    <button title="View Details"
                   className="bg-white p-2 rounded-full shadow hover:bg-blue-500 hover:text-white transition-colors">
                  <Expand className="w-4 h-4" onClick={()=>context.setopenProductDetailsModal(true)}/>
                 </button>

                    <button title="Add to Cart" className="bg-white p-2 rounded-full shadow hover:bg-red-500 hover:text-white transition-colors">
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="mt-3 font-medium">{product.name}</h3>
                  <p className="text-red-500 font-semibold text-lg mt-2">₹{product.price.toLocaleString()}</p>
                  <p className="text-yellow-400">{'★'.repeat(product.rating)}</p>
                  <a href=" " className="text-red-500 underline hover:text-red-700 mt-2 inline-block">Shop Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;

