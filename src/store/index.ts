export const state = () => ({
    locales: ['en', 'ja'],
    locale: 'en'
})

export const mutations = {
    set_lang(state, locale) {
      if (state.locales.indexOf(locale) !== -1) {
        state.locale = locale
      }
    }
}