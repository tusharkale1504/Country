import React, { useEffect, useState } from "react";

export const Product = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await fetch(
                "https://mbcut2mq36.execute-api.ap-south-1.amazonaws.com/commerce/products/all/group/1703228300417"
            );
            if (response.ok) {
                const result = await response.json();
                setProducts(result.data.items);
                console.log(result.data.items);
            } else {
                console.error("Error fetching data. Status:", response.status);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };


    useEffect(() => {
        fetchProducts();
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
