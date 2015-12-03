Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/', {
  name: 'home'
});

Router.route('/about', {
  name: 'about'
});

Router.route('/tasks', {
  name: 'tasks'
});

