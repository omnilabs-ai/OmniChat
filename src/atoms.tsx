import { atom } from 'jotai'
import { getTheme } from './theme/theme'

const costAccValue = atom(50)

const userApiKey = atom('test-sk1o83e')

const selectedModels = atom([
  "gpt-4o", "dall-e-3", "gpt-4o-mini", "dall-e-2", "gpt-3.5-turbo"
])
// const selectedModels = atom([
//   "gpt-4o", "dall-e-3", "gpt-4o-mini", "dall-e-2", "gpt-3.5-turbo", 
//   "gpt-4o-2024-08-06", "gpt-4o-2024-09-01", "dall-e-4", "gpt-5", 
//   "gpt-5-turbo", "gpt-4o-2025-01-01", "dall-e-5", "gpt-6", "gpt-6-turbo",
//   "gpt-4o", "dall-e-3", "gpt-4o-mini", "dall-e-2", "gpt-3.5-turbo", 
//   "gpt-4o-2024-08-06", "gpt-4o-2024-09-01", "dall-e-4", "gpt-5", 
//   "gpt-5-turbo", "gpt-4o-2025-01-01", "dall-e-5", "gpt-6", "gpt-6-turbo"
// ])

const chatMessages = atom([])

const themeModeAtom = atom<'light' | 'dark'>('light')

const themeAtom = atom(
  (get) => getTheme(get(themeModeAtom))
)

export { userApiKey, selectedModels, chatMessages, costAccValue, themeModeAtom, themeAtom }
