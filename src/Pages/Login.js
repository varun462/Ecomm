import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './productstyle.css';

import { Container, FormWrapper, Title, Form, Label, Input, Button, ErrorMessage } from '../style';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/login', { email, password });
            const { token,user } = response.data;
            localStorage.setItem('token', token); 
           

            if (user.role === 'admin') {
                navigate('/admin') 
            } else {
                navigate('/products'); 
            }
        } catch (error) {
            setError('Error logging in');
        }
    };

   

   

    return (
        <Container>
        <FormWrapper>
            <Title>Login</Title>
            <Form onSubmit={handleSubmit}>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <div>
                    <Label>Email:</Label>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <Label>Password:</Label>
                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <Button type="submit">Login</Button>
            </Form>
           
        </FormWrapper>
    </Container>
    );
};

export default LoginForm;
