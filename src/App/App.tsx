import { HashRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../pages'
import { Feed } from '../pages'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </HashRouter>
  )
}

export default App
