---
title: Synchronize Video
description: How to Synchronize Tagged Events with Video Post-Game
---

## How to Synchronize Tagged Events with Video Post-Game

In many cases a game will be tagged live without video and then video is added post-game. In this tutorial, we will walk you through the steps to achieve this synchronization of the live tagged data and the video.

### Note

It is highly recommended to save a copy of your game before adding video and synchronizing the game. This ensures you have a backup of the game. Save the game by clicking on the Game menu -> Download. This will download a json file of your game to your local device.

### Adding Video Source to Game Details

Before we can begin synchronizing, we need to add the video source to the game details. Make sure you have the correct video file and location, and then add it to the game details - Game menu -> Edit.

### Switch to Video Analysis Mode

Next, we need to switch to video analysis mode in the preferences. This mode will allow us to use the video controls and synchronize the tagged events with the video.

### Setting Period Start and End Times

With the video analysis mode enabled, we can now set the period start and end times. In the tagger window, use the video controls to move to the start of the game. Once there, click on the timer button. As the game has already been tagged live you should see the periods for the game in the periods table. Select the small Video Start Time period button in the periods table. This will set the start time for the first period.

Next, move the video forward to the end of the first period. Once you are at the end of the period, click on the timer button again and select the small Video End Time period button. This will set the end time for the first period.

<br>
<p align="center">
<img src="/images/docs/sync-video/01-timer-periods-table.png" alt="drawing" width="90%"/>
</p>

Repeat these steps for each period until you have set the start and end times for each one.

### Synchronizing Tagged Events with Video

Now that we have set the period start and end times, we are ready to synchronize the tagged events with the video. To do this, click on the synchronize button. This will iterate through all the events and set the video time for each one.

<br>
<p align="center">
<img src="/images/docs/sync-video/02-timer-sync-button.png" alt="drawing" width="90%"/>
</p>

### Conclusion

Synchronizing tagged events with video post-game is a powerful tool for analyzing and reviewing games. By following the steps outlined in this tutorial, you can easily synchronize your events with video and gain valuable insights into your team's performance.