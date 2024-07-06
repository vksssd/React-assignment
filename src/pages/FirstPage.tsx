import React from 'react';
import  UserForm  from '../components/Userform';
import { User } from '../models/User';
import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FirstPage: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit = (user: User) => {
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/second', { state: user });
    };

    return (
        <Container component={'main'} maxWidth={'xs'}>
            <Typography variant={'h4'}>User Form</Typography>
            <UserForm onSubmit={handleSubmit} />
        </Container>
    )
    
}

export default FirstPage;