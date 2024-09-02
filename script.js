document.addEventListener("DOMContentLoaded", function () {
    const detailsButtons = document.querySelectorAll(".details-btn");

    detailsButtons.forEach(button => {
        button.addEventListener("click", function () {
            const description = this.previousElementSibling;
            if (description.style.display === "none" || !description.style.display) {
                description.style.display = "block";
            } else {
                description.style.display = "none";
            }
        });
    });
});