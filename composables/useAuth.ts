import type { Member, ApiResponse } from '~/types'

export const useAuth = () => {
  const token  = useCookie<string | null>('api_token', { maxAge: 60 * 60 * 8, sameSite: 'lax' })
  const member = useState<Member | null>('auth:member', () => null)
  const isLoggedIn = computed(() => !!token.value)

  const { request } = useApi()

  const login = async (idJemaat: string, password: string) => {
    const res = await request<ApiResponse<{ member: Member; token: string }>>('/auth/login', {
      method: 'POST',
      body: { id_jemaat: idJemaat, password },
    })
    token.value  = res.data.token
    member.value = res.data.member
  }

  const logout = async () => {
    try { await request('/me/logout', { method: 'DELETE' }) } catch {}
    token.value  = null
    member.value = null
    navigateTo('/login')
  }

  const fetchProfile = async (): Promise<Member> => {
    const res    = await request<ApiResponse<Member>>('/me')
    member.value = res.data
    return res.data
  }

  return { token, member, isLoggedIn, login, logout, fetchProfile }
}
