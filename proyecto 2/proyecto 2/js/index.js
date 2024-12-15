
class Post {
    constructor(element) {
        this.element = element;
        this.likesCount = 0; 
        this.init(); 
    }

    init() {
        const likeBtn = this.element.querySelector('.like-btn');
        likeBtn.addEventListener('click', () => {
            this.likesCount++;
            this.updateLikesDisplay();
        });

        const addCommentBtn = this.element.querySelector('.add-comment-btn');
        addCommentBtn.addEventListener('click', () => {
            const commentBox = addCommentBtn.previousElementSibling;
            this.addComment(commentBox.value);
            commentBox.value = ''; 
        });
    }

    updateLikesDisplay() {
        const likesDisplay = this.element.querySelector('.likes');
        likesDisplay.textContent = `${this.likesCount} likes`;
    }

    addComment(commentText) {
        if (commentText.trim()) {
            const commentsList = this.element.querySelector('.comments-list');
            const newComment = document.createElement('p');
            newComment.textContent = commentText;
            commentsList.appendChild(newComment);
        }
    }
}
const posts = document.querySelectorAll('.post');
posts.forEach(post => {
    new Post(post);
});
