import { create } from "zustand";

const useConversation = create((set) => ({
    selectedUser: null,
    setSelectedUser: (user) => set({ selectedUser: user }),

    messages: [],
    setMessages: (messages) => set({ messages })
}));

export default useConversation;