import React, { useState, useMemo, createContext, useCallback, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import data from './dataRows';

const DataContext = createContext({
  rows: [],
  setRows: () => {},
  addIncome: () => {},
  addExpense: () => {},
});

const api = 'http://localhost:5005/api/movements';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJjZTEyNjM4NWJkYTI0M2I4MGRiYTUiLCJlbWFpbCI6InRlc3Q0NEB0ZXN0LmNvbSIsInVzZXJuYW1lIjoiQW5kcmV5MDIiLCJpYXQiOjE2NDcxMDg2NTAsImV4cCI6MTY0NzEzMDI1MH0.owYkeO90SIc7Ys72w6wyyFGAVBhRox7zC0qEpVjebIM';

export function DataContextProvider({ children }) {
  const [rows, setRows] = useState(data);

  const fetchMovementsHandler = useCallback(() => {
    axios
      .get(api, { headers: { Authorization: `Bearer ${token}` } })
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
        console.log(myData);
        setRows(myData);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchMovementsHandler();
  }, [fetchMovementsHandler]);

  const addIncome = useCallback(
    (amnt, categ, descr) => {
      const prevRecords = rows.slice();
      prevRecords.push({
        isIncome: true,
        amount: parseFloat(amnt),
        category: categ,
        description: descr,
        id: Math.floor(Math.random() * 10000),
        date: '09.03.2022',
      });
      setRows(prevRecords);
    },
    [rows]
  );

  const addExpense = useCallback(
    (amnt, categ, descr) => {
      const prevRecords = rows.slice();
      prevRecords.push({
        isIncome: false,
        amount: parseFloat(amnt),
        category: categ,
        description: descr,
        id: Math.floor(Math.random() * 10000),
        date: '09.03.2022',
      });
      setRows(prevRecords);
    },
    [rows]
  );

  const value = useMemo(
    () => ({ rows, setRows, addExpense, addIncome }),
    [rows, addExpense, addIncome]
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
export default DataContext;
