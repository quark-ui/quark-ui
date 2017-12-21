import { JSDOM } from 'jsdom';

if (typeof document === 'undefined') {
  const { window } = new JSDOM('<!DOCTYPE html><html><body></body></html>');
  const { document, navigator } = window;
  global.document = document;
  global.window = window;
  global.navigator = navigator;
  global.location = window.location;
}
