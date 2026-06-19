
// import { createClient } from '@supabase/supabase-js'
// Create a single supabase client for interacting with your database
var supabase = window.supabase.createClient('https://ppovyzzhqjgnthbcbfxd.supabase.co', 'sb_publishable_Zf7TySWJVCgD5rJlO1Cg3w__2FgmHZm'
);
window.onload = async function(){
  const { data, error } = await supabase
  .from('Posts')
  .select("*")
  console.log(data, "hello");
}
var cardBg = "https://source.unsplash.com/200x200/?nature"

function SignUp() {
  var username = document.getElementById("user").value;
  var password = document.getElementById("passwordd").value;

  if (username !== "" && password !== "") {
    document.getElementById("SignupPage").style.display = "none";
    document.getElementById("loginPage").style.display = "flex";
  } else {
    alert("Please enter Email and Password");
  }
}

function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username !== "" && password !== "") {
    document.getElementById("loginPage").style.display = "none"; // flex nahi
    document.getElementById("appPage").style.display = "block";
  } else {
    alert("Please enter Email and Password");
  }
}
// POST
function post() {
  var title = document.getElementById("title")
  var description = document.getElementById("description")
  var posts = document.getElementById("posts")

  if (title.value.trim() && description.value.trim()) {

    posts.innerHTML += `
      <div class="card mb-3 shadow">
        <div class="card-header">Post</div>
        <div style="background-image:url(${cardBg})" class="card-body p-3">
          <h5>${title.value}</h5>
          <p>${description.value}</p>
        </div>
        <div class="m-2 text-end">
          <button onclick="editPost(event)" class="btn btn-success btn-sm">Edit</button>
          <button onclick="deletePost(event)" class="btn btn-danger btn-sm">Delete</button>
        </div>
      </div>
    `
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Fill all fields!"
    })
  }

  title.value = ""
  description.value = ""
}

// DELETE
function deletePost(event) {
  var card = event.target.closest(".card")
  card.remove()
}

// EDIT
function editPost(event) {
  var card = event.target.closest(".card")
  var titleText = card.querySelector(".card-body h5").innerText
  var descText = card.querySelector(".card-body p").innerText

  document.getElementById("title").value = titleText
  document.getElementById("description").value = descText

  card.remove()
}

// IMAGE SELECT
function selectImg(src) {
  cardBg = src

  var imgs = document.getElementsByClassName("bgImg")
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].classList.remove("selectedImg")
  }

  event.target.classList.add("selectedImg")
}