import { useEffect, useState } from "react";
import TypeWriterIcon from "../assets/keyboard.svg";
import RestartIcon from "../assets/restart.svg";
import SentencesData from "../assets/text.json"

const TypeWriter = () => {
  return <img src={TypeWriterIcon} alt="TypeWriter Icon" className="w-12 h-12" />;
};

const Restart = () => {
  return <img src={RestartIcon} alt="Restart Icon" className="w-8 h-8" />;
};


const RandomSentence = ()=>{
  const [sentence , setSentence] = useState("")

  useEffect(()=>{
    const rand = Math.floor(Math.random()*SentencesData.sentences.length)
    setSentence(SentencesData.sentences[rand])
  },[]);


  




  return (
    <div>
      <p>{sentence.slice()}</p>
      {console.log(sentence)}
    </div>
  )
}

export { TypeWriter, Restart , RandomSentence };

// [] used in UseEffect so it don't run every time with component re renders 