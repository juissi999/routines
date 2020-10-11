import { v4 as uuid } from 'uuid'

const storageKey = 'routines'
const themeStorageKey = 'theme'

const store = {
  init: () => {
    // initialize routines
    const initial = [
      { description: 'eat', id: uuid() },
      { description: 'sleep', id: uuid() }
    ]

    if (localStorage.getItem(storageKey) === null) {
      localStorage.setItem(storageKey, JSON.stringify(initial, null, 2))
    }
    const routines = JSON.parse(localStorage.getItem(storageKey))

    // initialize theme
    const initialTheme = 0

    if (localStorage.getItem(themeStorageKey) === null) {
      localStorage.setItem(
        themeStorageKey,
        JSON.stringify(initialTheme, null, 2)
      )
    }
    const theme = JSON.parse(localStorage.getItem(themeStorageKey))

    return { routines, theme }
  },
  update: (routines, currentTheme) => {
    if (routines.length > 0) {
      localStorage.setItem(storageKey, JSON.stringify(routines, null, 2))
      localStorage.setItem(
        themeStorageKey,
        JSON.stringify(currentTheme, null, 2)
      )
    } else {
      // if user deletes all routines, delete local storage object
      localStorage.removeItem(storageKey)
      localStorage.removeItem(themeStorageKey)
    }
  }
}

export default store
