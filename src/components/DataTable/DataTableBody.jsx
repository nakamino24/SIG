export default function DataTableBody({ data = [], page = 0, take = 100 }) {
  return (
    <tbody className="text-gray-700">
      {data.slice(page * take, (page + 1) * take).map((item, idx) => (
        <tr
          key={item.id}
          className="border-t transition-colors hover:bg-gray-100"
        >
          <td className="p-2 text-center">{page * take + idx + 1}</td>
          <td className="p-2">{item.type || "Unknown"}</td>
          <td className="p-2">{item.status ? "Approved" : "Unapproved"}</td>
          <td className="p-2">{item.attachment ? "Ada" : "Tidak Ada"}</td>
          <td className="p-2 text-right">{item.discount.toLocaleString()}</td>
        </tr>
      ))}
    </tbody>
  );
}
