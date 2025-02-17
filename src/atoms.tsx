import { atom } from 'jotai'
import { getTheme } from './theme/theme'

const costAccValue = atom(50)

const userApiKey = atom('test-sk1o83e')

const selectedModels = atom(["gpt-4o", "dall-e-3", "gpt-4o-mini", "dall-e-2", "gpt-3.5-turbo"])

const chatMessages = atom([])

const themeModeAtom = atom<'light' | 'dark'>('light')

const themeAtom = atom(
  (get) => getTheme(get(themeModeAtom))
)

export { userApiKey, selectedModels, chatMessages, costAccValue, themeModeAtom, themeAtom }
