import React from 'react';
import styled from "styled-components";
import {skills } from "../../data/constants";

const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  position:relative;
  z-index:1;
  align-items:center;
`;

const Wrapper = styled.div`
  max-width:1100px;
  position:relative;
  display:flex;
  flex-direction:column;
  justify-content:center;
  width:100%;
  gap:12px;
  padding:10px 0px 100px 0;
`;

const Title = styled.h1`
font-size:42px;
font-weight:600;
text-align:center;
margin-top:20px;
color:${({theme}) => theme.text_primary};

@media(max-width:768px){
margin-top:12px;
font-size:32px;

}
`;

const Desc = styled.div`
font-size:18px;
text-align:center;
color:${({theme}) => theme.text_secondary};
@media(max-width:768px){
  font-size:16px;

}
`;

const SkillsContainer = styled.div`
  width:100%;
  display:flex;
  flex-wrap:wrap;
  margin-top:30px;
  justify-content:center;
  gap:30px;
`;

const Skill = styled.div`
width:100%;
max-width:400px;
background-color:${({theme}) => theme.card};
border:0.1px solid #854CE6;
border-radius:16px;
box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
padding:18px 36px;


@media(max-width:768px){
max-width:400px;
padding:10px 36px;
}
@media(max-width:500px){
  max-width:330px;
  padding:10px 36px;
  }
  
`;

const SkillTitle = styled.h2`
font-size:28px;
font-weight:600
margin-bottom:20px;
text-align:center;
color:${({theme}) => theme.text_secondary};


`;

const SkillList = styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
gap:12px;
margin-bottom:20px;

`;

const SkillItem = styled.div`
display:flex;
align-items:center;
gap:8px;
justify-content:center;
font-size:16px;
color:${({theme}) => theme.text_primary+80};
border-radius:12px;
border:1px solid #854CE6;
padding : 12px 16px;
font-weight:400;
@media(max-width:768px){
  font-size:14px;
  padding:8px 12px;
  }
  @media(max-width:500px){
    font-size:14px;
    padding:6px 12px;
    }

`;

const SkillImage = styled.img`
height:24px;
width:24px;
`;
const Skills = () => {
  return (
    <Container id = "skills">
      <Wrapper>
        <Title> Skills </Title>
        <Desc>Here are some of my Skills.</Desc>
        <SkillsContainer>
          {skills.map((item) => (
            <Skill>
              <SkillTitle>{item.title}</SkillTitle>
              <SkillList>
                {
                  item.skills.map((skills) =>(
                    <SkillItem>
                      <SkillImage src = {skills.image}/>
                      {skills.name}
                    </SkillItem>
                  ))
                }
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills
