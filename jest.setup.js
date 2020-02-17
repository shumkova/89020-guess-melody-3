import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

window.React = require(`react`);
window.PropTypes = require(`prop-types`);

Enzyme.configure({adapter: new Adapter()});
