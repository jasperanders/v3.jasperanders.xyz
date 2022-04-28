import GitHub from "public/icons/github-brands.svg"
import Linkedin from "public/icons/linkedin-brands.svg"
import AngleDown from "public/icons/angle-down-solid.svg"

export default function Header() {
  return (
    <div className="h-screen flex flex-col justify-around bg-gradient-to-tl	from-white to-emerald-100 self-stretch">
      <div className="grid justify-items-center sm:grid-cols-7 items-center place-content-center mt-56">
        <div className="col-span-3 justify-self-end">
          <p className="text-3xl pl-2 text-right">Hi, I'm</p>
          <h1 className="text-right text-7xl font-bold text-blue-600">Jasper <br /> Anders</h1>
        </div>
        <div className="border-l-4 border-l-gray-800 w-0 h-4/5" />
        <div className="flex flex-col justify-around col-span-2 justify-self-start">
          <div className="flex flex-row">
            {[{ src: GitHub, url: "https://github.com/jasperanders" }, { src: Linkedin, url: "https://www.linkedin.com/in/jasper-anders/" }].map((social) => (
              <div className="m-1" key={social.src}>
                <a href={social.url}>
                  <img className="w-7" src={social.src}></img>
                </a>
              </div>
            ))}
          </div>
          <p className="text-xl">Student @ KIT</p>
          <p>Currently looking @Remix</p>
        </div>
      </div>
      <blockquote className="mx-auto max-w-md text-lg p-5 italic">We must make every effort to ensure that digitization is an
        opportunity for everyone. That is why I want to contribute to the development of digital infrastructure for society.</blockquote>
      <img className="animate-bounce mx-auto h-8 items-end" src={AngleDown}></img>
    </div >
  )
}

