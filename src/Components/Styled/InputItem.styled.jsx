import styled from "styled-components";

export const StyledInputItem = styled.div`
  background: #fff;
  width: 100%;
  min-height: 88px;
  display: flex;
  align-items: center;
  border-radius: ${({ theme })=> theme.itemRadius};
  padding: 24px;
  margin-bottom: 40px;

  .mark {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 4px solid ${({ theme }) => theme.colors.mark};
    background: transparent;
    margin-right: 24px;
    position: relative;

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

  textarea {
    display: block;
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
`;
