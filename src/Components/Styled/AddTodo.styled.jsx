import styled from "styled-components";

export const StyledAddTodo = styled.div`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 100%;

  .btn-group {
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
  }

  .cancel,
  .submit {
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cancel {
    width: 64px;
    height: 64px;
    border: 4px solid #B1B1B1;
    color: #B1B1B1;
    font-size: 32px;
    margin-right: 17px;
  }

  .submit {
    height: 80px;
    width: 80px;
    color: #fff;
    background: #80E894;
    font-size: 40px;
  }
`;


export const StyledAddBtn = styled.button`
  height: 80px;
  width: 80px;
  border: none;
  background: ${({ theme }) => theme.colors.mark};
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 50%;
  position: absolute;
  right: 0;
`;