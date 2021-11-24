import styled from "styled-components";

export const LoadingContainer = styled.div`
    display: grid;
    height: 100vh;
    place-items: center;
    width: 100%;

    .spinner {
        animation: spin infinite 5s linear;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

`