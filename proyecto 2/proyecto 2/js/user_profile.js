document.addEventListener("DOMContentLoaded", function () {
    const followButton = document.querySelector('.follow-btn-user-profile');
    followButton.addEventListener('click', function (event) {
        event.preventDefault(); 

        if (followButton.textContent.trim() === "Follow") {
            followButton.textContent = "Following"; 
            followButton.classList.add('following'); 
        } else {
            followButton.textContent = "Follow"; 
            followButton.classList.remove('following');
        }
    });
});
