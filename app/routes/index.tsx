import { Footer } from "~/components/Footer";
import Header from "~/components/Header";
import Education from "~/sections/Education";
import Experience from "~/sections/Experience";
import { Projects } from "~/sections/Projects";
import { Skills } from "~/sections/Skills";

export default function Index() {
  return (
    <div className="flex flex-col gap-20">
      <Header />
      <div className="px-5 flex  flex-col gap-20">
        <div className="mx-auto container columns-1 xl:columns-2 gap-10 pb-3">
          <Experience />
          <Education />
        </div>
        <div className="mx-auto" >
          <Projects />
        </div>
        <div className="container flex mx-auto place-content-center">
          <Skills />
        </div>
      </div>
      <Footer />
    </div>
  );
}
