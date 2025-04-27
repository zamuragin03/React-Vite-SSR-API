import { Route, Routes } from 'react-router-dom'
import './index.css'
import { routes } from './Pages/Router/routes'

const App= ({ data }: any) => {
  return (
    <Routes>
      {routes.map(({ path, component: Component }) => (
        <Route
          key={path}
          path={path}
          element={<Component data={data} />}
        />
      ))}
    </Routes>
  )
}

export default App