import type { StateCreator } from 'zustand';

export interface IModalsState {
  musicOpen: boolean;
  partyOpen: boolean;
  dressCodeOpen: boolean;
  setMusicOpen: () => void;
  setPartyOpen: () => void;
  setDressCodeOpen: () => void;
}

export const modalsSlice: StateCreator<IModalsState> = (set) => ({
  musicOpen: false,
  partyOpen: false,
  dressCodeOpen: false,
  setMusicOpen: () =>
    set((state: IModalsState) => ({ musicOpen: !state.musicOpen })),
  setPartyOpen: () =>
    set((state: IModalsState) => ({ partyOpen: !state.partyOpen })),
  setDressCodeOpen: () =>
    set((state: IModalsState) => ({
      dressCodeOpen: !state.dressCodeOpen,
    })),
});
