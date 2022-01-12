import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { login } from '../../../store/session';
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] =  useState();
  const user = useSelector(state => state.session.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };


  if (user) {
    return <Navigate to='/' exact={true} />;
  }


  const handleSignUp = () => {
    return navigate.push("/sign-up")
  }

  return (
    <div className='login__page'>
        Testing Route
    </div>
  );
};

export default LoginForm;
