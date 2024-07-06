import React, { useState } from 'react'
import { TextField, Button, Box } from '@mui/material';
import { User } from '../models/User';
 
interface UserFormProps {
    onSubmit: (user: User) => void;
}

const UserForm: React.FC<UserFormProps> = ({onSubmit}) => {
    const [user, setUser] = useState<User>({ name: '', phoneNumber: '', email: ''});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent)=> {
        e.preventDefault();
        onSubmit(user);
    };
    
    return (
        <Box component = "form" onSubmit={handleSubmit} sx={{mt: 1}}>

            <Box/>
    )
}