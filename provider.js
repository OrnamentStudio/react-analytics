/* eslint prefer-rest-params: 0, react/no-unused-state: 0, react/forbid-prop-types: 0 */

const React = require('react');
const PropTypes = require('prop-types');
const { Provider } = require('./context');

const { PureComponent, createElement: e } = React;


class AnalyticsProvider extends PureComponent {
  constructor(props) {
    super(props);
    this.track = this.track.bind(this);
  }

  componentDidMount() {
    const { id } = this.props;
    this.track('js', new Date());
    this.track('config', id);
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location !== prevProps.location) this.trackPage(location);
  }

  trackPage(location) {
    const { id } = this.props;
    this.track('config', id, { page_path: location });
  }

  track() {
    const { dataLayer } = this.props;
    dataLayer.push(arguments);
  }

  render() {
    const {
      id,
      location,
      dataLayer,
      ...rest
    } = this.props;

    return e(Provider, { ...rest, value: this.track });
  }
}

AnalyticsProvider.propTypes = {
  id: PropTypes.string.isRequired,
  location: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  dataLayer: PropTypes.array.isRequired,
};

module.exports = AnalyticsProvider;
