export default function AttendanceTable({
  records,
}) {
  return (
    <table className="w-full bg-white shadow-md rounded-lg">

      <thead>
        <tr className="bg-black text-white">

          <th className="p-4">
            Name
          </th>

          <th className="p-4">
            Check In
          </th>

          <th className="p-4">
            Status
          </th>
        </tr>
      </thead>

      <tbody>
        {records.map((record) => (
          <tr
            key={record.id}
            className="text-center border-b"
          >
            <td className="p-4">
              {record.name}
            </td>

            <td className="p-4">
              {record.check_in}
            </td>

            <td className="p-4">
              {record.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}