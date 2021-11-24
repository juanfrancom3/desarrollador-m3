import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { addToCart } from '../../reducers/cart/cartSlice';
import { setIsCartOpen } from '../../reducers/ui/uiSlice';
import { Product } from '../../types';
import { ProductsCard } from './styles';

export const ProductCard = (product: Product) => {

    const { products } = useSelector((state: RootState) => state.cart);
    const { isLightMode } = useSelector((state: RootState) => state.ui);
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem('yourCart', JSON.stringify(products));
    }, [products])

    const handleAdd = (item: Product) => {
        dispatch(setIsCartOpen(true));
        dispatch(addToCart(item));
    }

    return (
        <ProductsCard isLightMode={isLightMode}>
            <div className="imgContainer">
                {product.isOffer && <span className="bestSeller">Oferta</span>}
                <img src={product.image.src} alt={product.image.alt} />
            </div>
            <h4 className="productName">{product.name.toUpperCase()}</h4>
            <h4 className="bold">${product.price} COP</h4>
            <button type="button" className="cartButton" onClick={() => handleAdd(product)}>COMPRAR</button>
        </ProductsCard>
    )
}
