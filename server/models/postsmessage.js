import mongoose from 'mongoose';



const postSchema= mongoose.Schema(
    {
        title: String,
        message: String,
        creator: String,
        tags: [String],
        selectedFiles: String,
        likeCount:{
            type:Number,
            default :0
        },
        createdAt:{
            type: Date,
            default : new Date()
        },


    }
);

const Postmessage = mongoose.model('Postmessage', postSchema);

export default Postmessage;
