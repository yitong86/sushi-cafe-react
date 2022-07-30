import axios from 'axios';
import React, {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom'
import Container from '../common/Container';
import LoginForm from './LoginForm';
import {AuthContext} from '../Providers/AuthProvider'

const Login = () => {
  const [query, setQuery] = useState({
    id: "",
    password: "",
  })
  const [auth, setAuth] = useContext(AuthContext)
  const navigate = useNavigate();

  const updateForm = (field, value) => {
    setQuery({
      ...query,
      [field]: value
    })
  }

  const onSubmit = async () => {
    const data = query;
    try {
      const res = await axios.get(`http://localhost:8080/api/users/${query.id}`)
      setAuth({id: res.data.id, name: res.data.name})
      navigate('/');
    } catch (error) {
      console.error(error.response ? error.response.data : error.message)
    }
    
  }

  return (
    <Container>
      <LoginForm onSubmit={onSubmit} query={query} updateForm={updateForm}/>
    </Container>
  )
}

export default Login;