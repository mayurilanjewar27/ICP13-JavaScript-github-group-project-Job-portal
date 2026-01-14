function togglePassword() {
        const pwd = document.getElementById("password");
        const toggleText = document.querySelector(".toggle");

        if (pwd.type === "password") {
            pwd.type = "text";
            toggleText.innerText = "😊";
        } else {
            pwd.type = "password";
            toggleText.innerText = "👀";
            
        }
    }