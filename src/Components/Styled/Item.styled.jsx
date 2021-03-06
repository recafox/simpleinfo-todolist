import styled from 'styled-components';

export const StyledItem = styled.li`
  display: flex;
  max-width: 1024px;
  min-height: 88px;
  width: 100%;
  position: relative;
  border-radius: ${({ theme }) => theme.itemRadius};
  overflow: hidden;
  box-shadow: 0px 4px 12px #00000026;
  @media(max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    min-height: 70px;
  }


  .content,
  .base {
    min-height: 88px;
    display: flex;
    width: 100%;
    min-height: 100%;
    padding: 24px 40px 24px 24px;
    border-radius: ${({ theme }) => theme.itemRadius};

    @media(max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      padding: 24px 24px 24px 16px;
    }
  }

  .content {
    position: relative;
    width: 100%;
    z-index: 3;
    background: ${({ theme }) => theme.colors.itemBg};
    align-items: center;
    transition: all 0.2s ease-in;

    p {
      width: 95%;
      word-break: break-all;
      line-height: 22px;
    }
  }

  textarea {
    display: none;
    resize: none;
    border: none;
    border-bottom: 2px solid #eee;
    width: 100%;
    background: transparent;
    font-size: 20px;
    line-height: 27px;

    &:focus {
      outline: none;
    }
  }

  &.is--done {
    box-shadow: none;

    .mark {
      opacity: 0.33;
      &:after {
        opacity: 1;
      }
    }

    .content {
      background: #DBDBDB;
      color: #626262;
    }
  }

  .text {
    display: block;
  }
  textarea {
    display: none;
  }

  &.is--editing {
    .content {
      width: calc(100% - 88px);

      @media(max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        width: calc(100% - 64px);
      }
    }
    .text {
      display: none;
    }
    textarea {
      display: block;
    }
  }

  .mark {
    flex-shrink: 0;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 4px solid ${({ theme }) => theme.colors.mark};
    background: transparent;
    margin-right: 24px;
    position: relative;

    @media(max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      margin-right: 16px;
    }

    &:hover {
      &:after {
        opacity: 0.33;
      }
    }

    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      background: ${({ theme }) => theme.colors.mark};
      opacity: 0;
      height: 24px;
      width: 24px;
      border-radius: 50%;
    }
  }

  .base {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.delete};
  }
  .deleteBtn {
    font-size: 32px;
    padding: 0;
    margin-left: auto;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.white};
    border: none;
  }
`;