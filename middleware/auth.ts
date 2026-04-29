export default defineNuxtRouteMiddleware(() => {
  const token = useCookie('api_token')
  if (!token.value) {
    return navigateTo('/login')
  }
})
