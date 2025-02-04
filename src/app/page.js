"use client";

import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import DataTable from "../components/DataTable/DataTable";
import Filters from "../components/Filters";
import Popup from "../components/Popup";

export default function Home() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [popup, setPopup] = useState({ show: false, message: "" });

  useEffect(() => {
    const email = "youremail"; 
    fetchData(email).then((result) => {
      setData(result);
      setFilteredData(result);
    });
  }, []);

  return (
    <div className="p-4">
      <Filters data={data} setFilteredData={setFilteredData} />
      <DataTable data={filteredData} />
      <Popup
        show={popup.show}
        message={popup.message}
        onClose={() => setPopup({ show: false, message: "" })}
      />
    </div>
  );
}
