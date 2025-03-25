import React, { useContext } from "react";
import "./Main.css";
import { assets } from '../../assets/assets'
import { Context } from "../../context/Context";
import ReactMarkdown from 'react-markdown'

const Main = () => {
    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
          event.preventDefault(); // Ngăn form tự động submit (nếu có)
          onSent(); // Gọi hàm xử lý gửi dữ liệu
        }
    };

    const clickCard = (e) => {
        let prompt = e.currentTarget.querySelector("p").innerText
        setInput(prompt)
    }

    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                {!showResult?
                    <>
                        <div className="greet">
                            <p><span>Hello, Dev.</span></p>
                            <p>How I can help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card" onClick={(e) => {clickCard(e)}}>
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card" onClick={(e) => {clickCard(e)}}>
                                <p>Briefly summarize this concepts: urban planning</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card" onClick={(e) => {clickCard(e)}}>
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card" onClick={(e) => {clickCard(e)}}>
                                <p>Improve the readability of the following code</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                :
                    <div className="result">
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading?
                                <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            :
                            <div className="result-data-content">
                                <ReactMarkdown>{resultData}</ReactMarkdown>
                            </div>}
                        </div>
                    </div>}
                
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" onKeyDown={handleKeyDown} />
                    <div>
                        {/* <img src={assets.gallery_icon} alt="" /> */}
                        {/* <img src={assets.mic_icon} alt="" /> */}
                        {input?<img onClick={() => onSent()} src={assets.send_icon} alt="" />:null}
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may display inaccurate info, including about people, so double-check its responces. Your privacy and Gemini Apps
                </p>
            </div>
            </div>
        </div>
    )
};
export default Main;
