import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { matchRoutes } from 'react-router-dom'

import App from './App'
import { routes } from './Pages/Router/routes'
import { Helmet } from 'react-helmet'

// @ts-ignore
export const render = async ({ path }) => {
    let data = {}
    const matches = matchRoutes(routes, path) || []
    for (const match of matches) {
        const { route, params } = match
        if (route.fetchData) {
            data = await route.fetchData(null, params)
        }
    }

    const html = renderToString(
        <StaticRouter location={path}>
            <App data={data} />
        </StaticRouter>
    )
    const helmet = Helmet.renderStatic();

    return {
        html,
        head: helmet.title.toString() + helmet.meta.toString(),
        state: data
    }
}