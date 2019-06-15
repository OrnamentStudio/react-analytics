# React Google Analytics [![Build Status](https://travis-ci.org/OrnamentStudio/react-analytics.svg?branch=master)](https://travis-ci.org/OrnamentStudio/react-analytics)
React component to work with Google analytics


## Install

```
npm install ornament-react-analytics
```

This module targets Node.js 8 or later and the latest version of Chrome, Firefox, and Safari. If you want support for older browsers use [Babel compiler](https://babeljs.io/).

## Usage

You need to connect google analytics script by yourself. For example you can simply include script tag

```html
<script src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXX"></script>
```

React application

```jsx
const { Provider, withTrack, useTrack } = require('ornament-react-analytics');


const TrackButtonHOC = withTrack((props) => (
  <button onClick={() => props.track()}>Track</button>
));

const TrackButtonHook = () => {
  const track = useTrack();
  return <button onClick={() => track()}>Track</button>;
};

const App = () => (
  // Every time location property is changed, pageview event is sent
  <Provider id="UA-XXXXX" location={currentPageUrl} dataLayer={window.dataLayer}>
    <TrackButtonHOC />
    <TrackButtonHook />
  </Provider>
);
```


## License

MIT © Abylay Keldibek
