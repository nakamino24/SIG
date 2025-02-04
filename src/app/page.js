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
    const email = "yourmail"; 
    fetchData(email).then((result) => {
      setData(result);
      setFilteredData(result);
    });
  }, []);

  useEffect(() => {
    filteredData.forEach((item) => {
      if (item.discount > 0 && item.discount < 1000000) {
        setPopup({ show: true, message: "Discount available" });
      } else if (item.discount >= 1000000) {
        setPopup({ show: true, message: "Approval needed for high discount" });
      }
    });
  }, [filteredData]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="grid md:grid-cols-4 gap-4 p-4">
      {/* Filters di sisi kiri */}
      <Filters className="col-span-1" data={data} setFilteredData={setFilteredData} />

      {/* DataTable di sisi kanan */}
      <div className="col-span-3">
        <DataTable data={paginatedData} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

      {/* Popup */}
      <Popup
        show={popup.show}
        message={popup.message}
        onClose={() => setPopup({ show: false, message: "" })}
      />
    </div>
  );
}
