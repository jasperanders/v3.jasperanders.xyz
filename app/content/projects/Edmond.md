---
title: Slack Bot for Coffee Date Matching 
when: 2022
type: Personal Project
img: https://slack.dev/bolt-python/assets/bolt-py-logo.svg
tags: ["Slack Api and Bolt", "Python"]
---

Interaction of colleagues and exchange of experience is important in every working environment. Random coffee dates between two people can achieve exactly that. Unfortunately, creating matches is not trivial. For a given number of matches, we don't want people to meet twice. Also, we want to avoid matches of people that work closely together. It is very apparent that matching by hand is not an option. Also, naive approaches fail quickly. Just picking two pairs at random and checking if they are valid is not an option

  

Luckily, a mathematician by the name Jack Edmonds ran into a similar problem and created an algorithm to solve it. I wanted to make this matching algorithm easy to use and because many people who work together in large teams use Slack, I decided to build a Slack Bot that helps you in creating coffee dates. The bot prompts you just specify the amount of matches you want and then select the channels (teams) you want to match. The bot will then send a message containing their matches to everybody involved.

  

The next step for this small project is to deploy it as an AWS Lambda. For this special case, some problems with continuity still have to be solved. Ultimately, it should be available as a public Slack app. Take a look at the [git repo](https://github.com/jasperanders/EdmondsCoffeeDate) to see it in action and for more documentation.