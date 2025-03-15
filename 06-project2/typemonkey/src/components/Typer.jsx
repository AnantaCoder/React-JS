import React, { useCallback, useEffect, useState } from "react";
import { RandomSentence, Restart, TypeWriter } from "./Icons";


const sentences =  [
        "The sun rose over the vast horizon, casting golden hues across the sky as birds soared gracefully, chirping melodies that blended with the gentle rustling of leaves swayed by the cool morning breeze, while waves crashed against the shore, sending rhythmic echoes through the air, awakening creatures of land and sea to embrace another day filled with endless possibilities, boundless adventures, and newfound opportunities, inspiring countless souls to seek dreams beyond limits, to conquer fears hidden deep within, and to embark on journeys unknown, where stories unfold with every step, shaping destinies carved by choices made in fleeting moments.",
        "In the heart of the bustling city, amidst the chaotic sounds of honking horns, hurried footsteps, and distant chatter, a lone artist sat quietly, painting visions of serene landscapes untouched by the rush of life, lost in colors that spoke of tranquility, whispering silent tales of beauty beyond the concrete jungle, where rolling meadows stretched infinitely, kissed by golden sunlight, where rivers flowed with songs of harmony, where the wind carried secrets of timeless pasts, reminding those who dared to pause, to look beyond the obvious, to find magic hidden within the ordinary, in places unseen by hurried eyes.",
        "A young boy, filled with curiosity and wonder, wandered through the dense forest, where towering trees whispered stories of ancient times, where the scent of damp earth blended with the fragrance of blooming flowers, where the gentle chirping of crickets created a symphony of the wild, where every rustle of leaves hinted at hidden creatures lurking in the shadows, where adventure awaited at every turn, challenging the limits of courage, shaping the essence of discovery, as he embraced the unknown, learning from nature’s wisdom, growing with every step taken, cherishing moments etched in time, forever carried in his heart.",
        "Beneath the endless expanse of the starry night sky, where constellations shimmered like scattered diamonds, where the moon bathed the earth in silver light, a poet sat by the riverbank, lost in thought, weaving verses from the whispers of the wind, painting emotions with words that flowed like the gentle stream, capturing fleeting moments of love, sorrow, and longing, inscribing the rhythm of life onto blank pages, breathing life into mere ink, transforming silence into melodies, etching feelings upon the soul, resonating with hearts unknown, binding strangers through shared emotions, creating timeless echoes that lingered long after words faded.",
        "On the highest peak of the snow-capped mountains, where the air was crisp and pure, where silence spoke louder than words, a traveler stood in awe, gazing at the world below, where valleys stretched into eternity, where rivers carved their paths through time, where the sun painted golden strokes upon the sky, where the wind whispered untold stories, where nature stood untouched, unyielding, unbothered by the trivialities of men, where the heart found solace in solitude, where dreams soared beyond the imaginable, where the soul embraced its essence, where the mind unraveled mysteries, discovering truths hidden within the silence.",
        "In a quiet library filled with towering bookshelves, where the scent of old paper lingered in the air, where the soft glow of lamps cast a golden hue upon endless pages, a reader sat immersed in a world beyond reality, lost in stories woven by distant minds, traveling across ages, experiencing lives never lived, witnessing moments never seen, feeling emotions crafted by mere words, where time ceased to exist, where the heart danced to tales untold, where imagination reigned supreme, where knowledge became infinite, where dreams were nurtured, where possibilities thrived, where wisdom grew, shaping minds through silent whispers.",
        "Across the vast desert, where golden sands stretched endlessly under the scorching sun, where mirages danced upon the horizon, where the wind carried whispers of forgotten civilizations, a lone wanderer journeyed, tracing paths carved by time, seeking truths buried beneath shifting dunes, chasing mysteries hidden within ancient ruins, unraveling stories inscribed upon crumbling walls, listening to echoes of history whispered by the breeze, learning from shadows of the past, understanding the transient nature of existence, embracing the solitude of the unknown, thriving amidst uncertainty, carrying dreams beyond the horizon, discovering purpose in the endless journey, forever moving forward.",
        "In the heart of an enchanted forest, where fireflies danced like tiny lanterns in the night, where the scent of blooming jasmine filled the air, where the soft glow of moonlight illuminated hidden pathways, a lone wanderer ventured deeper, drawn by the whispers of unseen forces, guided by the rhythm of nature, feeling the pulse of life in every rustling leaf, in every trickling stream, in every distant call of nocturnal creatures, discovering magic interwoven with reality, embracing the wonder of the unknown, seeking wisdom within the silence, listening to the heartbeat of the earth, becoming one with nature.",
        "Upon the deck of a grand sailing ship, where the salty breeze kissed the skin, where the waves sang lullabies of the deep, where the horizon stretched infinitely, where the sky melted into the ocean, where seagulls soared with cries of freedom, a captain stood, charting courses unknown, chasing dreams beyond borders, seeking lands untouched, braving tempests of fate, facing the wrath of nature, embracing the call of adventure, navigating through uncertainty, carving paths across the waters, writing tales upon the waves, forever bound to the sea, to the vastness, to the endless possibilities, to the call of discovery.",
        "In a small village nestled between emerald hills, where fields swayed like golden seas under the gentle caress of the wind, where laughter echoed through narrow streets, where the scent of fresh bread filled the morning air, where time moved at its own pace, where traditions flourished, where hearts remained bound by love, where stories passed from lips to eager ears, where wisdom was found in simplicity, where kindness was the language of the soul, where memories were woven into the fabric of everyday life, where happiness was measured in moments shared, where life thrived in the beauty of togetherness."
    ]
