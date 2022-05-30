import styles from './style/Header.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { logout, loadUserAction } from '../../../redux/actions/user.action';
import profileIcon from './assets/profile.svg';
import exitIcon from './assets/exit.svg';

const Header = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const avatar = useSelector((store) => store.userReducer.avatar);
    const name = useSelector((store) => store.userReducer.name);

    const [modalPerfilOpen, setModalPerfilOpen] = useState(false);

    const logOutHandler = () => {
        dispatch(logout());
    };

    const setTitle = () => {
        return (
            (location.pathname.includes('home') && `Welcome, ${name}!`) ||
            (location.pathname.includes('incomes') && 'Incomes') ||
            (location.pathname.includes('expenses') && 'Expenses')
        );
    };

    return (
        <>
            <div
                id={modalPerfilOpen ? styles.modalProfileContainer : ''}
                onClick={(e) =>
                    e.target.id === styles.modalProfileContainer &&
                    setModalPerfilOpen(!modalPerfilOpen)
                }
            ></div>
            <header className={styles.header}>
                <p className={styles.headerWelcome}>{setTitle()}</p>
                <div className={styles.headerAvatarContainer}>
                    <img
                        src={avatar}
                        alt='avatar'
                        className={styles.headerAvatar}
                        onClick={() => setModalPerfilOpen(!modalPerfilOpen)}
                    />
                    <div
                        className={
                            modalPerfilOpen
                                ? `${styles.modalProfile} ${styles.modalProfile_visible}`
                                : `${styles.modalProfile} `
                        }
                    >
                        <div>
                            <img src={profileIcon} alt='' />
                            <Link
                                to='/home/profile'
                                onClick={() =>
                                    setModalPerfilOpen(!modalPerfilOpen)
                                }
                            >
                                <span>My profile</span>
                            </Link>
                        </div>
                        <div>
                            <img src={exitIcon} alt='' />
                            <Link
                                to='/'
                                onClick={() => {
                                    setModalPerfilOpen(!modalPerfilOpen);
                                    logOutHandler();
                                }}
                            >
                                <span>Log Out</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
