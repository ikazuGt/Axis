import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
    },
    profileImage: {
      type: String,
      default: '',
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    learningProgress: {
      type: Map,
      of: Number,
      default: {},
    },
    completedQuizzes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Quiz',
    }],
  },
  { timestamps: true }
);

// Use existing model or create a new one
export default mongoose.models.User || mongoose.model('User', UserSchema);