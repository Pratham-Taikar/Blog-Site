let posts = JSON.parse(localStorage.getItem("blogPosts")) || [];
let selectedImage = "";

window.onload = displayPosts;

const imageInput = document.getElementById("imageInput");

imageInput.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      selectedImage = e.target.result;
    }
    reader.readAsDataURL(file);
  }
});

function addPost() {
  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const description = document.getElementById("description").value;

  if (!title || !date || !description ) {
    alert("Please fill in all fields including image.");
    return;
  }

  const post = {
    image: selectedImage,
    title: title,
    date: date,
    description: description
  };

  posts.push(post);
  localStorage.setItem("blogPosts", JSON.stringify(posts));

  document.getElementById("imageInput").value = "";
  document.getElementById("title").value = "";
  document.getElementById("date").value = "";
  document.getElementById("description").value = "";
  selectedImage = "";

  displayPosts();
}

function displayPosts() {
  const postList = document.getElementById("postList");

  posts.forEach((post) => {
    const postItem = document.createElement("div");
    postItem.className = "post-item";
    postItem.innerHTML = `
      <img src="${post.image}" alt="Post Banner" width="300">
      <h2>${post.title}</h2>
      <p class="date">Date: ${post.date}</p>
      <p>${post.description}</p>
    `;
    postList.appendChild(postItem);
  });
}
