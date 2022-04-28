import TS from 'public/toolIcons/ts-logo-512.svg'
import Docker from 'public/toolIcons/docker.webp'
import Remix from 'public/toolIcons/Remix.svg'
import Figma from 'public/toolIcons/Figma.svg'
import Slack from 'public/toolIcons/Slack.svg'
import Git from 'public/toolIcons/Git-logo.svg'

interface Skill {
  name: string,
  imgUrl: string,
  scale?: string,
  fontSize?: string,
}

const skills: Array<Skill> = [
  { name: "Type Script", imgUrl: TS, scale: '75' },
  { name: "Python", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png", scale: '75' },
  { name: "Docker", imgUrl: Docker },
  { name: "Kubernetes", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1024px-Kubernetes_logo_without_workmark.svg.png", scale: '75', fontSize: "xl" },
  { name: "Remix", imgUrl: Remix },
  { name: "React", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png" },
  { name: "Django", imgUrl: "https://static.djangoproject.com/img/logos/django-logo-positive.svg" },
  { name: "Git", imgUrl: Git },
  { name: "Notion", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png?20200221181224", scale: "75" },
  { name: "Figma", imgUrl: Figma, scale: '50' },
  { name: "Latex", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/9/92/LaTeX_logo.svg" },
  { name: "Slack SDK", imgUrl: Slack },
  { name: "GitLab CI", imgUrl: "https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png" },
]

export function Skills() {
  // { skills }: { skills?: Array<Skill> }
  return (
    <div className='flex flex-col gap-10 justify-center'>
      <h1 className="text-2xl font-bold">Some tools I have used:</h1>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-10">
        {skills.map((skill) => (
          <div key={skill.name} className="group aspect-square h-28 flex items-center justify-center relative">
            <div className={`text-${skill.fontSize ? skill.fontSize : "2xl"} text-center text-indigo-600 font-bold invisible group-hover:visible z-10`}>{skill.name}</div>
            <img className={`scale-${skill.scale ? skill.scale : "100"} group-hover:blur-md group-hover:brightness-125 group-hover:saturate-50 absolute left-0`} alt={skill.name} src={skill.imgUrl} />
          </div>
        ))}
      </div>
    </div>
  )
}
