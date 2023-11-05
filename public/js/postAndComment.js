const addCommentButton = document.getElementById("addCommentButton");
const newCommentForm = document.querySelector(".new-comment-form");
//   const postCommentButton = document.getElementById("postCommentButton");


//*browser not happy about event listener for some reason but it still works.
addCommentButton.addEventListener("click", function() {
  newCommentForm.style.display = "block";
});


const newFormHandler = async (event) => {
  event.preventDefault();



  const content = document.getElementById("content").value.trim();


  if (content) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to create comment");
    }
  }
  // You can add code to send the newComment to your server and update the comments array.
  // After that, you can clear the comment input and hide it again.
  content.value = "";
  commentInput.style.display = "none";

};





document
  .querySelector(".new-comment-form")
  .addEventListener("submit", newFormHandler);