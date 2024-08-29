document.addEventListener("DOMContentLoaded", function() {
    function adjustLayout() {
        const container = document.querySelector(".container");
        const profileCards = document.querySelectorAll(".profile-card");
        
        if (window.innerWidth <= 768) {
            container.style.flexDirection = "column";
            profileCards.forEach(card => {
                card.style.width = "100%";
                card.style.margin = "10px 0";
            });
        } else {
            container.style.flexDirection = "row";
            profileCards.forEach(card => {
                card.style.width = "257px";
                card.style.margin = "5px";
            });
        }

        if (window.innerWidth <= 480) {
            profileCards.forEach(card => {
                card.style.padding = "15px";
                card.querySelector("h2").style.fontSize = "14px";
                card.querySelector("h3").style.fontSize = "14px";
                card.querySelector("p").style.fontSize = "12px";
                const avatar = card.querySelector(".avatar");
                avatar.style.width = "60px";
                avatar.style.height = "60px";
            });
        }
    }

    adjustLayout();
    window.addEventListener("resize", adjustLayout);
});
