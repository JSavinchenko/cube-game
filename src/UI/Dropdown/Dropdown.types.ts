export interface StyledListProps {
  count: number;
  isOpen: boolean;
}

export interface DropdownProps {
  variants: string[];
  onChoose: (selectedVariant: string) => void;
  defaultValueIndex?: number;
}
