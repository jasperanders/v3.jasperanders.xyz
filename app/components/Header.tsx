import GitHub from "public/icons/github-brands.svg"
import Linkedin from "public/icons/linkedin-brands.svg"
import AngleDown from "public/icons/angle-down-solid.svg"

export default function Header() {
  return (
    <div className="h-screen flex flex-col justify-around bg-gradient-to-tl	from-white to-emerald-100 self-stretch">
      <div className="invisible" />
      <div className="grid justify-items-center sm:grid-cols-7 items-center place-content-center gap-5">
        <div className=" col-span-7 sm:col-span-3 sm:justify-self-end">
          <p className="text-3xl pl-2 text-center sm:text-right">Hi, I'm</p>
          <h1 className="leading-tight font-bold italic text-blue-600 text-center sm:text-right text-5xl sm:text-7xl xl:text-9xl xl:leading-tight">Jasper <br /> Anders</h1>
        </div>
        <div className="border-l-4 border-l-gray-800 w-0 h-4/5 hidden sm:block" />
        <div className="flex flex-col justify-around col-span-7 sm:col-span-2 justify-self-start">
          <div className="flex flex-row justify-center sm:justify-start">
            {[{ src: GitHub, url: "https://github.com/jasperanders" }, { src: Linkedin, url: "https://www.linkedin.com/in/jasper-anders/" }].map((social) => (
              <div className="m-1" key={social.src}>
                <a href={social.url}>
                  <img className="w-7" src={social.src}></img>
                </a>
              </div>
            ))}
          </div>
          <p className="text-xl text-center sm:text-left">Student @ KIT</p>
          {/* <p className="text-center sm:text-left">Currently looking @Remix</p> */}
        </div>
      </div>
      <blockquote className="mx-auto max-w-md sm:text-lg p-5 italic">We must make every effort to ensure that digitization is an
        opportunity for everyone. That is why I want to contribute to the development of digital infrastructure for society.</blockquote>
      <img className="animate-bounce mx-auto h-8 items-end" src={AngleDown}></img>
    </div >
  )
}

