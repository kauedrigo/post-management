import { Button } from '../components'
import { Input } from '../components/Input/Input'
import { Layout } from '../components/Layout/Layout'
import { Title } from '../components/Title/Title'

function App() {
  return (
    <Layout>
      <Button variant="red">banana</Button>
      <Title>bananeira</Title>
      <div style={{ width: 400 }}>
        <Input label="mylabel" placeholder="something" />
      </div>
    </Layout>
  )
}

export default App
