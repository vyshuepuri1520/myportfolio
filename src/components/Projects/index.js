import React from 'react';
import styled from 'styled-components';
import Projectcard from '../Cards/Projectcard';
import { projects } from '../../data/constants';

const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  position:relative;
  z-index:1;
  padding: 40px 0px 40px 0px;
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
  padding:10px 0px 40px 0;
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

const CardContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
gap:28px;
`;

const Projects = () => {
  return (
    <Container id = "projects" >
        <Wrapper>
        <Title > Projects</Title>
        <Desc>I have worked on various Projects. Here are some of my projects.</Desc>
        <CardContainer>
        {projects.map((project) => (
            <Projectcard key={project.id} project={project} />
          ))}
        </CardContainer>
        
        </Wrapper>
    </Container>
  )
}

export default Projects
