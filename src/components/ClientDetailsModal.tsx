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
          <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-blue-600 shadow-sm">
            <p className="text-gray-500 text-xs font-semibold uppercase">Nom</p>
            <p className="text-gray-800 font-medium text-base">{client.nom}</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-purple-600 shadow-sm">
            <p className="text-gray-500 text-xs font-semibold uppercase">
              Entreprise
            </p>
            <p className="text-gray-800 font-medium">
              {client.entreprise || '—'}
            </p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-indigo-600 shadow-sm">
            <p className="text-gray-500 text-xs font-semibold uppercase">
              Téléphone
            </p>
            <p className="text-gray-800 font-medium">{client.téléphone}</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-indigo-600 shadow-sm">
            <p className="text-gray-500 text-xs font-semibold uppercase">
              Email
            </p>
            <p className="text-gray-800 font-medium">{client.email}</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-gray-600 shadow-sm flex items-center justify-between">
            <p className="text-gray-500 text-xs font-semibold uppercase">
              Statut
            </p>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
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
