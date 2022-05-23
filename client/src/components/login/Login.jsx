import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from '../../styles/Login.module.scss';
import logoLogin from '../../assets/login/logo-login.png';
import { ReactComponent as ErrorIcon } from '../../assets/errorIcon.svg';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userState = useSelector((store) => store.user);
    const isAuthenticated = false;
    const loginError = false;

    useEffect(() => {
        isAuthenticated && navigate('/home');
    }, [isAuthenticated, navigate]);

    const login = (e) => {
        e.preventDefault();
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
                    <form action='' onSubmit={(e) => login(e)}>
                        <h2>Please log in</h2>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            placeholder='Enter your email'
                        />
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            id='password'
                            placeholder='Enter your password'
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
