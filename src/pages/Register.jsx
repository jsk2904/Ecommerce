import styled from "styled-components"

const Container = styled.div`
width:100vw;
height:100vh;
background:linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.2)),url("https://saree.b-cdn.net/media/catalog/product/cache/b338d39772b77a6788c692c0fe37ef74/s/k/skdba1208a-dusty-pink-net-designer-thread-embroidered-flared-anarkali-gown.jpg");

background-repeat: no-repeat;
background-size: cover;

display:flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
width:40%;
padding:20px;
background-color:rgba(255,255,255,1);
`

const Title = styled.h1`
font-size:24px;
font-weight:300;
`
const Form = styled.form`
display:flex;
flex-wrap: wrap;
`
const Input = styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;
`
const Agreement = styled.span`
font-szie:12px;
margin:20px 0px;
`

const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor: pointer;
`

const Register = () => {
 return (
  <Container>
   <Wrapper>
    <Title>
     CREATE AN ACCOUNT
    </Title>
    <Form>
     <Input placeholder="name" />
     <Input placeholder="last name"/>
     <Input placeholder="email"/>
     <Input placeholder="username"/>
     <Input placeholder="password"/>
     <Input placeholder="confirm"/>
     <Agreement>
      By creating a account your information is ours and please don't accept same from us
     </Agreement>
     <Button>Create</Button>
    </Form>
   </Wrapper>
  </Container>
 )
}

export default Register
