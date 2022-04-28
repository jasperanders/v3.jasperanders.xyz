---
title: Webdesign for sustainXchange
when: 2020
at: sustainXchange
atURL: 
type:
tags: ["Gatsby js", "React", "CMS"]
---

I created the website for an association I was part of. For this I used [Gatsby](https://gatsbyjs.com), a static site generator based on React. One feature made it especially appealing to me: Gatsby uses graphql to that makes it easy to query static files - specifically Markdown. This allowed me to set up Github as a CMS. Changing some content on our website is just a change in a Markdown file. Adding a Blog entry is as easy as creating a markdown. All these steps could be done on the Github website, so nobody needed to install any tools. The repo is connected to [render.com](https://render.com), a platform similar to [Vercel](https://vercel.com) or [Netlify](https://netlify.com), allowing for instant deployment of changes.   

For us this hit the perfect middle ground between me having to make all the changes and having to deal with the overhead of an actual CMS. Anther nice addon was, that we didn't have to deal with user authentication, as Github already handled this.

At some point we decided to also provide our website in english. This was definitely the hardest part, as I struggled with cached version and service workers. Luckily there already was a strong abstraction of logic and content. Just adding the translated content was a breeze. 

Check out the Website [here](https://sustainxchange.org/en/), you can view the source code [here](https://github.com/jasperanders/sustainxchange-web).

---
title: Coffee Date Matching Slack Bot 
when: 2022
type: Personal Project
img: https://slack.dev/bolt-python/assets/bolt-py-logo.svg
tags: ["Slack Api and Bolt", "Python"]
---