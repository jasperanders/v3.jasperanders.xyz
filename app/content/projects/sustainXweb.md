---
title: Webdesign for sustainXchange
when: 2020
at: sustainXchange
img: icons/sustanXlogoSquare-v1_7.svg
type: Personal Project
tags: ["Gatsby js", "React", "CMS"]
---

I created the website for an association I was part of. For this, I used [Gatsby](https://gatsbyjs.com), a static site generator based on React. One feature made it especially appealing to me: Gatsby uses GraphQL to query static files - specifically Markdown. This allowed me to set up GitHub as a CMS. Changing some content on our website is just a change in a Markdown file. Adding a blog entry is as easy as creating a such a file. Everything can be done on the GitHub website, nobody needed to install any tools. The repo is connected to [render.com](https://render.com), a platform similar to [Vercel](https://vercel.com) or [Netlify](https://netlify.com), allowing for instant deployment of changes.

For us, this hit the perfect middle ground between me having to make all the changes and having to deal with the overhead of an actual CMS. Further, using GitHub as an interface, we didn't have to deal with user authentication.

At some point, we decided to also provide our website in English. This was definitely the hardest part, as I struggled with cached version and service workers. Luckily, there already was a strong abstraction of logic and content. Just adding the translated content was a breeze.

Check out the Website [here](https://sustainxchange.org/en/), you can also view the source code [here](https://github.com/jasperanders/sustainxchange-web).