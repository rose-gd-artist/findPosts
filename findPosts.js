const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    return posts;

};

const getUsers = async () => {
    const response2 = await fetch("https://jsonplaceholder.typicode.com/users");
    const postUsers = await response2.json();
    return postUsers;

};

const getComments = async (posts) => {
    const response3 = await fetch("https://jsonplaceholder.typicode.com/comments");
    const postComments = await response3.json();
    return postComments;

};

const showBlogPosts = async (posts, users, comments) => {
    const result = document.getElementsByClassName("result")[0];
    const postTitle = await getPosts();
    const commentsOnPost = await getComments();
    const usersName = await getUsers();
    postTitle.forEach((posts, e) => {
        let blogEntry = document.createElement("div");
        blogEntry.classList.add("blogEntry");
        blogEntry.style.display = "block";
        result.appendChild(blogEntry);
        blogEntry.innerHTML += `<div class="postTitle">${posts.title}</div></br>`;
        usersName.find((users) => {
            if(users.id === posts.userId){
                blogEntry.innerHTML += `<div class="postAuthor">by ${users.name}</div></br>`;
            };
        });
        blogEntry.innerHTML += `<div class="postBody">${posts.body}</div>`;

        let commentButton = document.createElement("div");
        commentButton.classList.add("commentButton");
        commentButton.classList.add("show");
        commentButton.innerHTML = "Comments";
        blogEntry.appendChild(commentButton);
        commentButton.addEventListener("click", () => {
            commentBox.classList.toggle("show");
        });
        let commentBox = document.createElement("div");
        commentBox.classList.add("commentBox");
        commentBox.classList.add("hide");
        blogEntry.appendChild(commentBox);

        commentsOnPost.filter((comments) => {
            if(comments.postId === posts.id){
                commentBox.innerHTML += `<div class="postCommentsName">${comments.name}</div></br>
                                        <div class="postCommentsBody">${comments.body}</div></br>`;
            };
        });
    });
};

showBlogPosts()



