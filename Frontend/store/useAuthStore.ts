import { create } from 'zustand';
import { User } from '@types/index';


interface AuthState {
user?: User | null;
token?: string | null;
loading: boolean;
login: (email: string, password: string) => Promise<void>;
logout: () => void;
setUser: (u: User | null) => void;
}


export const useAuthStore = create<AuthState>((set) => ({
user: null,
token: null,
loading: false,
login: async (email, password) => {
  set({ loading: true });
  try {
    // Mock user login
    const mockUser: User = { id: '1', email: email, name: 'Mock User' };
    const mockToken = 'mock-token';
    set({ user: mockUser, token: mockToken });
  } catch (e) {
    console.error(e);
    throw e;
  } finally {
    set({ loading: false });
  }
},
logout: () => set({ user: null, token: null }),
setUser: (u) => set({ user: u }),
}));
