import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/header";

interface Order {
  id: string;
  status: "IN PROGRESS" | "COMPLETED" | "CANCELED";
  date: string;
  total: number;
  products: number;
}

// Exemplo de dados
const orders: Order[] = [
  { id: "#96459761", status: "IN PROGRESS", date: "Dec 30, 2019 07:52", total: 80,  products: 5 },
  { id: "#71667167", status: "COMPLETED",   date: "Dec 7, 2019 23:26",  total: 70,  products: 4 },
  { id: "#95214362", status: "CANCELED",    date: "Dec 7, 2019 23:26",  total: 2300,products: 2 },
];

export default function OrderHistory() {
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const totalPages = Math.ceil(orders.length / pageSize);
  const sliceStart = (page - 1) * pageSize;
  const currentOrders = orders.slice(sliceStart, sliceStart + pageSize);

  const statusColor = {
    "IN PROGRESS": "text-orange-500",
    COMPLETED:    "text-green-500",
    CANCELED:     "text-red-500",
  } as const;

  return (
    <>
      <Header />

      <div className="flex justify-center py-10 px-4 bg-gray-50 min-h-screen">
        <div className="w-full max-w-[1200px] bg-white rounded-md shadow overflow-x-auto">
          <h1 className="px-6 py-4 font-semibold text-xl text-[#151B3F] border-b">ORDER HISTORY</h1>
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100 text-gray-600 text-left text-sm uppercase">
              <tr>
                <th className="px-6 py-3">ORDER ID</th>
                <th className="px-6 py-3">STATUS</th>
                <th className="px-6 py-3">DATE</th>
                <th className="px-6 py-3">TOTAL</th>
                <th className="px-6 py-3">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.map((o) => (
                <tr key={o.id} className="border-b last:border-none">
                  <td className="px-6 py-4 text-sm text-gray-700">{o.id}</td>
                  <td className={`px-6 py-4 font-medium ${statusColor[o.status]}`}>
                    {o.status}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{o.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    ${o.total.toLocaleString()} ({o.products} Products)
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <Link
                      to={`/orders/${o.id.replace("#", "")}`}
                      className="text-blue-500 hover:underline flex items-center gap-1"
                    >
                      View Details →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex items-center justify-center space-x-3 py-4">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="p-2 rounded-full bg-white border hover:bg-gray-100 transition disabled:opacity-50"
            >
              ←
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                  page === i + 1
                    ? "bg-[#FA8232] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                } transition`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="p-2 rounded-full bg-white border hover:bg-gray-100 transition disabled:opacity-50"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}