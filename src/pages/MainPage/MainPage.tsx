import {StyledMainPage} from './MainPage.style';
import {Header} from '../../components/Header';
import {ModuleBetPanel} from '../../modules/ModuleBetPanel';
import {useState} from 'react';
import {Modal} from '../../components/Modal';
import {useAuthStore} from '../../store/authStore';
import {useBalanceStore} from '../../store/balanceStore';

export const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {isLoggedIn, login} = useAuthStore((state) => ({
    isLoggedIn: state.isLoggedIn,
    login: state.login,
  }));
  const {balance, setBalance} = useBalanceStore((state) => ({
    balance: state.balance,
    setBalance: state.setBalance,
  }));

  const handleLoginSubmit = async (loginn: string, password: string) => {
    try {
      await login(loginn, password);
      setIsModalOpen(false);
      setError(null);
    } catch (error) {
      setError('Ошибка входа. Проверьте свои учетные данные.');
      console.log(error);
    }
  };

  const handleLogin = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledMainPage>
      <Header
        logoText='Test Game'
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
        balance={balance}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onLogin={handleLoginSubmit}
        errorMessage={error}
      />
      <ModuleBetPanel
        isLoggedIn={isLoggedIn}
        balance={balance}
        setBalance={setBalance}
      />
    </StyledMainPage>
  );
};
