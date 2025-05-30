import { CalendarPlus, ClipboardList } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const plannedTrainings = [] // später von einer echten Datenquelle ersetzen

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Deine geplanten Trainings</h2>

      {plannedTrainings.length === 0 ? (
        <div className="text-center bg-white border border-yellow-200 p-10 rounded-xl">
          <ClipboardList className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
          <p className="text-lg text-gray-600 mb-6">Du hast noch keine Trainings erstellt.</p>
          <Link
            to="/create"
            className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-yellow-600 transition"
          >
            Jetzt Training erstellen
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {plannedTrainings.map((training, index) => (
            <TrainingCard key={index} training={training} />
          ))}
        </div>
      )}
    </div>
  )
}

function TrainingCard({ training }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-2">{training.title}</h3>
      <p className="text-gray-500 text-sm mb-2">{training.date}</p>
      <p className="text-gray-600">{training.summary}</p>
    </div>
  )
}
