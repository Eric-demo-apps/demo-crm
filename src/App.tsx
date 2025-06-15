import { useState } from 'react'
import { useClientStore } from './store/useClientStore'
import type { Client } from './store/useClientStore'
import ClientTable from './components/ClientTable'
import ClientFormModal from './components/ClientFormModal'
import ClientDetailsModal from './components/ClientDetailsModal'

function App() {
  const addClient = useClientStore((state) => state.addClient)
  const updateClient = useClientStore((state) => state.updateClient)

  const [showFormModal, setShowFormModal] = useState(false)
  const [editClient, setEditClient] = useState<Client | null>(null)
  const [viewClient, setViewClient] = useState<Client | null>(null)

  const handleAddClick = () => {
    setEditClient(null)
    setShowFormModal(true)
  }

  const handleFormSubmit = (client: Client) => {
    if (editClient) {
      updateClient(client)
    } else {
      addClient({ ...client, id: crypto.randomUUID() })
    }
    setShowFormModal(false)
    setEditClient(null)
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 shadow">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Mini CRM</h1>
          <button
            onClick={handleAddClick}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Ajouter un client
          </button>
        </div>

        <ClientTable
          onEdit={(client) => {
            setEditClient(client)
            setShowFormModal(true)
          }}
          onView={(client) => setViewClient(client)}
        />
      </div>

      {showFormModal && (
        <ClientFormModal
          mode={editClient ? 'edit' : 'add'}
          initialData={editClient || undefined}
          onClose={() => {
            setShowFormModal(false)
            setEditClient(null)
          }}
          onSubmit={handleFormSubmit}
        />
      )}

      {viewClient && (
        <ClientDetailsModal
          client={viewClient}
          onClose={() => setViewClient(null)}
        />
      )}
    </div>
  )
}

export default App
