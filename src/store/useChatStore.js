import { create } from "zustand";

export const useChatStore = create((set) => ({
  chatbotOpen: false,
  messages: [{ from: "bot", text: "Hi! How can I help you today?" }],
  seconds: 0,
  timerRunning: false,
  intervalId: null,

  // UI actions
  setChatbotOpen: (val) => set({ chatbotOpen: val }),

  // Messaging actions
  addMessage: (msg) => set((state) => ({ messages: [...state.messages, msg] })),

  resetMessages: () =>
    set({
      messages: [{ from: "bot", text: "Hi! How can I help you today?" }],
    }),

  // Timer actions
  startTimer: () =>
    set((state) => {
      if (state.timerRunning) return state; // already running

      const id = setInterval(() => {
        set((s) => ({ seconds: s.seconds + 1 }));
      }, 1000);

      return { timerRunning: true, intervalId: id, seconds: 0 };
    }),

  stopTimer: () =>
    set((state) => {
      clearInterval(state.intervalId);
      return { timerRunning: false, intervalId: null, seconds: 0 };
    }),

  resetTimer: () =>
    set((state) => {
      clearInterval(state.intervalId);
      return {
        seconds: 0,
        timerRunning: false,
        intervalId: null,
      };
    }),
}));
