import User from "../models/User.models.js";


export const findAll = async (req, res) => {
    try {
        const users = await User.find();

        if (users.length === 0) {
            return res.status(400).send({ message: "Não há usuario cadastrados!" })
        }

        res.send(users)
    } catch (error) {
        res.status(500).json({ message: error })
    }
};