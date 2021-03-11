import styled, {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Code Pro', sans-serif;
  }
`

export const Container = styled.div`
  padding: 0 50px;
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  z-index: 1;

  @media screen and (max-width: 991px) {
    padding: 0 30px;
  }
`
export const Button = styled.button<{ primary: boolean, big: boolean, fontBig: boolean }>`
  border-radius: 4px;
  background: ${({primary}) => primary ? '#4B59F7' : '#0467FB'};
  white-space: nowrap;
  padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '40px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({primary}) => primary ? '#4B59F7' : '#0467FB'};
  }

  @media screen and  (max-width: 960px) {
    width: 100%;
  }
`
