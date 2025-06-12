import ChatsService from '../service/chat-service.js';
import logger from '../utils/logger.js';

const chatsService = new ChatsService();

export const getGroupChats = async (req, res) => {
  try {
    const { groupId } = req.params;
    logger.info(`Controller: Fetching chats for group ID ${groupId}`);

    const chats = await chatsService.getChatsByGroupId(groupId);
    return res.status(200).json({
      message: 'Chats fetched successfully',
      data: chats
    });
  } catch (error) {
    logger.error('Controller Error: Failed to fetch group chats', error);
    return res.status(500).json({
      message: 'Something went wrong. Please try again!',
    });
  }
};
