import { create } from 'zustand'

export type Client = {
  id: string
  nom: string
  entreprise: string
  téléphone: string
  email: string
  statut: 'Prospect' | 'Actif' | 'Inactif'
}

type ClientStore = {
  clients: Client[]
  addClient: (client: Client) => void
  updateClient: (client: Client) => void
  deleteClient: (id: string) => void
}

export const useClientStore = create<ClientStore>((set) => ({
  clients: [],

  addClient: (client) =>
    set((state) => ({
      clients: [...state.clients, client],
    })),

  updateClient: (updatedClient) =>
    set((state) => ({
      clients: state.clients.map((client) =>
        client.id === updatedClient.id ? updatedClient : client
      ),
    })),

  deleteClient: (id) =>
    set((state) => ({
      clients: state.clients.filter((client) => client.id !== id),
    })),
}))
