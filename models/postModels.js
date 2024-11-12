// models/postModel.js
import { db, collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "../firebaseConfig.js";

const postsCollection = collection(db, "posts");

export const getPosts = async () => {
    const snapshot = await getDocs(postsCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addPost = async (post) => {
    await addDoc(postsCollection, post);
};

export const deletePost = async (id) => {
    await deleteDoc(doc(db, "posts", id));
};

export const updatePost = async (id, updatedPost) => {
    await updateDoc(doc(db, "posts", id), updatedPost);
};