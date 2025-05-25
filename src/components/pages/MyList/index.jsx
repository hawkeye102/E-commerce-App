
import React ,{useState}from "react";

import Button from '@mui/material/Button';
import { IoBagCheck } from "react-icons/io5";
import AccountsSideBar from "../../Myaccountsidebar";

import Rating from "@mui/material/Rating";
import MyListItems from "./mylist";
import TextField from '@mui/material/TextField';
import { useContext } from "react";
import { MyContext } from "../../../App";


const MyList = () => {
  const { wishlistItems, userData } = useContext(MyContext);

  return (
    <section className="py-10 w-full">
      <div className="container flex gap-3 p-5">
        <div className="col1 w-[20%]">
          <AccountsSideBar />
        </div>

        <div className="left-part w-[70%] m-auto">
          <div className="shadow-md rounded-md p-5 mt-2 bg-white">
            <div className="px-3 py-2 mb-2 border-b border-black">
              <h2 className="font-bold text-lg">My Wishlist</h2>
              <p className="text-sm">
                You have{" "}
                <span className="font-bold text-red-500">
                  {wishlistItems?.length || 0}
                </span>{" "}
                {wishlistItems.length === 1 ? "item" : "items"} in your wishlist
              </p>
            </div>

            {wishlistItems.length > 0 ? (
              wishlistItems.map((item) => (
                <MyListItems key={item._id} item={item} userId={userData?.id} />
              ))
            ) : (
              <p className="text-center text-gray-500 mt-4">
                Your wishlist is empty.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};


export default MyList