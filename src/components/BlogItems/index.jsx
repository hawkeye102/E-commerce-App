import React, { useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Card, CardContent, CardMedia, Typography, Button, Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import { ArrowRight, X } from "lucide-react";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "Achieving excellence through customized solutions",
    date: "2025-02-17",
    image: "Blog/blog1.jpg",
    content: `The world is moving towards personalized solutions in every industry. Whether it's technology, healthcare, or business, customization allows organizations to meet specific client needs effectively. By focusing on tailored approaches, businesses can improve customer satisfaction, increase efficiency, and gain a competitive edge in the market.

    In the field of technology, customized solutions play a crucial role in software development, AI-driven applications, and data-driven decision-making. Companies that invest in personalized strategies often see higher engagement and customer retention.

    As the demand for personalization grows, businesses must adopt flexible methodologies to ensure their solutions remain relevant and impactful in a rapidly evolving world.`
  },

  
  {
    title: "Delivering measurable results and precision through proven strategies",
    date: "2025-02-17",
    image: "Blog/blog2.jpg",
    content: `In today's fast-paced world, success relies on data-driven 
    decisions and strategic execution. By leveraging advanced analytics,
     precision planning, and cutting-edge technology, businesses 
     can achieve consistent, measurable outcomes. Proven methodologies, 
     backed by real-time insights and performance tracking,
      help organizations refine their processes and maximize
       efficiency. Whether optimizing operations, improving 
       customer engagement, or enhancing productivity, strategic
       
       precision ensures sustainable growth. With a focus on accuracy and 
       continuous improvement, companies can confidently navigate challenges, 
       adapt to market demands, and drive innovation. By implementing well-tested 
       strategies and data-backed decision-making, businesses can transform goals 
       into tangible, measurable success—ensuring long-term excellence in a competitive landscape.`
  },








  {
    title: "Empowering change, delivering every single time success",
    date: "2025-02-17",
    image: "Blog/blog3.jpg",
    content: `True success comes from adaptability, resilience, and innovation. 
    By embracing change and pushing boundaries, individuals and 
    businesses can unlock new opportunities. With the right mindset and strategic actions, 
    consistent growth and lasting impact become achievable, ensuring success every time.`
  },
  {
    title: "Shaping sustainable growth for future solutions",
    date: "2025-02-17",
    image: "Blog/blog4.jpg",
    content: `Sustainable development is the key to a better future.
     By integrating renewable energy, eco-friendly technologies, and responsible practices,
      we can create lasting solutions that benefit both people and the planet. 
      Innovation, efficiency, and conscious decision-making 
    drive long-term progress and environmental balance.`
  },
];

const calculateReadTime = (text) => {
  if (!text) return 0; // if content is undefined, null, or empty, return 0
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
};


const BlogSection = () => {
  const [open, setOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

const handleReadMoreClick = (blog) => {
  setSelectedBlog(blog);
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">From The Blog</h2>

      <Swiper
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }
        }}
      >
        {blogs.map((blog, index) => (
          <SwiperSlide key={index}>
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative"
            >
              <Card className="blog-card">
  <CardMedia component="img" image={blog.image} alt={blog.title} />
  <CardContent className="blog-content">
    <motion.div whileHover={{ y: -2, color: '#1E40AF' }} transition={{ duration: 0.3 }}>
      <Typography variant="h6" className="blog-title-hover">
        {blog.title}
      </Typography>
    </motion.div>

    <Typography variant="body2" className="blog-meta">
      📅 {blog.date} - ⏳ {calculateReadTime(blog.content)} min read
    </Typography>

    <motion.div
      whileHover={{ x: 5, color: '#2563EB' }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="inline-flex items-center gap-1 mt-2 cursor-pointer text-blue-500"
      onClick={() => handleReadMoreClick(blog)}
    >
      <span>Read More</span> <ArrowRight size={16} />
    </motion.div>
  </CardContent>
</Card>

            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Blog Modal */}
      <Dialog open={open} onClose={handleClose} className="modal-content">
  <img src={selectedBlog?.image} alt={selectedBlog?.title} className="modal-image" />
  <div className="modal-text">
    <Typography variant="h5" className="font-bold mb-2">
      {selectedBlog?.title}
    </Typography>
    <Typography variant="body2" className="text-gray-600 mb-4">
      📅 {selectedBlog?.date} - 📖 {calculateReadTime(selectedBlog?.content)} min read
    </Typography>
    <Typography variant="body1">{selectedBlog?.content}</Typography>
    <Button onClick={handleClose} className="mt-4">Close</Button>
  </div>
</Dialog>




    </div>
  );
};

export default BlogSection;