import type {ModalProps} from './Modal.types';

import {
  StyledModal,
  StyledModalContent,
  StyledModalCancelBtn,
} from './Modal.style';

import {Button, ButtonStyles} from '../../UI/Button';
import {Input} from '../../UI/Input';
import {useState} from 'react';

export const Modal = ({isOpen, onClose, onLogin, errorMessage}: ModalProps) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
    setLoginError(null);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordError(null);
  };

  const handleSubmit = async () => {
    let hasError = false;

    if (!login.trim()) {
      setLoginError('Логин не может быть пустым.');
      hasError = true;
    }
    if (!password.trim()) {
      setPasswordError('Пароль не может быть пустым.');
      hasError = true;
    }

    if (hasError) return;

    if (onLogin) {
      try {
        await onLogin(login, password);
        setLoginError(null);
        setPasswordError(null);
        onClose();
      } catch (error) {
        setPasswordError('Не удалось войти. Проверьте свои учетные данные');
        console.log(error);
      }
    }
  };

  return (
    isOpen && (
      <StyledModal
        onClick={(e) => {
          if (e.currentTarget === e.target) onClose();
        }}
      >
        <StyledModalContent>
          <StyledModalCancelBtn onClick={onClose}>
            &#x2715;
          </StyledModalCancelBtn>
          <Input
            isFull={true}
            placeholder='Login'
            value={login}
            onChange={handleLoginChange}
            errorMessage={loginError}
          />
          <Input
            isFull={true}
            type='password'
            placeholder='Password'
            value={password}
            errorMessage={passwordError}
            onChange={handlePasswordChange}
          />
          {errorMessage}
          <Button
            buttonType={ButtonStyles.REGULAR}
            onClick={handleSubmit}
            isFull={true}
            children={'Войти'}
          />
        </StyledModalContent>
      </StyledModal>
    )
  );
};
