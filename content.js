// PAGE ELEMENTS
const buttonsContainer = document.getElementById("ide-top-btns")

// Hint Button
const containerDiv = document.createElement("div")
containerDiv.style = "position: relative; display: inline-block;"

const hintBtn = document.createElement("button")
hintBtn.innerText = "Hint"
hintBtn.style = "padding: 6px 16px; background-color: #222222; color: #ffa116; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;"

// Popup div
const popupDiv = document.createElement("div")
popupDiv.style = "max-height: 400px; width: 400px; background-color: #1e1e1e; color: white; display: none; position: absolute; top: 38px; left: 0; border-radius: 4px; border: 1px solid #6e6e6eff; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.4);"

const headerBar = document.createElement("div")
headerBar.style = "display: flex; width: 100%; justify-content: end;"

const closeBtn = document.createElement("button")
closeBtn.style = "background-color: #ef4743; color: white; border: none; border-radius: 4px; padding: 4px 8px; cursor: pointer; font-size: 12px;"
closeBtn.innerText = "✕"

closeBtn.addEventListener("click", () => {
    popupDiv.style.display = "none"
})

const popupText = document.createElement("p")
popupText.innerText = "Your hint will appear here"
popupText.style = "text-align: center; padding: 20px; color: white; font-size: 14px;"

headerBar.appendChild(closeBtn)
popupDiv.appendChild(headerBar)
popupDiv.appendChild(popupText)
containerDiv.appendChild(hintBtn)
containerDiv.appendChild(popupDiv)

buttonsContainer.appendChild(containerDiv)



hintBtn.addEventListener("click", async () => {
    popupDiv.style.display = "block";
    const windowUrl = window.location.href
    const qsnTitle = windowUrl.split('/')[4].split("-").join(" ")
    const qsnDesc = document.querySelector('[data-track-load="description_content"]').innerText
    const code = document.querySelector('[data-mprt="7"]').innerText
    const codeLanguage = document.getElementById('editor').children[0].children[0].children[0].children[0].innerText

    const response = await chrome.runtime.sendMessage({
        type: "generateHint",
        qsnTitle,
        qsnDesc,
        code,
        codeLanguage
    })
    response.data ? popupText.innerText = response.data : popupText.innerText = response.error
})