import { FetchProduct, FetchProducts } from '../../Service/Api'
import ProductPage, { fetchData as fetchProductData } from '../ProductPage/ProductPage'
import ProductsPage, { fetchData as fetchProductsData } from '../ProductsPage/ProductsPage'

export const routes = [
    {
        path: '/',
        component: ProductsPage,
        fetchData: fetchProductsData,
    },
    {
        path: '/product/:id',
        component: ProductPage,
        fetchData: fetchProductData,
    },
]
