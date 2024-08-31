import {create} from 'zustand';
import axios from 'axios';

interface User {
  id: string;
  name: string;
}

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  login: (login: string, password: string) => Promise<void>;
}

const loadAuthState = () => {
  const user = localStorage.getItem('user');
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return {
    user: user ? JSON.parse(user) : null,
    isLoggedIn,
  };
};

const saveAuthState = (user: User | null, isLoggedIn: boolean) => {
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('isLoggedIn', String(isLoggedIn));
};

const defaultHeadersPost = {
  Accept: 'application/json, text/plain, */*',
  'Accept-Language': 'en-RU,en;q=0.9,ru-RU;q=0.8,ru;q=0.7,he;q=0.6',
  /*   'Cache-Control': 'no-cache',
  Connection: 'keep-alive', */
  'Content-Type': 'application/json',
};

const defaultHeadersGet = {
  Accept: 'application/json, text/plain, */*',
  'Accept-Language': 'en-RU,en;q=0.9,ru-RU;q=0.8,ru;q=0.7,he;q=0.6',
  /*   'Cache-Control': 'no-cache',
  Connection: 'keep-alive', */
  Cookie:
    'connect.sid=s%3A-Q3Y7krzCl71e0oIaegd-vd98jj6RrGb.jh4hAa%2BoXuzWHt2mii0X%2BXjBul4YoP3F7WNVFFa%2BZjw',
};

export const useAuthStore = create<AuthState>((set) => {
  const initialState = loadAuthState();

  return {
    ...initialState,
    login: async (login: string, password: string) => {
      try {
        await axios.post(
          'https://api.lettobet.dev.bet4skill.com/api/client-login',
          {login, password},
          {withCredentials: true, headers: defaultHeadersPost},
        );
        const response = await axios.get(
          'https://api.lettobet.dev.bet4skill.com/api/auth/me',
          {withCredentials: true, headers: defaultHeadersGet},
        );
        set({
          user: response.data,
          isLoggedIn: true,
        });
        saveAuthState(response.data, true);
      } catch (error) {
        console.error('Авторизация не удалась.', error);
      }
    },
  };
});

/* const clearAuthState = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('isLoggedIn');
};

clearAuthState(); */
