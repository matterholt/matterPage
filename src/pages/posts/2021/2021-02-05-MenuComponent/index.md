---
title: Building a Menu Component
date: 2021-02-05
published: true
slug: Explanation of the Menu Component that I built
---

# Mobile Navigation Component

Dropdown Menu to navigate through a website or app. The component is somewhat modular and allows the addition of any number of routes and sub-routes to be displayed. There is a code sandbox with code.. [click to see code](<[https://codesandbox.io/s/mobile-nav-qln8p](https://codesandbox.io/s/mobile-nav-qln8p)>)

## Favorite Parts

- Link inputs are controlled by the websitePath.js. Able to display the main menu navigation and any sub-menu menus that are added.
- Sub-routes menus are controlled are individually by comparing the sub-route title and sub-route view. The sub-route view is set through a custom hook here the sub-route title is set. Then will mount the sub-menu links
- Custom CSS styles are able to be applied to the common component to give them an individual feel. Styles can be passed as a CSS class from the styles or an object that is created on the fly.

## MobileMenu description;

Built in mind for a mobile like navigation but also could be use as application menus.

A custom hook called useMenuControler is able to control what components get mounted or not. the main menu is controlled with a bool. Which later would be better to change if there are multiple Main menus. The sub-menus must be this way with the chance of having multiple sub-menus in the main menu. The hook uses useReducer to set the state to the action that it receives from the component

### MobileMenu Component

Topmost component and serves as a mounting point to the mobile menu. Within the component, the routes to the website are imported in. Not displayed but there is an option to filter the route by attributes before the routes are passed to the MainMenu component for rendering to screen. This component is the entry point of the menu state. The custom hook "useMenuController" is able to control what gets mounted and unmounted to the dom. At this level, the initial state of the menu is defined, which should be menus all closed. Children components are the MenuViewControl and MainMenu

### MenuViewControl Component

This component is in the user input to control the mounting and un-mounting of the menu. Initially component only has a button mounted. when click updates the state of the 'isMobileMenuOpen' to true. The component will get re-rendered with the open menu state. Which consists of a button to close the main menu and the children of this component. Having this component controlling the mounting of the menu would only be evaluated once. Avoiding the need to pass the "isMenuOpen" prop to the view and one less component to the DOM.

### MainMenu Component

Once the main list is mounted to the DOM the user is able to navigate through the website. At the root of the component simply maps through the webpage route prop and passes the individual item to the MenuItem component.

### MainItem Component

The component lives in the MainMenu.js and performs the bulk of the work in the file. The component is mainly responsible for listing the links and passing the props to a Link component. Where the path and name are passed to the "LinkRoute" component. The menuDispatch is also passed to this component so that when the link is clicked the menu state can close the menu. The secondary role is to mount the sub-menu if available. If a sub-route is defined in the websitePaths, then the component for the sub-menu can be mounted within the main menu li tag.

### SubMenu

At the root of this component is set up very similar to the MainMenu component. There are two children one is the SubMenuControl for the mounting and un-mounting the sub-menu and the other is the SubMenuItems to render the items to the DOM. Like the MainMenu component, the SubMenuItems are actually are children of the SubMenControl.

### SubMenuControl

The sub-menu is contained much like the MainMenuControl, but the determining factor of whether the component is mounted or not, is set by the subRouteView and the routeTitle is matching or not. The subRouteView is set by the menuDispatch and when the onClick is activated the action type of "openSubMenu". This action type triggers the opening of the sub-menu but there is a need for another item sent to the useMenuControl is a "menuName". The "menuName" will determine what sub-menu should be mounted.

### SubMenuItems

The component will take the sub-links and map through them to pass subroute data to the subItem component

### SubItem

Receives the individual sub-routes to be placed in a list tag and sent to the LinkRoute. At this point that custom styles can be added. Which can help indicate the difference between the main menu and the sub-menus.

There are 2 more components to talk about, the LinkRoute and the MenuButton. They are children and are used at multiple places in code.

### MenuButton

Basically, a button that opens the menus. It has a base style with a className, but is able to accept custom styles as well from the parent. The onClick action is the dispatch function that is also passed from the parent component

### LinkRoutes

Creates the anchor tag for the routes and adds a button as well to trigger an onClick action that would change the state of the menus to close. The button tag has some default styles applied but is able to have CSS classes pass as props or and CSS object through a prop called styleAttribute.

This component will map through the array of sub-menus and setting them in a list tag.

## TODO / Improvements

- change the main menu control to a string instead of a bool. open the opportunity to multiple menus
- add attributes that would depict orientation of the menu vertical, left, horizontal, etc.
- Give some animation
- Have color scheme define in a context allowing ease of customization
- Utilize the route attributes,
- Create a custom hook when clicked outside of menu
- Add an actual routeing with react router
