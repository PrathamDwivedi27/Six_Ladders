import ChatGroupRepository from "../repository/chatGroupRepository.js";
import logger from "../utils/logger.js";

class ChatGroupService {
  constructor() {
    this.chatGroupRepository = new ChatGroupRepository();
  }

  async createChatGroup({ title, passcode, userId }) {
    try {
      logger.info(`Creating chat group for user ${userId}`);
      return await this.chatGroupRepository.create({
        title,
        passcode,
        user_id: userId,
      });
    } catch (err) {
      logger.error('Error in createChatGroup:', err);
      throw err;
    }
  }

  async getUserChatGroups(userId) {
    try {
      logger.info(`Fetching chat groups for user ${userId}`);
      return await this.chatGroupRepository.findByUserId(userId);
    } catch (err) {
      logger.error('Error in getUserChatGroups:', err);
      throw err;
    }
  }

  async getChatGroup(id) {
    try {
      logger.info(`Fetching chat group with id ${id}`);
      return await this.chatGroupRepository.findById(id);
    } catch (err) {
      logger.error('Error in getChatGroup:', err);
      throw err;
    }
  }

  async updateChatGroup(id, updateData) {
    try {
      logger.info(`Updating chat group ${id}`);
      return await this.chatGroupRepository.update(id, updateData);
    } catch (err) {
      logger.error('Error in updateChatGroup:', err);
      throw err;
    }
  }

  async deleteChatGroup(id) {
    try {
      logger.info(`Deleting chat group ${id}`);
      return await this.chatGroupRepository.delete(id);
    } catch (err) {
      logger.error('Error in deleteChatGroup:', err);
      throw err;
    }
  }
}

export default ChatGroupService;
