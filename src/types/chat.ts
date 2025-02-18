export interface ChatMessage {
    role: string;
    content: string;
    timestamp?: string;  // Added since it's used in your frontend
    model?: string;      // Added since it's used in your frontend
}

export interface ChatCompletionRequest {
    model: string;
    messages: ChatMessage[];
    temperature?: number;  // Optional since it has a default in backend
    max_tokens?: number;   // Optional as specified in backend
    stream?: boolean;      // Optional since it has a default in backend
}

export interface ChatCompletionResponse {
    model: string;
    content: string;
    provider: string;
    usage: {
        [key: string]: number;
    };
}

export type MessageType = 'user' | 'assistant';


export interface SmartRouterRequest {
    query: string;
    k?: number;
    model_names?: string[];
    rel_cost?: number;
    rel_latency?: number;
    rel_accuracy?: number;
}