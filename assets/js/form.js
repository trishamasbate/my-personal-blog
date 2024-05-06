// Logic specific to the form page
document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (!username || !title || !content) {
        alert('Please complete the form');
        return;
    }

    const post = {
        username: username,
        title: title,
        content: content
    };

    let posts = localStorage.getItem('posts');
    posts = posts ? JSON.parse(posts) : [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));

    window.location.href = 'blog.html';
});
