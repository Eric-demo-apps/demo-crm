import { useEffect, useState } from 'react'
import type { Client } from '../store/useClientStore'

type Props = {
  mode: 'add' | 'edit'
  initialData?: Client
  onClose: () => void
  onSubmit: (client: Client) => void
}

export default function ClientFormModal({
  mode,
  initialData,
  onClose,
  onSubmit,
}: Props) {
  const [form, setForm] = useState<Client>({
    id: '',
    nom: '',
    entreprise: '',
    téléphone: '',
    email: '',
    statut: 'Prospect',
  })

  useEffect(() => {
    if (initialData) {
      setForm(initialData)
    }
  }, [initialData])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(form)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full space-y-4">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl text-gray-500 hover:text-black"
        >
          ×
        </button>

        <h2 className="text-2xl font-semibold mb-4">
          {mode === 'edit' ? 'Modifier le client' : 'Ajouter un client'}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            name="nom"
            value={form.nom}
            onChange={handleChange}
            placeholder="Nom"
            className="w-full border p-2 rounded"
            required
          />
          <input
            name="entreprise"
            value={form.entreprise}
            onChange={handleChange}
            placeholder="Entreprise"
            className="w-full border p-2 rounded"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
            className="w-full border p-2 rounded"
          />
          <input
            name="téléphone"
            value={form.téléphone}
            onChange={handleChange}
            placeholder="Téléphone"
            className="w-full border p-2 rounded"
          />
          <select
            name="statut"
            value={form.statut}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="Prospect">Prospect</option>
            <option value="Actif">Actif</option>
            <option value="Inactif">Inactif</option>
          </select>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              {mode === 'edit' ? 'Mettre à jour' : 'Ajouter'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
