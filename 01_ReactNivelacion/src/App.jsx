import { lazy } from 'react'
import Counter from './components/Counter'
import { Suspense } from 'react'
import Layout from './components/Layout'

const Users = lazy(() => import('./components/Users'))

const App = () => {
  return (
    <div className=''>
      <Layout>
        <Counter />

        <Suspense fallback={<div>Loading...</div>}>
          <Users />
        </Suspense>
      </Layout>
    </div>
  )
}

export default App
