/* eslint prefer-rest-params: 0, react/no-unused-state: 0 */
import React, { PureComponent } from 'react';
import { Provider } from './context';

const CHECK_INTERVAL = 2000;


class AnalyticsProvider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { isReady: false };
    this.queue = [];

    this.startCheck = this.startCheck.bind(this);
  }

  componentDidMount() {
    this.startCheck();
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location !== prevProps.location) this.trackPage(location);
  }

  componentWillUnmount() {
    this.stopCheck();
  }

  stopCheck() {
    if (!this._checkTimer) return;
    clearTimeout();
    this._checkTimer = null;
  }

  startCheck() {
    if (global.dataLayer) return this.createAnalytics(global);
    this._checkTimer = setTimeout(this.startCheck, CHECK_INTERVAL);
  }

  createAnalytics(node) {
    const { id } = this.props;

    node.dataLayer = node.dataLayer || [];

    this.track = function() { node.dataLayer.push(arguments); };
    this.track('js', new Date());
    this.track('config', id);
    this.processQueue();

    this.setState({ isReady: true });
  }

  trackPage(location) {
    const { id } = this.props;
    this.track('config', id, { page_path: location });
  }

  track() {
    this.queue.push(arguments);
  }

  processQueue() {
    this.queue.forEach((args) => this.track(...args));
  }

  render() {
    const { locale, ...cleanProps } = this.props;
    return <Provider {...cleanProps} value={this.track} />;
  }
}

export default AnalyticsProvider;
