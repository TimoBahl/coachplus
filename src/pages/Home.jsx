import { Link } from 'react-router-dom'
import { TrafficCone, CalendarCheck, Brain } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-100 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-b from-yellow-400 to-yellow-500 text-white">
        <h1 className="text-5xl font-extrabold mb-6">Trainiere smarter mit <span className="text-black">Bolzer+</span></h1>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Die digitale Trainingsplanung für Fußballtrainer – finde passende Übungen, erstelle Einheiten und entwickle dein Team gezielt weiter.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/create"
            className="bg-black text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-gray-800 transition"
          >
            Training erstellen
          </Link>
          <Link
            to="/exercises"
            className="bg-white text-black px-6 py-3 rounded-xl text-lg font-semibold border hover:bg-gray-100 transition"
          >
            Übungen entdecken
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Was Bolzer+ dir bietet</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Feature
            icon={<TrafficCone className="w-10 h-10 text-yellow-500 mb-4 mx-auto" />}
            title="Übungskatalog"
            desc="100+ Übungen, sortiert nach Ziel – von Technik bis Taktik."
          />
          <Feature
            icon={<CalendarCheck className="w-10 h-10 text-yellow-500 mb-4 mx-auto" />}
            title="Trainingsplanung"
            desc="Stelle komplette Einheiten zusammen und speichere deine Pläne."
          />
          <Feature
            icon={<Brain className="w-10 h-10 text-yellow-500 mb-4 mx-auto" />}
            title="Zeitersparnis"
            desc="Weniger Planung, mehr Coaching. Nutze bewährte Strukturen."
          />
        </div>
      </section>

      {/* Zielgruppe */}
      <section className="bg-white py-16 px-6 text-center">
        <h3 className="text-2xl font-semibold mb-4">Für alle Fußballtrainer</h3>
        <p className="text-lg max-w-3xl mx-auto text-gray-600">
          Egal ob Jugendtrainer, Co-Trainer im Verein oder ambitionierter Amateurcoach – Bolzer+ hilft dir, das Beste aus deinem Training herauszuholen.
        </p>
      </section>

      {/* Call to Action */}
      <section className="bg-yellow-500 text-white py-16 text-center">
        <h4 className="text-3xl font-bold mb-6">Starte jetzt mit Bolzer+</h4>
        <p className="text-lg mb-8">Digitalisiere dein Training – einfach, schnell und effektiv.</p>
        <Link
          to="/create"
          className="bg-white text-yellow-500 px-6 py-3 rounded-xl font-semibold text-lg hover:bg-yellow-100 transition"
        >
          Training planen
        </Link>
      </section>
    </div>
  )
}

function Feature({ icon, title, desc }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
      {icon}
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{desc}</p>
    </div>
  )
}
