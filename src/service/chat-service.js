import ChatsRepository from '../repository/chat-repository.js';
import logger from '../utils/logger.js';

class ChatsService {
  constructor() {
    this.chatsRepository = new ChatsRepository();
  }

  async getChatsByGroupId(groupId) {
    try {
      logger.info(`Service: Fetching chats for group ID ${groupId}`);
      return await this.chatsRepository.findByGroupId(groupId);
    } catch (error) {
      logger.error('ChatsService.getChatsByGroupId error', error);
      throw error;
    }
  }
}

export default ChatsService;
