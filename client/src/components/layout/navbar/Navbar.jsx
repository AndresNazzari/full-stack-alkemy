import styles from './style/Navbar.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as HomeIcon } from './assets/home1.svg';
import { ReactComponent as IncomeIcon } from './assets/income.svg';
import { ReactComponent as OrientadorIcon } from './assets/expense.svg';
import logo from './assets/logo.png';

const Navbar = () => {
    const location = useLocation();

    return (
        <>
            <nav className={styles.navBar}>
                <div className={styles.logo}>
                    <Link to='/home'>
                        <img src={logo} alt='' className={styles.navLogo} />
                    </Link>
                </div>
                <div className={styles.navLinks}>
                    <Link
                        to='/home'
                        className={
                            location.pathname.includes('home')
                                ? `${styles.navLink} ${styles.navLinkOn}`
                                : `${styles.navLink}`
                        }
                    >
                        <HomeIcon className={styles.navIcon} />
                        <span>Inicio</span>
                    </Link>
                    <Link
                        to='/incomes'
                        className={
                            location.pathname.includes('incomes')
                                ? `${styles.navLink} ${styles.navLinkOn}`
                                : `${styles.navLink}`
                        }
                    >
                        <IncomeIcon className={styles.navIcon} />
                        <span>Incomes</span>
                    </Link>
                    <Link
                        to='/expenses'
                        className={
                            location.pathname.includes('expenses')
                                ? `${styles.navLink} ${styles.navLinkOn}`
                                : `${styles.navLink}`
                        }
                    >
                        <OrientadorIcon className={styles.navIcon} />
                        <span>Expenses</span>
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
