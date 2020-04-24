var like_button = document.getElementById("like-button");
if (like_button) {
    like_button.addEventListener("click", doLikeButton);
}

function doLikeButton(e) {
    toggleButton(e.target);
}

function toggleButton(button)
{
    button.classList.toggle('liked');
    button.classList.toggle('not-liked');
    button.classList.toggle('fal fa-heart');
    button.classList.toggle('fas fa-heart');  
}