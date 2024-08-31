export interface HeaderProps {
  logoText: string;
  isLoggedIn?: boolean;
  onLogin?: () => void;
  balance: number;
}
