import Header from "~/components/Header";
import Education from "~/sections/Education";
import Experience from "~/sections/Experience";
import { Skills } from "~/sections/Skills";

export default function Index() {
  return (
    <div className="flex flex-col gap-20 items-center">
      <Header />
      <div className="mx-auto container columns-1 lg:columns-2 gap-10 px-5">
        <Experience />
        <Education />
      </div>
      <div className="container flex place-content-center">
        <Skills />
      </div>
      <div>Projects</div>
    </div>
  );
}
