function openLetter() {
            const envelope = document.getElementById("envelope");
            const letter = document.getElementById("letter");
            const clickText = document.getElementById("clickText");

            if (!envelope.classList.contains("open")) {
                envelope.classList.add("open");

                clickText.style.display = "none";

                setTimeout(() => {
                    envelope.style.display = "none";
                    letter.classList.add("show");
                    createHearts();
                }, 700);
            }
        }

        function showMessage() {
            const message = document.getElementById("hiddenMessage");

            if (message.style.display === "block") {
                message.style.display = "none";
            } else {
                message.style.display = "block";
                createHearts();
            }
        }

        function createHearts() {
            for (let i = 0; i < 12; i++) {
                const heart = document.createElement("div");

                heart.className = "floating-heart";
                heart.innerHTML = "♥";

                heart.style.left = Math.random() * 100 + "vw";
                heart.style.animationDelay = Math.random() * 2 + "s";
                heart.style.fontSize =
                    (Math.random() * 15 + 15) + "px";

                document.body.appendChild(heart);

                setTimeout(() => {
                    heart.remove();
                }, 7000);
            }
        }