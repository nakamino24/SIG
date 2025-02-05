"use client";

import { useEffect, useState, useMemo } from "react";
import { fetchData } from "../utils/fetchData";
import DataTable from "../components/DataTable/DataTable";
import Filters from "../components/Filters";
import ModalPopup from "../components/ModalPopup";
import Pagination from "../components/Pagination";

export default function Home() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [popup, setPopup] = useState({ show: false, discount: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 100;

  useEffect(() => {
    const email = "youremail";
    fetchData(email).then((result) => {
      setData(result);
    });
  }, []);

  const transformedData = useMemo(() => data, [data]);

  useEffect(() => {
    setFilteredData(transformedData);
    setCurrentPage(1);
  }, [transformedData]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage]);

  useEffect(() => {
    const discountItem = paginatedData.find((item) => item.discount > 0);
    if (discountItem) {
      setPopup({
        show: true,
        discount: discountItem.discount,
      });
    } else {
      setPopup({ show: false, discount: 0 });
    }
  }, [paginatedData]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="p-4">
      <Filters data={data} setFilteredData={setFilteredData} />
      <DataTable data={paginatedData} />

      {/* <ModalPopup
        show={popup.show}
        discount={popup.discount}
        onClose={() => setPopup({ show: false, discount: 0 })}
      /> */}

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
}
