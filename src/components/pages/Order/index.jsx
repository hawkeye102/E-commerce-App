import React, { useState,useEffect, useContext} from "react";
import { AiOutlineEye } from "react-icons/ai";
import AccountsSideBar from "../../Myaccountsidebar";
import { fetchData } from "../../../utils/api";
import { MyContext } from "../../../App";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [expandedRow, setExpandedRow] = useState(null);
  const context = useContext(MyContext)

  const toggleRow = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  useEffect(() => {
    if (!context?.userData?.id) return;
    fetchData(`/api/orders/user/${context?.userData?.id}`)
      .then((res) => {
        if (res?.success !== false) {
          setOrders(res || []);
        } else {
          setOrders([]);
        }
      })
      .catch(() => setOrders([]));
  }, []);

  return (
    <section className="py-10 w-full">
      <div className="container flex gap-3 p-5">
        <div className="col1 w-[20%]">
          <AccountsSideBar />
        </div>

        <div className="leff-part w-[70%] m-auto mt-3">
          <div className="shadow-md rounded-md p-5 mt-2 bg-white">
            <div className="px-3 py-2 mb-2 border-b border-black">
              <h2 className="font-bold">My Orders</h2>
              <p className="mt-0 mb-2">
                There are{" "}
                <span className="font-bold text-red-500">{orders.length}</span>{" "}
                orders
              </p>

              <div className="overflow-x-auto w-full !scrollbar-thin !scrollbar-track-gray-200 !scrollbar-thumb-red-500">
                <table className="w-full border border-gray-300 rounded-lg ml-2">
                  <thead className="text-[14px]">
                    <tr className="bg-blue-50">
                      <th className="border border-gray-300 px-2 py-2">View</th>
                      <th className="border border-gray-300 px-2 py-2">Order ID</th>
                      <th className="border border-gray-300 px-2 py-2">Payment ID</th>
                      <th className="border border-gray-300 px-2 py-2">Products</th>
                      <th className="border border-gray-300 px-2 py-2">Phone</th>
                      <th className="border border-gray-300 px-2 py-2">Pincode</th>
                      <th className="border border-gray-300 px-2 py-2">Total</th>
                      <th className="border border-gray-300 px-2 py-2">Email</th>
                      <th className="border border-gray-300 px-2 py-2">User ID</th>
                      <th className="border border-gray-300 px-2 py-2">Status</th>
                      <th className="border border-gray-300 px-2 py-2">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <React.Fragment key={order._id}>
                        <tr className="text-gray-700">
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <button onClick={() => toggleRow(order._id)}>
                              <AiOutlineEye className="text-xl text-red-500 cursor-pointer" />
                            </button>
                          </td>
                          <td className="border border-gray-300 px-4 py-2">#{order._id}</td>
                          <td className="border border-gray-300 px-4 py-2">{order.paymentId || "COD"}</td>
                          <td className="border border-gray-300 px-4 py-2">
                            {order.product_details?.map((item, i) => (
                              <div key={i}>{item?.name}</div>
                            ))}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {order.deliveryAddress?.phone || "-"}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {order.deliveryAddress?.pinCode || "-"}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            ₹{order.totalAmt}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {order.userId?.email || "-"}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {order.userId?._id || "-"}
                          </td>
                          <td
                            className={`border border-gray-300 px-4 py-2 font-[500] ${
                              order.paymentStatus === "Paid"
                                ? "text-green-600"
                                : order.paymentStatus === "Pending"
                                ? "text-yellow-500"
                                : "text-red-500"
                            }`}
                          >
                            {order.paymentStatus}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {new Date(order.createdAt).toLocaleDateString()}
                          </td>
                        </tr>

                        {expandedRow === order._id && (
                          <tr className="bg-gray-100">
                            <td colSpan="11" className="border border-gray-300 p-4">
                             <div>
  <p className="font-bold mb-2">Order ID: {order._id}</p>
  <p className="text-sm mb-1">
    Phone: {order.deliveryAddress?.phone || "N/A"}
  </p>
  <p className="text-sm mb-1">
    Address:{" "}
    {order.deliveryAddress
      ? `${order.deliveryAddress.street}, ${order.deliveryAddress.city}, ${order.deliveryAddress.state}`
      : "N/A"}
  </p>
  <p className="text-sm mb-3">
    Status:{" "}
    <span
      className={`font-[500] ${
        order.paymentStatus === "Paid"
          ? "text-green-600"
          : order.paymentStatus === "Pending"
          ? "text-yellow-500"
          : "text-red-500"
      }`}
    >
      {order.paymentStatus}
    </span>
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {order.product_details?.map((item, index) => (
      <div
        key={index}
        className="flex items-center gap-4 p-3 border border-gray-300 rounded-md bg-white shadow-sm"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <p className="font-semibold text-sm">{item.name}</p>
          <p className="text-sm">Quantity: {item.quantity}</p>
          <p className="text-sm">Price: ₹{item.price}</p>
        </div>
      </div>
    ))}
  </div>
</div>

                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Orders;