import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Exercises from './pages/Exercises'
import CreateTraining from './pages/CreateTraining'
import Login from './pages/Login'

function App() {
  return (
    <div className="min-h-screen bg-neutral-200">
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/create" element={<CreateTraining />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
