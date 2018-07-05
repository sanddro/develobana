import mongoose, { Schema } from 'mongoose';
import User from './User';

const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    avatar: {
        type: String
    },
    social: {
        twitter: {
          type: String
        },
        facebook: {
          type: String
        },
        instagram: {
          type: String
        },
        github: {
            type: String
        },
        stackoverflow: {
            type: String
        }
    },
    experience: [
        {
            company: {
                type: String,
                required: true
            },
            from: {
                type: Date,
                required: true
            },
            to: {
                type: Date,
                required: true
            },
            current: {
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                required: true
            },
            description: {
                type: String
            }
        }
    ],
    skills: {
        type: [String]
    },
    following: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ],    
    followers: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ]
});

const Profile = mongoose.model('user', ProfileSchema);

export default Profile;
