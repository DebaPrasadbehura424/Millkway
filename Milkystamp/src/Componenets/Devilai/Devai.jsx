import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { PiMicrophoneStageThin } from "react-icons/pi";
import './index.css';
function Devai() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("Hi i am SUZANE how can i help you ");
  const [frame, setFrame] = useState([{
    Asks: question,
    answerAsks: answer,
  }]);

const refs= useRef(null);
  async function generateAnswer() {
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCzp3lsYWvpuWpKGY4lrpQjHGMrAvbSO7Q",
      method: "post",
      data: {
        "contents":
          [{
            "parts": [{ "text": `${question}` }]
          }]
      },
    })
    setQuestion("");
    setAnswer(response.data.candidates[0].content.parts[0].text);
    setFrame([...frame, { 'Asks': question, 'answerAsks': response.data.candidates[0].content.parts[0].text }]);
  
  }



  return (
    <div className="chat_whole_conatiner">
      <h1><center>Dev.@i</center></h1>
      <div className="search_contain">
        <input
          required
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask anything..."
        >
        </input>
        <button onClick={generateAnswer}>
          <PiMicrophoneStageThin />
        </button>
      </div>


      <div className="answerbox" ref={refs} >
        {
          frame.map((data,index) => {
            return (
              <div className="chat_container" key={index}>
                <div className="chat_question">
                  <span>
                    {data.Asks} 👶
                  </span>
                </div>
                <div className="chat_answer"> {data.answerAsks}🤖</div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Devai;
