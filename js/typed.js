const TEXTS = [
    "resent.",
    "???",
    "aneurysm",
    "@czn",
]

async function sleep(ms) {
    await new Promise(resolve => setTimeout(resolve, ms))
}

async function doType(text) {
    typedOut.innerText = ""

    for (let i = 0; i < text.length; i++) {
        typedOut.innerText = text.slice(0, i + 1)
        await sleep(100)
    }
    await sleep(1000)

    while (typedOut.innerText.length !== 0) {
        typedOut.innerText = typedOut.innerText.slice(0, typedOut.innerText.length - 1)
        await sleep(50)
    }
}

async function typeloop() {
    while (true) {
        for (let i = 0; i < TEXTS.length; i++) {
            await doType(TEXTS[i])
        }
    }
}

typeloop()
