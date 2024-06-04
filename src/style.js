import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #f7f9fc;
`;



export const FormWrapper = styled.div`
    background: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
`;

export const Title = styled.h2`
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
    text-align: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
`;

export const Input = styled.input`
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    color: #333;
    &:focus {
        border-color: #007bff;
        outline: none;
    }
`;

export const Button = styled.button`
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

export const ErrorMessage = styled.div`
    color: red;
    margin-bottom: 10px;
`;
