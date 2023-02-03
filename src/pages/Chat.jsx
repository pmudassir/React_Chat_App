import React from 'react'
import styled from 'styled-components'

const ChatContainer = styled.div`
    padding: 20px;
    background-color: lightgray;
    height: 100vh;
    margin: 0px 200px;
`

const HeaderContainer = styled.div`
    display: flex;
`

const HeaderImage = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
`

const HeaderText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`

const Header = styled.h1``

const Status = styled.span``

const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const UserMessageContainer = styled.div`
    background-color: blue;
    color: white;
    width: 200px;
    ${'' /* align-items: center;
    justify-content: space-between; */}
    padding: 30px;
    border-radius: 25px;
`

const BotMessageContainer = styled.div`
    background-color: white;
    color: black;
    width: 200px;
    ${'' /* align-items: center;
    justify-content: space-between; */}
    padding: 30px;
    border-radius: 25px;
`

const Chat = () => {
    return (
        <ChatContainer>
            <HeaderContainer>
                <HeaderImage src='https://helplama.com/wp-content/uploads/2020/07/logo_16424_hd.jpg' />
                <HeaderText>
                    <Header>ChatBot Support</Header>1
                    <Status>Online</Status>
                </HeaderText>
            </HeaderContainer>
            <BodyContainer>
                <UserMessageContainer>Hi</UserMessageContainer>
                <BotMessageContainer>Bot</BotMessageContainer>
            </BodyContainer>
        </ChatContainer>
    )
}

export default Chat