import React from "react";
import { useParams } from "react-router-dom";
import Insider from "../insidePage/Insider";
import { products, Product } from "../utils/products"; // Adjust the path as needed

const AppDescription: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id === parseInt(productId || "", 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Insider
      icon={product.icon}
      name={product.name}
      screenshots={product.screenshots}
      description={product.description}
      average={product.average}
      total={product.total}
      ratings_reviews={product.ratings_reviews}
    />
  );
};

export default AppDescription;
