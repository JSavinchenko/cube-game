import {useEffect, useRef, useState} from 'react';

export const useOutsideClick = <T extends HTMLElement>(state: boolean) => {
  const [isComponentVisible, setIsComponentVisible] = useState(state);
  const ref = useRef<T>(null);
  const toggle = () => setIsComponentVisible((prev) => !prev);

  const handleClickOutside = ({target}: MouseEvent) => {
    if (ref.current && !ref.current.contains(target as Node)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return {ref, isComponentVisible, toggle, setIsComponentVisible};
};
