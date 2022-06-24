import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchState } from '../../constants/fetchState';
import Dashboard from '../../components/layout/dashboard/Dashboard';
import Spinner from '../../components/layout/spinner/Spinner';
import Empty from '../../components/empty/Empty';
import OperationList from '../../components/operationList/OperationList.jsx';
import { useParams } from 'react-router-dom';

const Operations = () => {
    const dispatch = useDispatch();

    const fetchingStateUser = useSelector((store) => store.userReducer.fetchState);
    const fetchingStateIncomes = useSelector((store) => store.incomeReducer.fetchState);
    const fetchingStateExpenses = useSelector((store) => store.expenseReducer.fetchState);
    const incomes = useSelector((store) => store.incomeReducer.incomes);
    const expenses = useSelector((store) => store.expenseReducer.expenses);
    const { op } = useParams();
    //aca se debe filtrar el array de incomes por fecha y categoria

    return (
        <Dashboard>
            {fetchingStateUser !== FetchState.FETCHED ||
            fetchingStateIncomes !== FetchState.FETCHED ||
            fetchingStateExpenses !== FetchState.FETCHED ? (
                <Spinner />
            ) : (
                <OperationList list={op == 'incomes' ? incomes : expenses} />
            )}
        </Dashboard>
    );
};

export default Operations;
