import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
width: 100vw;
height: 100vh;
position: relative;
display:flex;
flex-direction: column;
justify-content:flex-end;
align-items:center;
background-color:var(--white);
overflow: hidden;
`

const TextContainer = styled.p`
width: 100%;
height: 50vh;
z-index: 1;
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
color: var(--dark);
span{
    font-size:var(--fontBig)    
}
`
const TextContainer2 = styled.p`
width: 100%;
height: 50vh;
z-index: 1;
display: flex;
flex-direction: column;
justify-content:center;
align-items:flex-end;
color: var(--dark);
span{
    font-size:var(--fontxxxl)    
}
`


const DesignSection = () => {
  return (
    <Section>
        <TextContainer>
            <span>Flaw-less Design with Strong Durability.</span>
        </TextContainer>
        <TextContainer2>
            <span>Flat-edge design with toughest smartphone glass.</span>
        </TextContainer2>
    </Section>
  )
}

export default DesignSection