import React from "react";

export default function ModalPopup({ show, discount, onClose }) {
  if (!show) return null; // Jika tidak perlu tampil, return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="w-96 rounded-md border bg-white p-6 shadow-lg">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900">
            {discount > 1_000_000 ? "Approval Needed" : "Discount Applied"}
          </h3>
          <div className="mt-2 px-4 py-3">
            <p className="text-lg text-gray-500">
              Discount: {discount.toLocaleString()}
            </p>
          </div>
          <div className="mt-4 flex justify-center">
            <button
              onClick={onClose}
              className="rounded-md bg-blue-500 px-4 py-2 text-white shadow-sm hover:bg-blue-700 focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
