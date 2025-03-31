import React from "react";
import { Carousel, Image } from "react-bootstrap";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import { addCurrency } from "../utils/addCurrency";
import { Link } from "react-router-dom";

const ProductListPage = () => {
  const { data, isLoading, error } = useGetProductsQuery({
    limit: 10,
    skip: 0,
    search: "",
  });

  const products = data?.products || []; // Ensure products is always an array

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error loading products</h2>;

  return (
    <Carousel fade className="text-center bg-secondary mb-5 z-0">
      {products.map((product) => (
        <Carousel.Item key={product._id} interval={3000}>
          <Link to={`/product-list-user/${product._id}`}>
            <Image
              src={product.image}
              alt={product.name}
              fluid
              style={{ height: "500px", objectFit: "cover" }}
            />
          </Link>
          <Carousel.Caption className="pb-5 px-5">
            <h3 className="product-title">{product.name}</h3>
            <h1>{addCurrency(product.price)}</h1>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductListPage;
