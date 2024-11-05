import type { StateCreator } from 'zustand';

export interface IModalsState {
  musicOpen: boolean;
  partyOpen: boolean;
  partyDataOpen: boolean;
  setMusicOpen: () => void;
  setPartyOpen: () => void;
  setPartyDataOpen: () => void;
}

export const modalsSlice: StateCreator<IModalsState> = (set) => ({
  musicOpen: false,
  partyOpen: false,
  partyDataOpen: false,
  setMusicOpen: () =>
    set((state: IModalsState) => ({ musicOpen: !state.musicOpen })),
  setPartyOpen: () =>
    set((state: IModalsState) => ({ partyOpen: !state.partyOpen })),
  setPartyDataOpen: () =>
    set((state: IModalsState) => ({
      partyDataOpen: !state.partyDataOpen,
    })),
});
