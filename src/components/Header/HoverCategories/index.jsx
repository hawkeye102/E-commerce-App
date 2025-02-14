import { useState } from "react";

const categories = [
  { name: "Fashion", subcategories: ["Men", "Women", "Kids"] },
  { name: "Electronics", subcategories: ["Mobiles", "Laptops", "SmartWatch","Cameras","Accessories",] },
  { name: "Bags", subcategories: ["Handbags", "Backpacks", "Wallets"] },
  { name: "Beauty" },
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
      <a href="#" className="text-gray-700 hover:text-red-500 font-semibold">Home</a>

      {categories.map((category) => (
        <div 
          key={category.name} 
          className="relative group"
          onMouseEnter={() => category.subcategories && setOpenCategory(category.name)} // Show only if subcategories exist
          onMouseLeave={() => setOpenCategory(null)}
        >
          {/* Main Category */}
          <button 
            onClick={() => category.subcategories && handleToggle(category.name)}
            className="text-gray-700 hover:text-red-500 font-semibold focus:text-blue-700 transition-all duration-200"
          >
            {category.name}
          </button>

          {/* Show dropdown only for Fashion, Electronics, and Bags */}
          {category.subcategories && openCategory === category.name && (
            <div className="absolute left-0 top-full bg-white shadow-lg p-2 rounded-md w-40 z-50">
              {category.subcategories.map((sub) => (
                <a 
                  key={sub} 
                  href="#" 
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  {sub}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default HoverCategories;
