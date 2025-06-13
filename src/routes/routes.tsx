
import { createRoute, createRouter } from '@tanstack/react-router'
import Layout from '../layout/Layout.tsx'
import * as TanStackQueryProvider from '../integrations/tanstack-query/root-provider.tsx'
import Home from '@/pages/Home.tsx'

const indexRoute = createRoute({
  getParentRoute: () => Layout,
  path: '/',
  component: Home,
})

const routeTree = Layout.addChildren([
  indexRoute,
])

const router = createRouter({
  routeTree,
  context: {
    ...TanStackQueryProvider.getContext(),
  },
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
})

export default router