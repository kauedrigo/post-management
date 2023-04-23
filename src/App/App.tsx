import { HashRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../pages'
import { Feed } from '../pages/Feed'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/2" element={<Login />} />
      </Routes>
    </HashRouter>
  )
}

export default App
