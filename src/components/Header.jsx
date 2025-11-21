import { Search, Menu } from "lucide-react";
import { useState } from "react";
import { useUIStore } from "../store/useUIStore";
import logo from "../assets/chatbot.png";

export default function Header() {
  const setSideOpen = useUIStore((s) => s.setSideOpen);
  const setSearchTerm = useUIStore((s) => s.setSearchTerm);

  const [query, setQuery] = useState("");

  const handleInput = (e) => {
    setQuery(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <header className="bg-white border-b shadow-sm relative z-50">
      <div className="flex flex-col w-full px-4 py-3 gap-3 relative">
        <div className="flex items-center h-12 w-full">
          <button
            className="sm:hidden mr-4 p-2 rounded-md border"
            onClick={() => setSideOpen(true)}
          >
            <Menu size={20} />
          </button>

          <img src={logo} alt="Logo" className="h-14 mr-auto" />

          <div className="hidden sm:block relative w-72">
            <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={query}
              placeholder="Search..."
              onChange={handleInput}
              className="w-full rounded-full border px-10 py-2"
            />
          </div>
        </div>

        <div className="sm:hidden relative w-full max-w-full overflow-hidden">
          <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
          <input
            type="text"
            value={query}
            placeholder="Search..."
            onChange={handleInput}
            className="w-full rounded-full border px-10 py-2"
          />
        </div>
      </div>
    </header>
  );
}
