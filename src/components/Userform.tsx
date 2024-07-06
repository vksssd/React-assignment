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
            <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoFocus
                value={user.name}
                onChange={handleChange}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                autoFocus
                id="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
                value={user.phoneNumber}
                onChange={handleChange}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                autoFocus
                id="email"
                label="Email"
                name="email"
                value={user.email}
                onChange={handleChange}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Submit
            </Button>
        </Box>
    )
}

export default UserForm;