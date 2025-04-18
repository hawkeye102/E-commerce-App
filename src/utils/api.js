import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL; 

export const postData = async (url, formData) => {
    try {
        console.log("Full Request URL:", `${apiUrl}${url}`);
        const response = await fetch(`${apiUrl}${url}`, { 
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`, 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json(); // Parse JSON response
        console.log("Full API Response:", data);

        if (!response.ok) {
            console.error("Error in postData:", data.message || `HTTP error! Status: ${response.status}`);
            throw new Error(data.message || `HTTP error! Status: ${response.status}`);
        }
        

        return data; 

    } catch (error) {
        console.error("Error in postData:", error);
        return { success: false, message: error.message || "Request failed" }; 
    }
};

export const editData = async (url, updatedData) => {
    const token = localStorage.getItem("accessToken");
    console.log("Token being sent:", token);

    const config = {
        method: "PUT",
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: updatedData,  // No JSON stringify because it's FormData
    };
    
    try {
        console.log("Sending Request to:",apiUrl+url);
        console.log("Request Data:", updatedData);
        
        const res = await fetch( apiUrl+url, config);
        const data = await res.json();

        console.log("Response Received:", data);
        return data;
    } catch (error) {
        console.error("Error in editData:", error);
        throw error;
    }
};



export const UpdateData = async (url, updatedData) => {
    const token = localStorage.getItem("accessToken");
    console.log("Token being sent:", token);

    const config = {
        method: "PUT",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData)
    };
    
    try {
        console.log("Sending Request to:",apiUrl+url);
        console.log("Request Data:", updatedData);
        
        const res = await fetch( apiUrl+url, config);
        const data = await res.json();

        console.log("Response Received:", data);
        return data;
    } catch (error) {
        console.error("Error in editData:", error);
        throw error;
    }
};

export const fetchData = async (url) => {
    try {
        console.log("Full Request URL:", `${apiUrl}${url}`);
        const response = await fetch(`${apiUrl}${url}`, { 
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`, 
            }
        });

        const data = await response.json(); 
        console.log("Full API Response:", data);

        if (!response.ok) {
            console.error("Error in fetchData:", data.message || `HTTP error! Status: ${response.status}`);
            throw new Error(data.message || `HTTP error! Status: ${response.status}`);
        }

        return data; 

    } catch (error) {
        console.error("Error in fetchData:", error);
        return { success: false, message: error.message || "Request failed" }; 
    }
};


export const deleteAddress = async (url) => {
    try {
       
        const response = await fetch(`${apiUrl}${url}`, { 
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`, 
            }
        });

        const data = await response.json(); 
        

        if (!response.ok) {
            console.error("Error in deleteAddress:", data.message || `HTTP error! Status: ${response.status}`);
            throw new Error(data.message || `HTTP error! Status: ${response.status}`);
        }

        return data; 

    } catch (error) {
        console.error("Error in deleteAddress:", error);
        return { success: false, message: error.message || "Request failed" }; 
    }
};



