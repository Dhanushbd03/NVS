import { Outlet , createRootRoute,  } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Header from '../components/Header'
import TanStackQueryLayout from '../integrations/tanstack-query/layout.tsx'

const Layout = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-2 bg-[var(--geysar)]"> {/* Explicitly use var(--geysar) and added dark gradient */}
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
      <TanStackQueryLayout />
    </div>
  ),
})

export default Layout
