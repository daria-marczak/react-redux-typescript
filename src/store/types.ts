export enum ItemTypes {
  ADD_ITEM = 'ADD_ITEM',
  EDIT_ITEM = 'EDIT_ITEM',
}

export interface AddItemAction {
  type: ItemTypes.ADD_ITEM;
  payload: {
    text: string;
  };
}

export interface EditItemAction {
  type: ItemTypes.EDIT_ITEM;
  payload: {
    id: number;
  };
}

export type Action = AddItemAction | EditItemAction;

export interface Item {
  id: number;
  text: string;
  editing: boolean;
  complete: boolean;
}

export interface ItemsState {
  readonly todos: Item[];
}
