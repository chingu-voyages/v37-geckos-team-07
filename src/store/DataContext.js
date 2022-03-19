import React, { useState, useMemo, createContext, useCallback, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import budget from '../utils/data';
import data from './dataRows';
// import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

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

const api = 'https://geckspence.herokuapp.com/api/movements';
const token = '';

const authHeaders = { headers: { Authorization: `Bearer ${token}` } };

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
    if (token !== '') {
      fetchMovementsHandler();
    }
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
      if (token !== '') {
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
      } else {
        movement.date = dayjs(Date()).format('DD.MM.YYYY');
        movement.id = Math.round(Math.random() * 10000000);
        rows.push(movement);
      }
    },
    [rows, fetchMovementsHandler, displayAlert]
  );

  const addExpense = useCallback(
    (amnt, categ, descr) => {
      const movement = {
        amount: parseFloat(amnt),
        category: categ,
        description: descr,
        isIncome: false,
      };
      if (token !== '') {
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
      } else {
        movement.id = Math.round(Math.random() * 10000000);
        movement.date = dayjs(Date()).format('DD.MM.YYYY');
        rows.push(movement);
      }
    },
    [rows, fetchMovementsHandler, displayAlert]
  );

  const deleteMovement = useCallback(
    (movementId) => {
      const route = `${api}/${movementId}`;
      if (token !== '') {
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
      } else {
        rows.splice(
          rows.findIndex((mov) => mov.id === movementId),
          1
        );
      }
    },
    [rows, fetchMovementsHandler, displayAlert]
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
