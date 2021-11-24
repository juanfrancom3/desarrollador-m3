import { keyframes, css } from 'styled-components';

const fadeInKeyFrame = keyframes`
    from{
        filter: blur(0.5rem);
        opacity: 0;
    }
    to {
        filter: blur(0);
        opacity: 1;
    }
`
const fadeOutKeyFrame = keyframes`
    from{
        filter: blur(0);
        opacity: 1;
    }
    to {
        filter: blur(0.5rem);
        opacity: 0;
    }
`
export const fadeIn = ({time = '.3s', type='ease'}: any) => css`animation: ${time} ${fadeInKeyFrame} ${type};`;
export const fadeOut = ({time = '.5s', type='ease'}: any) => css`animation: ${time} ${fadeOutKeyFrame} ${type};`;
