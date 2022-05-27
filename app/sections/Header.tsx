import GitHub from "public/icons/github-brands.svg"
import Linkedin from "public/icons/linkedin-brands.svg"
import AngleDown from "public/icons/angle-down-solid.svg"
import Me from "public/img/MeBW.jpg"
import Signature from "public/img/sign.svg"
import { useEffect, useState } from "react"

const words = [
  "a full stack developer",
  "passionate about learning.",
  "an expert search engine user.",
]

export default function Header() {

  // const [index, setIndex] = useState(0);
  // const [subIndex, setSubIndex] = useState(0);
  // const [blink, setBlink] = useState(true);
  // const [reverse, setReverse] = useState(false);

  // // typeWriter
  // useEffect(() => {

  //   if (
  //     subIndex === words[index].length + 1
  //     && !reverse
  //   ) {
  //     setReverse(true);
  //     return;
  //   }

  //   if (subIndex === 0 && reverse) {
  //     setReverse(false);
  //     console.log(index)
  //     if (index >= words.length - 1) {
  //       setIndex(0)
  //     } else {
  //       setIndex((prev) => prev + 1);
  //     }
  //     return;
  //   }

  //   const timeout = setTimeout(() => {
  //     setSubIndex((prev) => prev + (reverse ? -1 : 1));
  //   }, Math.max(reverse ? 20 : subIndex === words[index].length ? 2500 : 100));

  //   return () => clearTimeout(timeout);
  // }, [subIndex, index, reverse]);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setBlink(!blink)
  //   }, 350)
  //   return () => clearTimeout(timeout);
  // })

  return (
    <div className="static bg-gradient-to-b from-white to-sky-200 text-slate-700 gap-5">
      {/* The invisible div keeps the name more centered */}
      <Sticky />
      <div className="min-h-screen flex flex-col lg:flex-row gap-10 items-center">
        <Hero />
        <div className="flex flex-col lg:translate-y-10 mx-auto justify-between lg:h-[70vh]">

          <blockquote className="mx-auto max-w-2xl text-xl sm:text-2xl p-5 font-bold text-left italic overflow-hidden lg:translate-y-32">
            I'm thinking critical about structural problems.
            My approach to solving these problems is hands-on and output-focus.
            Using my interdisciplinary skill set, I always have an eye for the bigger picture.
            <div className="max-w-sm md:max-w-lg md:-translate-y-25 sm:translate-x-10">
              <img src={Signature} />
            </div>
          </blockquote>
          <img alt="scroll down" width={"32px"} height={"32px"} className="animate-bounce self-center h-8 w-8 items-end" src={AngleDown}></img>
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
 */}
      </div>
    </div >
  )
}

const Hero = () => (
  <img className="max-h-[50vh] lg:max-h-[60vh] xl:max-h-[80vh] rounded-full lg:rounded-l-[100px] shadow-slate-700 shadow-md" src={Me} />
)

const Sticky = () => (
  <div className="z-10 w-full sticky lg:fixed top-0 p-5 pr-8 bg-white flex justify-between">
    <h1 className="text-[#232c42] font-bold italic text-3xl mr-5 sm:text-5xl">Jasper Anders</h1>
    <div className="flex flex-col sm:flex-row items-center">
      <div className="mx-4" key={"blog"}>
        <a className="text-2xl font-bold" target="_blank" href={"https://marginalien.jasperanders.xyz"}>
          Blog
        </a>
      </div>
      <div className="flex mt-4 sm:m-0">

        {[{ src: GitHub, url: "https://github.com/jasperanders" }, { src: Linkedin, url: "https://www.linkedin.com/in/jasper-anders/" }].map((social) => (
          <div className="mx-1" key={social.src}>
            <a href={social.url} target="_blank">
              <img alt={social.url} width="32px" className="w-6 h-6 sm:h-8 sm:w-8" src={social.src} />
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>)