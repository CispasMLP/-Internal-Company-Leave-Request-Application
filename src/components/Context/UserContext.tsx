
import React, { createContext, FC, ReactNode, useState } from "react";

interface TableData {
  firstName: string;
  lastName: string;
  startDate:string;
  endDate:string;
  requestStatus?:string;

}

interface TableActions {
  addTableData: (data: TableData) => void;
  changeRequestStatus:(id:string, status:string)=>void

}

interface TableContextProps {
  tableData: TableData[];
  tableActions: TableActions;
}

const TableContext = createContext<TableContextProps>({
  tableData: [],
  tableActions: {
    addTableData: () => {},
    changeRequestStatus: () => {},
  },
});

export const TableProvider:FC<{children: ReactNode}> =({children})=> {
  const [tableData, setTableData] = useState<TableData[]>([]);

  const addTableData = (data: TableData) => {
    setTableData([...tableData, {...data, requestStatus:"pending"}]);
  };

  const changeRequestStatus = (id:string, status:string)=>{


  const newTabledata = [...tableData]
  const index = newTabledata.findIndex(d=>d.firstName===id);

  newTabledata[index].requestStatus = status

  setTableData(newTabledata)
  }


  return (
    <TableContext.Provider value={{ tableData,tableActions: { addTableData, changeRequestStatus }, }}>
      {children}
    </TableContext.Provider>
  );
};

export default TableContext;