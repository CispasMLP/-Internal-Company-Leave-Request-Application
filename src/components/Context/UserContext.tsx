import { createContext, FC, ReactNode, useState } from "react";

export const userContext = createContext({})

export type TodoContextType = {
    list: string[];
    addToList: (listItem:string)=> void;
    removeItem:(item:string)=>void;
    update:(item:string)=>void
}

export const TodoContext = createContext<TodoContextType|null>(null);


export const TodoProvider:FC<{children: ReactNode}> =({children})=>{
    const [list,setList]=useState<string[]>([]);


    const addToList = (listItem:string)=>{
        setList(lists=>[...lists,listItem])
    }

    const removeItem =(item:string)=>{
        
    }

    const update =(item:string)=>{
    }


    const[finalData,setFinalData] =useState<string[]>([])

    const submitData=()=>{}
    

    return <TodoContext.Provider value={{list,addToList,removeItem, update}}>{children}</TodoContext.Provider>
}