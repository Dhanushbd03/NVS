import { Outlet , createRootRoute,  } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Header from '../components/Header'
import TanStackQueryLayout from '../integrations/tanstack-query/layout.tsx'

const Layout = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-2 bg-geysar">
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
      <TanStackQueryLayout />
    </div>
  ),
})

export default Layout
