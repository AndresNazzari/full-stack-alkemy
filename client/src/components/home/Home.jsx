import React from 'react';
import { loadUserAction } from '../../redux/actions/user.action';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUserAction());
    }, [dispatch]);

    return <div>Homerrrrrrrrrrrrrrr</div>;
};

export default Home;
