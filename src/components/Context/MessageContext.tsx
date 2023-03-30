import { createContext, FC, ReactNode, useState } from 'react';

export interface IMessageContext {
  message: string;
  setMessage: (message: string) => void;
}

 export const MessageContext = createContext<IMessageContext>({
  message: '',
  setMessage: () => {},
});

 export const MessageProvider:FC<{children: ReactNode}> =({children}) => {
  const [message, setMessage] = useState('');

  const messageContextValue: IMessageContext = {message,setMessage,};

  return (
    <MessageContext.Provider value={messageContextValue}>
      {children}
    </MessageContext.Provider>
  );
};

export default MessageContext;