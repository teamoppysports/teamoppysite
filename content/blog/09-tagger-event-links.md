---
title: Tagger - Configure Event Links
description: The third in a series of blogs to describe how to configure events. This blog focuses on Event Links.
image: /images/blog/tagger-event-labels/08-event-labels-tagger-labels-available.png
publishedAt: 2023-01-20
author:
  name: Teamoppy Sports
  avatarUrl: /tsavatar.svg
  link: https://twitter.com/teamoppy

tags:
  - Events
  - Event Links
  - Configuration
  - Tag
---

## Introduction


## Configure an Event Link

In the previous blogs we demonstrated how to configure and tag a Shot event and add Event Labels. In this blog we will create more Events for Goal, Saved and Off Target and create an Event Link to link the previously configured Shot event with the newly created events (which are essentially the outcome events of the Shot).

### Configure the new Events

- In the Configuration page go to Event Configuration and as we did in [Tagger - Configure Events](/blog/07-tagger-events) we create events for Goal, Saved and Off Target. For these new Events we will put them in their own Event Group so create a group called "Shot Outcomes" first and then create the events.

    - For these events we will leave most fields unselected including the Primary Event field as we want these events to be "secondary" events that will be displayed when the Shot button is clicked.

<br>
<p align="center">
<img src="/images/blog/tagger-event-links/01-new-events.png" alt="drawing" width="90%"/>
</p>


- Once created it should look something like this:

<br>
<p align="center">
<img src="/images/blog/tagger-event-links/02-new-events-created.png" alt="drawing" width="90%"/>
</p>


### Configure the new Event Link

- The next step is to create a link between the Shot event and the newly created events for shot outcomes.
    - In the Event configuration page -> Event Links, click the New button to create a new link.


<br>
<p align="center">
<img src="/images/blog/tagger-event-links/03-new-event-link.png" alt="drawing" width="90%"/>
</p>


- Give the link a name e.g. "Shot to Outcomes". Specify Shot for the "From Event" and Goal, Saved and Off Target for the To Event. Leave the default value of One Way in the Link Direction field - this will be explained further later on but means that the direction of flow is currently from the Shot -> to the Goal, Saved or Off Target events. Click Save.

<br>
<p align="center">
<img src="/images/blog/tagger-event-links/04-event-link-details.png" alt="drawing" width="70%"/>
</p>

- Event Link is created.

<br>
<p align="center">
<img src="/images/blog/tagger-event-links/05-event-link-created.png" alt="drawing" width="70%"/>
</p>

- Now back in the Tagger page, click on the Player and then the Shot event.

<br>
<p align="center">
<img src="/images/blog/tagger-event-links/06-tagger-click-shot.png" alt="drawing" width="70%"/>
</p>

- The linked Events will now be available to select.

<br>
<p align="center">
<img src="/images/blog/tagger-event-links/07-tagger-linked-events-available.png" alt="drawing" width="70%"/>
</p>


- Click on one of the linked events e.g. Goal, and you will then be prompted to select the Labels for the events that you have selected. Once they are selected you will select the shot position as before.

<br>
<p align="center">
<img src="/images/blog/tagger-event-links/08-tagger-linked-events-click.png" alt="drawing" width="70%"/>
</p>

- After the event is saved you will then see that 2 new events have been saved in the Events table.

<br>
<p align="center">
<img src="/images/blog/tagger-event-links/09-tagger-linked-events-saved.png" alt="drawing" width="70%"/>
</p>

- What you may notice at this stage is that there is no Player assigned to the Goal event instance. Let's fix that by updating the Goal event to require a player to be selected.

<br>
<p align="center">
<img src="/images/blog/tagger-event-links/10-events-specify-player.png" alt="drawing" width="70%"/>
</p>

- Now we don't want to have to select the player twice when tagging the event so let's go to our Shot event and set the "Keep Player Active after Event Save" so that the player selected for the Shot will also be automatically selected for the Goal.

<br>
<p align="center">
<img src="/images/blog/tagger-event-links/11-events-keep-player-active.png" alt="drawing" width="70%"/>
</p>

- Now repeat the steps in the Tagger page to tag the Shot and Goal events. This time you will see that the player is assigned to both event instances.

<br>
<p align="center">
<img src="/images/blog/tagger-event-links/12-events-player-assigned-to-both.png" alt="drawing" width="70%"/>
</p>

### Change the Event Link direction

- Now let's change the direction of the Event Link that we created to two way - this means that we can now click on one of the outcome events Goal, Saved and Off Target and that will activate the Shot event. Now as the Event Link only has a single Event specified in the From Event then the Shot event will automatically be selected, thus saving us a click.

<br>
<p align="center">
<img src="/images/blog/tagger-event-links/13-event-link-two-way.png" alt="drawing" width="70%"/>
</p>

- Before we go back to the Tagger page, let's update the Shot event to unselect "Primary Event" and update the Goal, Saved and Off Target events to make them Primary so that they are available upfront in the Tagger page and also select the "Keep Player Active after Event Save" so that the Shot event will be assigned the same player.

<br>
<p align="center">
<img src="/images/blog/tagger-event-links/14-event-change-primary.png" alt="drawing" width="70%"/>
</p>

- In the Tagger page we can now see that the outcome events are available to select. Lets click on a Player and on the Saved button.

<br>
<p align="center">
<img src="/images/blog/tagger-event-links/15-tagger-events-displayed.png" alt="drawing" width="70%"/>
</p>

- Now select our labels for the events.

<br>
<p align="center">
<img src="/images/blog/tagger-event-links/16-tagger-prompted-for-labels.png" alt="drawing" width="70%"/>
</p>

- Our events are now saved as before (with one less click!).

<br>
<p align="center">
<img src="/images/blog/tagger-event-links/17-tagger-event-saved.png" alt="drawing" width="70%"/>
</p>

