import React from "react";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductZoom from "../../ProductZoom";
 


const ProductDetails=()=>{
    return(
      <>
       
<div className="container">
<Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Fashion
          
        </Link>
        {/* <Typography sx={{ color: 'text.primary' }}></Typography> */}
      </Breadcrumbs>
</div>
 
<section className="py-5 bg-white">
<div className="container flex gap-4">
    <div className="Product-zoom container  w-[40%] h-[70vh] overflow-hidden">
        <ProductZoom/>
    </div>
</div>
</section>

</>
    )
}

export default ProductDetails