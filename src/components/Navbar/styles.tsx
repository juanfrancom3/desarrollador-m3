import styled from 'styled-components';
import { GREY_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR, ThemeTypes } from '../../consts';
import { fadeIn } from '../styles/animations';


export const Nav = styled.nav<ThemeTypes>`
    align-items: center;
    background-color: ${props => props.isLightMode ? SECONDARY_COLOR : PRIMARY_COLOR};
    border-bottom: 0.3rem solid ${GREY_COLOR};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    left: 0;
    margin: 0;
    padding:  3.3rem 10%;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 3;

    @media screen and (max-width: 767px) {
        margin: 0 0 3rem 0;
        padding: 2rem;
    }
`

export const ButtonTheme = styled.label<ThemeTypes>`
    display: inline-block;
    height: 35px;
    margin: 0 6rem 0 auto;
    position: relative;
    width: 70px;

    & input { 
        height: 0;
        opacity: 0;
        width: 0;
    }

    & .slider {
        background-color: ${props => props.isLightMode ? SECONDARY_COLOR : PRIMARY_COLOR};
        border: .2rem solid ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
        border-radius: 2rem;
        bottom: 0;
        cursor: pointer;
        left: 0;
        position: absolute;
        right: 7px;
        top: 0;
        -webkit-transition: .4s;
        transition: .4s;
        svg {
            ${fadeIn({})}
            color: ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
            left: ${props => props.isLightMode ? '3px' : ''};
            position: absolute;
            right: ${props => props.isLightMode ? '' : '3px'};
            top: 2px;
            z-index: 2 ;
        }
    }

    & :before {
        background-color: ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
        bottom: 2px;
        border-radius: 50%;
        content: "";
        height: 26px;
        left: ${props => props.isLightMode ? '4px' : '2px'};
        position: absolute;
        top: 2px;
        transition: .4s;
        width: 26px;
    }

    & input:checked + .slider:before {
        transform: translateX(26px);
    }
    @media screen and (max-width: 767px) {
        margin: 0 6rem 0 auto;
    }

`

export const ContainerCart = styled.div`
    position: relative;
`

export const CartBadge = styled.span<ThemeTypes>`
    background-color: ${TERTIARY_COLOR};
    border-radius: 50%;
    color: ${PRIMARY_COLOR};
    font-size: 2rem;
    padding: .2rem .7rem;
    position: absolute;
    right: 0rem;
    top: 0rem;    
`

export const CartIconContainer = styled.div<ThemeTypes>`
    bottom: -1.5rem;
    cursor: pointer;
    position: absolute;
    right: 0;
    & svg {
        color: ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
        height: 3.8rem;
        width: 5.4rem;
    }
`
export const CloseButton = styled.button<ThemeTypes>`
    background-color: ${props => props.isLightMode ? SECONDARY_COLOR : PRIMARY_COLOR};
    border: none;
    color: ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
    cursor: pointer;
    display: flex;
    height: 3rem;
    justify-content: center;
    width: auto;
    padding: .5rem;
    position: fixed;
    right: 10.5%;
    top: 9rem;
    & svg {
        height: 2rem;
        stroke-width: 5rem;
        width: 2rem;
    }
    @media screen and (max-width: 767px) {
        right: 2.3rem;
        top: 7.1rem;
    }
    
`

export const ItemsContainer = styled.div<ThemeTypes>`
    border: .3rem solid ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
    background-color: ${props => props.isLightMode ? SECONDARY_COLOR : PRIMARY_COLOR};
    border-radius: 0;
    height: auto;
    max-height: 60rem;
    overflow-y: scroll;
    position: absolute;
    right: 0;
    top: 3rem;
    width: 44rem;
    z-index: 3;

    &::-webkit-scrollbar {
        display: none;
    }
    & ul {
        padding: 2.4rem;
    }

    @media screen and (max-width: 767px) {
        right: 0rem;
        top: 2.7rem;
        width: 30rem;
        max-height: 50rem;

        & ul {
            padding: 1.5rem;
        }
    }
`
export const Items = styled.li<ThemeTypes>`
    ${fadeIn({})};
    border-bottom: 1px solid ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
    display: flex;
    font-size: 2rem;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding-bottom: 2.4rem;
    margin-bottom: 2.4rem;
    width: 100%;        
    @media screen and (max-width: 767px) {
        justify-content: center;
    }
`


export const ItemsInfo = styled.div<ThemeTypes>`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 50%;
    & #ItemName {
        font-size: 1.6rem;
        font-weight: 700;
        width: 100%;
        margin-bottom: 0;
    }
    & #ItemPrice {
        color: ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
        font-size: 2.5rem;
        font-weight: 400;
        width: 100%;
    }

    @media screen and (max-width: 767px) { }
`

export const ItemsPhoto = styled.div`
    width: 50%;
    & img {
        height: 16rem;
        object-fit: cover;
        width: 100%;
    }

    @media screen and (max-width: 767px) { }
    
`
export const ClearButton = styled.button<ThemeTypes>`
    background-color: ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};;
    border: none;
    border-radius: 0;
    color: ${props => props.isLightMode ? SECONDARY_COLOR : PRIMARY_COLOR};;
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.4rem 5.2rem;
    width: 100%;
`