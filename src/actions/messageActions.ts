import { chatCompletion, smartSelect } from '../api/messagesApi';
import { chatMessages, costAccValue } from '../atoms';
import { WritableAtom, getDefaultStore } from 'jotai';
import { ChatMessage, SmartRouterRequest } from '../types/chat';

// Utility to update atoms

const getAtom = <T>(atom: WritableAtom<T, [T], unknown>): T => {
    const store = getDefaultStore();
    return store.get(atom);
};


const setAtom = <T>(atom: WritableAtom<T, [T], unknown>, value: T) => {
    const store = getDefaultStore();
    store.set(atom, value);
};
  

export const sendMessageAction = async (message: string, clearInput: () => void) => {
    clearInput();
    try {
        const cost = getAtom(costAccValue);  // TypeScript knows this is a number
        console.log('Cost accuracy value:', cost);
        
        const newUserMessage: ChatMessage = {
            role: 'user',
            content: message
        };
        
        setAtom(chatMessages, (prev) => [...prev, newUserMessage]);
        const response = await chatCompletion({
            model: 'gpt-4o-mini',
            messages: [newUserMessage],
            temperature: 0.5,
            max_tokens: 1000,
            stream: false
        });
        
        const assistantMessage: ChatMessage = {
            role: 'assistant',
            content: response.content
        };
        
        setAtom(chatMessages, (prev) => [...prev, assistantMessage]);
        console.log('Message sent successfully:', response);

    } catch (error) {
        console.error('Failed to send message:', error);
        const errorMessage: ChatMessage = {
            role: 'assistant',
            content: 'Sorry, I couldn\'t process your request. Please try again later.',
        };
        setAtom(chatMessages, (prev) => [...prev, errorMessage]);
    }
}

export const smartSelectAction = async (message: string, clearInput: () => void) => {
    clearInput();
    try {
        const cost = getAtom(costAccValue);
        console.log('Cost accuracy value:', cost);
        
        const newUserMessage: ChatMessage = {
            role: 'user',
            content: message,
        };
        setAtom(chatMessages, (prev) => [...prev, newUserMessage]);

        const request: SmartRouterRequest = {
            messages: getAtom(chatMessages) as ChatMessage[],
            rel_cost: Number(cost)/100,
            rel_latency: 0,
            rel_accuracy: 1 - (Number(cost)/100)
        };

        console.log('Request:', request);

        const response = await smartSelect(request);

        const assistantMessage: ChatMessage = {
            role: 'assistant',
            content: response.content
        };
        
        setAtom(chatMessages, (prev) => [...prev, assistantMessage]);
        console.log('Message received:', response);        

    } catch (error) {
        console.error('Failed to send message:', error);
        const errorMessage: ChatMessage = {
            role: 'assistant',
            content: 'Sorry, I couldn\'t process your request. Please try again later.'
        };
        setAtom(chatMessages, (prev) => [...prev, errorMessage]);
    }
}

