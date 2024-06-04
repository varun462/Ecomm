import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const Home = () => {
    const navigate = useNavigate();

    const handleSignupClick = () => {
        navigate('/signup');
    };

    return (
        <>
        <Container>
            <Title>Welcome to the Home Page</Title>
            <Button onClick={handleSignupClick}>Go to Signup</Button>
            

    
        </Container>
       
        
       
        
        
        </>
    );
};

export default Home;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #f7f9fc;


`;

const Title = styled.h1`
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
`;

const Button = styled.button`
    padding: 10px 20px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    &:hover {
        background: #0056b3;
    }
`;


