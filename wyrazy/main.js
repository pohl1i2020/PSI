document.querySelector("button").addEventListener("click", function() {
    const inputText = document.getElementById("tekst").value;
    
    if (inputText.length < 3) {
        document.getElementById("result").innerText = "Wprowadź słowo z co najmniej trzema literami.";
    }
    
    const trzeciaLitera = inputText[2].toLowerCase();
    
    const paragrafy = document.querySelectorAll(".loremy p");
    
    let licznik = 0;
    
    paragrafy.forEach(paragraf => {
        const words = paragraf.textContent.toLowerCase().split(/\s+/);
        
        words.forEach(word => {
            if (word.includes(trzeciaLitera)) {
                licznik++;
            }
        });
    });

    document.getElementById("result").innerText = `Liczba wyrazów zawierających literę '${trzeciaLitera}': ${licznik}`;
});
