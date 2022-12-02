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

## Dec 02, 2022

This release contains the following changes:
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