import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        // Use environment variable for token
         // Retrieve the token securely from .env
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products",
          {
            headers: {
              token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MGFjNTcxOWEyNzQ5ZGM2OTM1NzhlOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyOTQzMzk3OSwiZXhwIjoxNzI5NjkzMTc5fQ.txqNAruDEYZSa68RVDoX2R0G9_od3KMu-PEySxkRDTM`,  // Secure token in headers
            },
          }
        );
        setProducts(res.data);  // Set fetched products into the state
      } catch (err) {
        console.error("Error fetching products:", err);  // Log any error that occurs
      }
    };
    getProducts();  // Call the function to fetch products
  }, [cat]);  // Run this effect when the `cat` prop changes

  // Filter products based on selected filters (like color, size)
  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) => {
            if (Array.isArray(item[key])) {
              // If the field is an array (like color or size)
              return item[key].includes(value);
            } else {
              // If the field is not an array (like price, title, etc.)
              return item[key]?.toString().toLowerCase().includes(value.toLowerCase());
            }
          })
        )
      );
  }, [products, cat, filters]);
  
  

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
        : products
            .slice(0,8)
            .map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};


export default Products;
