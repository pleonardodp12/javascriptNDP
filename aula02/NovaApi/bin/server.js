const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodestr:server');

function normalizePort(val){
  const port = parseInt(val, 10);

  if(isNan(port)){
    return val;
  }

  if(port >=0){
    return port;
  }
  return false;
}

const port = normalizePort(process.env.PORT || 3333);

app.set('port', port);

function onError(error){
  if(error.syscall !== 'listen'){
    throw error;
  }
}

const bind = typeof port === 'string' ? 'Pipe' + port: 'Port' + port;

switch(error.code){
  case 'EACCES':
    console.error(bind + 'requires more privilege');
    process.exit(1);
    break;
  case 'EADDRINUSE':
    console.error(bind + ' port in use');
    process.exit(1);
    break;
  default:
    throw error;
}

function onListening(){
  const addr = server.address();
  const bind = typeof port === 'string' ? 'pipe' + addr: 'port' + addr.port;
  debug('Listening on' + bind);
}

//SERVER

const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log(`A API subiu na porta ${port}!`);