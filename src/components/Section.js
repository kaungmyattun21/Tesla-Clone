import React from 'react'
import styled from 'styled-components'

const Section = ({ title, bgimage, downArrow }) => {
  return (
    <MainSection bgimage={bgimage}>
        <MainTitle>
            <h1>{title}</h1>
            <p>Order Online for Touchless Delivery</p>
        </MainTitle>
        <Buttons>
            <ButtonGroup>
                <LeftButton>
                    Custom Order
                </LeftButton>
                <RightButton>
                    Existing Inventory
                </RightButton>
            </ButtonGroup>
            <DownArrow src={downArrow}></DownArrow>
        </Buttons>
    </MainSection>
  )
}

export default Section

const MainSection = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${props => `url('./images/${props.bgimage}')`};
    background-position: center;
    background-size: cover;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
`
const MainTitle = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const LeftButton = styled.div`
    width: 256px;
    height: 40px;
    color: white;
    background-color: rgba(23, 26, 32, 0.8);
    
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
`

const DownArrow = styled.img`
    margin: 30px 0; 
    height: 40px;
    opacity: 0.85;
    animation: downArrow infinite 1.5s;
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`