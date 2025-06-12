import express from 'express';
import bodyParser from 'body-parser';
import logger from './utils/logger.js';
import { PORT } from './config/server-config.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.send('Hello, World!');
});


const setup_and_start_server=()=>{
    app.listen(PORT,()=>{
        logger.info(`Server is running on port ${PORT}`);
    })
}

setup_and_start_server();
const handleServerShutdown=async ()=>{
    try {
        logger.info("Shutting down server...");
        logger.info("Server shutdown complete.");
        await mongoose.connection.close();
        logger.info("Database connection closed.");
        process.exit(0);
    } catch (error) {
        logger.error("Error during server shutdown:", error);
        process.exit(1);
    }
}

process.on('SIGINT', handleServerShutdown);
process.on('SIGTERM', handleServerShutdown);