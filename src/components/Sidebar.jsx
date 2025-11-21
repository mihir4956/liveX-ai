import { X } from "lucide-react";
import { useUIStore } from "../store/useUIStore";

export default function Sidebar() {
  const sideOpen = useUIStore((s) => s.sideOpen);
  const setSideOpen = useUIStore((s) => s.setSideOpen);
  const currentPage = useUIStore((s) => s.currentPage);
  const setCurrentPage = useUIStore((s) => s.setCurrentPage);

  return (
    <>
      {sideOpen && (
        <div
          className="fixed inset-0 bg-black/30 sm:hidden"
          onClick={() => setSideOpen(false)}
        />
      )}

      <aside
        className={`
          fixed left-0 
          top-[64px]
          h-[calc(100%-64px)]
          w-60 bg-white border-r p-6
          transform transition-transform duration-200
          ${sideOpen ? "translate-x-0" : "-translate-x-full"}
          sm:top-0 sm:h-full sm:translate-x-0 sm:static
          z-40
        `}
      >
        <div className="sm:hidden flex justify-end mb-4">
          <button onClick={() => setSideOpen(false)}>
            <X size={22} />
          </button>
        </div>

        <nav className="space-y-4 mt-6">
          <button
            onClick={() => {
              setCurrentPage("app");
              setSideOpen(false);
            }}
            className={`block w-full text-left px-2 py-2 rounded font-medium ${
              currentPage === "app"
                ? "bg-gray-200 text-black"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            App
          </button>

          <button
            onClick={() => {
              setCurrentPage("documents");
              setSideOpen(false);
            }}
            className={`block w-full text-left px-2 py-2 rounded font-medium ${
              currentPage === "documents"
                ? "bg-gray-200 text-black"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Documents
          </button>
        </nav>
      </aside>
    </>
  );
}
