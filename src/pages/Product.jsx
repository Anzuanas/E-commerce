import styled from "styled-components"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import { Add, Remove } from "@mui/icons-material"



const Container=styled.div``;
const Wrapper=styled.div`
padding: 50px;
display: flex;
`;
const ImgContainer=styled.div`
flex: 1;
`;
const Image=styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
`;
const InfoContainer=styled.div`
flex: 1;
padding: 0px 50px;
`;
const Title=styled.h1`
font-weight: 200;
`;
const Desc=styled.p`
margin: 20px 0px;
`;
const Price=styled.span`
font-weight: 100;
font-size: 40px;
`;
const FilterContainer=styled.div`
display: flex;
justify-content: space-between;
width: 50%;
margin: 30px 0px;
`;
const Filter=styled.div`
display: flex;
align-items: center;
`;
const FilterTitle=styled.span`
font-size: 20px;
font-weight: 200;
`;
const FilterColor=styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px;
cursor: pointer;
`;
const FilterSize=styled.select`
margin-left:10px;
padding: 5px;
`;
const FilterSizeOption=styled.option``;
const AddContainer=styled.div`
width: 50%;
display:flex;
align-items: center;
justify-content: space-between;
`;
const AmountContainer=styled.div`
display: flex;
align-items: center;
font-weight: 700;
`;
const Amount=styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`;
const Button=styled.button`
padding: 15px;
border: 1px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
    background-color: #f8f4f4;
}
`;




const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRWaZyJBz79CmqCVHjFOOPyb80hI0i6nFJry21I2fFVT2l5aCoB690Ug59DeCh5-5xlHxtrFGwV7Pm3yLz5iQlm7JmCHCh2uwbiBRGlV1Q" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc> There are many variations of passages of Lorem Ipsum available, but
                        the majority have suffered alteration in some form, by injected
                        humour, or randomised words which don’t look even slightly believable.</Desc>
                    <Price>20$</Price>
                    <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>Add to cart</Button>
                </AddContainer>
                </InfoContainer>
               
            </Wrapper>
            
            <Newsletter />
            <Footer />

        </Container>
    )
}

export default Product
