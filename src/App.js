import React from 'react'
import styled from 'styled-components';
import convert from 'xml-js'



const App = () => {
  const [data, setData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null)

  React.useEffect(() =>
    fetch('https://front-end-test-bvhzjr6b6a-uc.a.run.app/')
      .then(res => res.json())
      .then(val => setData(val))
      .catch(err => setError(err))
      .then(() => setIsLoading(false))
    , [])

  return(
    isLoading ? <Loading /> :
      <AppContainer>
        {data.map(({...rest}, key) => 
          <ProductItem {...rest} key={key}/>
      )}
      </AppContainer>
  )
}

const Loading = () => {
  return(
    <div>loading</div>
  )
}
const IsJsonString = string => {
    try {
        JSON.parse(string);
    } catch (e) {
        return false;
    }
    return true;
  }

const ProductItem = ({currency, price, productImage}) => {
  return(
    <ItemContainer>
      <Image src={productImage}/>
      <Price>{price} {currency}</Price>
      <CategoryContainer>

      </CategoryContainer>
    </ItemContainer>
  )
}

const Price = styled.span`
  font-size: 30px;
  font-weight: 600;
  font-family: sans-serif;
`

const CenteredBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const AppContainer = styled(CenteredBox)`
  min-height: 100vh;
  width: 100vw;
  flex-flow: row wrap;
`

const CategoryContainer = styled(CenteredBox)`
  flex-flow: row wrap;
`

const ItemContainer = styled(CenteredBox)`
  width: 100%;
  height: 400px;
  padding: 20px;
  background-color: lightgray;
  flex-flow: column nowrap;
  @media only screen and (min-width: 400px) {
    width: 400px;
    margin: 20px;
  }
`
const Image = styled.img`
  width: 300px;
  margin: 10px;
`

export default App;
