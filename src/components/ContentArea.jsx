import React from "react";
import { useFilteredContent } from "../hooks/useFilteredContent";

export default function ContentArea({ content, searchTerm }) {
  const paragraphs = content.paragraphs || [];
  const filteredContent = useFilteredContent(paragraphs, searchTerm);

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">{content.title}</h1>

      {filteredContent.length === 0 ? (
        <p className="text-gray-500 italic">No results found.</p>
      ) : (
        filteredContent.map((item, i) => (
          <p key={i} className="text-gray-700 leading-relaxed mb-4">
            {item.highlighted}
          </p>
        ))
      )}
    </div>
  );
}
