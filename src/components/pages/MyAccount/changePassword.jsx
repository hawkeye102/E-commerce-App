import React, { useState, useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../../App";
import { postData } from "../../../utils/api";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const ChangePassword = () => {
    const context = useContext(MyContext);
    const history = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const [passwords, setPasswords] = useState({
        email:'',
        oldPassword: "",
        newpassword: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPasswords({ ...passwords, [name]: value });
    };


    useEffect(() => {
        const storedEmail = localStorage.getItem("userEmail"); 
        if (storedEmail) {
            setPasswords((prev) => ({ ...prev, email: storedEmail }));
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!passwords.oldPassword || !passwords.newpassword || !passwords.confirmPassword) {
            context.openAlertBox("error", "All fields are required!");
            setIsLoading(false);
            return;
        }

        if (passwords.newpassword !== passwords.confirmPassword) {
            context.openAlertBox("error", "New passwords do not match!");
            setIsLoading(false);
            return;
        }

        postData("/api/users/reset-password", {
            email:passwords.email,
            oldPassword: passwords.oldPassword,
            newpassword: passwords.newpassword,
        })
            .then((res) => {
                if (res?.success) {
                    context.openAlertBox("success", "Password changed successfully!");
                    setPasswords({ oldPassword: "", newpassword: "", confirmPassword: "" });
                    history("/my-account");
                } else {
                    context.openAlertBox("error", res?.message || "Password change failed!");
                }
            })
            .catch(() => {
                context.openAlertBox("error", "Network error! Please try again.");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <section className="flex justify-center items-center  bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 mt-3 mb-3 w-[350px]">
                <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">Change Password</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <TextField
                            type="password"
                            label="Old Password"
                            variant="outlined"
                            size="small"
                            name="oldPassword"
                            value={passwords.oldPassword}
                            onChange={handleChange}
                            disabled={isLoading}
                            fullWidth
                        />
                    </div>

                    <div className="mb-4">
                        <TextField
                            type="password"
                            label="New Password"
                            variant="outlined"
                            size="small"
                            name="newpassword"
                            value={passwords.newpassword}
                            onChange={handleChange}
                            
                            fullWidth
                        />
                    </div>

                    <div className="mb-4">
                        <TextField
                            type="password"
                            label="Confirm Password"
                            variant="outlined"
                            size="small"
                            name="confirmPassword"
                            value={passwords.confirmPassword}
                            onChange={handleChange}
                           
                            fullWidth
                        />
                    </div>

                    <Button
                        type="submit"
                        variant="contained"
                        color="error"
                        fullWidth
                       
                        className="mt-4 py-2 text-lg font-semibold"
                    >
                        {isLoading ? <CircularProgress size={24} color="inherit" /> : "Change Password"}
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default ChangePassword;
