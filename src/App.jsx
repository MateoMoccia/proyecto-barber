import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import StartingPage from './pages/startingPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/inicio" element={<StartingPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}

export default App
