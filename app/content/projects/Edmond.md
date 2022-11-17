---
title: Organizing Personal Meetings in Large Teams  
when: 2022
type: Personal Project
#img: https://slack.dev/bolt-python/assets/bolt-py-logo.svg
tags: ["Slack API and Bolt", "Python"]
---

Interaction between colleagues and exchange of experience is important in every working environment. Random coffee chats between two people can achieve exactly that. Unfortunately, creating optimal matches is not trivial. For a given number of matches, we don't want people to meet twice. Also, we want to avoid matches of people that work closely together. It is very apparent that manual matching is not an option. Also, naive approaches fail quickly. Just picking two pairs at random and checking if they are valid is not an option.   

Luckily, the mathematician Jack Edmonds ran into a similar problem and created an algorithm to solve it. I wanted to make this matching algorithm easy to use. Because many people who work together in large teams use Slack, I decided to build a Slack Bot that helps in creating coffee chats. 

The bot gives a prompt to specify the amount of desired matches. Further it asks for the channels (teams) it should match. The bot will then send a message containing the matches to everybody involved.

Take a look at the [git repo](https://github.com/jasperanders/EdmondsCoffeeDate) to see it in action and for more documentation. If you just quickly want to create some matches, you can find a demo page [here](https://edmonds-coffee-matches.fly.dev/).