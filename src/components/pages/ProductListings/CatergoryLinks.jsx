import { Link } from "react-router-dom";

const categories = ["Fashion", "Electronics", "Beauty", "Home", "Sports"];

const CategoryLinks = () => {
  return (
    <div className="flex justify-center gap-8 py-4 bg-gray-50">
      {categories.map((category) => (
        <Link
          key={category}
          to={`/products/${category.toLowerCase()}`}
          className="text-gray-700 hover:text-red-500 transition"
        >
          {category}
        </Link>
      ))}
    </div>
  );
};

export default CategoryLinks;
