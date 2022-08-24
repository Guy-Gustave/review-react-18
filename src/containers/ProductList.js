import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product';
import { setProducts } from '../redux/actions/productActions';

import axios from 'axios'


const ProductList = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();


    const fetchDatas = async () => {
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch((err) => {
                console.log(err);
            });
            // console.log(response.data)
            dispatch(setProducts(response.data))
        
    }

    useEffect(() => {
        fetchDatas(); 
        
    }, []);
    console.log('Prod :', products)

    return (
        <div className='ui grid container'>
            <Product />
        </div>
    )
}

export default ProductList