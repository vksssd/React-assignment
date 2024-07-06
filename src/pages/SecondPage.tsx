import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import DataTable from '../components/DataTable';
import DepartmentList from '../components/DepartmentList';
import { Post } from '../models/Post';
import { Department } from '../models/Department';
import { useNavigate } from 'react-router-dom';

const SecondPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/', { state: { message: 'Please enter your details first.' } });
    } else {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data));
    }
  }, [navigate]);

  const departments: Department[] = [
    {
      department: "customer_service",
      sub_departments: [
        "support",
        "customer_success"
      ]
    },
    {
      department: "design",
      sub_departments: [
        "graphic_design",
        "product_design",
        "web_design"
      ]
    }
  ];

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Data Table
      </Typography>
      <DataTable posts={posts} />
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
        Departments
      </Typography>
      <DepartmentList departments={departments} />
    </Container>
  );
};

export default SecondPage;