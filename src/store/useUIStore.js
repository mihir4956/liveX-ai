import { create } from "zustand";

export const useUIStore = create((set) => ({
  sideOpen: false,
  currentPage: "app",
  searchTerm: "",

  // Actions
  setSideOpen: (val) => set({ sideOpen: val }),
  setCurrentPage: (page) => set({ currentPage: page }),
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Optional: Chatbot global
  chatbotOpen: false,
  setChatbotOpen: (val) => set({ chatbotOpen: val }),
}));
