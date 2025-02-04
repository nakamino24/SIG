export default function Filters({ data, setFilteredData }) {
  const handleFilter = (filterType, value) => {
    let filtered = [...data];

    if (filterType === "status") {
      filtered = value
        ? filtered.filter((item) =>
            value === "approved" ? item.status === 1 : item.status === 0,
          )
        : data;
    } else if (filterType === "attachment") {
      filtered = value
        ? filtered.filter((item) =>
            value === "ada" ? item.attachment === 1 : item.attachment === 0,
          )
        : data;
    } else if (filterType === "type") {
      filtered = value ? filtered.filter((item) => item.type === value) : data;
    } else if (filterType === "discount") {
      filtered = value
        ? filtered.filter((item) =>
            value === "ada" ? item.discount > 0 : item.discount === 0,
          )
        : data;
    }

    setFilteredData(filtered);
  };

  return (
    <div className="flex flex-col space-y-4 p-4">
      {/* Filter Status */}
      <div>
        <label className="block text-sm font-medium">Status</label>
        <select
          onChange={(e) => handleFilter("status", e.target.value)}
          className="rounded border p-2"
        >
          <option value="">Semua</option>
          <option value="approved">Approved</option>
          <option value="unapproved">Unapproved</option>
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
          <option value="ada">Ada</option>
          <option value="tidak">Tidak Ada</option>
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
          <option value="Food & Beverage">Food & Beverage</option>
          <option value="Pharmaceuticals">Pharmaceuticals</option>
          <option value="Traditional Medicine & Supplement">
            Traditional Medicine & Supplement
          </option>
          <option value="Beauty, Cosmetics & Personal Care">
            Beauty, Cosmetics & Personal Care
          </option>
          <option value="Media RTU">Media RTU</option>
          <option value="K3 Products">K3 Products</option>
          <option value="ALKES & PKRT">ALKES & PKRT</option>
          <option value="Feed, Pesticides & PSAT">
            Feed, Pesticides & PSAT
          </option>
          <option value="Others">Others</option>
          <option value="Research / Academic Purpose">
            Research / Academic Purpose
          </option>
          <option value="Dioxine Udara">Dioxine Udara</option>
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
