import { Button, Stack } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import BudgetCard from 'components/BudgetCard.js'

function App() {
  return <Container className='my-4'>
    <Stack direction='horizontal' gap='2' className='mb-4'>
      <h1 className='me-auto'>Budgetz</h1>
      <Button variant='primary'>Add'em budge</Button>
      <Button variant='outline-primary'>Add'em expens</Button>
    </Stack>
    <div 
      style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '1rem', 
        alignItems: 'flex-start',
      }}>
    <BudgetCard />
    </div>
  </Container>
}

export default App