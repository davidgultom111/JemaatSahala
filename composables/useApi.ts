export const useApi = () => {
  const config = useRuntimeConfig()
  const token  = useCookie<string | null>('api_token')

  const request = async <T>(path: string, options: Parameters<typeof $fetch>[1] = {}): Promise<T> => {
    return $fetch<T>(path, {
      baseURL: config.public.apiBase,
      headers: {
        'Accept': 'application/json',
        ...(token.value ? { 'Authorization': `Bearer ${token.value}` } : {}),
        ...((options.headers as Record<string, string>) ?? {}),
      },
      ...options,
      onResponseError({ response }) {
        if (response.status === 401) {
          token.value = null
          navigateTo('/login')
        }
      },
    })
  }

  return { request }
}
