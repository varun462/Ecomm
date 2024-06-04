import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, FormWrapper, Title, Form, Label, Input, Button, ErrorMessage } from '../style';

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/api/signup', { email, password });
            alert('Signup successful!');
            navigate('/login'); // Navigate to login page after successful signup
        } catch (error) {
            setError('Error signing up');
        }
    };

    return (
        <Container>
            <FormWrapper>
                <Title>Signup</Title>
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
                    <Button type="submit">Signup</Button>
                </Form>
            </FormWrapper>
        </Container>
    );
};

export default SignupForm;
