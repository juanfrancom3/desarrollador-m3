import styled from 'styled-components';
import { GREY_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR, ThemeTypes } from '../../consts';
import { fadeIn } from '../styles/animations';

export const FiltersContainer = styled.aside<ThemeTypes>`
    ${fadeIn({})}
    display: flex;
    flex-direction: column;
    width: 20%;

    .container {
        display: block;
        position: relative;
        padding-left: 3.5rem;
        margin-bottom: 1.2rem;
        cursor: pointer;
        font-size: 1.8rem;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Hide the browser's default checkbox */
    .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    /* Create a custom checkbox */
    .checkmark {
        background-color: ${props => props.isLightMode ? SECONDARY_COLOR : PRIMARY_COLOR};
        border: .1rem solid ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
        position: absolute;
        top: 0;
        left: 0;
        height: 2rem;
        width: 2rem;
    }

    /* On mouse-over, add a grey background color */
    .container:hover input ~ .checkmark {
        background-color: ${GREY_COLOR};
    }

    /* When the checkbox is checked, add a blue background */
    .container input:checked ~ .checkmark {
        background-color: ${TERTIARY_COLOR};
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
        content: '';
        position: absolute;
        display: none;
    }

    /* Show the checkmark when checked */
    .container input:checked ~ .checkmark:after {
        display: block;
    }

    /* Style the checkmark/indicator */
    .container .checkmark:after {
        width: 1.2rem;
        height: 1.2rem;
        border: .3rem solid ${SECONDARY_COLOR};
    }

    .containerSizeItems{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
    }
    .sizeItem {
        align-items: center;
        background-color: ${props => props.isLightMode ? SECONDARY_COLOR : PRIMARY_COLOR};
        border: .1rem solid ${GREY_COLOR};
        cursor: pointer;
        display: flex;
        font-size: 1.6rem;
        height: 3.2rem;
        justify-content: center;
        margin: .5rem .5rem .5rem 0;
        width: 3.2rem;
    }
    .sizeItem:hover {
        background-color: ${GREY_COLOR};
    }
    .active {
        border: .2rem solid ${TERTIARY_COLOR};
    }

    hr {
        margin-top: 0;
        margin-bottom: 2.5rem;
        border: 0.1rem solid transparent;
    }

    @media screen and (max-width: 767px) {
        width: 100%;
        height: calc(100vh - 7rem);
        padding: 2rem 3rem;
        box-sizing: border-box;
        overflow-y: scroll;
    }
`