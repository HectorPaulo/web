import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', {
        userId: userId,
        password: password
      });

      if (response.status === 200) {
        toast.success('Inicio de sesión exitoso.');
        setUserId('');
        setPassword('');
        window.location.href = '/DashboardPage';
      }
    } catch (error) {
      toast.error('ID de usuario o contraseña incorrecta.');
    }
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Iniciar Sesión</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="ID de Usuario"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
            maxLength={9}
          />
          <FaUser className='icon' />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaLock className='icon' />
        </div>
        <button type="submit">Iniciar Sesión</button>
        <div className="register-link">
          <p>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></p>
        </div>
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default LoginForm;
