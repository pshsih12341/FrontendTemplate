import {create} from "zustand";

export const useStore = create((set) => {
    return {
        user: {
            name: "John Doe",
        },
        setUser: (user) => set({user}),
    }
});