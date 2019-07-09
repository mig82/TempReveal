# TempReveal

This project showcases an example of how to build a *Reusable
Component* that allows you to temporarily reveal a secret to a user and hide it
after a preconfigured amount of time has elapsed. The Visualizer project just
serves as a wrapper to demo the component. The component -called
`com.mig82.TempReveal` is the real focus of this exercise.

## Implementation Notes

This project was built using Kony Visualizer 8.4.22.

## Use Cases

Use it to allow a user to see a secret code, PIN or passphrase. Typically when
a card holder has forgotten their card's PIN or if you want to show the user a
One Time Password.

![Temp Reveal][logo]

## Naming Conventions

I favour suffixes in lieu of prefixes. All widgets and skins in this component bear names with suffixes indicating what they are —e.g.: `iconLabel`, `showButton`.

Skins bear the suffix of the widget type they apply to, followed by the `Skin` suffix —e.g.: `TempRevealLidFlexSkin`.

## Implementation Details

In order to make it easier for you to manage project skins, all skins in this component bear a `TempReveal` prefix —e.g.: `TempRevealGestureIconLabel`.

[logo]: /pics/TempReveal_pic1.png "Temp Reveal"

## Credits

<div>The custom font with the "Swipe Right" icon I used was made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a> messages.attribution.is_licensed_by <a href="http://creativecommons.org/licenses/by/3.0/"     title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
