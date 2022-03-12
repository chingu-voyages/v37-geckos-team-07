import React, { useState, useMemo, createContext, useCallback, useEffect } from 'react';
import axios from 'axios';
import data from './dataRows';

const DataContext = createContext({
  rows: [],
  setRows: () => {},
  addIncome: () => {},
  addExpense: () => {},
});

const api = 'http://localhost:5005/api/movements';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJhNDZlMDkxY2MyZmVlODE5MWQ0YmEiLCJlbWFpbCI6InRlc3QzNUB0ZXN0LmNvbSIsInVzZXJuYW1lIjoiQW5kcmV5MDEiLCJpYXQiOjE2NDcwNzgyMjQsImV4cCI6MTY0NzA5OTgyNH0.HhpN6UwCkYblnHhGXFrL7Iw_jT1trPeRsnBt8o4vGeQ';

export function DataContextProvider({ children }) {
  const [rows, setRows] = useState(data);

  const fetchMovementsHandler = useCallback(() => {
    axios
      .get(api, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        const myData = response.data;
        console.log(myData);
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
