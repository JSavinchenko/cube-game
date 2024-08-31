import type {DropdownProps} from './Dropdown.types';

import {useDropdown} from './Dropdown.hooks';
import {
  StyledButton,
  StyledDropdown,
  StyledImg,
  StyledItem,
  StyledList,
  SyledButtonItem,
} from './Dropdown.style';
import arrow from './images/arrow.svg';

import {Text, TextStyles} from '../../UI/Text';

export const Dropdown = ({
  onChoose,
  variants,
  defaultValueIndex,
}: DropdownProps) => {
  const {
    chosenVariant,
    changeVariant,
    handleButtonClick,
    close,
    isOpen,
    handleButtonBlur,
    listRef,
    filteredVariants,
    dropdownRef,
  } = useDropdown(variants, onChoose, defaultValueIndex);

  const handleVariantChange = (index: number) => {
    const selectedVariant = filteredVariants[index];
    changeVariant(index);
    onChoose(selectedVariant);
    close();
  };

  return (
    <StyledDropdown ref={dropdownRef}>
      <StyledButton
        type='button'
        onClick={handleButtonClick}
        onBlur={handleButtonBlur}
        title={chosenVariant}
      >
        <Text type={TextStyles.USUAL}>{chosenVariant}</Text>
        <StyledImg isOpen={isOpen} src={arrow} alt='открыть' />
      </StyledButton>
      <StyledList ref={listRef} isOpen={isOpen} count={filteredVariants.length}>
        {filteredVariants
          .slice(0, filteredVariants.length)
          .map((variant, index) => (
            <StyledItem key={variant}>
              <SyledButtonItem
                title={variant}
                type='button'
                onClick={() => handleVariantChange(index)}
              >
                {variant}
              </SyledButtonItem>
            </StyledItem>
          ))}
      </StyledList>
    </StyledDropdown>
  );
};
