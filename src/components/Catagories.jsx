import styled from 'styled-components'
import { catagories } from "../data"
import CatagoryItem from './CategoryItem'

const Container = styled.div`
display:flex;
padding:20px;
justify-content:space-between;
`
const Catagories = () => {
 return (
  <Container>
   {
    catagories.map(item => (
     <CatagoryItem item={item} key={item.id}/>
    ))
   }
  </Container>
 )
}

export default Catagories
