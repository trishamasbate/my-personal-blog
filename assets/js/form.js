// Logic specific to the form page
document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();     // Prevent the default form submission behavior
    
    // Get the values entered in the form fields
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Check if any of the fields are empty
    if (!username || !title || !content) {
        alert('Please complete the form');
        return;
    }

    // Create a new post object with the form values
    const post = {
        username: username,
        title: title,
        content: content
    };

    // Retrieve existing posts from local storage or initialize an empty array
    let posts = localStorage.getItem('posts');
    posts = posts ? JSON.parse(posts) : [];
    
    // Add the new post to the posts array
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));

    // Redirect the user to the blog page after submitting the form
    window.location.href = 'blog.html';
});
