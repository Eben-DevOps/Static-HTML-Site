document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("mouseover", function() {
            this.style.backgroundColor = "#005f69";
        });

        button.addEventListener("mouseout", function() {
            this.style.backgroundColor = "#007B8A";
        });

        button.addEventListener("click", function() {
            this.style.backgroundColor = "#003f44";
            setTimeout(() => {
                this.style.backgroundColor = "#007B8A";
            }, 200);
        });
    });
});
