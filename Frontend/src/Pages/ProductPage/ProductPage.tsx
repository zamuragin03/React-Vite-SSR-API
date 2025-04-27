import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FetchProduct } from '../../Service/Api';
import cls from './ProductPage.module.scss';
import { Helmet } from 'react-helmet';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export async function fetchData(_context: any, params: { id: string }) {
    const product = await FetchProduct(null, { id: Number(params.id) });
    return { product };
}

// ОПИШЕМ правильный пропс с типом данных
const ProductPage: React.FC<{ data?: { product?: Product } }> = ({ data }) => {
    const { id } = useParams<{ id: string }>(); // <-- забираем id из URL
    const [product, setProduct] = useState<Product | null>(data?.product || null);

    useEffect(() => {
        // Если нет id и нет продукта — не фетчим
        if (!id || product) return;

        FetchProduct(null, { id: Number(id) })
            .then((product: Product) => setProduct(product))
            .catch((error) => console.error('Ошибка загрузки товара:', error));
    }, [id, product]); // <-- следим за id и product

    if (!product) {
        return <div className={cls.loading}>Загрузка...</div>;
    }

    return (
        <>
            <Helmet>
                <title>{`${product.title} - Купить за $${product.price}`}</title>

                <meta name="description" content={product.description} />
                <meta name="keywords" content={`${product.title}, ${product.category}, купить`} />

                {/* OpenGraph теги */}
                <meta property="og:title" content={product.title} />
                <meta property="og:description" content={product.description} />
                <meta property="og:image" content={product.image} />
                <meta property="og:type" content="product" />
                <meta property="og:price:amount" content={product.price.toString()} />
                <meta property="og:price:currency" content="USD" />

                {/* Twitter Card теги */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={product.title} />
                <meta name="twitter:description" content={product.description} />
                <meta name="twitter:image" content={product.image} />
            </Helmet>

            <div className={cls.container}>
                <Link to="/" className={cls.backLink}>← Назад к товарам</Link>
                <div className={cls.product}>
                    <img src={product.image} alt={product.title} title={product.title} className={cls.image} />
                    <div className={cls.info}>
                        <h1 className={cls.title}>{product.title}</h1>
                        <p className={cls.price}>Цена: ${product.price}</p>
                        <p className={cls.description}>{product.description}</p>
                        <p className={cls.category}>Категория: {product.category}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductPage;
