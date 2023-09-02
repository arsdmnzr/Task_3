document.addEventListener("DOMContentLoaded", function() {
  const likeCountInput = document.getElementById('likeCount');
    const commentCountInput = document.getElementById('commentCount');
    const executeBtn = document.getElementById('startExtraction');

    function updateButtonStatus() {
      if (likeCountInput.value !== '' && commentCountInput.value !== '') {
          executeBtn.removeAttribute('disabled');
      } else {
          executeBtn.setAttribute('disabled', 'true');
      }
  }

  likeCountInput.addEventListener('input', updateButtonStatus);
  commentCountInput.addEventListener('input', updateButtonStatus);

  executeBtn.addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "start_extraction" });
  });
});
