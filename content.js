// PAGE ELEMENTS
const buttonsContainer = document.getElementById("ide-top-btns") 

// Hint Button
const containerDiv = document.createElement("div")
containerDiv.style = "position: relative;"
const hintBtn = document.createElement("button")
hintBtn.innerText = "Hint"

// Popup div
const popupDiv = document.createElement("div")
popupDiv.style = "height: 400px; width: 400px; background-color: black; color: white; display: none; position: absolute; top: 32px; border-radius: 10px; border: 2px solid white; overflow: hidden;"
const closeBtn = document.createElement("button")
closeBtn.style = "position: absolute; right: 0px; background-color: gray; padding: 2px;"
closeBtn.innerText = "close"

closeBtn.addEventListener("click", () => {
    popupDiv.style.display = "none"
})

popupDiv.appendChild(closeBtn)

containerDiv.appendChild(hintBtn)
containerDiv.appendChild(popupDiv)
buttonsContainer.appendChild(containerDiv)



hintBtn.addEventListener("click", () => {
    popupDiv.style.display = "block";
    const windowUrl = window.location.href
    const qsnTitle = windowUrl.split('/')[4].split("-").join(" ")
    const qsnDesc = document.querySelector('[data-track-load="description_content"]').innerText
    const code = document.querySelector('[data-mprt="7"]').innerText
    const codeLanguage = document.getElementById('editor').children[0].children[0].children[0].children[0].innerText
    console.log(qsnTitle)
    console.log(qsnDesc)
    console.log(code)
    console.log(codeLanguage)
})