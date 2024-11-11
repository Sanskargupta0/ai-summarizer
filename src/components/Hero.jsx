import { logo } from "../assets";
import DarkMode from "./DarkMode";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="summarizer logo"
            className="h-9 object-contain"
          />
          <p className="text-3xl text-white font-extrabold light_mode">
            Summarizer
          </p>
        </div>

        <div className="flex gap-8 items-center">

        <DarkMode />

        <button
          type="button"
          onClick={() => window.open("https://github.com/Sanskargupta0")}
          className="black_btn"
        >
          GitHub
        </button>
        </div>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="purple_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Experience effortless reading with AI Summarizer, a powerful open-source
        tool that condenses lengthy articles into concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
