# Chatbot + Documentation Viewer (Vite + React + Zustand)

This project is a small React application built with Vite, using Zustand for state management, TailwindCSS for styling, and a set of custom hooks to manage search filtering and chatbot behavior.
It includes:
* A responsive sidebar for navigating between pages
* A global search bar
* A content viewer with text highlighting
* A floating chatbot widget with timer, history, and reset logic

## 🚀 Features

## ✅ Responsive UI

The app includes a sidebar, header, content viewer, and chatbot — all built with TailwindCSS and fully responsive.

## ✅ Global State Using Zustand

Two Zustand stores manage UI state and chatbot state:
* useUIStore → sidebar open/close, current page, search term
* useChatStore → messages, chatbot open state, timer logic

## ✅ Live Search + Highlighting

Search input updates the global store → content list is filtered + matched text highlighted using a custom hook: useFilteredContent.

## ✅ Chatbot with Timer

The chatbot:
* Opens as a floating widget
* Tracks elapsed time
* Stores conversation history
* Allows reset + close
* Simulates replies from a demo bot

## 🛠 Tech Stack

| Tool | Purpose |
| -----|---------|
| React (Vite) | UI rendering, component structure |
| Zustand | Lightweight global state management |
| TailwindCSS | Fast and consistent styling |
|Lucide-react | Icons|
|Custom Hooks | Search filtering & memoized computations|


# 📦 Installation & Setup

Follow these steps to get the project running locally.
## 1️⃣ Clone the Repository
```
git clone <your-repo-url>
cd <project-folder>
```
## 2️⃣ Install Dependencies

This project uses Vite + React, so run:
```
npm install
```
or
```
yarn install
```
## 3️⃣ Start the Development Server
```
npm run dev
```
You should see output like:
```
VITE v5.x.x ready in 400ms
Local: http://localhost:5173/

Open that URL in the browser.
```

# 🧱 Project Structure
```
src/
├─ assets/
├─ components/
│ ├─ Header.jsx
│ ├─ Sidebar.jsx
│ ├─ ContentArea.jsx
│ └─ Chatbot.jsx
├─ data/
│ ├─ app.json
│ └─ document.json
├─ hooks/
│ └─ useFilteredContent.jsx
├─ store/
│ ├─ useChatStore.js
│ └─ useUIStore.js
├─ App.jsx
├─ main.jsx
└─ index.css
```
## Components Overview

* Header – global search and mobile menu
* Sidebar – navigation between “App” and “Documents” pages
* ContentArea – displays paragraphs + highlight logic
* Chatbot – floating widget with timer and message history

# 🧩 Key Development Decisions
## ✔ Zustand instead of Redux

* Much simpler API
* No boilerplate
* Fine-grained updates (better performance)
* Perfect for small–medium apps

## ✔ TailwindCSS for Styling

* Faster iteration
* Responsive classes built-in
* Avoids maintaining many CSS files

## ✔ Split UI Store and Chat Store
Two Zustand slices keep the logic clean:
* UI actions (sidebar, search term, current page)
* Chat actions (messages, timer, chatbot state)
This separation mirrors real production setups.

# 🔎 How Search & Highlighting Works

```useFilteredContent```:

1. Normalizes search term
2. Filters paragraphs that contain the term
3. Uses regex to split + wrap matches with <span>
4. Memoizes result for performance

This ensures:
* fast filtering
* highlighted text updates instantly
* no repeated computation on each render

# 💬 How the Chatbot Works

* Opens via floating button
* Starts a timer using startTimer() in the Zustand store
* Displays messages from the store
* Sends user messages → bot responds after delay
* Reset clears messages + timer
* Close stops timer and hides the chat window
Timer logic uses ```setInterval``` stored in Zustand.
