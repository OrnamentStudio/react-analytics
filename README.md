# React Google Analytics
React component to work with Google analytics


## Install

```
npm install react-node-polyglot
```

## Example Usage

You need to connect google analytics module by yourself. For example you can simply include script tag

```html
<script src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXX" defer></script>
```

And in your app

```jsx
import Provider from 'react-node-polyglot/lib/provider';
import withTrack from 'react-node-polyglot/lib/with_track';


const App = () => (
  <Provider id="UA-XXXXX" location={currentPageUrl}>
    {withTrack(({ track }) => {
      // .. track events
    })}
  </Provider>
);
```

Every time location property is changed, pageview event is sent to google server

## License

MIT © Abylay Keldibek
