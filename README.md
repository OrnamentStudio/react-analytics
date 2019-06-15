# React Google Analytics [![Build Status](https://travis-ci.org/OrnamentStudio/react-analytics.svg?branch=master)](https://travis-ci.org/OrnamentStudio/react-analytics)
React component to work with Google analytics


## Install

```
npm install ornament-react-analytics
```

This module targets Node.js 8 or later and the latest version of Chrome, Firefox, and Safari. If you want support older browsers use [Babel compiler](https://babeljs.io/).

## Usage

You need to connect google analytics module by yourself. For example you can simply include script tag

```html
<script src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXX"></script>
```

React application

```jsx
const { Provider, withTrack, track } = require('ornament-react-analytics');


const App = () => (
  <Provider id="UA-XXXXX" location={currentPageUrl}>
    {withTrack(({ track }) => {
      // .. track events
    })}
    <button onClick={() => { track(); }}>Track</button>
  </Provider>
);
```

Every time location property is changed, pageview event is sent to google server

## License

MIT © Abylay Keldibek
