# Welcome to Ubiquiti's Test Project!

This is my personal interpretation of the Ubiquiti spec that I received.

Current development is for **desktop only**. Seeing that all designs in the Figma file used an aspect ratio of 1.9, I assumed that the design was intended for desktop devices, and that mobile devices were not intended to be covered here. This app is not intended to be responsive to changes in width and height as is often done for mobile devices.

## Behaviors

Although the Figma file included UI design for behaviors, no prototypes were included to describe app behavior. I have developed the following behaviors:

<ol>
<li>Splash screen</li>
The Figma file's top view appeared to be a splash screen: something to be seen by users when they first enter the site. I developed it as such. When [the app](https://jzabinski-dolios.github.io/) is first encountered in the browser, an animated splash screen appears for one second. When the view is closed or refreshed, the splash screen appears again. (It does not appear when navigating within the app.)
<li>Device searches</li>
On the views showing the device list and device grid, UI was described for a search feature. The search results show when two or more characters are entered. When searches are clicked, the app navigates to a device view screen where the relevant device details can be seen. Clicking away from the search closes the list of search results, in case users want to access the list/grid below the results. Returning to the search opens the results again.
<li>Device filters</li>
UI was also described for a filter feature. The filter is accessed by clicking the Filter button. As product lines are checked off, products from those lines are removed from the list/grid. The filter popover can be removed by clicking on the main screen. Filters remain in place until the filters are explicitly reset using the Reset button in the filter feature.
<li>List/grid clicks</li>
When items are clicked in the list/grid, the app navigates to a page where product details may be viewed.
<li>Displaying JSON</li>
In the product details page, when Display as JSON is clicked, the relevant JSON appears at the bottom of the display.
<li>Animations</li>
I took it upon myself to add some pinache to the splash screen by animating the elements and view slightly. I also added animation to the search results and filter.
</ol>

## Spec Deviations

### Aspect Ratio

The Figma file describes screens with an aspect ratio of 1.9. Where possible, I have adjusted the display to allow for more desktop widths than only those with 1.9 aspect ratio. Smaller aspect ratios such as those for mobile devices were unaccounted for because normally those call for separate design.

### Font Files

The Figma called for three fonts: UI Sans_v7 Regular, UI Sans_v7 Bold and Lato. None of these fonts were supplied. I selected the Cabin font to stand in for UI Sans_v7, and Google's version of Lato to stand in for the intended Lato font.

### List View and Grid View

The Figma file describes the list view with a display unit not of *rows* of data as much as *columns* of data. For example, to display the icons, instead of including one icon per table row, it describes all icons in a container of one column. The list view is essentially described as one row, with piles of data in each row. The list view was developed by mirroring this description, so although unconventional, the list view follows the spec.

Not so for grid view. The grid view describes the grid items in discrete rows of containers, each of discrete size. This description cannot accommodate large displays, and would result in large blank spaces on the right. For the grid, I chose to deviate from the spec and instead used CSS grid functionality to allow the items to adjust to various display widths. This should also result in less code to maintain.

### Image background colors

The Figma file calls for background images to have a 'lightgray' background color, but that is not reflected in the illustrations. I decided to follow the illustration examples, and omitted the light gray background.

### Explicit Widths

All views in the Figma file except the top view have an explicit width of 90rem. I assumed that that was for the purpose of illustrating each view, and not intended to be a hard limit to the width in the app itself.

### Icons and Components

#### Grid Icon

The Figma file described general icon behavior, and used the list icon as an example. The behavior for the Active state used different SVG than behavior for the other states. The SVG for the List example could be copied and used, but no SVG was supplied for the Grid icon's Active state. I made my own version of the Active Grid icon for this project.

#### Search Close icon

The Figma file described the beginnings of a Search Close icon, but described no SVG for the icon, and its behavior UI was not described. I assumed that this icon was not intended to be included.

## Ambiguities

### Device Count

The Figma file describes a device count of '123 Devices'. It is unclear what this is intended to measure. It may have been intended to be the current count of the table of devices below it, or an overall count of devices, regardless of whether they appear. I assumed that it was a count of the current devices displayed.



## Technical Notes
### Local storage
Local storage is used to define whether the current user has seen the splash screen. The value `splashShown` is used.

### Data Retrieval
I wanted the app to retrieve one copy of the JSON needed for product data, and to use that copy for all screens. I considered using either React Contexts or Redux to manage that data, but state management libraries like this are intended to be used when sections of the app are going to change state values. The app is currently read only, and may always be. I believe in using minimally complex design, and decided that state management was not needed.

Instead I used a Typescript feature of retrieving the data directly during app initialization using top-level `await` functionality. See `dataLoader.ts`. This data is then propagated to routes using the React router: see `Routes.tsx`.

### Intercomponent Communication

Communication between components for the filter and search was achieved through simple search parameters in the URL.

### Animations

Animations of most elements are achieved through CSS. A `@keyframes` transition is described, and then the transition is applied through the `animation` property. For example, the splash screen uses:
```
@keyframes fade-left {
  to {
    transform: translateY(-100%);
  }
}
...
.Splash {
  ...
  animation: fade-left 0.2s ease-in-out 0.8s forwards;
}
```

Exit animations, done as elements are removed, is a little trickier. The parent element holds a `ref` to the exiting element, and uses `Element.animate` to run an animation, waiting for the animation to end before declaring that components can react to the  event. This allows the animation to complete before removing the element. For example:
```
const [blurred, setBlurred] = useState(true);
const filterOptions = useRef<HTMLDivElement>(null);
...
const animation = filterOptions.current?.animate(fadeAway, effectTiming);
animation?.addEventListener('animationend', () => setBlurred(true));
```
And in the template:
```
{!blurred && (<div className="[filter name]" ref={filterOptions}>
```

## To-do's
There are a few techniques that I wanted to showcase but didn't have time to develop. These include:
<ol>
<li>End to end testing</li>
Normally I use Puppeteer to develop app behaviors as I go along. I didn't have time to develop this way. I wanted to develop tests for each behavior for multiple browsers: ideally at least Chrome and Firefox. Safari would have been done had I gotten my hands on a Macbook.
<li>Unit testing</li>
You can go overboard with unit testing when developing web apps, but sometimes it is important for more complex functions. `findDeviceResolution.ts` would have benefited from some behavior codification defined through tests. I would have used Jest for this.
</ol>