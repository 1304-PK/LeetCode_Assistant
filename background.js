chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type != "generateHint") {
        return
    }

    const prompt = `
    question_title: ${message.qsnTitle},
    question_description: ${message.qsnDesc},
    question_code_language: ${message.codeLanguage},
    user_code = ${message.code}
    `

    fetch('https://api.pushkark1304.workers.dev', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ prompt })
    })
        .then(res => res.json())
        .then(data => sendResponse({ data }))
        .catch(err => sendResponse({ error: err.message }))

    return true
})