// Logic specific to the blog page
function displayPosts() {
    const postList = document.getElementById('postList');       // Get the element where posts will be displayed
    let posts = localStorage.getItem('posts');
    posts = posts ? JSON.parse(posts) : [];

    if (posts.length === 0) {        // Check if there are no posts
        postList.innerHTML = '<p>No posts yet</p>';
    } else {
        postList.innerHTML = '';
        posts.forEach(post => {     // Loop through each post and create HTML elements to display them
            const postItem = document.createElement('div');
            postItem.classList.add('post-item');

            // Create HTML content for each post
            postItem.innerHTML = `
                <h1>${post.title}</h1>
                <p class="content">${post.content}</p>
                <p>Posted by: ${post.username}</p>
            `;

            // Append the post HTML to the postList
            postList.appendChild(postItem);
        });
    }
}

// Call displayPosts function when the page loads
window.onload = function() {
    displayPosts();
}