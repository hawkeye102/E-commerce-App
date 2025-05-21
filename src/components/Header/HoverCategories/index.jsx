import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import {fetchData} from "../../../utils/api";



const HoverCategories = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const [catData,setCatData]  =useState([])
  useEffect(()=>{
    fetchData('/api/category').then((res)=>{
      console.log(res)

      if (res?.success === true) {
        setCatData(res.rootCategories);
      }
    })
  },[])

  
  // Function to toggle subcategories on click
  const handleToggle = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <nav className="flex gap-8 relative ">
      <Link to="/" className="text-gray-700 hover:text-red-500 font-semibold">
        Home
      </Link>

      {catData.map((category) => (
        <div
          key={category._id}
          className="relative group"
          onMouseEnter={() => category.children && setOpenCategory(category.name)}
          onMouseLeave={() => setOpenCategory(null)}
        >
          <Link
            to={`/listingproducts/${category.name.toLowerCase()}`}
            onClick={() => handleToggle(category.name)}
            className="text-gray-700 hover:text-red-500 font-semibold focus:text-blue-700 transition-all duration-200"
          >
            {category.name}
          </Link>

          {category.children?.length > 0 && openCategory === category.name && (
            <div className="absolute left-0 top-full bg-white shadow-lg p-2 rounded-md w-40 z-50">
              {category.children.map((sub) => (
                <Link
                  key={sub._id}
                  to={`/listingproducts/${category.name.toLowerCase()}/${sub.name.toLowerCase()}`}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  {sub.name}
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
