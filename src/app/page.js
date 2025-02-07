"use client";
import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { fetchData } from "../utils/fetchData";
import DataTable from "../components/DataTable/DataTable";
import Filters from "../components/Filters";
import ModalPopup from "../components/ModalPopup";
import Pagination from "../components/Pagination";

export default function Home({ searchParams }) {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [popup, setPopup] = useState({ show: false, discount: 0 });

  const itemsPerPage = 100;
  const currentPage = Number(searchParams.page) || 1; // Gunakan query params dari server

  // Fetch data dari API
  useEffect(() => {
    const email = "youremail";
    fetchData(email).then((result) => {
      setData(result);
    });
  }, []);

  const transformedData = useMemo(() => data, [data]);

  useEffect(() => {
    setFilteredData(transformedData);
  }, [transformedData]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage]);

  useEffect(() => {
    const discountItem = paginatedData.find((item) => item.discount > 1_000_000);

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

  const handlePageChange = (newPage) => {
    router.push(`?page=${newPage}`); // Mengubah URL sesuai page baru
  };

  return (
    <div className="overflow">
      {/* Filters */}
      <Filters data={data} setFilteredData={setFilteredData} />

      {/* Data Table */}
      <DataTable data={paginatedData} />

      {/* Modal Popup */}
      <ModalPopup
        show={popup.show}
        discount={popup.discount}
        onClose={() => setPopup({ show: false, discount: 0 })}
      />

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
