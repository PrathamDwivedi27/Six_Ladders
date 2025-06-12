import logger from '../utils/logger.js';
import prisma from '../config/db.js';

class ChatsRepository {
  async findByGroupId(groupId) {
    try {
      logger.info(`Finding chats for groupId: ${groupId}`);
      return await prisma.chats.findMany({
        where: { group_id: groupId },
      });
    } catch (error) {
      logger.error('ChatsRepository.findByGroupId error', error);
      throw error;
    }
  }
}

export default ChatsRepository;
