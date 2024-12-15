class LikeButton {
    constructor(button) {
        this.button = button;
        this.likeCountElement = this.button.nextElementSibling; 
        this.currentLikes = parseInt(this.likeCountElement.textContent.trim());
        this.button.addEventListener('click', () => this.toggleLike());
    }

    toggleLike() {
        if (this.button.classList.contains('liked')) {
            this.likeCountElement.textContent = this.currentLikes - 1;
            this.button.classList.remove('liked');
        } else {
            this.likeCountElement.textContent = this.currentLikes + 1;
            this.button.classList.add('liked');
        }
        this.currentLikes = parseInt(this.likeCountElement.textContent.trim());
    }
}

class CommentButton {
    constructor(button) {
        this.button = button;
        this.commentCountElement = this.button.nextElementSibling; 
        this.currentComments = parseInt(this.commentCountElement.textContent.trim());
        this.button.addEventListener('click', () => this.addComment());
    }

    addComment() {
        this.currentComments += 1;
        this.commentCountElement.textContent = this.currentComments;
        alert("Comentario añadido."); 
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(button => new LikeButton(button));
    const commentButtons = document.querySelectorAll('.comment-btn');
    commentButtons.forEach(button => new CommentButton(button));
});
