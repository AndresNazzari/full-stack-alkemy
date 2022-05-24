import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, clearLoginError } from '../../redux/actions/login.action';

import styles from '../../styles/Login.module.scss';
import logoLogin from '../../assets/login/logo-login.png';
import { ReactComponent as ErrorIcon } from '../../assets/errorIcon.svg';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userState = useSelector((store) => store.user);

    const loginError = false;

    useEffect(() => {
        userState.isAuthenticated && navigate('/home');
        dispatch(clearLoginError());
    }, [userState.isAuthenticated, navigate, dispatch]);

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    return (
        <>
            <div className={styles.loginPage}>
                <div className={styles.loginLeft}>
                    <div>
                        <h2>Welcome to BudgetApp</h2>
                        <img src={logoLogin} alt='login logo' />
                    </div>
                </div>

                <div className={styles.loginRight}>
                    <form action='' onSubmit={(e) => handleLogin(e)}>
                        <h2>Please log in</h2>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='text'
                            id='emailInput'
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter your email'
                            className={userState.error ? styles.inputError : ''}
                        />
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            id='passwordInput'
                            placeholder='Enter your password'
                            onChange={(e) => setPassword(e.target.value)}
                            className={userState.error ? styles.inputError : ''}
                        />
                        {loginError && (
                            <div className={styles.loginError}>
                                <ErrorIcon className='loginErrorIcon' />{' '}
                                <span>Email o Password incorrectos</span>
                            </div>
                        )}

                        <button type='submit'>Login</button>
                        <p>
                            Not a member? <Link to={'/signup'}>Signup now</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
