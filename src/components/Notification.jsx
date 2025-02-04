import React, { useEffect } from "react";

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

  if (notif?.state === 4) {
    const msg = Object.values(notif.msg);
    if (msg.length > 0) {
      return (
        <div
          className={`${
            !notif.view && "hidden"
          } ${className} text-plt-black mb-5 flex items-center rounded-xl border-4 border-dashed border-red-800 bg-red-200 p-5 text-3xl font-bold`}
        >
          <div className="flex-auto">
            <span>Errors :</span>
            <ul>
              {msg.map((val, i) => {
                return (
                  <li key={i}>
                    {i + 1}. {val}
                  </li>
                );
              })}
            </ul>
          </div>
          <button
            type="submit"
            onClick={() => {
              setNotif({
                view: false,
                msg: "",
                state: 0,
              });
            }}
          >
            <BsXLg className="text-2xl" />
          </button>
        </div>
      );
    }
  } else {
    return (
      <div
        className={`${
          !notif.view && "hidden"
        } text-plt-black flex rounded-xl border-4 border-dashed font-bold ${
          notif?.state === 1
            ? "border-yellow-800 bg-yellow-200 px-5 py-1"
            : notif?.state === 2
              ? "border-green-800 bg-green-200 p-5"
              : "border-red-800 bg-red-200 p-5"
        } ${className} mb-5 items-center text-3xl`}
      >
        {notif.state === 1 && (
          <img src={loading} alt="loading" className="w-14" />
        )}
        {notif.state === 2 && <BsCheck className="text-4xl" />}
        <div className="flex-auto text-3xl md:text-lg">{notif.msg}</div>
        {notif.useCloseButton !== false ? (
          <button
            type="button"
            onClick={() => {
              setNotif({
                view: false,
                msg: "",
                state: 0,
              });
            }}
          >
            <BsXLg className="text-2xl" />
          </button>
        ) : (
          ""
        )}
      </div>
    );
  }
}
