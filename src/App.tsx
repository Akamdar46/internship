import { useState } from 'react'

function App() {
  const [num1, setNum1] = useState<string>('')
  const [num2, setNum2] = useState<string>('')
  const [num3, setNum3] = useState<string>('')
  const [result, setResult] = useState<number | null>(null)

  const handleAdd = () => {
    const sum = Number(num1) + Number(num2) + Number(num3)
    setResult(sum)
  }

  const handleInputChange = (value: string, setter: (value: string) => void) => {
    setter(value)
    setResult(null)
  }

  const isValid = num1 !== '' && num2 !== '' && num3 !== '' && 
    !isNaN(Number(num1)) && !isNaN(Number(num2)) && !isNaN(Number(num3))

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-600 mb-2">Aidan Kamdar</h1>
          <p className="text-gray-600 text-lg">Three Number Calculator</p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="num1" className="block text-sm font-medium text-gray-700">
                  First Number
                </label>
                <input
                  id="num1"
                  type="number"
                  value={num1}
                  onChange={(e) => handleInputChange(e.target.value, setNum1)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                  placeholder="Enter first number"
                  aria-label="First number"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="num2" className="block text-sm font-medium text-gray-700">
                  Second Number
                </label>
                <input
                  id="num2"
                  type="number"
                  value={num2}
                  onChange={(e) => handleInputChange(e.target.value, setNum2)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                  placeholder="Enter second number"
                  aria-label="Second number"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="num3" className="block text-sm font-medium text-gray-700">
                  Third Number
                </label>
                <input
                  id="num3"
                  type="number"
                  value={num3}
                  onChange={(e) => handleInputChange(e.target.value, setNum3)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                  placeholder="Enter third number"
                  aria-label="Third number"
                />
              </div>

              <button
                onClick={handleAdd}
                disabled={!isValid}
                className={`w-full py-3 px-4 rounded-lg text-white font-medium text-lg transition duration-200 transform hover:scale-[1.02] ${
                  isValid
                    ? 'bg-indigo-600 hover:bg-indigo-700 shadow-md'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
                aria-label="Add numbers"
              >
                Add Numbers
              </button>

              {result !== null && (
                <div className="mt-6 p-4 bg-indigo-50 rounded-lg text-center">
                  <p className="text-sm text-gray-600 mb-1">Result</p>
                  <p className="text-2xl font-bold text-indigo-600">{result}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          Built with React + TypeScript + Tailwind CSS
        </div>
      </div>
    </div>
  )
}

export default App 