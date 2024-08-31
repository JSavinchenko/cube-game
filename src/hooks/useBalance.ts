import {useState, useEffect} from 'react';

const BALANCE_KEY = 'balance';

const loadBalance = () => {
  const balance = localStorage.getItem(BALANCE_KEY);
  return balance ? parseFloat(balance) : 100;
};

const saveBalance = (balance: number) => {
  localStorage.setItem(BALANCE_KEY, String(balance));
};

export const useBalance = () => {
  const [balance, setBalance] = useState(loadBalance);

  useEffect(() => {
    saveBalance(balance);
  }, [balance]);

  return [balance, setBalance] as const;
};
