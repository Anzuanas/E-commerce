import styled from "styled-components"
import { mobile } from "../responsive"

const Container=styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), 
url(https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-1170x780.jpg);
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper=styled.div`
width: 40%;
background-color: white;
padding: 20px;
${mobile({ width: "75%" })}
`
const Title=styled.h1`
font-size: 24px;
font-weight: 300;
`
const Form=styled.form`
display: flex;
flex-wrap: wrap;
`
const Input=styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
`
const Agreement=styled.span`
font-size: 12px;
margin: 20px 0px;
`
const Button=styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color:teal;
color: white;
cursor: pointer;
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an Account</Title>
        <Form>
            <Input placeholder="name"/>
            <Input placeholder="last name"/>
            <Input placeholder="username"/>
            <Input placeholder="email"/>
            <Input placeholder="password"/>
            <Input placeholder="confirm Password"/>
            <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
            <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
