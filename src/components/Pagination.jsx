import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="mt-4 flex items-center justify-center space-x-4">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`rounded px-4 py-2 ${currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"}`}
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`rounded px-4 py-2 ${currentPage === totalPages ? "bg-gray-300" : "bg-blue-500 text-white"}`}
      >
        Next
      </button>
    </div>
  );
}
