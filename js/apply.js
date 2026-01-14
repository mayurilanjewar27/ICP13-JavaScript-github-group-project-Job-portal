const form = document.getElementById("jobForm");
const typeSelect = document.getElementById("applicationType");
const internshipSection = document.getElementById("internshipSection");
const experienceSection = document.getElementById("experience");
const message = document.getElementById("message");

typeSelect.addEventListener("change", function () {
    if (this.value === "internship") {
        internshipSection.style.display = "block";
        experienceSection.parentElement.style.display = "none";
    } else {
        internshipSection.style.display = "none";
        experienceSection.parentElement.style.display = "block";
    }
});