import DataTableHead from "./DataTableHead";
import DataTableBody from "./DataTableBody";

export default function DataTable({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-fixed border-collapse border border-gray-300 shadow-lg">
        {/* Header */}
        <DataTableHead />

        {/* Body */}
        <DataTableBody data={data} />
      </table>
    </div>
  );
}
