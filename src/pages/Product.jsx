import React, { useEffect, useState } from "react";

export const Product = () => {
    const [products, setProducts] = useState([]); // State to store the products

    const fetchProducts = async () => {
        try {
            const response = await fetch(
                "https://mbcut2mq36.execute-api.ap-south-1.amazonaws.com/commerce/products/all/group/1703228300417"
            );
            if (response.ok) {
                const result = await response.json(); // Parse the entire response
                setProducts(result.data.items); // Save the items array in the state
                console.log(result.data.items); // Debugging: Log the items array
            } else {
                console.error("Error fetching data. Status:", response.status);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };
    

    useEffect(() => {
        fetchProducts(); // Fetch products when component mounts
    }, []);

    return (
        <div>
        <h2>Product List</h2>
        <div className="product-container">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.pictures} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>Price: ${product.regularPrice}</p>
            </div>
          ))}
        </div>
      </div>
      
    );
};
