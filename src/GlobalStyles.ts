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
