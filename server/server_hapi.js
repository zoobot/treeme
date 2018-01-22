var Hapi = require('hapi');
var server = new Hapi.Server(4400);

server.route([
  {
    method: 'GET',
    path: '/api/items',
    handler: function(request, reply) {
      reply('Get item id');
    }
  },
  {
    method: 'GET',
    path: '/api/items/{id}',
    handler: function(request, reply) {
      reply('Get item id: ' + request.params.id);
    }
  },
  {
    method: 'POST',
    path: '/api/items',
    handler: function(request, reply) {
      reply('Post item');
    }
  },
  {
    method: 'PUT',
    path: '/api/items/{id}',
    handler: function(request, reply) {
      reply('Put item id: ' + request.params.id);
    }
  },
  {
    method: 'DELETE',
    path: '/api/items/{id}',
    handler: function(request, reply) {
      reply('Delete item id: ' + request.params.id);
    }
  },
  {
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
      reply('Hello world');
    }
  }
]);

server.start(function() {
  console.log('Hapi is listening to http://localhost:4000');
});
