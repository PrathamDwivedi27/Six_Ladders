import ChatGroupUserService from '../service/chatGroupUserService.js';
import logger from '../utils/logger.js';


const chatGroupUserService = new ChatGroupUserService();

export const getGroupUsers = async (req, res) => {
  try {
    const group_id = req.query.group_id;
    logger.info(`Controller: Getting users for group ID: ${group_id}`);

    const users = await chatGroupUserService.getUsersByGroupId(group_id);
    return res.status(200).json({
      message: 'Group users fetched successfully!',
      data: users
    });
  } catch (error) {
    logger.error('Controller Error: Failed to fetch group users', error);
    return res.status(500).json({
      message: 'Something went wrong. Please try again!',
    });
  }
};

export const addGroupUser = async (req, res) => {
  try {
    const { name, group_id } = req.body;
    logger.info(`Controller: Adding user "${name}" to group ID: ${group_id}`);

    const user = await chatGroupUserService.addUserToGroup({ name, group_id });
    return res.status(200).json({
      message: 'User added to group successfully!',
      data: user
    });
  } catch (error) {
    logger.error('Controller Error: Failed to add user to group', error);
    return res.status(500).json({
      message: 'Something went wrong. Please try again!',
    });
  }
};
