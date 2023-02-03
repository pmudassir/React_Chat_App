import { Facebook, LinkedIn, Twitter } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../responsive'

const HomeContainer = styled.div``

const HomeStyle = styled.div`
    width: 100%;
    height: 200px;
    background-color: lightgray;
    position: absolute;
`

const Logo = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    position: relative;
    top: 150px;
    left: 100px;
    border: 3px solid white;
    background-color: black;
    object-fit: cover;
    ${mobile({ backgroundColor: "red" })};
`

const Status = styled.div`
    background-color: green;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    position: relative;
    top: 120px;
    left: 180px;
    border: 2px solid white;
`

const TitleContainer = styled.div`
    padding: 20px;
    margin-top: 120px;
    margin-left: 80px;
`

const Title = styled.h1``

const Availability = styled.span`
    color: gray;
`

const Widget = styled.div`
    height: 30vh;
    width: 60vw;
    margin-top: 10px;
    margin-left: 260px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex: 1;
    flex-direction: column;
`

const WidgetText = styled.span`
    font-weight: 400;
`

const WidgetButton = styled.button`
    padding: 10px;
    background-color: blue;
    color: white;
    border-radius: 5px;
    border: none;
    width: 300px;
    margin-top: 10px;
    cursor: pointer;
`

const SocialIconContainer = styled.div`
    display: flex;
    display: flex;
    margin-top: 20px;
`

const SocialICons = styled.div`
    align-items: center;
    justify-content: center;
    margin: 0px 8px;
`

const Home = () => {
    return (
        <HomeContainer>
            <HomeStyle>
                <Logo src='' />
                <Status />
                <TitleContainer>
                    <Title>ChatBot Support</Title>
                    <Availability>Online</Availability>
                </TitleContainer>
                <Widget>
                    <WidgetText>
                        Hello! I'm a ChatBot. {<br></br>}
                        Ask me anything!
                    </WidgetText>
                    <Link to="/chat">
                        <WidgetButton>Start Chat</WidgetButton>
                    </Link>
                    <SocialIconContainer>
                        <SocialICons>
                            <Facebook />
                        </SocialICons>
                        <SocialICons>
                            <Twitter />
                        </SocialICons>
                        <SocialICons>
                            <LinkedIn />
                        </SocialICons>
                    </SocialIconContainer>
                </Widget>
            </HomeStyle>
        </HomeContainer>
    )
}

export default Home