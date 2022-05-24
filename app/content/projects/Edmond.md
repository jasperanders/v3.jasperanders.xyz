---
title: Slack Bot for  Coffee Date Matching 
when: 2022
type: Personal Project
img: https://slack.dev/bolt-python/assets/bolt-py-logo.svg
tags: ["Slack Api and Bolt", "Python"]
---

Interaction of colleagues and exchange of experience is important in every working environment. Random coffee dates between two people can achieve exactly that. Unfortunately, creating matches is not trivial. For a given number of matches, we don't want people to meet twice. Also, we want to avoid matches of people that work closely together. It is very apparent that matching by hand is not an option. Also, naive approaches fail quickly. Just picking two pairs at random and checking if they are valid is not an option. 

Luckily, the mathematician Jack Edmonds ran into a similar problem and created an algorithm to solve it. I wanted to make this matching algorithm easy to use. Because many people who work together in large teams use Slack, I decided to build a Slack Bot that helps you in creating coffee dates. 

The bot prompts you to specify the amount of matches you want and the channels (teams) you want to match. The bot will then send a message containing the matches to everybody involved.

Take a look at the [git repo](https://github.com/jasperanders/EdmondsCoffeeDate) to see it in action and for more documentation.