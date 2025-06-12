import ChatGroupService from '../services/chatGroup.service.js';

const chatGroupService = new ChatGroupService();

const createChatGroup = async (req, res) => {
  try {
    const { title, passcode } = req.body;
    const userId = req.user.id;

    const chatGroup = await chatGroupService.createChatGroup({ title, passcode, userId });
    return res.status(200).json({
      message: 'Chat group created successfully',
      data: chatGroup
    });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getUserChatGroups = async (req, res) => {
  try {
    const userId = req.user.id;

    const groups = await chatGroupService.getUserChatGroups(userId);
    return res.status(200).json({
      message: 'Chat groups fetched successfully',
      data: groups
    });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getChatGroup = async (req, res) => {
  try {
    const { id } = req.params;

    const group = await chatGroupService.getChatGroup(id);
    return res.status(200).json({
      message: 'Chat group fetched successfully',
      data: group
    });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const updateChatGroup = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, passcode } = req.body;

    const group = await chatGroupService.updateChatGroup(id, { title, passcode });
    return res.status(200).json({
      message: 'Chat group updated successfully',
      data: group
    });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteChatGroup = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await chatGroupService.deleteChatGroup(id);
    return res.status(200).json({
      message: 'Chat group deleted successfully',
      data: deleted
    });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};


export default{
    createChatGroup,
    getUserChatGroups,
    getChatGroup,
    updateChatGroup,
    deleteChatGroup
}
