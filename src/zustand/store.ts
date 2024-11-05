import { create } from 'zustand';
import { type IModalsState, modalsSlice } from './modals.slice';

export const useStore = create<IModalsState>((...a) => ({
  ...modalsSlice(...a),
}));
