import express from 'express';
import bodyParser from 'body-parser';
import logger from './utils/logger.js';
import { PORT } from './config/server-config.js';
import apiRoutes from './routes/index.js';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { setupSocket } from './sockets/socket.js';
import { createAdapter } from '@socket.io/redis-streams-adapter'; 
import redis from './config/redis-config.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*'
  }
});
io.adapter(createAdapter(redis));
setupSocket(io);

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});


const setup_and_start_server = () => {
  server.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
  });
};

setup_and_start_server();


const handleServerShutdown = async () => {
  try {
    logger.info('Shutting down server...');
    await pubClient.quit();
    await subClient.quit();
    logger.info('Server shutdown complete.');
    process.exit(0);
  } catch (error) {
    logger.error('Error during server shutdown:', error);
    process.exit(1);
  }
};

process.on('SIGINT', handleServerShutdown);
process.on('SIGTERM', handleServerShutdown);
