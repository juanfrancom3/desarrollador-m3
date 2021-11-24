import styled from "styled-components";
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR, ThemeTypes } from "../../consts";

export const ContainerProductsList = styled.section`
    display: flex;
    flex-direction: column;
    width: 70%;

    @media screen and (max-width: 767px) {
        width: 100%;
    }
`

export const ContainerProducts = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;

    @media screen and (max-width: 767px) {
        width: 100%;
    }
`

export const Pagination = styled.div<ThemeTypes>`
    width: 100%;

    ul {
        padding: 2rem 4rem;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
    }

    ul li {
        color: lighten(${props => props.isLightMode ? SECONDARY_COLOR : PRIMARY_COLOR});
        cursor: pointer;
        font-size: 2.9rem;
        list-style: none;
        margin: 0 1.5rem;
        font-weight: 400;
    }

    ul li a[aria-current="page"] {
        color: ${TERTIARY_COLOR};
        font-weight: 700;
    }
`

export const ContainerNoItems = styled.div`
    display: grid;
    height: 80%;
    place-items: center;
`