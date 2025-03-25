import { createContext, useState } from "react";
import generateContent from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [prevResultData, setPrevResultData] = useState([])
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const newChat = () => {
        setLoading(false)
        setShowResult(false)
    }

    const onSent = async (prompt) => {
        setLoading(true)
        setResultData("")
        setShowResult(true)
        
        let response;
        if (prompt !== undefined){
            response = await generateContent(prompt) 
            setPrevResultData(prev => [...prev, response])
            setRecentPrompt(prompt)
        } else {
            setPrevPrompts(prev => [...prev, input])
            setRecentPrompt(input)
            response = await generateContent(input)
            setPrevResultData(prev => [...prev, response])
        }
        setLoading(false)
        setResultData(response)
        setInput("")

    }

    // onSent("What is ReactJs?");

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        recentPrompt,
        setRecentPrompt,
        onSent,
        showResult,
        loading,
        resultData,
        setResultData,
        prevResultData,
        input,
        setInput,
        newChat
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;