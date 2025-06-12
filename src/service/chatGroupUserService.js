import ChatGroupUserRepository from '../repository/chatGroupUserRepository.js';
import logger from '../utils/logger.js';


class ChatGroupUserService {
  constructor() {
    this.chatGroupUserRepository = new ChatGroupUserRepository();
  }

  async getUsersByGroupId(groupId) {
    try {
      logger.info(`Service: Fetching users for group ID: ${groupId}`);
      return await this.chatGroupUserRepository.findByGroupId(groupId);
    } catch (error) {
      logger.error('Error in ChatGroupUserService.getUsersByGroupId', error);
      throw error;
    }
  }

  async addUserToGroup({ name, group_id }) {
    try {
      logger.info(`Service: Adding user "${name}" to group ID: ${group_id}`);
      return await this.chatGroupUserRepository.create({ name, group_id });
    } catch (error) {
      logger.error('Error in ChatGroupUserService.addUserToGroup', error);
      throw error;
    }
  }
}

export default ChatGroupUserService;
