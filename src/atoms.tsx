import { atom } from 'jotai'
import { getTheme } from './theme/theme'

export const costAccValue = atom(50)

export const userApiKey = atom('test-sk1o83e')

export const userQuery = atom('')

export const selectedModels = atom([
  "Omni Smart Select"
])
// const selectedModels = atom([
//   "gpt-4o", "dall-e-3", "gpt-4o-mini", "dall-e-2", "gpt-3.5-turbo", 
//   "gpt-4o-2024-08-06", "gpt-4o-2024-09-01", "dall-e-4", "gpt-5", 
//   "gpt-5-turbo", "gpt-4o-2025-01-01", "dall-e-5", "gpt-6", "gpt-6-turbo",
//   "gpt-4o", "dall-e-3", "gpt-4o-mini", "dall-e-2", "gpt-3.5-turbo", 
//   "gpt-4o-2024-08-06", "gpt-4o-2024-09-01", "dall-e-4", "gpt-5", 
//   "gpt-5-turbo", "gpt-4o-2025-01-01", "dall-e-5", "gpt-6", "gpt-6-turbo"
// ])

export interface ChatMessage {
  content: string;
  role: 'user' | 'assistant';
}

export const chatMessages = atom<ChatMessage[]>([])

export const themeModeAtom = atom<'light' | 'dark'>('light')

export const themeAtom = atom(
  (get) => getTheme(get(themeModeAtom))
)
