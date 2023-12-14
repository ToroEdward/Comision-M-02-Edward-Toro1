import { CommentModel } from "../models/CommentModel.js";
import { PostModel } from "../models/PostModel.js";
import { UserModel } from "../models/User.js";

export const ctrlListPosts = async (req, res) => {
    try {
        const postlists = await PostModel.find()
        .populate({
            path: "autor",
            select: ["username", "avatarURL"],
        })
        .populate({
            path: "comments",
            select: ["description", "autor", "postId"],
            populate: {
              path: "autor",
              select: ["username", "avatarURL"],
            },
        });
        res.status(200).json(postlists);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al obtener la lista de publicaciones" });
    }
  };

export const ctrlCreatePost = async (req, res) => {
    try {
        const { title, description, imageURL, autor } = req.body;

        const postlist = new PostModel({
            title,
            description,
            imageURL, 
            autor,
        });

        await postlist.save();

        return res.status(201).json(postlist);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const ctrlDeletePost = async (req, res) => {
    const { postlistId } = req.params;
    console.log(req.params);
    console.log(postlistId);

    try {
        const postlist = await PostModel.findOne({
            _id: postlistId,
            // autor: userId,
        });

        if (!postlist) {
            return res.status(404).json({ error: "Playlist not found" });
        }

        await PostModel.findOneAndDelete({
            _id: postlistId,
        });

        return res.status(200).json(postlist);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const ctrlGetPost = async (req, res) => {
    const { postlistId } = req.params;

    try {
        const postlist = await PostModel.findOne({
            _id: postlistId,
        }).populate("autor", ["username"]);

        if (!postlist) {
            return res.status(404).json({ error: "Postlist not found" });
        }

        const comments = await CommentModel.find();

        postlist.comments = comments;

        return res.status(200).json(postlist);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};