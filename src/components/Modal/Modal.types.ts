export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  errorMessage?: string | null;
  onLogin: (login: string, password: string) => Promise<void>;
}
