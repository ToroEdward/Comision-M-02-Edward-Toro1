import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
  },
    {
      timestamps: true,
      versionKey: false,
    }
);

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
    next();
});

export const UserModel = model('user', UserSchema);