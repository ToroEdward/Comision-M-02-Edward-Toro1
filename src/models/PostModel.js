import { Schema } from "mongoose";
import { model } from "mongoose";

const PostSchema = new Schema(
    {
     title: {
        type: String,
        required: true,
     },
     description: {
        type: String,
        required: true,
    },
    autor: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },

    comments: [
        {
         type: Schema.Types.ObjectId,
         ref: "comment",
        },
    ],
    imageURL: {
        type: String,
        required: false,
    },
   },
   {
    timestamps: true,
    versionKey: false,
   }
);

export const PostModel = model("post", PostSchema);