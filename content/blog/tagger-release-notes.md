---
title: Tagger Release Notes
description: This is the main release note blog that describes changes that are made in the Tagger application.
image: /images/blog/tagger-release-notes/tagger_release_notes.png
publishedAt: 2022-12-02
author:
  name: Teamoppy Sports
  link: https://twitter.com/teamoppy
tags:
  - Event Tagging
  - Video
  - Graphics
---

## Jan 19, 2023

This update documents the following changes:
- New Sign Up and Subscription functionality
- New Data Model
- New Info Cards object for Dashboard
- Player game Time Tracker
- Synchronize data with video
- Default Player Event functionality
- XML Download
- Edit Event Instance

### New Sign Up and Subscription functionality

New sign up and sign in functionality has been added. A 60 day trial is in place after sign up. Basic subscription plan is available to subscribe to. Limited functionality in free mode.

### New Data Model

Instead of Event, Event Type and Event Outcome, we now have Event, Event Labels (multiple) and Event Links.

What this means is that you can now add multiple descriptive items to an Event in the form of an Event Label. For example a Shot event could have a label to specify the shot was from Open Play or Free Kick and also a label to specify if the player used his right foot or left foot - this is all configurable.

Event Links essentially replace the Event Outcome. So instead of a Shot Event having an Event Outcome of Goal or Off Target, these are now separate Events that are linked together via the Event Links. And means that you can also add labels to the outcome Event if you like. The user experience should be pretty much the same as before.

Also introduced Event Accelerators. These are essentially shortcuts to tag multiple events and labels using the one button. This would mean extra buttons on the screen but less clicks when tagging.

To use the new data model, go to the Preferences screen from the left hand menu. Then at the bottom change the data model version from v1 to v2. Shortly v2 will be the only option and v1 will be removed.

For existing games, when you import these into the app, they will automatically get converted to the v2 format and you should be able to see all your charts, position maps, totals, etc... as normal. Similarly if you import an existing saved Configuration this will also get migrated to the new data model.


### New Info Cards object for Dashboard

Info cards are a new way of displaying event info broken down by periods.

### Player game Time Tracker

The player time tracker functionality tracks the total time a player is on the pitch as well as the current shift time. Also tracks the current off time for subsitutes.

### Synchronize data with video

After doing live tagging you can now add your video source and synchronize the tagged events with the video.

### Default Player Event functionality

There is an option now on the Tagger page to select a "Default" event. When a "Default" event has been selected then everytime a user clicks on a Player button then that "Default" event instance will be created.

### XML Download

There is now the ability to download the event data in XML format compatible with industry standard.

### Edit Event Instance

You can now edit an event instance that was tagged, instead of having to delete and re-tag.

<br/>

## Dec 02, 2022

This update documents  the following changes:
- Live tagging window
- Game Periods configuration
- Export event instances to Clipper file
- Lead and Lag times configuration
- Turn Dashboard carousal cycle off by default
- Zone Configuration - Polygon zone shape
- FIX: Position Map filter and search bug fixes
- FIX: xy data not getting downloaded to csv
- FIX: Bar charts - inconsistent results when multiple event types selected

### Live tagging window

In live tagging mode (i.e. no video) the team based events will be displayed in the center of the screen. This removes a click by not having to hit the team tag button first to access the team based events. 

### Game Periods configuration

Any number of game periods and extra time periods can now by specified. Allows greater flexibilty for different sports.

### Export event instances to Clipper file

In the Events Data page there is now an option to export the event instances to a Playlist file that can be directly imported into the Clipper app for advanced clip editing.

### Lead and Lag times configuration

It is now possible to specify Lead and Lag times in the Event Configuration. When viewing clips of event instances, the video timeframe slider will be set to the lead and lag times specified in the event configuration.
If none set then it will use the system default lead and lag times of -10 to 5.

### Turn Dashboard carousal cycle off by default

Previously the default was an automatic cycle of the carousals in the Dashboard. This is not switched off by default but can switched on again per user preference.

### Zone Configuration - Polygon zone shape

It is now possible to configure 3 and 4 sided (for now) Polygon zones. 

### FIX: Position Map filter and search bug fixes

Fixed position map configuration filters. Position maps recognize event type and outcome filters set in the configuration.
Fixed player search in Dashboard Position Maps.

### FIX: xy data not getting downloaded to csv

In the Events Data page the xy co-ordinates were not getting downloaded as part of the csv. This is now fixed.

### FIX: Bar charts - inconsistent results when multiple event types selected

The bar charts were showing inconsistent results when multiple event types were selected. This is now fixed.