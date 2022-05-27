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
  { name: "Type Script", imgUrl: TS, scale: 'sm' },
  { name: "Python", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png", scale: 'sm' },
  { name: "Docker", imgUrl: Docker },
  { name: "GraphQl", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png", scale: "sm" },
  { name: "Kubernetes", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1024px-Kubernetes_logo_without_workmark.svg.png", scale: 'sm', fontSize: "xl" },
  { name: "Remix", imgUrl: Remix },
  { name: "React", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png" },
  { name: "Django", imgUrl: "https://static.djangoproject.com/img/logos/django-logo-positive.svg" },
  { name: "Chakra UI", imgUrl: "https://avatars.githubusercontent.com/u/54212428?s=200&v=4", scale: "sm" },
  { name: "Tailwind CSS", imgUrl: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg", scale: "sm" },
  { name: "Git", imgUrl: Git },
  { name: "Notion", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png?20200221181224", scale: "sm" },
  { name: "Obsidian", imgUrl: "https://avatars.githubusercontent.com/u/65011256?s=200&v=4" },
  { name: "Figma", imgUrl: Figma, scale: 'xs' },
  { name: "Linux", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg", scale: "sm" },
  { name: "Latex", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/9/92/LaTeX_logo.svg" },
  { name: "Slack SDK", imgUrl: Slack },
  { name: "GitLab CI", imgUrl: "https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png" },

]

export function Skills() {
  // { skills }: { skills?: Array<Skill> }
  return (
    <div >
      <h2 className="text-3xl text-slate-700 font-bold italic mb-8">On My Tool Belt</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 shadow-lg bg-white rounded-3xl p-5">
        {skills.map((skill) => (
          <div key={skill.name} className="group w-28 h-28 flex items-center justify-center relative">
            <div className={`text-${skill.fontSize ? skill.fontSize : "2xl"} text-center font-bold invisible group-hover:visible z-10`}>{skill.name}</div>
            <img alt={skill.name} width={"112px"} height={"112px"} className={`${skill.scale === "sm" && `scale-75`} ${skill.scale === "xs" && `scale-50`} group-hover:blur-md group-hover:brightness-125 group-hover:saturate-50 absolute left-0`} alt={skill.name} src={skill.imgUrl} />
          </div>
        ))}
      </div>
    </div>
  )
}
