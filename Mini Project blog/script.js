document.addEventListener("DOMContentLoaded", function () {

function toggleContent(postId) {
    var content = document.getElementById(postId).getElementsByClassName('content')[0];
    var button = document.getElementById(postId).getElementsByClassName('show-btn')[0];
  
    if (content.style.display === 'none') {
      content.style.display = 'block';
      button.textContent = 'Read Less';
    } else {
      content.style.display = 'none';
      button.textContent = 'Read More';
    }
  }
  // Load comments when the page is ready
  loadComments();
});

function loadComments() {
  const commentsContainer = document.getElementById("comments-container");

  // You may replace this with a fetch request to your server
  const comments = [
    { author: "User1", text: "Great post!" },
    { author: "User2", text: "I enjoyed reading this." },
    // Add more comments as needed
  ];

  commentsContainer.innerHTML = comments.map(comment => `<div><strong>${comment.author}:</strong> ${comment.text}</div>`).join("");
}

function postComment() {
  const commentInput = document.getElementById("comment-input");
  const commentsContainer = document.getElementById("comments-container");

  const newComment = {
    author: "Current User", // You might want to get the actual user's name
    text: commentInput.value,
  };

  // You may replace this with a fetch request to your server
  // to store the comment on the backend
  // For simplicity, let's assume you have a function addCommentToBackend(comment)
  // that stores the comment on the server
  addCommentToBackend(newComment);

  // Add the new comment to the UI
  commentsContainer.innerHTML += `<div><strong>${newComment.author}:</strong> ${newComment.text}</div>`;

  // Clear the input field
  commentInput.value = "";
}

function addCommentToBackend(comment) {
  // In a real-world scenario, you would make a POST request to your server
  // to store the comment in your database or another storage solution.
  // For simplicity, let's assume you are using a simple JSON file as a backend.

  // This is a simplified example, do not use this in production without proper backend validation and storage.
  const comments = require("./comments.json");
  comments.push(comment);
  // Save comments back to the JSON file or your storage solution
  // fs.writeFileSync("./comments.json", JSON.stringify(comments, null, 2));
}