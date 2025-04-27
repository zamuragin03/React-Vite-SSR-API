import React from 'react';
import cls from './ProductCard.module.scss';

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={cls.card}>
      <img src={product.image} alt={product.title} className={cls.image} />
      <h2 className={cls.title}>{product.title}</h2>
      <p className={cls.price}>${product.price}</p>
    </div>
  );
};

export default ProductCard;
