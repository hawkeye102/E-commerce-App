import { useState } from "react";
import { Link } from "react-router-dom"

const categories = [
  { name: "Fashion", subcategories: ["Men", "Women", "Kids"] },
  { name: "Electronics", subcategories: ["Mobiles", "Laptops", "SmartWatch","Cameras","Accessories",] },
  { name: "Bags", subcategories: ["Handbags", "Backpacks", "Wallets"] },
  { name: "Beauty" },
  { name: "Wellness"},
  { name: "Jewellery" },
  { name: "Footwear" },
  { name: "Grocery" }
];

const HoverCategories = () => {
  const [openCategory, setOpenCategory] = useState(null);

  // Function to toggle subcategories on click
  const handleToggle = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <nav className="flex gap-6 relative">
      {/* Home Link */}
      <Link to="/" className="text-gray-700 hover:text-red-500 font-semibold">
        Home
      </Link>

      {categories.map((category) => (
        <div
          key={category.name}
          className="relative group"
          onMouseEnter={() => category.subcategories && setOpenCategory(category.name)}
          onMouseLeave={() => setOpenCategory(null)}
        >
          {/* Main Category Link */}
          <Link
            to={`/listingproducts/${category.name.toLowerCase()}`} // ✅ Linked to listingproducts page
            onClick={() => handleToggle(category.name)}
            className="text-gray-700 hover:text-red-500 font-semibold focus:text-blue-700 transition-all duration-200"
          >
            {category.name}
          </Link>

          {/* Subcategories Dropdown */}
          {category.subcategories && openCategory === category.name && (
            <div className="absolute left-0 top-full bg-white shadow-lg p-2 rounded-md w-40 z-50">
              {category.subcategories.map((sub) => (
                <Link
                  key={sub}
                  to={`/listingproducts/${category.name.toLowerCase()}/${sub.toLowerCase()}`} // ✅ Subcategory links
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  {sub}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default HoverCategories;
