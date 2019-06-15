/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const React = require('react');
const { render } = require('react-dom');
const { Provider, withTrack, useTrack } = require('../index');

const { useState } = React;
const { createElement: e } = React;


global.dataLayer = global.dataLayer || [];

const Content = () => {
  const createTrackButton = (text, track) => (
    e('button', { onClick: () => track('event', 'test event') }, text)
  );

  const trackButtonHOC = e(withTrack(props => createTrackButton('track HOC', props.track)));
  const trackButtonHook = createTrackButton('track hook', useTrack());

  return e('div', null, 'Track: ', trackButtonHOC, trackButtonHook);
};

const App = () => {
  const [location, setLocation] = useState('/');
  const updateLocation = () => setLocation(prevLocation => `${prevLocation}route/`);
  const buttonLocation = e('button', { onClick: updateLocation }, 'update location');

  return e(Provider, { id: 'UA-63730821-4', location, dataLayer: global.dataLayer }, buttonLocation, e(Content));
};

render(e(App), global.document.getElementById('root'));
