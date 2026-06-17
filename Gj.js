document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("submitBtn");
    const display = document.getElementById("timer");
    const quizContainer = document.querySelector(".quiz-container");

    let time = 5400; // 1h 30min

    function normalize(text) {
        return (text || "")
            .toLowerCase()
            .replace(/[^a-z0-9\s]/g, "")
            .replace(/\s+/g, " ")
            .trim();
    }

    // ---------------- SUBMIT SYSTEM ----------------
    btn.addEventListener("click", function () {

        const textareas = document.querySelectorAll("textarea");

        let totalScore = 0;

        textareas.forEach((textarea) => {

            const feedback = textarea.nextElementSibling;
            if (!feedback || !feedback.classList.contains("result-feedback")) return;

            const keywords = (textarea.dataset.keywords || "")
                .split(",")
                .map(k => normalize(k))
                .filter(Boolean);

            const answer = normalize(textarea.value);

            let matchedCount = 0;

            keywords.forEach(k => {
                if (answer.includes(k)) matchedCount++;
            });

            const score = Math.min(matchedCount, );
            totalScore += score;

            feedback.innerHTML = `
                <b>Score:</b> ${score}/5<br>
                <small>Matched: ${matchedCount}</small><br>
                <div class="keywords">
                    Keywords: ${keywords.join(", ")}
                </div>
            `;

            const preview = document.createElement("div");
            preview.className = "highlight-box";

            let highlightedText = textarea.value;

            keywords.forEach(keyword => {
                const regex = new RegExp(`\\b${keyword}\\b`, "gi");
                highlightedText = highlightedText.replace(
                    regex,
                    match => `<span class="match">${match}</span>`
                );
            });

            preview.innerHTML = highlightedText || "(No answer)";

            textarea.style.display = "none";
            textarea.parentNode.insertBefore(preview, feedback);
        });

        let resultBox = document.getElementById("totalResult");

        if (!resultBox) {
            resultBox = document.createElement("div");
            resultBox.id = "totalResult";
            resultBox.style.marginTop = "20px";
            resultBox.style.fontSize = "22px";
            resultBox.style.fontWeight = "bold";
            quizContainer.appendChild(resultBox);
        }

        resultBox.innerHTML = `TOTAL SCORE: ${totalScore}`;
    });

    // ---------------- TIMER ----------------
    function startTimer() {

        if (!display) return;

        const timer = setInterval(() => {

            let hours = Math.floor(time / 3600);
            let minutes = Math.floor((time % 3600) / 60);
            let seconds = time % 60;

            display.innerHTML =
                `Time Left: ${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

            if (time <= 300) {
                display.style.color = "red";
            }

            if (time <= 0) {
                clearInterval(timer);
                alert("Time is up!");
                btn.click();
            }

            time--;

        }, 1000);
    }

    startTimer();
});