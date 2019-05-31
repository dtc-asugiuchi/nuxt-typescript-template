export default function({ isHMR, app, store, error }) {
  const defaultLocale = app.i18n.fallbackLocale
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) return
  if (!store.state.local) {
    const locale = window.navigator.language.substring(0, 2)
    if (store.state.locales.indexOf(locale) === -1) {
      store.commit('set_lang', defaultLocale)
      return error({
        message: 'This page could not be found.',
        statusCode: 404
      })
    } else {
      store.commit('set_lang', locale)
    }
  }
  app.i18n.locale = store.state.locale
}
