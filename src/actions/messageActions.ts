import { sendMessage } from '../api/messagesApi';
import { chatMessages, costAccValue } from '../atoms';
import { WritableAtom, getDefaultStore } from 'jotai';

// Utility to update atoms

const getAtom = <T>(atom: WritableAtom<T, [T], unknown>) => {
    const store = getDefaultStore();
    return store.get(atom);
};


const setAtom = <T>(atom: WritableAtom<T, [T], unknown>, value: T) => {
    const store = getDefaultStore();
    store.set(atom, value);
};
  

export const sendMessageAction = async (message: string, clearInput: () => void) => {
    clearInput(); // Clear immediately when action starts
    try {
        const cost = getAtom(costAccValue); // Get the cost value
        console.log('Cost accuracy value:', cost); // Log it
        
        setAtom(chatMessages,  (prev) => [...prev, {
            role: 'user',
            content: message,
            timestamp: new Date().toISOString(),
        }]);
        const response = await sendMessage(message);
        setAtom(chatMessages,  (prev) => [...prev, {
            role: 'assistant',
            content: response.message,
            timestamp: new Date().toISOString(),
            model: 'Omni Smart Select'
        }]);
        console.log('Message sent successfully:', response);
    } catch (error) {
        console.error('Failed to send message:', error);
    }
}

