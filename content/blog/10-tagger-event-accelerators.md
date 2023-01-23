---
title: Tagger - Configure Event Accelerators
description: The fourth in a series of blogs to describe how to configure events. This blog focuses on Event Accelerators.
image: /images/blog/tagger-event-accelerators/07-accel-buttons-in-tagger.png
publishedAt: 2023-01-23
author:
  name: Teamoppy Sports
  avatarUrl: /tsavatar.svg
  link: https://twitter.com/teamoppy

tags:
  - Events
  - Event Accelerators
  - Configuration
  - Tag
---

## Introduction

Event Accelerators are used to speed up the tagging process by automatically selecting Events and Labels with a one button click. For example we could create an event accelerator button that when pressed will automatically create a shot event with the Shot Type label option From Play selected and the Body Part label option Right Foot selected and also create an event for a Goal. So a one-click button for a right footed goal from play.

This is a very powerful feature in particular for live match tagging when speed of tagging is essential.

<ul>
<em>Note: For this blog I have hidden the Shot Outcomes created the previous blogs.</em>
</ul>

## Create a new Group

First let's create a new Group for our accelerators. Let's call it "Right Footed Shots From Play".

## Create a new Accelerator

In the Events Configuration -> Accelerators section click on the New button to create an accelerator.

<br>
<p align="center">
<img src="/images/blog/tagger-event-accelerators/01-new-accelerator.png" alt="drawing" width="90%"/>
</p>

Give it a name called "Goal" and set the group to "Right Footed Shots From Play".

<br>
<p align="center">
<img src="/images/blog/tagger-event-accelerators/02-accel-details.png" alt="drawing" width="90%"/>
</p>

### Set the Events for the Accelerator

First add the Shot event and set the Shot Type label to Open Play. Also set the Body Part label to Right Foot.

<br>
<p align="center">
<img src="/images/blog/tagger-event-accelerators/03-accel-event1.png" alt="drawing" width="90%"/>
</p>

And then add the Goal event.

<em> Remember, we had created these events in our previous blogs </em>

<br>
<p align="center">
<img src="/images/blog/tagger-event-accelerators/04-accel-event2.png" alt="drawing" width="90%"/>
</p>


It should look like this.

<br>
<p align="center">
<img src="/images/blog/tagger-event-accelerators/05-accel-ready.png" alt="drawing" width="90%"/>
</p>

Repeat the above steps to create one more acceletor for "Saved".


<br>
<p align="center">
<img src="/images/blog/tagger-event-accelerators/06-accel-goal-and-saved.png" alt="drawing" width="90%"/>
</p>

## Tag the events in Tagger

Now, if we go back to our Tagger page, we can now see our two accelerator buttons Goal and Saved in the "Right Footed Shots From Play" group.

<br>
<p align="center">
<img src="/images/blog/tagger-event-accelerators/07-accel-buttons-in-tagger.png" alt="drawing" width="90%"/>
</p>

Click on the Goal button and then click the position of the shot in the Pitch map. Events are saved.

<br>
<p align="center">
<img src="/images/blog/tagger-event-accelerators/08-accel-events-saved.png" alt="drawing" width="90%"/>
</p>

So with 2 clicks (one for the accelerator button and the second to select the shot position) we were able to create 2 events with 2 labels and a position selected!


## Summary

You can see how powerful Event Accelerators are and can really speed up the tagging process which is invaluable during live tagging.

This is the final blog in our series describing how to configure Events, Groups, Labels, links, and Accelerators. Tagger provides alot of options for tagging events - it is important to understand the options and to design your configuration accordingly. For any questions on any of these blogs please reach out to us. Thank you for reading. Stay tuned for more blogs in the future.
