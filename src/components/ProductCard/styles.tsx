import styled from "styled-components";
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR, ThemeTypes } from "../../consts";
import { fadeIn } from "../styles/animations";

export const ProductsCard = styled.div<ThemeTypes>`
    ${fadeIn({})}
    margin: 0 auto 5rem auto;
    width: 30%;

    .imgContainer {
        margin-bottom: 2rem;
        position: relative; 
        width: 100%;
    }

    .imgContainer .bestSeller {
        background-color: ${TERTIARY_COLOR};
        color: ${props => props.isLightMode ? SECONDARY_COLOR : PRIMARY_COLOR};
        font-size: 2rem;
        font-weight: 400;
        left: 0;
        position: absolute;
        padding: 0.5rem 2rem;
        top: 0;
        z-index: 2;
    }

    .imgContainer img {
        height: 40rem;
        object-fit: cover;
        overflow: hidden;
        width: 100%;
        z-index: 1;
    }

    .cartButton {
        background-color: ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};;
        border: none;
        border-radius: 0;
        color: ${props => props.isLightMode ? SECONDARY_COLOR : PRIMARY_COLOR};;
        cursor: pointer;
        font-size: 1.8rem;
        font-weight: 900;
        padding: 1.4rem auto;
        width: 100%;
    }

    h4 {
        text-align: center;
    }
    .productName {
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .bold {
        font-weight: 900;
    }
    @media screen and (max-width: 767px) {
        font-size: 3rem;
        margin: 2.5rem auto;
        width: 45%;
    }
`