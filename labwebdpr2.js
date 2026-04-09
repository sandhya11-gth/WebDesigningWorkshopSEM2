function generateTable() {
    const number = document.getElementById("numberInput").value;
    const output = document.getElementById("tableOutput");

    output.innerHTML = "";

    if (number === "") {
        alert("⚠️ Please enter a number!");
        return;
    }

    // Sound effect (optional, no HTML change needed)
    const audio = new Audio("https://www.soundjay.com/buttons/sounds/button-09.mp3");
    audio.play();

    for (let i = 1; i <= 10; i++) {

        setTimeout(() => {
            const li = document.createElement("li");

            li.textContent = `${number} × ${i} = ${number * i}`;

            // random metallic color
            li.style.background = `linear-gradient(145deg, 
                hsl(${Math.random()*360}, 20%, 75%), 
                hsl(${Math.random()*360}, 20%, 90%))`;

            output.appendChild(li);
        }, i * 100); // delay for animation effect

    }
}