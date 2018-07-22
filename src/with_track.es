import React, { forwardRef } from 'react';
import { Consumer } from './context';


export default (Component) => (
  forwardRef((props, ref) => (
    <Consumer>
      {(track) => <Component {...props} track={track} ref={ref} />}
    </Consumer>
  ))
);
