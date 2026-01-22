document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".buy-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const card = button.closest(".card");
            const productName = card.querySelector("h3").innerText;

            showToast(`Դուք ընտրեցիք՝ ${productName}`);

            const phone = "374XXXXXXXX";
            const message = encodeURIComponent(
                `Բարև ձեզ 👋\nՑանկանում եմ պատվիրել՝ ${productName}`
            );

            setTimeout(() => {
                window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
            }, 1200);
        });
    });

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mousemove", e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateX = ((y / rect.height) - 0.5) * -8;
            const rotateY = ((x / rect.width) - 0.5) * 8;

            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-8px)
            `;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });
    });

    function showToast(text) {
        let toast = document.createElement("div");
        toast.className = "toast";
        toast.innerText = text;

        document.body.appendChild(toast);

        setTimeout(() => toast.classList.add("show"), 50);
        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => toast.remove(), 300);
        }, 2500);
    }

});
