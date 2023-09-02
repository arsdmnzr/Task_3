let likeButtons = [...document.querySelectorAll('Like')];
let likeCount;
for (let i = 0; i < Math.min(likeCount, likeButtons.length); i++) {
    likeButtons[i].click();
}

let commentFields = [...document.querySelectorAll('Comment')];
let commentCount;
for (let i = 0; i < Math.min(commentCount, commentFields.length); i++) {
    commentFields[i].value = 'CFBR';
    commentFields[i].closest('appropriate-selector-for-comment-form').submit();
}
