export default function DataTable({ data }) {
  return (
    <table className="w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border px-4 py-2">Type</th>
          <th className="border px-4 py-2">Status</th>
          <th className="border px-4 py-2">Attachment</th>
          <th className="border px-4 py-2">Discount</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{item.type}</td>
            <td className="border px-4 py-2">
              {item.status ? "Approved" : "Unapproved"}
            </td>
            <td className="border px-4 py-2">
              {item.attachment ? "Ada" : "Tidak Ada"}
            </td>
            <td className="border px-4 py-2">{item.discount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
