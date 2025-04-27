import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
let 
data = window.__SSR_DATA__ || {}
delete window.__SSR_DATA__
// @ts-ignore
hydrateRoot(
  document.getElementById('root')!,
    <BrowserRouter>
      <App data={data} />
    </BrowserRouter>
)
