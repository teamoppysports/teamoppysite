---
title: Tagger - Configure Events
description: The first in a series of blogs to describe how to configure events.
image: /images/blog/tagger-events/10-select-position.png
publishedAt: 2023-01-20
author:
  name: Teamoppy Sports
  avatarUrl: /tsavatar.svg
  link: https://twitter.com/teamoppy

tags:
  - Events
  - Event Groups
  - Configuration
  - Tag
---

## Introduction

Events are at the core of everything within Tagger. It is important to decide what you would like to tag during a game, what you would like to understand from the tagged events and how you would like to tag the events. Recently Tagger has introduced a new event data model to allow for a simpler yet more flexible and powerful event process. 

Previously (v1) the Event model was structured as follows:

- Event (e.g. Shot)
- Event Type (single attribute to describe the event e.g. From Play, From Free Kick, etc..)
- Event Outcome (single attribute to describe the outcome of the event e.g. Goal, Off Target, etc...)

<br>

The latest (v2) Event model is now structured as follows:

- Event (e.g. Shot)
- Event Labels (multiple attributes to describe the event, e.g. a label to describe the Shot Type - From Play, From Free Kick, etc.., a label to describe the Body Part - Left Foot, Right Foot, etc.. )
- Event Links (a link to another Event - this replaces the older Outcome object - now a Shot event would be "linked" to a Goal event)
- Event Accelerators (shortcuts to select one or more pre-selected Events and Labels)

<br>

In this blog series we will focus on the multiple ways to configure the events with the v2 event model.

For the purposes of this blog I have started with a blank canvas Football configuration. The only things configured are the General configuration items, the Playing Area Graphics (Pitch and Goals) configs and the zone configs.

## Configure a Shot event

### Create an Event Group

- Every event needs to be part of an Event Group so our first step is to create an Event Group as follows. In the Event Configuration -> Event Group section click on New 

<br>
<p align="center">
<img src="/images/blog/tagger-events/01-event-groups-new.png" alt="drawing" width="90%"/>
</p>

- Give it a Name and Save

<br>
<p align="center">
<img src="/images/blog/tagger-events/02-event-groups-create.png" alt="drawing" width="50%"/>
</p>

- Event Group is now created.

<br>
<p align="center">
<img src="/images/blog/tagger-events/03-event-groups-done.png" alt="drawing" width="50%"/>
</p>

### Create the Event

- In the Event Configuration -> Event section click on New 

<br>
<p align="center">
<img src="/images/blog/tagger-events/04-event-new.png" alt="drawing" width="90%"/>
</p>

- To begin with we will specify a Name, the Event Group that we created in the previous step, a color for the button, we will specify that a Player needs to be selected before we can select the Shot button, we want to track the shot position so we select the "Specify Position for event" option and the Playing Area.

<br>
<p align="center">
<img src="/images/blog/tagger-events/05-event-create.png" alt="drawing" width="90%"/>
</p>

- Click Save and we can see that our Event has now been created.

<br>
<p align="center">
<img src="/images/blog/tagger-events/06-event-done.png" alt="drawing" width="90%"/>
</p>

- Now if we go to our Tagger page we can see that we now have a Group called Attacking which contains the Shot Event button.

<br>
<p align="center">
<img src="/images/blog/tagger-events/07-tagger-page.png" alt="drawing" width="90%"/>
</p>

- As we are required to select a Player before we can select the Shot, the shot button will be disabled. Start the Timer, then select a Player and the Shot button will now be available to select.


<br>
<p align="center">
<img src="/images/blog/tagger-events/08-start-timer.png" alt="drawing" width="90%"/>
</p>

- Select the player and we can see that the Shot button is now available to select.

<br>
<p align="center">
<img src="/images/blog/tagger-events/09-select-player.png" alt="drawing" width="90%"/>
</p>

- Select the Shot button and the Pitch graphic is displayed. We can now select the position where the shot was taken from.

<br>
<p align="center">
<img src="/images/blog/tagger-events/10-select-position.png" alt="drawing" width="90%"/>
</p>

- Click on the graphic to select the position and the Event is now saved and we can see the entry in the Events table below. You can view and edit (to correct a mistake) the event.

<br>
<p align="center">
<img src="/images/blog/tagger-events/11-event-instance-saved.png" alt="drawing" width="90%"/>
</p>

