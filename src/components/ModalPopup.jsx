import React from "react";

export default function ModalPopup({ show, discount, onClose }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-white shadow-lg">
        <div className="p-6 text-center">
          <h3 className="mb-4 text-xl font-semibold text-gray-800">
            {discount > 1_000_000 ? "Approval Needed" : "Discount Applied"}
          </h3>
          <p className="text-lg text-gray-600">
            Discount: {discount.toLocaleString()}
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={onClose}
              className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600 focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
