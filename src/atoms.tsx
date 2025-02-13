import { atom } from 'jotai'

const costAccValue = atom(50)

const userApiKey = atom('test-sk1o83e')

const selectedModels = atom(["gpt-4o", "dall-e-3"])

const chatMessages = atom([])

const themeAtom = atom(false)

const themePersistAtom = atom(
  (get) => get(themeAtom),
  (_, set, newValue: boolean) => {

    set(themeAtom, newValue)
    if (newValue) {
      document.body.classList.add('dark-theme')
    } else {
      document.body.classList.remove('dark-theme')
    }
  }
)

export { userApiKey, selectedModels, chatMessages, themePersistAtom, costAccValue }
