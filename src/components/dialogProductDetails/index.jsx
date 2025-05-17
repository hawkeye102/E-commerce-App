import React, { useContext,useEffect,useState } from "react";
import Button from  '@mui/material/Button'
import Rating from  '@mui/material/Rating'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import  QtyBox from '../Qtybox'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import { fetchData } from "../../utils/api";
import { MyContext } from "../../App";



   const ProductDetailComponent = () => {
  const [product, setProduct] = useState(null);
  const [productActionIndex, setProductActionIndex] = useState(null);
  const { selectedProductId } = useContext(MyContext);
  

  useEffect(() => {
    if (!selectedProductId) return;

    fetchData(`/api/product/${selectedProductId}`).then((res) => {
      if (res.success) {
        setProduct(res.product); // assuming API returns product key
      }
    });
  }, [selectedProductId]);

  if (!product) return <p className="p-4">Loading product details...</p>;

  return (
    <div className="p-4">
      <h1 className="text-[20px] font-[600]">{product.name}</h1>

      <div className="flex items-center gap-3 mt-2">
        <span className="text-gray-600">Brand: 
          <span className="font-bold text-black pl-1">{product.brand}</span>
        </span>
        <Rating name="size-small" value={product.rating} size="small" readOnly />
        <span className="text-[15px] font-[600] cursor-pointer">Review(6)</span>
      </div>

      <div className="flex items-center gap-3 mt-2">
        <span className="old-price text-gray-500 line-through text-[15px]">₹{product.oldPrice}</span>
        <span className="new-price text-[15px] font-[500] text-red-600">₹{product.price}</span>
        <span className="text-[15px]">Available in stock: 
          <span className="text-emerald-400 font-bold pl-1">{product.countInstock} items</span>
        </span>
      </div>

      <p className="text-[14px] leading-6 mt-3 mb-4">{product.description}</p>

      <div className="flex items-center">
        <span className="text-[16px] pr-2">Size :</span>
        <div className="flex items-center gap-1">
          {["S", "M", "L", "XL"].map((size, idx) => (
            <Button
              key={size}
              onClick={() => setProductActionIndex(idx)}
              className={`!min-w-[40px] !border-2 !border-gray-300 h-[30px] ${
                productActionIndex === idx ? "!bg-red-400 !text-white" : ""
              }`}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      <p className="text-[14px] mt-4 mb-2 py-2">Free Shipping (Est. Delivery 2 to 3 days)</p>

      <div className="flex items-center gap-3">
        <div className="qtyBoxWrapper mb-2">
          <QtyBox />
        </div>
        <button className="flex items-center h-[30px] bg-red-600 text-white py-2 px-4 rounded gap-2 hover:bg-black transition duration-300 mb-2">
          <ShoppingCartIcon className="text-[15px]" />
          Add To Cart
        </button>
      </div>

      <div className="flex items-center gap-3 mt-4">
        <span className="flex items-center gap-2 text-[14px] font-[600] cursor-pointer hover:text-red-500">
          <FaRegHeart className="text-[18px]" /> Add to Wishlist
        </span>

        <span className="pl-2 flex items-center gap-2 text-[14px] font-[600] cursor-pointer hover:text-red-500">
          <MdOutlineCompareArrows className="text-[18px]" /> Add to Compare
        </span>
      </div>
    </div>
  );
};

export default ProductDetailComponent