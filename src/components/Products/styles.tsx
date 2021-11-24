import styled from "styled-components";
import { GREY_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, ThemeTypes } from "../../consts";

export const ProductsContainer = styled.article`
    margin: 15rem 10% 5rem 10%;
    padding: 0;

    @media screen and (max-width: 767px) {
        margin: 10rem 0 0 0;
        padding: 1.4rem;
    }
    
    `

export const ProductsHeader = styled.header<ThemeTypes>`
    margin-bottom: 6.5rem;
    display: flex;
    align-items: center;

    @media screen and (max-width: 767px) {
        flex-wrap: wrap;
        font-size: 1.8rem;
        margin-bottom: 3rem;
        
        h1 {
            margin-left: 2%;
        }
        
    }
`
export const SortContainer = styled.div<ThemeTypes>`
    color: ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
    font-size: 2.2rem;
    font-weight: 400;
    margin-left: auto;
    margin-right: 1.1%; 
    display: flex;
    align-items: center;

    & .filterMobile {
        background-color: transparent;
        border: .1rem solid ${GREY_COLOR};
        border-radius: 0;
        color: ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
        cursor: pointer;
        font-size: 2.2rem;
        display: none;
        width: 100%;
    }
    & svg {
        color: ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
        cursor: pointer;
        margin: 0 .5rem;
    }
    & svg:hover {
        opacity: .8;
    }

    & select {
        background-color: transparent;
        border: .1rem solid ${GREY_COLOR};
        border-radius: 0;
        color: ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
        cursor: pointer;
        font-size: 2.2rem;
        margin-left: .5rem;
        outline: none;
        & option {
            border: none;
            font-size: 1.8rem;
            color: ${PRIMARY_COLOR};
        }
    }   

    @media screen and (max-width: 767px) {
        margin-top: 2rem;
        margin-left: 0;
        margin-right: 0; 
        display: flex;
        justify-content: center;
        width: 100%;

        & .filterMobile {
            display: block;
            width: 45%;
        }

        & select {
            width: 45%;
        }
    }
`
export const ProductsContent = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`
