function toggleMobileMenu() {
    document.getElementById("menu").classList.toggle("active")
}

document.addEventListener("DOMContentLoaded", function() {
    const collapsibleHeaders = document.querySelectorAll(".collapsible-header");

    collapsibleHeaders.forEach(header => {
        header.addEventListener("click", function() {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});