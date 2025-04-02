import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import ProductListPage from "./ProductListPage";

const ProductListUserPage = () => {
  const { data, error, isLoading } = useGetProductsQuery({
    limit: 10,
    skip: 0,
  });

  if (isLoading)
    return <p className="text-center text-muted">Loading products...</p>;
  if (error)
    return <p className="text-center text-danger">Error loading products.</p>;

  return (
    <Row>
      {data?.products?.map((product) => (
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
          <ProductListPage product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductListUserPage;
