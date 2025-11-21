import { useMemo } from "react";

export function useFilteredContent(paragraphs = [], searchTerm = "") {
  const normalizedTerm = searchTerm.trim().toLowerCase();

  // Highlight matching text inside a paragraph
  const highlightText = (text) => {
    if (!normalizedTerm) return text;

    const regex = new RegExp(`(${normalizedTerm})`, "gi");

    return text.split(regex).map((part, i) =>
      regex.test(part) ? (
        <span key={i} className="bg-yellow-300 font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  // Memoized filtering & highlighting
  const filtered = useMemo(() => {
    if (!normalizedTerm) {
      return paragraphs.map((p) => ({
        original: p,
        highlighted: highlightText(p),
      }));
    }

    return paragraphs
      .filter((p) => p.toLowerCase().includes(normalizedTerm))
      .map((p) => ({
        original: p,
        highlighted: highlightText(p),
      }));
  }, [paragraphs, normalizedTerm]);

  return filtered;
}
