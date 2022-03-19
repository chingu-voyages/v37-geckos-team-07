import React, { useState, useMemo, createContext, useCallback, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import budget from '../utils/data';
import data from './dataRows';
import * as USER_HELPERS from '../utils/userToken';

const DataContext = createContext({
  rows: [],
  chartsData: [],
  setChartsData: () => {},
  setRows: () => {},
  addIncome: () => {},
  addExpense: () => {},
  deleteMovement: () => {},
  showAlert: { show: false, variant: '', text: '', headerText: '' },
});

const api = `${process.env.REACT_APP_SERVER_URL}/api/movements`;
const token = USER_HELPERS.getUserToken();

const authHeaders = { headers: { Authorization: `${token}` } };

export function DataContextProvider({ children }) {
  const [rows, setRows] = useState(data);
  const [chartsData, setChartsData] = useState(budget);
  const [showAlert, setShowAlert] = useState({
    show: false,
    variant: '',
    text: '',
    headerText: '',
  });
  const displayAlert = useCallback((variant, headerText, text) => {
    setShowAlert({
      show: true,
      variant,
      text,
      headerText,
    });
  }, []);
  const fetchMovementsHandler = useCallback(() => {
    axios
      .get(api, authHeaders)
      .then((response) => {
        const myData = response.data.map((el) => ({
          // eslint-disable-next-line no-underscore-dangle
          id: el._id,
          amount: parseFloat(el.amount.$numberDecimal),
          category: el.category,
          date: dayjs(el.createdAt).format('DD.MM.YYYY'),
          description: el.description,
          isIncome: el.isIncome,
        }));
        setRows(myData);
      })
      .catch((error) => {
        // handle error
        setShowAlert({
          show: true,
          variant: 'danger',
          text: error.message,
          headerText: 'Error',
        });
      });
  }, []);

  useEffect(() => {
    fetchMovementsHandler();
  }, [fetchMovementsHandler]);

  useEffect(() => {
    const timerIdentifier = setTimeout(() => {
      setShowAlert({
        show: false,
        variant: '',
        text: '',
        headerText: '',
      });
    }, 5000);

    return () => {
      clearTimeout(timerIdentifier);
    };
  }, [showAlert]);

  const addIncome = useCallback(
    (amnt, categ, descr) => {
      const movement = {
        amount: parseFloat(amnt),
        category: categ,
        description: descr,
        isIncome: true,
      };
      axios
        .post(api, movement, authHeaders)
        .then(() => {
          fetchMovementsHandler();
          displayAlert('success', 'Success', 'Database save succesfully');
        })
        .catch((error) => {
          // handle error
          displayAlert('danger', 'Error', error.message);
        });
    },
    [fetchMovementsHandler, displayAlert]
  );

  const addExpense = useCallback(
    (amnt, categ, descr) => {
      const movement = {
        amount: parseFloat(amnt),
        category: categ,
        description: descr,
        isIncome: false,
      };
      axios
        .post(api, movement, authHeaders)
        // .post(api, movement)
        .then(() => {
          fetchMovementsHandler();
          displayAlert('success', 'Success', 'Database save succesfully');
        })
        .catch((error) => {
          // handle error
          displayAlert('danger', 'Error', error.message);
        });
    },
    [fetchMovementsHandler, displayAlert]
  );

  const deleteMovement = useCallback(
    (movementId) => {
      const route = `${api}/${movementId}`;
      axios
        .delete(route, authHeaders)
        .then(() => {
          fetchMovementsHandler();
          displayAlert('success', 'Success', 'Database save succesfully');
        })
        .catch((error) => {
          // handle error
          displayAlert('danger', 'Error', error.message);
        });
    },
    [fetchMovementsHandler, displayAlert]
  );

  const value = useMemo(
    () => ({
      rows,
      setRows,
      addExpense,
      addIncome,
      chartsData,
      setChartsData,
      deleteMovement,
      showAlert,
      setShowAlert,
    }),
    [rows, addExpense, addIncome, chartsData, deleteMovement, showAlert]
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
export default DataContext;
