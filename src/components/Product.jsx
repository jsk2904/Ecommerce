import styled from "styled-components"
import { ShoppingCart, Search, FavoriteBorder } from "@material-ui/icons"


const Info = styled.div`
opacity:0;
width:100%;
height:100%;
position:absolute;
background-color:rgba(0,0,0,0.1);
z-index:2;
display:flex;
align-items:center;
justify-content:center;
transition:all 0.5s ease;
cursor:pointer;
`

const Container = styled.div`
flex:1;
margin:5px;
min-width:280px;
height:350px;
display:flex;
align-items:center;
justify-content:center;
position:relative;


&:hover ${Info}{
 opacity:1;
}
`


const Image = styled.img`
width:100%;
height:100%;
z-index:2;
`

const Icon = styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
margin:10px;
transition:all 0.1s ease;
&:hover{
 background-color:#e9f5f5;
 transform:scale(1.1);
}
`
export const Product = ({item}) => {
 return (
  <Container>
   <Image src={item.img} />
   <Info>
    <Icon>
     <ShoppingCart/>
    </Icon>
    <Icon>
     <Search/>
    </Icon>
    <Icon>
     <FavoriteBorder/>
    </Icon>
   </Info>
  </Container>
 )
}

export default Product;