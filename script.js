let likes = 0;
let followed = false;

function hideAllPages() {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
}

function showLogin() { hideAllPages(); loginPage.classList.add("active"); }
function showSignup() { hideAllPages(); signupPage.classList.add("active"); }
function showFeed() { hideAllPages(); feedPage.classList.add("active"); }
function showUpload() { hideAllPages(); uploadPage.classList.add("active"); }
function showSearch() { hideAllPages(); searchPage.classList.add("active"); }
function showProfile() { hideAllPages(); profilePage.classList.add("active"); }
function showSettings() { hideAllPages(); settingsPage.classList.add("active"); }

function goToFeed() { showFeed(); }

function likeVideo() {
  likes++;
  likeCount.innerText = likes;
}

function followUser() {
  followed = !followed;
  followBtn.innerText = followed ? "Following" : "Follow";
}

function shareVideo() {
  alert("Shared successfully 🚀");
}