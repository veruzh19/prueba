function loadProfile() {
    const profileName = localStorage.getItem('username') || 'username';
    const profileBio = localStorage.getItem('bio') || 'This is a description';

    document.querySelector('.profile-user-name').textContent = profileName;
    document.querySelector('.profile-real-name').textContent = profileName; 
    document.querySelector('.profile-bio p').textContent = profileBio;
    document.querySelector('.profile-image img').src = profileImage;
}

function updateProfile() {
    const username = document.getElementById('username').value;
    const bio = document.getElementById('bio').value;
    const imageFile = document.querySelector('input[type="file"]').files[0];
    const imageUrl = imageFile ? URL.createObjectURL(imageFile) : localStorage.getItem('profileImage');
    localStorage.setItem('username', username);
    localStorage.setItem('bio', bio);
    loadProfile();
}
document.addEventListener('DOMContentLoaded', loadProfile);
document.getElementById('update_profile_btn').addEventListener('click', updateProfile);
