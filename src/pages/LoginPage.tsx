import { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'
import { useNavigate } from 'react-router-dom'
import { UsersRound } from 'lucide-react'

export default function LoginPage() {
  const login = useAuthStore((state) => state.login)
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const success = login(email, password)
    if (success) {
      navigate('/dashboard')
    } else {
      setError('Identifiants invalides')
    }
  }

  return (
    <div className="bg-[#121722] flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="flex justify-center items-center mb-6 text-3xl font-semibold text-gray-900 dark:text-white">
        <UsersRound
          color="#9c7afa"
          size={42}
        />
        <h1 className="ml-2">Demo CRM</h1>
      </div>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 mb-4">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <p className="text-sm text-center leading-tight tracking-tight text-gray-900 md:text-md dark:text-white">
            Utilisez le login et mot de passe ci-dessous
            <br /> pour vous connecter
          </p>
          <form
            className="space-y-4 md:space-y-6"
            action="#"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Mot de passe"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <hr className="my-8 border-t border-gray-700" />
            <button
              type="submit"
              className="w-full text-white bg-violet-400 rounded-sm py-2 cursor-pointer hover:bg-primary-700"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
      <p className="text-white text-sm">Login: demo@example.cm</p>
      <p className="text-white text-sm">mot de passe: 123456</p>
    </div>

    // <div className="h-screen flex items-center justify-center bg-gray-100">
    // <form
    //     onSubmit={handleSubmit}
    //     className="bg-white p-6 rounded shadow w-full max-w-sm space-y-4"
    //   >
    //     <h1 className="text-xl font-bold">Connexion</h1>
    //     {error && <p className="text-red-600">{error}</p>}
    //     <input
    //       className="w-full border p-2 rounded"
    //       placeholder="Email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <input
    //       className="w-full border p-2 rounded"
    //       placeholder="Mot de passe"
    //       type="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <button className="w-full bg-blue-600 text-white py-2 rounded">
    //       Se connecter
    //     </button>
    //   </form>
    // </div>
  )
}
