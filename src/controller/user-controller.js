import prisma from "../config/db.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/server-config.js";
import logger from "../utils/logger.js";


const login = async (req, res) => {
  try {
    const { name, email, oauth_id, provider, image } = req.body;

    let findUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!findUser) {
      findUser = await prisma.user.create({
        data: { name, email, oauth_id, provider, image },
      });
    }

    const JWTPayload = {
      name,
      email,
      id: findUser.id,
    };

    const token = jwt.sign(JWTPayload, JWT_SECRET, {
      expiresIn: "27d",
    });

    return res.json({
      message: "Logged in successfully!",
      user: {
        ...findUser,
        token: `Bearer ${token}`,
      },
    });
  } catch (error) {
    logger.error(error);
    return res
      .status(500)
      .json({ message: "Something went wrong. Please try again!" });
  }
};

export {
  login,
};
