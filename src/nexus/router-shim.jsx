// Thin adapter exposing the react-router-style API the original Nexus Chat
// code uses, implemented on top of TanStack Router.
import { forwardRef, useCallback } from 'react'
import {
  Link as TLink,
  Navigate as TNavigate,
  Outlet,
  useNavigate as useTNavigate,
  useParams as useTParams,
  useRouter,
  useRouterState,
} from '@tanstack/react-router'

export { Outlet }

function splitTo(to) {
  if (typeof to !== 'string') return { to: to?.pathname || '/', search: undefined }
  const [path, query] = to.split('?')
  if (!query) return { to: path || '/' }
  return { to: path || '/', search: Object.fromEntries(new URLSearchParams(query)) }
}

export function useNavigate() {
  const navigate = useTNavigate()
  const router = useRouter()
  return useCallback(
    (to, opts = {}) => {
      if (typeof to === 'number') {
        router.history.go(to)
        return
      }
      const target = splitTo(to)
      navigate({ ...target, replace: !!opts.replace, state: opts.state ? { ...opts.state } : undefined })
    },
    [navigate, router],
  )
}

export function useLocation() {
  const loc = useRouterState({ select: (s) => s.location })
  return {
    pathname: loc.pathname,
    search: loc.searchStr || '',
    hash: loc.hash ? `#${loc.hash}` : '',
    state: loc.state,
  }
}

export function useParams() {
  return useTParams({ strict: false })
}

export const Link = forwardRef(function Link({ to, state, replace, ...rest }, ref) {
  const target = splitTo(to)
  return <TLink ref={ref} {...target} replace={replace} state={state ? { ...state } : undefined} {...rest} />
})

export function Navigate({ to, replace, state }) {
  const target = splitTo(to)
  return <TNavigate {...target} replace={replace} state={state} />
}
