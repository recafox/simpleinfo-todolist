import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }

`;


export const StyledLoadingAnim = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: #eee;
    height: 100vh;
    width: 100vw;
    z-index: 5;
    opacity: 0;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &.is--loading {
      opacity: 0.6;
    }

    #loading-spinner {
      height: 80px;
      width: 80px;
      border: 8px solid ${({ theme }) => theme.colors.delete};
      border-right-color: transparent;
      border-radius: 50%;
      animation: ${rotation} 0.5s ease-in infinite;

    }

`;