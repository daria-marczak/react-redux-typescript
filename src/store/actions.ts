import { ItemTypes, Action } from './types';

export const addItem = (text: string): Action => ({
  type: ItemTypes.ADD_ITEM,
  payload: {
    text,
  },
});

export const toggleEditItem = (id: number): Action => ({
  type: ItemTypes.EDIT_ITEM,
  payload: {
    id,
  },
});
