import React from 'react';
import { loadUserAction } from '../../redux/actions/user.action';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FetchState } from '../../constants/fetchState';
import Dashboard from '../layout/dashboard/Dashboard';
import Spinner from '../layout/spinner/Spinner';

const Expenses = () => {
    const dispatch = useDispatch();

    const fetchingStateUser = useSelector(
        (store) => store.userReducer.fetchState
    );

    return (
        <Dashboard>
            {fetchingStateUser !== FetchState.FETCHED ? (
                <Spinner />
            ) : (
                <div>Expenses Home</div>
            )}
        </Dashboard>
    );
};

export default Expenses;
