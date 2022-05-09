import GitHub from "public/icons/github-brands.svg"
import Linkedin from "public/icons/linkedin-brands.svg"
import AngleDown from "public/icons/angle-down-solid.svg"

export default function Header() {
  return (
    <div className="static h-screen flex flex-col justify-around bg-gradient-to-b	 from-emerald-100 to-white self-stretch">
      {/* The invisible div keeps the name more centered */}

      <div className="absolute top-5 right-5 flex">
        {[{ src: GitHub, url: "https://github.com/jasperanders" }, { src: Linkedin, url: "https://www.linkedin.com/in/jasper-anders/" }].map((social) => (
          <div className="m-1" key={social.src}>
            <a href={social.url}>
              <img className="w-6 sm:w-8" src={social.src}></img>
            </a>
          </div>
        ))}
      </div>
      <div className="invisible" />
      <div className="flex flex-col">
        <div className=" col-span-7 sm:col-span-3 sm:justify-self-end">
          <p className="text-3xl pl-2 text-center">Hi, I'm</p>
          <h1 className="leading-tight font-bold italic text-blue-600 text-center text-7xl sm:leading-tight sm:text-9xl xl:text-9xl xl:leading-tight">Jasper <br /> Anders</h1>
        </div>
        {/* <div className="border-l-4 border-l-gray-800 w-0 h-4/5 hidden sm:block" /> */}
        <div className="flex flex-col justify-around col-span-7 sm:col-span-2 justify-self-start">
          <p className="sm:text-xl text-center">Student of <br />Information Systems @ KIT</p>
          {/* <p className="text-center sm:text-left">Currently looking @Remix</p> */}
        </div>
      </div>
      <blockquote className="mx-auto max-w-md sm:text-lg p-5 italic">We must make every effort to ensure that digitization is an
        opportunity for everyone. That is why I want to contribute to the development of digital infrastructure for society.</blockquote>
      <img className="animate-bounce mx-auto h-8 items-end" src={AngleDown}></img>
    </div >
  )
}