export default function Typer() {
  const [userInput, setUserInput] = useState("");
  const [targetSentence, setTargetSentence] = useState("");
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const getRandomSentence = useCallback(() => {
    const rand = Math.floor(Math.random() * sentences.length);
    return sentences[rand];
  }, []);

  useEffect(() => {
    setTargetSentence(getRandomSentence());
  }, [getRandomSentence]);

  useEffect(() => {
    if (isTyping) {
      const intervalID = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(intervalID);
    }
  }, [isTyping]);

  useEffect(() => {
    setIsTyping(userInput.length > 0 && userInput.length < targetSentence.length);
  }, [userInput, targetSentence.length]);

  const correctChars = userInput.split("").reduce((acc, char, index) => {
    return acc + (char === targetSentence[index] ? 1 : 0);
  }, 0);

  const errorsCount = userInput.length - correctChars;

  const accuracy =
    userInput.length > 0 ? Math.round((correctChars / userInput.length) * 100) : 0;

  const wpm =
    timeElapsed > 0 ? Math.round((correctChars / 5) / (timeElapsed / 60)) : 0;

  let currentStreak = 0;
  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] === targetSentence[i]) currentStreak++;
    else break;
  }

  const handleReset = useCallback(() => {
    setUserInput("");
    setTimeElapsed(0);
    setIsTyping(false);
    setTargetSentence(getRandomSentence());
  }, [getRandomSentence]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "r") {
        e.preventDefault();
        handleReset();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleReset]);

  const formattedTime = `${Math.floor(timeElapsed / 60)
    .toString()
    .padStart(2, "0")}:${(timeElapsed % 60).toString().padStart(2, "0")}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 relative">
      <div className="flex items-center justify-between px-6 py-4 bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="flex items-center space-x-4">
          <div className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
            <TypeWriter className="w-6 h-6 text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Typemonkey
          </h2>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-end">
            <span className="text-sm text-purple-200">Time: {formattedTime}</span>
            <span className="text-sm text-pink-200">WPM: {wpm}</span>
          </div>
          <button
            onClick={handleReset}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all group relative"
          >
            <Restart className="w-6 h-6 text-purple-400" />
            <span className="absolute -bottom-8 right-0 bg-black/80 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              Reset (Ctrl + R)
            </span>
          </button>
        </div>
      </div>

      <div className="max-w-8xl mx-auto pt-20 px-4">
        <div className="h-1.5 bg-white/10 rounded-full mb-8">
          <div
            className="h-full bg-purple-400 rounded-full transition-all duration-300"
            style={{
              width:
                targetSentence.length === 0
                  ? "0%"
                  : `${(userInput.length / targetSentence.length) * 100}%`,
            }}
          />
        </div>
        <div className="relative group w-full"> 
  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
  <div className="relative bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all">
    <p className="text-3xl text-center leading-relaxed text-white/90">
      {targetSentence.split("").map((char, index) => {
        let colorClass = "text-white/90";
        if (index < userInput.length) {
          colorClass =
            userInput[index] === char ? "text-green-400" : "text-red-400";
        } else if (index === userInput.length) {
          colorClass = "text-purple-300 underline";
        }
        return (
          <span key={index} className={colorClass}>
            {char}
          </span>
        );
      })}
    </p>
  </div>
</div>


        <div className="mt-12 flex justify-center">
          <input
            type="text"
            value={userInput}
            onChange={(e) => {
              if (e.target.value.length <= targetSentence.length) {
                setUserInput(e.target.value);
              }
            }}
            maxLength={targetSentence.length}
            className="w-full max-w-2xl bg-white/5 backdrop-blur-lg border border-white/20 rounded-lg py-4 px-6 text-xl text-white/90 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all placeholder:text-white/40"
            placeholder="Start typing here..."
            autoFocus
          />
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="bg-white/5 p-4 rounded-lg">
            <div className="text-sm text-purple-300">Accuracy</div>
            <div className="text-2xl font-bold text-pink-400">{accuracy}%</div>
          </div>
          <div className="bg-white/5 p-4 rounded-lg">
            <div className="text-sm text-purple-300">Errors</div>
            <div className="text-2xl font-bold text-pink-400">{errorsCount}</div>
          </div>
          <div className="bg-white/5 p-4 rounded-lg">
            <div className="text-sm text-purple-300">Streak</div>
            <div className="text-2xl font-bold text-pink-400">
              {currentStreak}
              {currentStreak > 5 && "🔥"}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 5 + 3}s infinite`,
            }}
          ></div>
        ))}
      </div> */}
    </div>
  );
}
