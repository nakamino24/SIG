"use client";

import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import DataTable from "../components/DataTable/DataTable";
import Filters from "../components/Filters";
import Popup from "../components/Popup";
import Pagination from "../components/Pagination";

export default function Home() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [popup, setPopup] = useState({ show: false, message: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 100;

  useEffect(() => {
    const email = "youremail";
    fetchData(email).then((result) => {
      setData(result);
      setFilteredData(result);
    });
  }, []);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-4">
      <Filters data={data} setFilteredData={setFilteredData} />
      <DataTable data={paginatedData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <Popup
        show={popup.show}
        message={popup.message}
        onClose={() => setPopup({ show: false, message: "" })}
      />
    </div>
  );
}
