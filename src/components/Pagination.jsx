import React, { useEffect } from "react";
import { BsXLg, BsCheck } from "react-icons/bs";
import loading from "../assets/loading.gif";

export default function Notification({
  notif = {},
  setNotif = () => {},
  timeOut = 3000,
  className = "",
}) {
  useEffect(() => {
    let notifSet;

    if (notif?.useTimeOut === undefined || notif?.useTimeOut === true) {
      notifSet = setTimeout(() => {
        setNotif({
          view: false,
          msg: "",
          state: 0,
        });
      }, timeOut);
    }

    return () => {
      if (notif?.useTimeOut === undefined || notif?.useTimeOut === true) {
        clearTimeout(notifSet);
      }
    };
  }, [notif]);

  if (!notif.view) return null;

  const notificationStyle =
    notif?.state === 1
      ? "border-yellow-800 bg-yellow-100 text-yellow-700"
      : notif?.state === 2
        ? "border-green-800 bg-green-100 text-green-700"
        : "border-red-800 bg-red-100 text-red-700";

  const icon =
    notif?.state === 1 ? (
      <img src={loading} alt="loading" className="h-6 w-6" />
    ) : notif?.state === 2 ? (
      <BsCheck className="text-lg" />
    ) : (
      <BsXLg className="text-lg" />
    );

  return (
    <div
      className={`fixed left-1/2 top-4 z-50 flex -translate-x-1/2 transform items-center gap-4 rounded-lg border p-4 shadow-lg ${notificationStyle} ${className}`}
    >
      {/* Icon Status */}
      <div>{icon}</div>

      {/* Pesan */}
      <div className="text-sm font-medium">{notif.msg}</div>

      {/* Tombol Tutup */}
      {notif.useCloseButton !== false && (
        <button
          type="button"
          onClick={() => {
            setNotif({
              view: false,
              msg: "",
              state: 0,
            });
          }}
          className="ml-auto text-sm text-gray-700 hover:text-gray-900"
        >
          <BsXLg />
        </button>
      )}
    </div>
  );
}
