chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type != "generateHint") {
        return
    }

    (async () => {
        try {
            const prompt = `
                question_title: ${message.qsnTitle},
                question_description: ${message.qsnDesc},
                question_code_language: ${message.codeLanguage},
                user_code = ${message.code}
            `;

            const res = await fetch('https://api.pushkark1304.workers.dev', {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ prompt })
            });

            if (!res.ok) {
                throw new Error(`Server responded with ${res.status}`);
            }

            const data = await res.json();
            sendResponse({ data: data.data });
        } catch (err) {
            console.error("Fetch error:", err);
            sendResponse({ error: err.message });
        }
    })();

    return true;
})