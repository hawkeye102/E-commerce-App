import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "Achieving excellence through customized solutions",
    date: "2025-01-17",
    image: "electronics/electronics1.jpg",
  },
  {
    title: "Delivering measurable results and precision through proven strategies",
    date: "2025-01-17",
    image: "electronics/electronics2.jpg",
  },
  {
    title: "Empowering change, delivering every single time success",
    date: "2025-01-17",
    image: "electronics/electronics3.jpg",
  },
  {
    title: "Shaping sustainable growth for future solutions",
    date: "2025-01-17",
    image: "electronics/electronics4.jpg",
  },
];

const BlogSection = () => {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">From The Blog</h2>

        <Swiper
            spaceBetween={20}
             breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                        }}
>
          {blogs.map((blog, index) => (
            <SwiperSlide key={index}>

 {/* Category Tag */}
 <motion.div
    className="absolute top-3 left-3 bg-blue-600 text-white px-4 py-2 text-sm rounded z-10 cursor-pointer"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    whileHover={{ scale: 1.1, backgroundColor: "#2563EB" }} // Scales up on hover for emphasis
  >
    {blog.category}
  </motion.div>


              <motion.div
             whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
             className="relative"
            >
                <Card className="shadow-lg rounded-lg overflow-hidden">
                  <CardMedia component="img" height="180" image={blog.image} alt={blog.title} />
  
                  <CardContent>
                    
                    {/* Animated Title on Hover */}
                    <motion.div
                  whileHover={{ y: -2, color: "#1E40AF", opacity: 0.9 ,textDecoration: "underline"}}
                  transition={{ type: "spring", stiffness: 120, damping: 10 }}>

                      <Typography variant="h6" className="font-semibold">
                        {blog.title}
                      </Typography>
                    </motion.div>
  
                    <Typography variant="body2" className="text-gray-500 flex items-center gap-2">
                      📅 {blog.date}
                    </Typography>
  
                     {/* Read More Motion Effect */}
                     <motion.div
                 whileHover={{ x: 5, color: "#2563EB" }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                 className="inline-flex items-center gap-1 mt-2 cursor-pointer text-blue-500"
                    >
             Read More <ArrowRight size={16} />
            </motion.div>

                  </CardContent>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };
  
  export default BlogSection;