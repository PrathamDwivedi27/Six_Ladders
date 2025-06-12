import prisma from "./config/db.config.js";
import { produceMessage } from "./config/kafka.config.js";
import logger from "./utils/logger.js"; // ✅ Assuming you have a logger utility

export function setupSocket(io) {
  // Middleware: validate and attach room ID
  io.use((socket, next) => {
    const room = socket.handshake.auth.room || socket.handshake.headers.room;
    if (!room) {
      return next(new Error("Invalid room. Please provide correct room ID"));
    }
    socket.room = room;
    next();
  });

  // On client connection
  io.on("connection", (socket) => {
    socket.join(socket.room);
    logger.info(`Socket connected: ${socket.id} in room: ${socket.room}`);

    socket.on("message", async (data) => {
      try {
        const kafkaResponse = await produceMessage(data.message);
        logger.info("Message sent to Kafka:", kafkaResponse);

        await prisma.chats.create({
          data: data,
        });

        socket.to(socket.room).emit("message", data);
      } catch (error) {
        logger.error("Error handling message:", error);
      }
    });

    socket.on("disconnect", () => {
      logger.info(`Socket disconnected: ${socket.id}`);
    });
  });
}
