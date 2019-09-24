const React = require('react');
const { Consumer } = require('./context');

const { forwardRef, createElement: e } = React;


module.exports = (Component) => (
  forwardRef((props, ref) => (
    e(Consumer, null, (track) => e(Component, { ...props, ref, track }))
  ))
);
