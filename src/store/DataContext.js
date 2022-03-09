import React, { useState, useMemo, createContext } from 'react';
import data from '../data';

const DataContext = createContext({
  rows: [],
});

export function DataContextProvider({ children }) {
  const [rows, setRows] = useState(data);
  const value = useMemo(() => ({ rows, setRows }), [rows]);
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
export default DataContext;
