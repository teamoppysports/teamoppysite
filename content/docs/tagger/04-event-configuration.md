---
title: Event Configuration
description: Configure Tagger Events
---

## Event Configuration

Configuring your event definitions is a vital part of the process within Tagger. Tagger provides a number of system defined Sport configurations but these should be used as examples and each analyst should customise their configuration according to their needs.

In the Event Configuration tab there are a number of configurable items - Events, Event Groups, Event Labels, Event Links and Event Accelerators.


### Events

When you tag an event in the Tagger page you are tagging an instance of an Event Configuration. Events will behave differently based on the options selected in the configuration.

<ul>

#### Name

Each event requires a name. This is the default display text on the Event buttons in the Tagger page (however this can be changed in the Preferences to use short name or an icon).

#### Event Group

Each event should be assigned to an Event Group. The button will be displayed in the Event Group container in the Tagger page.

#### Enabled

The event needs to be enabled to be used in the Tagger page.

#### Primary Event

Select this switch to display this as a primary button in the Tagger page. A primary button is displayed in the Tagger page without any preselections. Typically if this is switched off then the event would be part of an Event Link that would require another event to activate it.

#### Color

This is the color for the Event button.

#### Text Color (white)

This controls the text shown in the Event button. Either black or white text.

#### Icon

This is the Events icon. Users can switch to display the event icon in the Preferences page. Typically used on mobile devices. Icons can be chosen from the https://materialdesignicons.com/ site.

#### Short Name

This is a shortened version of the Event name. Users can switch to display the event short name in the Preferences page. Typically used on mobile devices.

#### Event Labels

This is a list of Event Labels that are selectable in the Tagger page. Labels are used to provide additional descriptions to the Event. For example a Shot event may have a label for Shot Type (From Open Play, From Free Kick, etc....) and a label for Body Part (Left Foot, Right Foot, Head, etc...)

#### Event Team

The Event Team would often be left unselected in the Configuration - the event instance would default the team to the team where the button is displayed. In some cases though you may want to define a button that will always set the Event instance team to Team A or Team B. Other options in this dropdown include "Same" which will always set the team to the team where the button is displayed and also "Opposite" which will always set the team to the opposite team from where the button is displayed.

#### Specify Player for event

When this is selected then a player button needs to be selected before the Event will be selectable in the Tagger page.

#### Keep Player Active after Event Save

When this is selected then the player will remain active (selected) after the Event instance has been saved. For example, for the "Pass Received" event you may want to keep the player active as that player will most likely trigger the next event. This helps to reduce the clicks when tagging.

#### Specify Position for Event

If you want to specify x, y positions for the event then select this checkbox.

#### Events Playing Area

Select the Playing Area that the co-ordinates should be selected on.

#### Specify count for Tag

If this option is selected then it allows the user to enter a count of the Event when they occurred. For example when live tagging you may want to count the number of passes in a sequence and just click the "Passing" button and enter a count of passes.

#### Lead Time

Lead Time is used to allow a lead time for an event when displaying the video clip of the event, i.e. the clip will start a number of seconds before the time of the event instance.

#### Lag Time

Lag Time is used to allow a lag time for an event when displaying the video clip of the event, i.e. the clip will end a number of seconds after the time of the event instance.

</ul>

<br/>

### Event Groups

Configure your Event Groups. Event Groups form categories for your event buttons and help to control the display in the Tagger page.

<ul>

#### Name

The Event Group name.

#### Enabled

Select to enable this group in the Tagger page.

</ul>

<br/>

### Event Labels

Configure your Event Label definitions here. Event Labels are used to add additional descriptions to Events. You can add an Event Label to one or more Events.

<ul>

#### Name

The Event Label name e.g. in the context of a "Shot" event you could create a label called "Body Part".

#### Enabled

Select to enable this label.

#### Label Options

Each label can have a number of label options. These are what is actually selected at runtime in the Tagger page. e.g. for a label called "Body Part", you could have label options for "Right foot", "Left foot" or "Head". You would select one of these options when tagging an event instance.

<ul>

##### Name

The name of the label option

##### Enabled

Select to enable the label option

##### Color

The color of the label option button.

##### Text Color (white)

This controls the text shown in the Label Option button. Either black or white text.

##### Icon

This is the Label Option icon. Users can switch to display the event icon in the Preferences page. Typically used on mobile devices. Icons can be chosen from the https://materialdesignicons.com/ site.

##### Short Name

This is a shortened version of the Label Option name. Users can switch to display the label option short name in the Preferences page. Typically used on mobile devices.

</ul>

</ul>

<br/>

### Event Links

Define links to automatically activate or select other events when a particular event is selected. e.g. a "Shot" event could have a link to a "Goal" event and a "Wide" event.

What do we mean by activate? We mean that when the "Shot" button is clicked, then the "Goal" and "Wide" event buttons will appear and be selectable.

<ul>

#### Name

The name of the link

#### Enabled

Select to enable the link

#### From Event

Select the event from which the link will originate from e.g. "Shot" event

#### Link Direction

Link direction determines the direction of the link activation. If "One Way" is selected the activation can only happen in one direction i.e. From Event => To Event. "Two Way" means that it is bi-directional.

#### To Event

Select the event to which the link will activate e.g. "Goal" or "Wide" event

</ul>

### Event Accelerators

Event Accelerators can help to speed up the tagging process by automatically selecting Events and Labels with a one button click.

#### Name

The name of the Accelerator. This is displayed in the Tagger window.

#### Event Group

The Event Group that the Accelerator will be displayed in.

#### Enabled

Select to enable the Accelerator.

#### Event Selections

Choose one or more Events to automatically select. The order of the Event Selections is important as this is how they will be added to the events table.

<ul>

##### Event Selection

The event to select.

##### Enabled

Select to enable the Event Selection.

##### Labels

The event labels to automatically select.

<ul>

###### Event Label

Event Label

###### Event Label Option

Event label option to automatically select for the Accelerator

</ul>

</ul>