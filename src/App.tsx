import { useState } from 'react'

function App() {
  const [num1, setNum1] = useState<string>('')
  const [num2, setNum2] = useState<string>('')
  const [result, setResult] = useState<number | null>(null)

  const handleAdd = () => {
    const sum = Number(num1) + Number(num2)
    setResult(sum)
  }

  const handleInputChange = (value: string, setter: (value: string) => void) => {
    setter(value)
    setResult(null)
  }

  const isValid = num1 !== '' && num2 !== '' && !isNaN(Number(num1)) && !isNaN(Number(num2))

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <div className="space-y-4">
          <input
            type="number"
            value={num1}
            onChange={(e) => handleInputChange(e.target.value, setNum1)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter first number"
            aria-label="First number"
          />
          <input
            type="number"
            value={num2}
            onChange={(e) => handleInputChange(e.target.value, setNum2)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter second number"
            aria-label="Second number"
          />
          <button
            onClick={handleAdd}
            disabled={!isValid}
            className={`w-full py-2 px-4 rounded-md text-white font-medium ${
              isValid
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
            aria-label="Add numbers"
          >
            Add
          </button>
          {result !== null && (
            <div className="mt-4 p-3 bg-gray-100 rounded-md text-center">
              Result: {result}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App 