import { atom } from 'jotai'
import { getTheme } from './theme/theme'

const costAccValue = atom(50)

const userApiKey = atom('test-sk1o83e')

const userQuery = atom('')

const selectedModels = atom([
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

const chatMessages = atom([
  {
    role: 'user',
    content: 'How do I create a React component?',
    timestamp: '2024-03-15T10:30:00Z'
  },
  {
    role: 'assistant',
    content: 'To create a React component, you can use either a function or class syntax. Here\'s a simple example of a functional component:\n\n```jsx\nfunction Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n```\n\nYou can then use this component like this: `<Welcome name="John" />`',
    timestamp: '2024-03-15T10:30:05Z',
    model: 'Omni Smart Select'
  },
  {
    role: 'user',
    content: 'Can you show me how to use useState?',
    timestamp: '2024-03-15T10:31:00Z'
  },
  {
    role: 'assistant',
    content: 'Here\'s an example of using the useState hook in React:\n\n```jsx\nimport { useState } from \'react\';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n```\n\nThe useState hook lets you add state to functional components. The first value (count) is the current state, and the second value (setCount) is a function to update it.',
    timestamp: '2024-03-15T10:31:05Z',
    model: 'Omni Smart Select'
  },
  {
    role: 'user',
    content: 'How do I create a React component?',
    timestamp: '2024-03-15T10:30:00Z'
  },
  {
    role: 'assistant',
    content: 'To create a React component, you can use either a function or class syntax. Here\'s a simple example of a functional component:\n\n```jsx\nfunction Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n```\n\nYou can then use this component like this: `<Welcome name="John" />`',
    timestamp: '2024-03-15T10:30:05Z',
    model: 'Omni Smart Select'
  },
  {
    role: 'user',
    content: 'Can you show me how to use useState?',
    timestamp: '2024-03-15T10:31:00Z'
  },
  {
    role: 'assistant',
    content: 'Here\'s an example of using the useState hook in React:\n\n```jsx\nimport { useState } from \'react\';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n```\n\nThe useState hook lets you add state to functional components. The first value (count) is the current state, and the second value (setCount) is a function to update it.',
    timestamp: '2024-03-15T10:31:05Z',
    model: 'Omni Smart Select'
  },
  {
    role: 'user',
    content: 'How do I create a React component?',
    timestamp: '2024-03-15T10:30:00Z'
  },
  {
    role: 'assistant',
    content: 'To create a React component, you can use either a function or class syntax. Here\'s a simple example of a functional component:\n\n```jsx\nfunction Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n```\n\nYou can then use this component like this: `<Welcome name="John" />`',
    timestamp: '2024-03-15T10:30:05Z',
    model: 'Omni Smart Select'
  },
  {
    role: 'user',
    content: 'Can you show me how to use useState?',
    timestamp: '2024-03-15T10:31:00Z'
  },
  {
    role: 'assistant',
    content: 'Here\'s an example of using the useState hook in React:\n\n```jsx\nimport { useState } from \'react\';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n```\n\nThe useState hook lets you add state to functional components. The first value (count) is the current state, and the second value (setCount) is a function to update it.',
    timestamp: '2024-03-15T10:31:05Z',
    model: 'Omni Smart Select'
  },
  
])

const themeModeAtom = atom<'light' | 'dark'>('light')

const themeAtom = atom(
  (get) => getTheme(get(themeModeAtom))
)

export { userApiKey, selectedModels, chatMessages, costAccValue, themeModeAtom, themeAtom, userQuery }
