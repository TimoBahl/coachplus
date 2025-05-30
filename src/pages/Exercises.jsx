import exercises from '../data/exercises'
import { Dumbbell, Target, Brain } from 'lucide-react'

export default function Exercises() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Übungsbibliothek</h2>

      {/* Grid of Exercises */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {exercises.map((ex, idx) => (
          <ExerciseCard key={idx} title={ex.title} category={ex.category} description={ex.description} />
        ))}
      </div>
    </div>
  )
}

function ExerciseCard({ title, category, description }) {
  const icon = getIconForCategory(category)

  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <span className="text-sm text-yellow-600 font-semibold uppercase tracking-wide">{category}</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  )
}

function getIconForCategory(category) {
  const baseClass = 'w-5 h-5 text-yellow-500'
  switch (category.toLowerCase()) {
    case 'technik':
      return <Dumbbell className={baseClass} />
    case 'taktik':
      return <Brain className={baseClass} />
    case 'kondition':
      return <Target className={baseClass} />
    default:
      return <Dumbbell className={baseClass} />
  }
}

