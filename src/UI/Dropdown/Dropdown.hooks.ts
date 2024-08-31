import type {FocusEvent, MouseEvent} from 'react';

import {useEffect, useRef, useState} from 'react';

import {ANIMATION_ATTRIBUTE} from './Dropdown.const';

import {useOutsideClick} from '../../hooks/useOutsideClick.tsx';

export const useDropdown = (
  variants: string[],
  onChoose: (selectedVariant: string) => void,
  defaultValueIndex?: number,
) => {
  const {
    ref: dropdownRef,
    isComponentVisible: isOpen,
    toggle,
    setIsComponentVisible,
  } = useOutsideClick<HTMLDivElement>(false);
  const close = () => setIsComponentVisible(false);

  const [searchQuery, setSearchQuery] = useState('');

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const filteredVariants = variants.filter((variant) =>
    variant.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const initialChosenVariant = '1.00';

  const [chosenVariant, setChosenVariant] = useState(initialChosenVariant);

  const handleSearchInputClick = (event: MouseEvent<HTMLInputElement>) => {
    if (isOpen) {
      if (searchInputRef.current) {
        event.stopPropagation();
      }

      return;
    }

    if (chosenVariant) {
      setSearchQuery(chosenVariant);
      setChosenVariant('');
    }
  };

  const listRef = useRef<HTMLUListElement>(null);

  const handleButtonClick = () => {
    toggle();
  };

  const handleButtonBlur = (e: FocusEvent<HTMLButtonElement>) => {
    if (!e.relatedTarget) close();
  };

  const changeVariant = (index: number) => {
    const selectedVariant = filteredVariants[index];
    setChosenVariant(selectedVariant);
    onChoose(selectedVariant);
  };

  useEffect(() => {
    if (isOpen && !listRef.current?.getAttribute(ANIMATION_ATTRIBUTE)) {
      listRef.current?.setAttribute(ANIMATION_ATTRIBUTE, 'true');
    }
  }, [isOpen]);

  useEffect(() => {
    if (chosenVariant === '' && defaultValueIndex !== undefined) {
      setChosenVariant(filteredVariants[defaultValueIndex]);
    }
  }, [chosenVariant, defaultValueIndex, filteredVariants]);

  return {
    chosenVariant,
    changeVariant,
    isOpen,
    handleButtonClick,
    handleSearchInputClick,
    close,
    handleButtonBlur,
    listRef,
    searchQuery,
    filteredVariants,
    searchInputRef,
    dropdownRef,
  };
};
