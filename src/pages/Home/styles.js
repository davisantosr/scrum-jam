import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;  
`
export const Button = styled.button`
  background-color: ${({ theme }) => theme.secondary};
  height: 35px;
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    filter: brightness(85%);
  }
`
