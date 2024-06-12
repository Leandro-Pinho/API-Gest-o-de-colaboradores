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


export const create = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password ) {
            return res.status(400).json({ message: "Preencha todos os campos!" });
        }

        const user = await User.create(req.body)

        if (!user) {
            return res.status(400).json({ message: "Error criação do usuario" });
        }

        res.status(201).json({
            message: "User created successfully",
            user: {
                id: user._id,
                name,
                email,
                password,
            }
        });
    } catch (error) {
        res.status(500).json({ message: error })
    }
};