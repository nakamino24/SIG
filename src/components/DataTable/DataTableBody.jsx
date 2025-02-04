export default function DataTableBody({ data }) {
  return (
    <tbody>
      {data.length > 0 ? (
        data.map((item, index) => (
          <tr
            key={index}
            className={`${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            } hover:bg-blue-100`}
          >
            <td className="border border-gray-300 px-4 py-2">{item.type}</td>
            <td className="border border-gray-300 px-4 py-2">
              {item.status ? "Approved" : "Unapproved"}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {item.attachment ? "Ada" : "Tidak Ada"}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {item.discount}
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td
            colSpan={4}
            className="border border-gray-300 px-4 py-2 text-center text-gray-500"
          >
            Tidak ada data.
          </td>
        </tr>
      )}
    </tbody>
  );
}
