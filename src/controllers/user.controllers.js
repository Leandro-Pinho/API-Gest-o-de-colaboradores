import mongoose from "mongoose";
import User from "../models/User.models.js";

export const findAll = async (req, res) => {
  try {
    const users = await User.find();

    if (users.length === 0) {
      return res.status(400).send({ message: "Não há usuario cadastrados!" });
    }

    res.send(users);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const create = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Preencha todos os campos!" });
    }

    const user = await User.create(req.body);

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
      },
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const findById = async (req, res) => {
  try {
    const id = req.params.id;
    // ou const id = req.id - pegando do middleware

    // para verificar se o id é valido
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "id invalido!" });
    }

    const user = await User.findById(id);
    // ou const user = req.user - pegando do middleware

    // if (!user) {
    //     return res.status(400).json({ message: "Usuario não encontrado!" })
    // }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const update = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name && !email && !password) {
      return res
        .status(400)
        .json({ message: "Não alterou nenhum campo para fazer update!" });
    }

    const id = req.params.id;

    // para verificar se o id é valido
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "id invalido!" });
    }

    const user = await User.findById(id);
    
    if (!user) {
      return res.status(400).json({ message: "Usuario não encontrado!" });
    }

    const userAtualizado = await User.findOneAndUpdate(
      { _id: id },
      {
        name,
        email,
        password,
      }
    );

    res.send({
      message: "Usuario cadastrado atualizado com sucesso!",
      user: userAtualizado,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
