# Documentation

# File Structure

// This is the file structure I generally like to use for most React applications. It has served me very well as a template that is easily scalable and easily understandable

File structure is loosly based on [React Folder Structure](https://www.robinwieruch.de/react-folder-structure) by Robin Wieruch, and a little bit with [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/) by Brad Frost, which makes the project scalable as well as quickly readable for engineers diving in to the project.

The file structure goes like this:

```
- src/
--- components/
--- flows/
--- hooks/
--- state/
--- services/
--- theme/
--- views/
```

## Components

`Components/` exist for small, individual elements, such as text inputs, buttons, or labels. These are highly reusable elements that will be used across multiple pages.

```
- src/
--- components/
----- input/
------- input.js
------- input.test.js
----- button/
------- button.js
------- button.test.js
----- ...
```

## Flows

`Flows/` exists for larger components that may incorporate smaller individual `Components`, but only account for a portion of any given page, or even across multiple pages. Things like a newsletter signup component, that could incorporate a text input, a button, and a label would fit in this folder.

```
- src/
--- flows/
----- app/
------- app.js
------- app.test.js
----- payment/
------- payment-form/
--------- payment-form.js
--------- payment-form.test.js
----- user/
------- avatar/
--------- avatar.js
--------- avatar.test.js
------- profile/
--------- profile.js
--------- profile.test.js
------- ...
```

## Hooks

`Hooks/` is a folder used to store [custom, reusable react hooks](https://reactjs.org/docs/hooks-custom.html). Check out [useHooks](https://usehooks.com/) for some great recepies that may spark your imagination.

```
- src/
--- hooks/
----- useClickOutside/
------- useClickOutside.js
------- useClickOutside.test.js
----- ...
```

## Services

`Services/` are reusable, context agnostic functions that are usable anywhere in the app. Examples of services would be a function that formats dates or currency.

```
- src/
--- services/
----- currency/
------- currency.js
------- currency.test.js
----- ...
```

## State

`State/` is where our global state is managed. We will be using [React Redux](https://react-redux.js.org/) as a global state manager and also our data layer.

`State/` is broken down in to modules with separate namespaces for easier data management. We also include a `Middleware` folder for helpful functions that modify `dispatch` functions. [Redux Thunk](https://github.com/reduxjs/redux-thunk) is one such middleware that allows us to have asyncronous actions in Redux. You can learn more about [Redux middlware here](https://redux.js.org/tutorials/fundamentals/part-4-store#middleware).

```
- src/
--- state/
----- middleware/
------- logger.js
----- modules/
------- quiz/
--------- quiz-actions.js
--------- quiz-reducer.js
--------- quiz-selectors.js
----- ...
```

## Theme

`Theme/` is where we store our global CSS variables and theme data. This makes managing a styleguide much easier and ensures much more consistency across components.

Theme includes font sizes, styles, colors, viewports, margins, and paddings.

```
- src/
--- theme/
----- home/
------- home.js
------- home.test.js
----- profile/
------- profile.js
------- profile.test.js
----- ...
```

## Views

`Views/` is a folder for individual pages in an application, and will most often have their own route. `Views` can incorporate both flows and individual components.

```
- src/
--- views/
----- home/
------- home.js
------- home.test.js
----- profile/
------- profile.js
------- profile.test.js
----- ...
```

# Helpful Hints

- Avoid using `{Folder}/index.js` for individual files for better clarity when searching across a large codebase. `index.js` files should be saved for base level folders as a way to compile many files in to a single resource for easy importing.
