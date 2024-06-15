import React, { useState } from 'react';
import './RegisterForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUserIdChange = (e) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) {
      return;
    }
    if (value.length <= 9) {
      setUserId(value);
    }
  };

  const validateUserId = (id) => {
    const regex = /^\d{9}$/;
    if (!regex.test(id)) {
      return 'El ID de usuario debe contener exactamente 9 dígitos.';
    }
    return '';
  };

  const validatePassword = (pass) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!regex.test(pass)) {
      return 'La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial.';
    }
    return '';
  };

  const validateConfirmPassword = (confirmPass) => {
    if (confirmPass !== password) {
      return 'Las contraseñas no coinciden.';
    }
    return '';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userIdError = validateUserId(userId);
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(confirmPassword);

    if (userIdError) {
      toast.error(userIdError);
      return;
    }

    if (passwordError) {
      toast.error(passwordError);
      return;
    }

    if (confirmPasswordError) {
      toast.error(confirmPasswordError);
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/register', {
        userId: userId,
        password: password
      });

      if (response.status === 200) {
        toast.success('Registro exitoso.');
        setUserId('');
        setPassword('');
        setConfirmPassword('');
        window.location.href = '/';
      }
    } catch (error) {
      toast.error('Este ID de usuario ya existe.');
    }
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Registro</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="ID de Usuario"
            value={userId}
            onChange={handleUserIdChange}
            required
            maxLength={9}
            className={userId.length === 9 ? 'valid' : ''}
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
        <div className="input-box">
          <input
            type="password"
            placeholder="Confirmar Contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <FaLock className='icon' />
        </div>
        <button type="submit">Registrarse</button>
        <div className="register-link">
          <p>¿Ya tienes una cuenta? -{'>'} <Link to="/">Iniciar Sesión</Link></p>
        </div>
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default RegisterForm;
