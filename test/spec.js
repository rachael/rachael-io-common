var request = require('supertest');
var server;

process.env.SUPPRESS_LOGS = true;

function startServer() {
  delete require.cache[require.resolve('../bin/www')];
  delete require.cache[require.resolve('../app')];
  server = require('../bin/www');
}

function startDevServer() {
  process.env.NODE_ENV = 'development';
  startServer();
}

function startProdServer() {
  process.env.NODE_ENV = 'production';
  startServer();
}

function stopServer(done) {
  server.close(done);
}

describe('GET /', function() {

  beforeEach(startServer);

  afterEach(stopServer);

  it('should respond with gzipped html', function(done) {
    request(server)
      .get('/')
      .expect('Content-Type', /html/)
      .expect('Content-Encoding', 'gzip')
      .expect(200, done);
  });

});

describe('GET unknown route', function() {

  beforeEach(startDevServer);

  afterEach(stopServer);

  it('should respond with a 404 and error template', function(done) {
    request(server)
      .get('/foo')
      .expect('Content-Type', /html/)
      .expect(404, done);
  });

  it('should have a stack trace in development', function(done) {
    request(server)
      .get('/foo')
      .expect(function(res) {
        res.text.should.containEql('<pre>');
      })
      .end(done);
  });

});

describe('Errors in production', function() {

  beforeEach(startProdServer);

  afterEach(stopServer);

  it('should not leak a stack trace in production', function(done) {
    request(server)
      .get('/foo')
      .expect(404)
      .expect(function(res) {
        res.text.should.not.containEql('<pre>');
      })
      .end(done);
  });

});
