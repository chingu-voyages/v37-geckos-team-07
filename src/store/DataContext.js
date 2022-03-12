import React, { useState, useMemo, createContext, useCallback } from 'react';
import budget from '../utils/data';
import data from './dataRows';

const DataContext = createContext({
  rows: [],
  chartsData: [],
  setChartsData: () => {},
  setRows: () => {},
  addIncome: () => {},
  addExpense: () => {},
});

export function DataContextProvider({ children }) {
  const [rows, setRows] = useState(data);
  const [chartsData, setChartsData] = useState(budget);

  const addIncome = useCallback(
    (amnt, categ, descr) => {
      const prevRecords = rows.slice();
      prevRecords.push({
        type: 'income',
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
        type: 'expense',
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
    () => ({ rows, setRows, addExpense, addIncome, chartsData, setChartsData }),
    [rows, addExpense, addIncome, chartsData]
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
export default DataContext;
