import { RealScoutHomeValue } from "components/RealScout/RealScoutHomeValue"

export default function HomeValuePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Home Value Estimator
        </h1>
        <div className="flex justify-center">
          <RealScoutHomeValue agentEncodedId="QWdlbnQtMjI1MDUw" />
        </div>
      </div>
    </div>
  )
} 