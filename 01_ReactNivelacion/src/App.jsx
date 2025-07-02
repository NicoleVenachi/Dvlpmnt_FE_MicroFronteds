import { lazy } from 'react'
import Counter from './components/Counter'
import { Suspense } from 'react'

const Users = lazy(() => import('./components/Users'))

const App = () => {
  return (
    <div className=''>
      <Counter />

      <Suspense fallback={<div>Loading...</div>}>
        <Users />
      </Suspense>
    </div>
  )
}

export default App
