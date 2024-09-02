import type {StyledListProps} from './Dropdown.types';

import styled, {keyframes} from 'styled-components';

import {ANIMATION_ATTRIBUTE, ITEM_SIZE} from './Dropdown.const';

import {Colors} from '../../constants/colors';

const openDropdown = (count: number) => keyframes`
  0%{
   height: 0;
  }
  100%{
    height: ${count * ITEM_SIZE}px;
  }
`;

const closeDropdown = (count: number) => keyframes`
  0%{
    height: ${count * ITEM_SIZE}px;
  }
  100%{
    height: 0;
    display: none;
  }
`;

export const StyledDropdown = styled.div`
  position: relative;
  width: auto;
  max-width: none;
  height: 40px;
  z-index: 3;
`;

export const StyledButton = styled.button`
  width: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  align-items: center;
  padding-inline: 10px;
  cursor: pointer;
  border: none;
  height: 100%;
  background-color: ${Colors.WHITE};

  & *:first-child {
    text-align: left;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 90%;
    overflow: hidden;
    white-space: nowrap;
  }

  &:focus {
    border: 1px solid ${Colors.BLUE};
  }
`;

export const StyledList = styled.ul<StyledListProps>`
  min-width: 120px;
  max-height: 350px;
  overflow-y: auto;
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 2;
  list-style: none;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border-left: 1px solid ${Colors.BLUE};
  border-right: 1px solid ${Colors.BLUE};
  border-bottom: 1px solid ${Colors.BLUE};
  margin: 0;
  padding: 10px 0 10px 0;
  background-color: ${Colors.WHITE};

  &[${ANIMATION_ATTRIBUTE}='true'] {
    animation-name: ${({count, isOpen}) =>
      isOpen ? openDropdown(count) : closeDropdown(count)};
    animation-fill-mode: forwards;
    animation-duration: 0.3s;
  }

  &:not([${ANIMATION_ATTRIBUTE}='true']) {
    height: 0;
    display: none;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: ${Colors.WHITE};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${Colors.WHITE};
  }
`;

export const StyledItem = styled.li`
  position: relative;
  min-height: ${ITEM_SIZE}px;
  background-color: ${Colors.WHITE};
`;

export const SyledButtonItem = styled.button`
  font-size: 13px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  border: none;
  transition-property: background-color;
  transition-duration: 0.2s;
  text-align: left;
  padding-inline: 14px;
  background-color: ${Colors.WHITE};

  &:hover {
    font-weight: 700;
  }
`;

export const StyledImg = styled.img<{isOpen: boolean}>`
  transform: rotate(${({isOpen}) => (isOpen ? 180 : 0)}deg);
`;
