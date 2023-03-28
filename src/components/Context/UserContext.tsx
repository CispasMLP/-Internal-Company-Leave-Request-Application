
import React, { createContext, FC, ReactNode, useState } from "react";

interface TableData {
  firstName: string;
  lastName: string;
  startDate:string;
  endDate:string;

}

interface TableActions {
  addTableData: (data: TableData) => void;
}

interface TableContextProps {
  tableData: TableData[];
  tableActions: TableActions;
}

const TableContext = createContext<TableContextProps>({
  tableData: [],
  tableActions: {
    addTableData: () => {},
  },
});

export const TableProvider:FC<{children: ReactNode}> =({children})=> {
  const [tableData, setTableData] = useState<TableData[]>([]);

  const addTableData = (data: TableData) => {
    setTableData([...tableData, data]);
  };

  return (
    <TableContext.Provider value={{ tableData,tableActions: { addTableData }, }}>
      {children}
    </TableContext.Provider>
  );
};

export default TableContext;