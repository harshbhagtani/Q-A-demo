import React, { createContext, useState } from 'react';

export const Context = createContext();

function AppContext({ children }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [answers, setAnswers] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ]);
  const [date, setDate] = useState('');

  return (
    <Context.Provider
      value={{
        name,
        setDate,
        setName,
        setEmail,
        email,
        date,
        answers,
        setAnswers
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default AppContext;
