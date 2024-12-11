import { Leaf } from 'lucide-react'
import { MeasurementForm } from './components/MeasurementForm'

export default function MeasurementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <div className="inline-block p-2 bg-green-500 rounded-full mb-4">
            <Leaf className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-2 text-green-800">Carbon Ripples</h1>
          <h2 className="text-3xl font-semibold mb-4 text-green-700">Calculation Suite</h2>
          <p className="text-lg text-green-700">
            Please select your industry and enter the relevant data for your operations. Fields will adapt to your selection.
          </p>
        </header>
        <main>
          <MeasurementForm />
        </main>
        <footer className="mt-12 text-sm text-green-600 text-center">
          <p>Your data privacy is important to us. For more information, please see our privacy policy.</p>
          <p className="mt-2">Version 1.0.0 | Sustainable Emissions Tracker</p>
        </footer>
      </div>
    </div>
  )
}

