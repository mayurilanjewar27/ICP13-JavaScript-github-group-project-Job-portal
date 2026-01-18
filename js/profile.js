function saveProfile(){

  const genderInput = document.querySelector('input[name="gender"]:checked');

  const data = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    dob: dob.value,
    contact: contact.value,
    education: education.value,
    university: university.value,
    experience: experience.value,
    skills: skills.value,
    city: city.value,
    gender: genderInput ? genderInput.value : "",
    profileImage: "",
    coverImage: ""
  };

  const profileFile = profilePic.files[0];
  const coverFile = coverPic.files[0];

  const reader1 = new FileReader();
  const reader2 = new FileReader();

  reader1.onload = function(){
    data.profileImage = reader1.result;

    reader2.onload = function(){
      data.coverImage = reader2.result;
      localStorage.setItem("profileData", JSON.stringify(data));
      showProfile();
    };

    if(coverFile){
      reader2.readAsDataURL(coverFile);
    } else {
      alert("Please upload cover photo");
    }
  };

  if(profileFile){
    reader1.readAsDataURL(profileFile);
  } else {
    alert("Please upload profile picture");
  }
}

function showProfile(){
  const data = JSON.parse(localStorage.getItem("profileData"));
  if(!data) return;

  formSection.style.display = "none";
  profileSection.style.display = "block";

  viewName.innerText = data.firstName + " " + data.lastName;
  viewEmail.innerText = data.email;
  viewCity.innerText = data.city;
  viewEducation.innerText = data.education;
  viewUniversity.innerText = data.university;
  viewExperience.innerText = data.experience;
  viewContact.innerText = data.contact;
  viewDob.innerText = data.dob;
  viewGender.innerText = data.gender;

  viewPic.src = data.profileImage;
  coverView.style.backgroundImage = `url(${data.coverImage})`;

  viewSkills.innerHTML = "";
  data.skills.split(",").forEach(skill=>{
    const span = document.createElement("span");
    span.innerText = skill.trim();
    viewSkills.appendChild(span);
  });
}

function editProfile(){
  formSection.style.display = "block";
  profileSection.style.display = "none";
}

function logout(){
  localStorage.clear();
  window.location.href = "../index.html";
}

window.onload = showProfile;