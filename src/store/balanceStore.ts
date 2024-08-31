import {create} from 'zustand';

interface BalanceState {
  balance: number;
  setBalance: (balance: number) => void;
}

/* const loadBalance = () => {
  const balance = localStorage.getItem('balance');
  return balance ? parseFloat(balance) : 100;
};

const saveBalance = (balance: number) => {
  localStorage.setItem('balance', String(balance));
}; */

export const useBalanceStore = create<BalanceState>((set) => ({
  /*   balance: loadBalance(),
  setBalance: (balance: number) => {
    set({balance});
    saveBalance(balance);
  }, */
  balance: 100,
  setBalance: (balance: number) => set({balance}),
}));

// const clearBalanceState = () => {
//   localStorage.removeItem('balance');
// };

// clearBalanceState();
