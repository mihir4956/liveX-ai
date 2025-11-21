import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chatbot from "./components/Chatbot";
import ContentArea from "./components/ContentArea";
import { useUIStore } from "./store/useUIStore";

import appData from "./data/app.json";
import documentData from "./data/document.json";

function App() {
  const currentPage = useUIStore((s) => s.currentPage);
  const searchTerm = useUIStore((s) => s.searchTerm);

  const pageContentMap = {
    app: appData,
    documents: documentData,
  };

  const content = pageContentMap[currentPage];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-6 overflow-y-auto flex-1">
          <ContentArea content={content} searchTerm={searchTerm} />
        </main>
        <Chatbot />
      </div>
    </div>
  );
}

export default App;
