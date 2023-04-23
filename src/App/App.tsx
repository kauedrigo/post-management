import { HashRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../pages'
import { Feed } from '../components/Feed'
import { Layout } from '../components'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Feed />
            </Layout>
          }
        />
        <Route path="/2" element={<Login />} />
      </Routes>
    </HashRouter>
  )
}

export default App
