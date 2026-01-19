function addPost() {
  const text = document.getElementById("postText").value.trim();
  if (text === "") return;

  const data = JSON.parse(localStorage.getItem("profileData")) || {};

  const name = (data.firstName || "User") + " " + (data.lastName || "");
  const education = data.education || "Student";
  const profilePic = data.profileImage || "images/default.png";

  const postHTML = `
    <div class="post">
      <div class="post-author">
        <img src="${profilePic}">
        <div>
          <h1>${name}</h1>
          <small>${education}</small>
        </div>
      </div>

      <p>${text}</p>

      <div class="post-stats">
        <div>
          <img src="../images/thumsup.png">
          <img src="../images/heart.png">
          <span class="liked-user">You and 0 others</span>
        </div>
        <div>
          <span>0 comments &middot 0 shares</span>
        </div>
      </div>

      <div class="post-activity">
        <div class="post-activity-reaction">
          <img src="../images/like.png">
          <span>Like</span>
        </div>
        <div class="post-activity-reaction">
          <img src="../images/comment.png">
          <span>Comment</span>
        </div>
        <div class="post-activity-reaction">
          <img src="../images/repost.png">
          <span>Repost</span>
        </div>
        <div class="post-activity-reaction">
          <img src="../images/send.png">
          <span>Send</span>
        </div>
      </div>
    </div>
  `;

  document.getElementById("postContainer").innerHTML =
    postHTML + document.getElementById("postContainer").innerHTML;

  document.getElementById("postText").value = "";
}


const data = JSON.parse(localStorage.getItem("profileData"));

if (data) {

  // Name
  document.getElementById("sidebarName").innerText =
    data.firstName + " " + data.lastName;

  // Education
  document.getElementById("sidebarEducation").innerText =
    data.education || "Student";

  // Location
  document.getElementById("sidebarLocation").innerText =
    data.city || "India";

  // Profile Pic
  if (data.profileImage) {
    document.getElementById("sidebarPic").src = data.profileImage;
  }

  // Cover Pic
  if (data.coverImage) {
    document.getElementById("sidebarCover").src = data.coverImage;
  }
  // Middle pic
  if (data.profileImage) {
  document.getElementById("middleProfilePic").src = data.profileImage;
}

}


let sideActivity = document.getElementById("recentActivities");
let moreLink = document.getElementById("showMoreLink");

function toggleActivity(){
     sideActivity.classList.toggle("open-activity");

     if(sideActivity.classList.contains("open-activity")){
        moreLink.innerHTML = "Show less <b>-</b>";
     }
     else{
        moreLink.innerHTML = "Show more <b>+</b>";
     }
}