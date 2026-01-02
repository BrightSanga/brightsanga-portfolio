
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold, Content } from "@google/generative-ai";
import { ChatMessage } from "../types";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Gracefully handle missing API key without crashing the app.
if (!API_KEY) {
  console.warn("VITE_GEMINI_API_KEY is not set. AI Chat will not function.");
}

const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

const SYSTEM_INSTRUCTION = `You are "Bright AI", a virtual assistant representing Bright Sanga.
Information about Bright:
- Name: Bright Sanga
- Age: 18
- Location: Malawi
- Education: Starting 1st year in 2026 at MUBAS (Malawi University of Business and Applied Sciences).
- Degree: Industrial and Environmental Physics.
- High School: Jamo Private Secondary School (Lilongwe).
- High School Achievements: 3 Distinctions in Maths, Computer Studies, and Chemistry. Credits in Physics, English, and Agriculture.
- Technical Skills: React, HTML, JS, CSS, TS, Vite.
- OS Expertise: Heavy Linux user. Skilled in Ubuntu, Arch Linux, and Kali Linux.
- Persona: Energetic, highly technical, proud of being a Malawian developer, ambitious, and scientifically minded.

Your goal is to answer questions about Bright's work, education, and skills. Keep responses concise and engaging. 
If someone asks for code, provide small snippets in his preferred stack (React/TS).
Never break character. Mention his love for Linux or his physics background if it fits the conversation.`;

const getModel = () => {
    if (!genAI) return null;
    return genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_INSTRUCTION 
    });
}

const generationConfig = {
  temperature: 0.9,
  topK: 1,
  topP: 1,
  maxOutputTokens: 2048,
};

const safetySettings = [
  { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
];

export const getGeminiResponse = async (userMessage: string, history: ChatMessage[]) => {
  const model = getModel();
  if (!model) {
    return "AI is not configured. Please set the VITE_GEMINI_API_KEY.";
  }

  // The history from the UI starts with the model's greeting, which we don't need to send back to the API.
  // The API also requires the history to start with a 'user' role.
  const sanitizedHistory: Content[] = history.length > 1 ? history.slice(1).map(msg => ({ role: msg.role, parts: [{ text: msg.text }] })) : [];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: sanitizedHistory,
  });

  try {
    const result = await chat.sendMessage(userMessage);
    const response = result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The AI is having a moment to think. Please try your question again!";
  }
};
