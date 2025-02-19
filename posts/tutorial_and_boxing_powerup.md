---
title: "Tutorial Progress and New Power-Up"
date: "2024-02-19"
---

This week, I worked on creating more assets for my tutorial level, which takes place in a hollowed out log. I also created a new power up, the boxing glove, which can be used to destroy certain blocks and to propel the frog in the opposite direction of the hit.

Here is a zoomed out look at what I have made for the tutorial level so far:

![](/images/Tutorial%20Level%20and%20Power%20Up%2019f686c0fae080438082daf8093d337d/Tutorial_Level_Progress.png)

![](/images/Tutorial%20Level%20and%20Power%20Up%2019f686c0fae080438082daf8093d337d/Tutorial_Level_Progress_copy.png)

This level is meant to teach the player the basic controls and mechanics. It introduces jumping and using your tongue to grapple, as well as obstacles like thorns or breakable boxes in your way. I am not sure how much more to add to the level, as it is a tutorial.

The boxing glove, which is found at the end of what I have designed so far, disables tongue grappling when collected, and can be used to break boxes.

![](/images/Tutorial%20Level%20and%20Power%20Up%2019f686c0fae080438082daf8093d337d/FroggyBoxingBreak.gif)

It also enables the player to propel itself in the opposite direction of a hit, which will have some cool possibilities for later in the game.

![](/images/Tutorial%20Level%20and%20Power%20Up%2019f686c0fae080438082daf8093d337d/FroggyBoxingJump.gif)

Another minor detail I added was a shader that outlines which objects can be grappled to. This will be very useful for visual cues to the player, and it will be dynamic based on which power up you have. For instance, when you collect the boxing gloves, the outlines will disappear around the grappleable objects and start appearing around the breakable objects.

![](/images/Tutorial%20Level%20and%20Power%20Up%2019f686c0fae080438082daf8093d337d/FroggyGrappleOutline.gif)