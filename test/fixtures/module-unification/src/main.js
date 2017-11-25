import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from '../config/environment';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix + '/src/init');

export default App;