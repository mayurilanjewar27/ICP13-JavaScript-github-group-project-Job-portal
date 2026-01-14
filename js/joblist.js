function filterJobs() {
    let value = document.getElementById("filter").value;
    let jobs = document.querySelectorAll(".job-card");

    jobs.forEach(job => {
        if (value === "all" || job.classList.contains(value)) {
            job.style.display = "block";
        } else {
            job.style.display = "none";
        }
    });
}

function goToApply() {
    window.location.href = "form.html";
}