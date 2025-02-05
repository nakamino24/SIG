"use client";

import clsx from "clsx";
import Link from "next/link";
import { generatePagination } from "@/utils/generatePagination";
import { usePathname, useSearchParams } from "next/navigation";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function Pagination({ totalPages }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const pages = generatePagination(currentPage, totalPages);

  return (
    <div className="mt-4 flex items-center justify-center gap-2">
      {/* Previous Button */}
      <Link
        href={createPageURL(currentPage - 1)}
        className={clsx(
          "flex items-center rounded px-3 py-2 text-sm",
          currentPage === 1
            ? "cursor-not-allowed bg-gray-300"
            : "bg-blue-500 text-white hover:bg-blue-600",
        )}
      >
        <BsArrowLeft className="h-4 w-4" />
      </Link>

      {/* Page Numbers */}
      {pages.map((page, idx) =>
        page === "..." ? (
          <span key={`ellipsis-${idx}`} className="px-3 py-2 text-sm">
            ...
          </span>
        ) : (
          <Link
            key={`page-${page}`}
            href={createPageURL(page)}
            className={`flex items-center rounded px-3 py-2 text-sm ${
              currentPage === page
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {page}
          </Link>
        ),
      )}

      {/* Next Button */}
      <Link
        href={createPageURL(currentPage + 1)}
        className={clsx(
          "flex items-center rounded px-3 py-2 text-sm",
          currentPage === totalPages
            ? "cursor-not-allowed bg-gray-300"
            : "bg-blue-500 text-white hover:bg-blue-600",
        )}
      >
        <BsArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
