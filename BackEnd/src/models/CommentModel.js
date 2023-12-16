import { Schema } from "mongoose";
import { model } from "mongoose";

const CommentSchema = new Schema(
    {
        autor: {
            type: Schema.Types.ObjectId,
            ref: "User",
         },
         description: {
            type: String,
            required: true,
         },
         postId: {
            type: Schema.Types.ObjectId,
            ref: "post",
         },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export const CommentModel = model("Comment", CommentSchema);