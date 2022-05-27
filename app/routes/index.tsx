import { Footer } from "~/components/Footer";
import Header from "~/sections/Header";
import Education from "~/sections/Education";
import Experience from "~/sections/Experience";
import { Projects } from "~/sections/Projects";
import { Skills } from "~/sections/Skills";
import Personal from "~/sections/Personal";

export default function Index() {
  return (
    <div className="flex flex-col gap-20 bg-sky-200">
      <Header />
      <div className="px-5 grid items-stretch mx-auto flex-col gap-20">
        <Projects />
        <Experience />
        <Education />
        <Skills />
        {/* <div className="mx-auto">
          <Personal />
        </div> */}
      </div>
      <Footer />
    </div>
  );
}
