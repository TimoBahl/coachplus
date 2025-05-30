import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // ⛔ Fake-Login für Demo (später ersetzen mit echter Authentifizierung)
    if (email && password) {
      // Redirect z.B. zum Dashboard
      navigate('/dashboard')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-yellow-500">Coach+  <span className="text-black">Login</span></h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Passwort</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            Einloggen
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Noch kein Konto? <span className="text-yellow-600 font-medium cursor-pointer">Registrieren</span>
        </p>
      </div>
    </div>
  )
}
