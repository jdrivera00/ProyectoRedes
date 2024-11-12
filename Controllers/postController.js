// controllers/postController.js
import { getPosts, addPost, deletePost, updatePost } from "../models/postModel.js";

export const loadPosts = async () => {
    const posts = await getPosts();
    const postsContainer = document.getElementById("postsContainer");
    postsContainer.innerHTML = posts.map(post => `
        <div class="post">
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <button onclick="editPost('${post.id}')">Edit</button>
            <button onclick="removePost('${post.id}')">Delete</button>
        </div>
    `).join("");
};

export const createPost = async () => {
    const title = document.getElementById("postTitle").value;
    const content = document.getElementById("postContent").value;
    await addPost({ title, content });
    loadPosts();
};

export const removePost = async (id) => {
    await deletePost(id);
    loadPosts();
};

export const editPost = async (id) => {
    const title = prompt("New title:");
    const content = prompt("New content:");
    await updatePost(id, { title, content });
    loadPosts();
};