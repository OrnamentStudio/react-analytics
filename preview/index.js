/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const React = require('react');
const { render } = require('react-dom');
const { Provider, withTrack, useTrack } = require('../index');

const { useState } = React;
const { createElement: e } = React;


global.dataLayer = global.dataLayer || [];

const Content = () => {
  const createButTrack = (text, track) => (
    e('button', { onClick: () => track('event', 'test event') }, text)
  );

  const butTrackHOC = e(withTrack(props => createButTrack('track HOC', props.track)));
  const butTrackHook = createButTrack('track hook', useTrack());

  return e('div', null, 'Track: ', butTrackHOC, butTrackHook);
};

const App = () => {
  const [location, setLocation] = useState('/');
  const updateLocation = () => setLocation(prevLocation => `${prevLocation}route/`);
  const butLocation = e('button', { onClick: updateLocation }, 'update location');

  return e(Provider, { id: 'UA-63730821-4', location, dataLayer: global.dataLayer }, butLocation, e(Content));
};

render(e(App), global.document.getElementById('root'));
