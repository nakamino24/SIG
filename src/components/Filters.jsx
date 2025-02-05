import { typeReference } from "@/utils/typeReference";

export default function Filters({ data, setFilteredData }) {
  const handleFilter = (filterType, value) => {
    let filtered = [...data];

    switch (filterType) {
      case "status":
        filtered = value
          ? filtered.filter((item) => item.status === value)
          : data;
        break;
      case "attachment":
        filtered = value
          ? filtered.filter((item) => item.attachment === value)
          : data;
        break;
      case "type":
        filtered = value
          ? filtered.filter((item) => item.type === value)
          : data;
        break;
      case "discount":
        filtered = value
          ? filtered.filter((item) =>
              value === "ada" ? item.discount > 0 : item.discount === 0,
            )
          : data;
        break;
      default:
        break;
    }

    setFilteredData(filtered);
  };

  return (
    <div className="flex flex-wrap items-center gap-4 rounded-lg bg-gray-100 p-4">
      {/* Filter Status */}
      <div>
        <label className="block text-sm font-medium">Status</label>
        <select
          onChange={(e) => handleFilter("status", e.target.value)}
          className="rounded border p-2"
        >
          <option value="">Semua</option>
          <option value="Approved">Approved</option>
          <option value="Unapproved">Unapproved</option>
        </select>
      </div>

      {/* Filter Attachment */}
      <div>
        <label className="block text-sm font-medium">Attachment</label>
        <select
          onChange={(e) => handleFilter("attachment", e.target.value)}
          className="rounded border p-2"
        >
          <option value="">Semua</option>
          <option value="Ada">Ada</option>
          <option value="Tidak Ada">Tidak Ada</option>
        </select>
      </div>

      {/* Filter Type */}
      <div>
        <label className="block text-sm font-medium">Type</label>
        <select
          onChange={(e) => handleFilter("type", e.target.value)}
          className="rounded border p-2"
        >
          <option value="">Semua</option>
          {Object.values(typeReference).map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Filter Discount */}
      <div>
        <label className="block text-sm font-medium">Discount</label>
        <select
          onChange={(e) => handleFilter("discount", e.target.value)}
          className="rounded border p-2"
        >
          <option value="">Semua</option>
          <option value="ada">Ada</option>
          <option value="tidak">Tidak Ada</option>
        </select>
      </div>
    </div>
  );
}
