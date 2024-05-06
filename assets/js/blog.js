// Logic specific to the blog page
function displayPosts() {
    const postList = document.getElementById('postList');
    let posts = localStorage.getItem('posts');
    posts = posts ? JSON.parse(posts) : [];

    if (posts.length === 0) {
        postList.innerHTML = '<p>No posts yet</p>';
    } else {
        postList.innerHTML = '';
        posts.forEach(post => {
            const postItem = document.createElement('div');
            postItem.classList.add('post-item');
            postItem.innerHTML = `
                <h1>${post.title}</h1>
                <p class="content">${post.content}</p>
                <p>Posted by: ${post.username}</p>
            `;
            postList.appendChild(postItem);
        });
    }
}

// Call displayPosts function when the page loads
window.onload = function() {
    displayPosts();
}