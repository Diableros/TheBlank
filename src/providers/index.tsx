import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ThemeProvider } from './ThemeProvider'

const queryClient = new QueryClient({
  defaultOptions: {
    // queries: {
    //   staleTime: 1000 * 60,
    //   retry: 0,
    // },
  },
})

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  )
}
