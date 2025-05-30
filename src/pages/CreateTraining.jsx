export default function CreateTraining() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Training erstellen</h2>
      <p className="text-gray-600 mb-8">
        In Kürze kannst du hier eigene Trainingseinheiten planen, Übungen kombinieren und speichern.
      </p>

      {/* Step overview */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          { step: 1, title: 'Ziel wählen', desc: 'Technik, Kondition, Taktik oder Spaßfaktor?' },
          { step: 2, title: 'Übungen auswählen', desc: 'Stöbere im Übungskatalog und füge hinzu.' },
          { step: 3, title: 'Training speichern', desc: 'Erstelle deine perfekte Einheit in Minuten.' },
        ].map(({ step, title, desc }) => (
          <div key={step} className="bg-white rounded-xl shadow p-6 text-center hover:shadow-md transition">
            <div className="text-yellow-500 text-4xl font-extrabold mb-2">{step}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-500">{desc}</p>
          </div>
        ))}
      </div>

      {/* Placeholder for future UI */}
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center bg-gray-50">
        <h4 className="text-xl font-medium text-gray-700 mb-2">Trainingseditor in Entwicklung</h4>
        <p className="text-gray-500 mb-4">
          Bald kannst du hier deine Einheiten per Drag-and-Drop zusammenstellen.
        </p>
        <button className="bg-yellow-500 text-white px-5 py-2 rounded-xl font-semibold shadow hover:bg-yellow-600 transition">
          Vorschau später freischalten
        </button>
      </div>
    </div>
  )
}

