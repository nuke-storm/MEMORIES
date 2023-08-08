import Postmessage
 from "../models/postsmessage.js";
// we need to add .js at the import in node js in react and other instance we dont to that


export const getpost = async(req,res)=> {
    try{
        const postMessage =await Postmessage.find();

        console.log(postMessage);

        res.status(200).json(postMessage);
    }
    catch (error){
        res.status(404).json({message: error.message });
    }
}

export const createPost = async (req,res)=> {
    const post = req.body;

    const newPost = new Postmessage(post);
    try {
        await newPost.save();

        res.status(201).json(newPost);
    }
    catch(error){
        res.status(409).json( {message: error.message} );
    }
   
}