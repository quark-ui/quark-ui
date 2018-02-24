import { JSDOM } from 'jsdom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

if (typeof document === 'undefined') {
  const { window } = new JSDOM('<!DOCTYPE html><html><body></body></html>');
  const { document, navigator } = window;
  global.document = document;
  global.window = window;
  global.navigator = navigator;
  global.location = window.location;
}
