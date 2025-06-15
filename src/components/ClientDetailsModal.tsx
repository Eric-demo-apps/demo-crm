import type { Client } from '../store/useClientStore'

type Props = {
  client: Client
  onClose: () => void
}

export default function ClientDetailsModal({ client, onClose }: Props) {
  if (!client) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
        >
          ×
        </button>

        <h2 className="text-2xl font-semibold mb-4">Détails du client</h2>

        <div className="grid gap-4 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500 font-medium">Nom</span>
            <span className="text-gray-800">{client.nom}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 font-medium">Entreprise</span>
            <span className="text-gray-800">{client.entreprise || '—'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 font-medium">Téléphone</span>
            <span className="text-gray-800">{client.téléphone}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 font-medium">Email</span>
            <span className="text-gray-800">{client.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 font-medium">Statut</span>
            <span
              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                client.statut === 'Actif'
                  ? 'bg-green-100 text-green-800'
                  : client.statut === 'Inactif'
                  ? 'bg-gray-200 text-gray-700'
                  : 'bg-yellow-100 text-yellow-800'
              }`}
            >
              {client.statut}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
