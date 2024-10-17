import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { useEffect, useState } from "react";

import axios from "axios";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat,filters,sort}) => {
  const [products,setProducts]=useState([])
  const [filteredProducts,setFilteredProductcs]=useState([]);

  useEffect(()=>{

    const getProducts= async ()=>{
      try{
        const res= await axios.get("http://localhost:5000/api/products?category=coat",{
          headers: {
            token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MGJmZTNmYWZjYzU5MGNiMzRjMTE5YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyOTE5NDY4NywiZXhwIjoxNzI5NDUzODg3fQ.zcXKAtplbUq6dpL8cLD4nN5wM1gh63BV4h5z5Cq279Q`, // Replace with your actual token
          },
        });
        console.log(res);
      }catch(err){

      }
    }
    getProducts()
  },[cat])
  console.log(cat,filters,sort);
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;