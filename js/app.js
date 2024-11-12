// js/app.js
import { loadPosts, createPost, removePost, editPost } from "../Controllers/postController";


window.addEventListener("load", () => {
    if (document.getElementById("postsContainer")) {
        loadPosts();
    }
});

window.createPost = createPost;
window.removePost = removePost;
window.editPost = editPost;