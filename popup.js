const getHintBtn = document.getElementById('get-hint-btn')

getHintBtn.addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    })

    chrome.tabs.sendMessage(tab.id, {
        action: "getQuestion"
    })
})