import React from 'react';
import { useEffect, useState } from 'react';
import '../globalStyles.css';
import './Register.css';
import useForm from '../Hooks/useForm';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, registerUserEmailPass, userExist } from '../firebase/firebase';

function Register() {
  let navigate = useNavigate();
  const { handleChange, values, errors, handleSubmit } = useForm(formRegister);

  async function formRegister() {
    try {
      const res = await createUserWithEmailAndPassword(auth, values.email, values.password);
      await registerUserEmailPass(
        auth.currentUser.uid,
        values.userName,
        values.name,
        auth.currentUser.email,
        values.password
      );

      const registered = await userExist(auth.currentUser.uid);
      console.log(registered);
      if (registered && auth.currentUser.uid) {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className='container_register'>
      <div className='heroRegister'>
        <img src='./assets/abduction.svg' alt='' className='heroRegister__img' />
      </div>
      <div className='register'>
        <button
          className='button__back'
          onClick={() => {
            navigate('/');
          }}
        >
          <img src='./assets/arrow.svg' alt='' />
        </button>
        <div className='register__title-container'>
          <img src='./assets/estrellita.svg' alt='' />
          <h2 className='register__title'>REGISTRO</h2>
          <img src='./assets/estrellita.svg' alt='' />
        </div>
        <form className='register_form' onSubmit={handleSubmit}>
          <div className='form__input mg'>
            <input
              name='userName'
              type='text'
              className='form__text--register'
              id='inputUser'
              placeholder='jhon_doe'
              onChange={handleChange}
              required
            />
            {<p className='form__alert'>{errors.userName}</p>}
            <label htmlFor='inputEmail' className='form__label'>
              Nombre de usuario
            </label>
          </div>

          <div className='form__input mg'>
            <input
              name='name'
              type='text'
              className='form__text--register'
              id='inputName'
              placeholder='Jhon Doe'
              onChange={handleChange}
              required
            />
            {<p className='form__alert'>{errors.name}</p>}
            <label htmlFor='inputEmail' className='form__label'>
              Nombre Completo
            </label>
          </div>

          <div className='form__input mg'>
            <input
              name='email'
              type='email'
              className='form__text--register'
              id='inputEmail'
              placeholder='example@example.com'
              onChange={handleChange}
              required
            />
            {<p className='form__alert'>{errors.email}</p>}
            <label htmlFor='inputEmail' className='form__label'>
              Correo electronico
            </label>
          </div>

          <div className='form__input mg'>
            <input
              name='password'
              type='password'
              className='form__text--register'
              id='passwordOne'
              placeholder='T123@maps'
              onChange={handleChange}
              required
            />
            {<p className='form__alert'>{errors.password}</p>}
            <label htmlFor='inputEmail' className='form__label'>
              Contraseña
            </label>
          </div>

          <div className='form__input mg'>
            <input
              name='repeatPass'
              type='password'
              className='form__text--register'
              id='passwordTwo'
              placeholder='T123@maps'
              onChange={handleChange}
              required
            />
            {<p className='form__alert'>{errors.repeatPass}</p>}
            <label htmlFor='inputEmail' className='form__label'>
              Repetir Contraseña
            </label>
          </div>

          <div className='button__container'>
            <button className='form__button'>Registrarme</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;
