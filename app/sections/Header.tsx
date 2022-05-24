import GitHub from "public/icons/github-brands.svg"
import Linkedin from "public/icons/linkedin-brands.svg"
import AngleDown from "public/icons/angle-down-solid.svg"
import Me from "public/img/MeSun.jpg"
import { useEffect, useState } from "react"

const words = [
  "a full stack developer",
  "passionate about learning.",
  "an expert search engine user.",
]

export default function Header() {

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  useEffect(() => {

    if (
      subIndex === words[index].length + 1
      && !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      console.log(index)
      if (index >= words.length - 1) {
        setIndex(0)
      } else {
        setIndex((prev) => prev + 1);
      }
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 20 : subIndex === words[index].length ? 2500 : 100));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBlink(!blink)
    }, 350)
    return () => clearTimeout(timeout);
  })

  return (
    <div className="static h-screen bg-gradient-to-b from-white to-sky-200 self-stretch text-slate-700 gap-5">
      {/* The invisible div keeps the name more centered */}
      <Sticky />
      <Social />
      <div className="grid grid-cols-2 items-stretch justify-around">
        <Hero />
        <div className="place-self-stretch flex flex-col items-center justify-around">
          <div className="container max-w-xl">
            <h1 className="leading-tight font-bold italic text-rose-400 text-left text-7xl sm:leading-tight sm:text-9xl xl:text-5xl xl:leading-tight">
              I am {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
            </h1>
          </div>
          <img alt="scroll down" width={"32px"} height={"32px"} className="animate-bounce self-center h-8 w-8 items-end" src={AngleDown}></img>
        </div>
      </div>
      {/* 
      <iv className="flex flex-col">
        <div className=" col-span-7 sm:col-span-3 sm:justify-self-end">
          <p className="text-3xl pl-2 text-center">Jasper Anders is</p>
          <div className="flex place-content-center place-items-center gap-10 -translate-x-10">
          </div>
        </div>
        // {/* <div className="border-l-4 border-l-gray-800 w-0 h-4/5 hidden sm:block" /> 
        <div className="flex flex-col justify-around col-span-7 sm:col-span-2 justify-self-start">
          <p className="sm:text-xl text-center">Student of <br />Information Systems @ KIT</p>
          {/* <p className="text-center sm:text-left">Currently looking @Remix</p> 
        </div>
      </div>
      <blockquote className="mx-auto max-w-md sm:text-lg p-5 font-bold text-left italic">
        Advocate of trying.<br />
        Expert search engine user.<br />
        Constantly thinking about bad (and good) business ideas.
      </blockquote> */}
    </div >
  )
}

const Social = () => (<div className="absolute top-5 right-5 flex">
  {[{ src: GitHub, url: "https://github.com/jasperanders" }, { src: Linkedin, url: "https://www.linkedin.com/in/jasper-anders/" }].map((social) => (
    <div className="m-1" key={social.src}>
      <a href={social.url}>
        <img alt={social.url} width={"32px"} height={"32px"} className="w-6 h-6 sm:h-8 sm:w-8" src={social.src}></img>
      </a>
    </div>
  ))}
</div>)

const Hero = () => (
  <img className="h-screen rounded-br-[100px] shadow-slate-700 shadow-sm" src={Me} />
)

const Sticky = () => (<div className="z-10 fixed top-5 left-5">
  <h2 className="text-[#232c42] font-bold italic text-5xl">Jasper Anders</h2>
</div>)