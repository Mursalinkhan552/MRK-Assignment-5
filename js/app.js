// =============== selection section ==================

const selectBtns = document.getElementsByClassName("select-btn")
for (const selectBtn of selectBtns) {
    selectBtn.addEventListener("click", function (e) {
        const targetBtn = e.target;
        const parent = targetBtn.parentNode.parentNode
        const targetEventPlayer = parent.querySelector("h2")
        const targetEventPlayerName = targetEventPlayer.innerText
        const counter = (document.getElementById("ol").childNodes.length) - 1;
        console.log(counter)
        if (counter >= 5) {
            alert("You Can't Select More Then 5 Player")
        }
        else {
            createNewLi(targetEventPlayerName)

            targetBtn.disabled = true;

            targetBtn.classList.add("bg-secondary");
            
        }
    })
}

function createNewLi(text) {
    const li = document.createElement("li")
    li.innerText = text;
    const ol = document.getElementById("ol")
    ol.appendChild(li)
}

