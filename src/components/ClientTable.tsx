import { useState } from 'react'
import { useClientStore } from '../store/useClientStore'
import type { Client } from '../store/useClientStore'

type Props = {
  onEdit: (client: Client) => void
  onView: (client: Client) => void
}

export default function ClientTable({ onEdit, onView }: Props) {
  const clients = useClientStore(
    (state: { clients: Client[] }) => state.clients
  )
  const [openMenuId, setOpenMenuId] = useState<string | null>(null)

  return (
    <table className="w-full border border-gray-200 text-sm">
      <thead className="bg-gray-50 text-left">
        <tr>
          <th className="p-3">Nom</th>
          <th className="p-3">Entreprise</th>
          <th className="p-3">Téléphone</th>
          <th className="p-3">Statut</th>
          <th className="p-3 text-right">Actions</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client) => (
          <tr
            key={client.id}
            className="border-t"
          >
            <td className="p-3">{client.nom}</td>
            <td className="p-3">{client.entreprise}</td>
            <td className="p-3">{client.téléphone}</td>
            <td className="p-3">{client.statut}</td>
            <td className="p-3 text-right relative">
              <button
                onClick={() =>
                  setOpenMenuId((prev) =>
                    prev === client.id ? null : client.id
                  )
                }
                className="p-1 hover:bg-gray-100 rounded"
              >
                <span className="text-lg leading-none">⋮</span>
              </button>

              {openMenuId === client.id && (
                <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow z-10">
                  <button
                    onClick={() => {
                      onView(client)
                      setOpenMenuId(null)
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Détails
                  </button>
                  <button
                    onClick={() => {
                      onEdit(client)
                      setOpenMenuId(null)
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Modifier
                  </button>
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
