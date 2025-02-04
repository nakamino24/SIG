export default function Filters({ data, setFilteredData }) {
  const handleFilter = (filterType, value) => {
    let filtered = data;
    if (filterType === "status") {
      filtered = data.filter((item) =>
        value === "approved" ? item.status === 1 : item.status === 0,
      );
    } else if (filterType === "attachment") {
      filtered = data.filter((item) =>
        value === "ada" ? item.attachment === 1 : item.attachment === 0,
      );
    }
    setFilteredData(filtered);
  };

  return (
    <div className="flex space-x-4 p-4">
      <button onClick={() => handleFilter("status", "approved")}>
        Approved
      </button>
      <button onClick={() => handleFilter("status", "unapproved")}>
        Unapproved
      </button>
      <button onClick={() => handleFilter("attachment", "ada")}>
        Ada Attachment
      </button>
      <button onClick={() => handleFilter("attachment", "tidak")}>
        Tidak Ada Attachment
      </button>
    </div>
  );
}
