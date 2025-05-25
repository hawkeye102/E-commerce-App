import React, {useContext } from "react";
import TextField from '@mui/material/TextField';
import { Button,Card, CardContent } from "@mui/material";
import { IoBagCheckOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { fetchData, postData } from "../../../utils/api";
import { MyContext } from "../../../App";

const Checkout = () => {
  const context = useContext(MyContext);
  const [addressData, setAddressData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasAlerted, setHasAlerted] = useState(false);
   const [totalAmount, setTotalAmount] = useState(0);


    const handlePlaceOrder = () => {
    toast.success("Order placed successfully!");
  };


  const totalPrice = context?.cartdata.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  useEffect(() => {
    if (context?.cartdata && context?.cartdata.length > 0) {
      const total =context?.cartdata.reduce((acc, item) => acc + item.price * item.quantity, 0);
      setTotalAmount(total);
    }
  }, [context?.cartdata]);


  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address_line: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    mobile: "",
  });

  useEffect(() => {
  const fetchAddress = async () => {
    if (!context?.userData?.id) return;

    try {
      const res = await fetchData(`/api/address/get/${context.userData.id}`);
      if (res.success && Array.isArray(res.address) && res.address.length > 0) {
        const latest = res.address[res.address.length - 1];
        setAddressData(latest);
        setFormData({
          fullName: latest.fullName || context?.userData?.name || "",
          email: latest.email || context?.userData?.email || "",
          address_line: latest.address_line || "",
          city: latest.city || "",
          state: latest.state || "",
          country: latest.country || "",
          pincode: latest.pincode || "",
          mobile: latest.mobile || "",
        });
      } else {
        if (!hasAlerted) {
          setHasAlerted(true);
          setTimeout(() => {
            context.openAlertBox("Please add your address to proceed with checkout.");
          }, 700);
        }
        setAddressData(null);
        setFormData({
          fullName: context?.userData?.name || "",
          email: context?.userData?.email || "",
          address_line: "",
          city: "",
          state: "",
          country: "",
          pincode: "",
          mobile: "",
        });
      }
    } catch (error) {
      console.error("Error fetching address:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchAddress();
}, [context?.userData?.id]);


  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveAddress = async () => {
  const userId = context?.userData?.id;
  if (!userId) return;

 

  const requiredFields = [
    "fullName",
    "email",
    "address_line",
    "city",
    "state",
    "country",
    "pincode",
    "mobile",
  ];
  for (let field of requiredFields) {
    if (!formData[field]) {
      context.openAlertBox(`Please fill in your ${field.replace("_", " ")}`);
      return;
    }
  }

  try {
    const res = await postData("/api/address/add", {
      ...formData,
      userId,
    });

    if (res.success) {
       const isUpdate = !!addressData?._id;
      context.openAlertBox(isUpdate ? "Address updated successfully " : "Address saved successfully ");

      // Refetch latest address from backend
      const newRes = await fetchData(`/api/address/get/${userId}`);
      if (newRes.success && Array.isArray(newRes.address) && newRes.address.length > 0) {
        const latest = newRes.address[newRes.address.length - 1];
        setAddressData(latest);
      }
    } else {
      context.openAlertBox("Failed to save address ");
    }
  } catch (err) {
    context.openAlertBox("Error while saving address ");
    console.error(err);
  }
};


  if (loading) return <p className="p-5">Loading address...</p>;

  return (
    <section className="py-10 bg-gray-100">
      <div className="flex gap-5">
        {/* LEFT COLUMN */}
        <div className="pl-10 leftcol w-[70%]">
          <div className="bg-white shadow-md rounded-md w-full p-3">
            <h1 className="text-[16px] font-[500]">The Billings</h1>

            {addressData && (
              <div className="mb-4 text-sm text-gray-600 bg-gray-100 p-2 rounded">
                <strong>Saved Address:</strong><br />
                {addressData.address_line}, {addressData.city}, {addressData.state}, {addressData.pincode}, {addressData.country}<br />
                <strong>Phone:</strong> {addressData.mobile}
              </div>
            )}

            <form className="w-full mt-5 space-y-4">
              <div className="flex items-center gap-5">
                <TextField
                  className="w-full"
                  label="Full Name"
                  variant="outlined"
                  size="small"
                  value={formData.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                />
                <TextField
                  className="w-full"
                  label="E-mail"
                  variant="outlined"
                  size="small"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>

           <div className="flex items-center gap-5">
              <TextField
                className="w-full m"
                label="House & Street Name"
                variant="outlined"
                size="small"
                value={formData.address_line}
                onChange={(e) => handleChange("address_line", e.target.value)}
              />
</div>
              <div className="flex items-center gap-3">
                <TextField
                  className="w-full"
                  label="City"
                  variant="outlined"
                  size="small"
                  value={formData.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                />
                <div className="flex items-center gap-5">
                <TextField
                  className="w-full"
                  label="State"
                  variant="outlined"
                  size="small"
                  value={formData.state}
                  onChange={(e) => handleChange("state", e.target.value)}
                />
                </div>
              </div>

<div className="flex items-center gap-5">
              <TextField
                className="w-full"
                label="Country"
                variant="outlined"
                size="small"
                value={formData.country}
                onChange={(e) => handleChange("country", e.target.value)}
              />
</div>
            <div className="flex items-center gap-5">
              <TextField
                className="w-full"
                label="Pincode"
                variant="outlined"
                size="small"
                value={formData.pincode}
                onChange={(e) => handleChange("pincode", e.target.value)}
              />
</div>
              <TextField
                className="w-full"
                label="Phone No"
                variant="outlined"
                size="small"
                value={formData.mobile}
                onChange={(e) => handleChange("mobile", e.target.value)}
              />

              <Button
                variant="contained"
                className="!mt-4 !bg-green-600 hover:!bg-black text-white"
                onClick={handleSaveAddress}
              >
                {addressData ? "Update Address" : "Save Address"}
              </Button>
            </form>
          </div>
        </div>

        {/* RIGHT COLUMN */}
       
      {/* Cart Summary */}
       <Card className="shadow-lg">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Order Summary</h3>
            {context?.cartdata.length > 0 ? (
              <div className="space-y-4 max-h-[400px] overflow-y-auto">
                {context?.cartdata.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center justify-between gap-4 bg-white rounded-md p-3 shadow-sm"
                  >
                    <img
                      src={item.image}
                      alt={item.productTitle}
                      className="w-16 h-16 object-cover rounded-md border"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">{item.productTitle}</h4>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-md font-semibold text-green-600">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">Your cart is empty.</p>
            )}
            <div className="border-t pt-4">
              <div className="flex justify-between text-lg font-semibold text-gray-800">
                <span>Total:</span>
                <span>₹{totalAmount}</span>
              </div>
              <Button
                onClick={handlePlaceOrder}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium"
              >
                Place Order
              </Button>
            </div>
          </CardContent>
        </Card>
  

      </div>
    </section>
  );
};

export default Checkout