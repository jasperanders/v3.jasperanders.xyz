---
title: Improving the Infrastructure for Economic Experiments
when: 2021
type: University Project
# img: icons/arrows-spin-solid.svg
tags: ["DevOps", "CI/CD", "Kubernetes", "Docker", "GitLab" ]
---

The KIT (my university) runs a [lab](https://www.kd2lab.kit.edu/) where researchers can conduct economics experiments. Originally, these experiments were created using [oTree](https://otree.org), a python library, and put onto a server using basic `ftp`. Experiments were running concurrently and were started and stopped manually by multiple, untrained users. This led to many errors and created constant fear of data loss. A situation that could not be sustained, and a perfect reason to get myself familiar with DevOps. My goal was to create a more user-friendly setup for these experiments.

Using my results, deployment of new experiments follows a simple user story:

1. A user forks a base project on the university's GitLab.
2. The user pushes their code to the new repo. A CI/CD pipeline is automatically triggered. If it succeeds, the user can deploy their experiment with the press of a button.
3. After deployment, the application is accessible via HTTPS and a specified subdomain.
4. In case the user changes something, these changes trigger a new pipeline. After it succeeds, the user can also deploy these changes.
5. After the experiment is done, the users can easily delete their experiment from the cluster.

The main technologies I used were Docker for creating container images, Kubernetes for orchestration, GitLab as the main user interaction point and for its CI capabilities. Further, each oTree experiment itself uses Python and Postgres as its underling database. For this project I learned a lot of new and exciting things, if you want to read more, you can find [detailed documentation here](https://devops.jasperanders.xyz).