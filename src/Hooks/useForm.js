import { useState } from 'react';
import { omit } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth, registerUser, registerUserEmailPass, userExist } from '../firebase/firebase';

const useForm = (callback) => {
  //Form values
  const [values, setValues] = useState({});

  //Errors
  const [errors, setErrors] = useState({});

  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');

  //Validación de los inputs del formulario
  const expEmail = /^\w+([.+-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
  const expPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
  const expUserName = /[A-Za-z][A-Za-z0-9_]{7,20}/;
  const expName = /[A-Za-z]+\s[A-Za-z]{7,20}/;

  const validate = (event, name, value) => {
    switch (name) {
      case 'userName':
        if (!expUserName.test(value)) {
          setErrors({
            ...errors,
            userName: 'Tú nombre de usuario debe tener letras, numeros y solo se permite _ ',
          });
        } else if (value < 0 && value > 20) {
          setErrors({
            ...errors,
            userName: 'Tú nombre de usuario debe tener entre 8 a 19 caracteres',
          });
        } else {
          let newObj = omit(errors, 'userName');
          setErrors(newObj);
        }
        break;

      case 'name':
        if (!expName.test(value)) {
          setErrors({
            ...errors,
            name: 'Ingresa nombre y apellido',
          });
        } else {
          let newObj = omit(errors, 'name');
          setErrors(newObj);
        }
        break;

      case 'email':
        if (!expEmail.test(value)) {
          setErrors({
            ...errors,
            email: 'ingresa un correo electronico valido',
          });
        } else {
          let newObj = omit(errors, 'email');
          setErrors(newObj);
          setMail(newObj.email);
        }
        break;

      case 'password':
        if (!expPassword.test(value)) {
          setErrors({
            ...errors,
            password:
              'ingresa una contraseña con el formato valido, una mayuscula, un numero, una minusula y un carater especial',
          });
        } else {
          let newObj = omit(errors, 'password');
          setErrors(newObj);
          setPassword(newObj.password);
        }
        break;

      case 'repeatPass':
        if (!expPassword.test(value)) {
          setErrors({
            ...errors,
            repeatPass:
              'La contraseña debe tener 9 caracteres -> una mayuscúla, un número, una minúscula y un caráter especial',
          });
        } else if (value !== values['password']) {
          setErrors({
            ...errors,
            repeatPass: 'La contraseña que ingresaste no coincide con la anterior',
          });
        } else {
          let newObj = omit(errors, 'repeatPass');
          setErrors(newObj);
        }
        break;

      default:
        break;
    }
  };

  //evento para detectar el cambio del valor del input
  const handleChange = (event) => {
    event.persist();

    let name = event.target.name;
    let val = event.target.value;

    validate(event, name, val);

    setValues({
      ...values,
      [name]: val,
    });
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      callback();
    } else {
      alert('there is an error');
    }
  };

  return {
    values,
    email,
    password,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
