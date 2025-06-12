import prisma from '../config/db.js';
import logger from '../utils/logger.js';


class ChatGroupUserRepository {
  async findByGroupId(groupId) {
    try {
      logger.info(`Finding users in group ID: ${groupId}`);
      return await prisma.groupUsers.findMany({
        where: { group_id: groupId },
      });
    } catch (error) {
      logger.error('Error in ChatGroupUserRepository.findByGroupId', error);
      throw error;
    }
  }

  async create(data) {
    try {
      logger.info(`Creating group user: ${JSON.stringify(data)}`);
      return await prisma.groupUsers.create({ data });
    } catch (error) {
      logger.error('Error in ChatGroupUserRepository.create', error);
      throw error;
    }
  }
}

export default ChatGroupUserRepository;
