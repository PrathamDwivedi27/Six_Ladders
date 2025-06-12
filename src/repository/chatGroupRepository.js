import prisma from '../config/db.js';
import logger from '../utils/logger.js';
class ChatGroupRepository {
  async create(data) {
    try {
      return await prisma.chatGroup.create({ data });
    } catch (err) {
      logger.error('Error creating chat group:', err);
      throw err;
    }
  }

  async findByUserId(userId) {
    try {
      return await prisma.chatGroup.findMany({
        where: { user_id: userId },
        orderBy: { created_at: 'desc' }
      });
    } catch (err) {
      logger.error('Error finding chat groups by user ID:', err);
      throw err;
    }
  }

  async findById(id) {
    try {
      return await prisma.chatGroup.findUnique({ where: { id } });
    } catch (err) {
      logger.error('Error finding chat group by ID:', err);
      throw err;
    }
  }

  async update(id, data) {
    try {
      return await prisma.chatGroup.update({ where: { id }, data });
    } catch (err) {
      logger.error('Error updating chat group:', err);
      throw err;
    }
  }

  async delete(id) {
    try {
      return await prisma.chatGroup.delete({ where: { id } });
    } catch (err) {
      logger.error('Error deleting chat group:', err);
      throw err;
    }
  }
}

export default ChatGroupRepository;
