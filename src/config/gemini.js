const API_KEY = import.meta.env.VITE_API_KEY;

// console.log("API Key:", API_KEY);

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// const prompt = "Explain how AI works in a few words";

// const result = await model.generateContent(prompt);
// console.log(result.response.text());

const generateContent = async (prompt) => {
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    return result.response.text;
    
}
export default generateContent;