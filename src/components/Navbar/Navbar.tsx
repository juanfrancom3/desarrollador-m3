import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClose, AiFillMinusSquare } from 'react-icons/ai';
import { GiShoppingBag } from 'react-icons/gi';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { MdAddBox } from 'react-icons/md';
import { RootState } from '../../store/store';
import { addToCart, clearCart, removeFromCart } from '../../reducers/cart/cartSlice';
import { setIsCartOpen, setIsLightMode } from '../../reducers/ui/uiSlice';
import { Logo } from '../Logo/Logo';
import { CartItems, Product } from '../../types';
import { ButtonTheme, CartBadge, CartIconContainer, ClearButton, CloseButton, ContainerCart, Items, ItemsContainer, ItemsInfo, ItemsPhoto, Nav } from './styles';

const Navbar = () => {

    const dispatch = useDispatch();
    const { products } = useSelector((state: RootState) => state.cart);
    const { isCartOpen, isLightMode } = useSelector((state: RootState) => state.ui);

    const handleViewCartItems = () => {
        dispatch(setIsCartOpen(!isCartOpen));
    }

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const handleTheme = () => {
        localStorage.setItem('isLightMode', JSON.stringify(!isLightMode));
        dispatch(setIsLightMode(!isLightMode));
    }

    const handleAdd = (item: Product) => {
        dispatch(addToCart(item));
    }

    const handleRemove = (item: Product) => {
        dispatch(removeFromCart(item));
    }

    return (
        <Nav isLightMode={isLightMode}>
            <Logo></Logo>
            <ButtonTheme isLightMode={isLightMode} >
                <input defaultChecked={isLightMode}  type="checkbox" onClick={handleTheme} />
                <span className="slider">
                    {
                        !isLightMode ? <BsFillMoonFill size="2.5rem" /> : <BsFillSunFill size="2.5rem"/>
                    }
                </span>              
            </ButtonTheme>
            <ContainerCart>
                <CartIconContainer isLightMode={isLightMode} onClick={handleViewCartItems}>
                    <GiShoppingBag />
                </CartIconContainer>
                {products.length > 0 && <CartBadge isLightMode={isLightMode}>{products.length}</CartBadge>}
                {
                    products.length > 0 && isCartOpen
                    &&
                    <ItemsContainer isFadeIn={isCartOpen} isLightMode={isLightMode}>
                        <CloseButton isLightMode={isLightMode} onClick={handleViewCartItems}>
                            <AiOutlineClose />
                        </CloseButton>
                        <ul>
                            {products.map((product: CartItems) => (
                                <Items isLightMode={isLightMode} key={product.product.name}>
                                    <ItemsInfo isLightMode={isLightMode}>
                                        <p id="ItemName">{product.product.name}</p>
                                        <p>Cantidad: {product.quantity} </p>
                                        <div>
                                            <MdAddBox cursor="pointer" size="2.5rem" onClick={() => handleAdd(product.product)}></MdAddBox>
                                            <AiFillMinusSquare cursor="pointer" size="2.5rem" onClick={() => handleRemove(product.product)}></AiFillMinusSquare>
                                        </div>
                                        <p id="ItemPrice">${product.product.price * product.quantity} COP</p>
                                    </ItemsInfo>
                                    <ItemsPhoto>
                                        <img src={product.product.image.src} alt={product.product.image.alt} />
                                    </ItemsPhoto>
                                </Items>
                            ))}
                            <ClearButton isLightMode={isLightMode} type="button" onClick={handleClearCart}>QUITAR TODO</ClearButton>
                        </ul>
                    </ItemsContainer>
                }
            </ContainerCart>
        </Nav>
    )
}

export default Navbar;
