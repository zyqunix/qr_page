import { getQr } from "./index.js";

document.getElementById("button")?.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const qrURL = URL.createObjectURL(await getQr(tab.url, 200));
    document.getElementById("image").src = qrURL;
});

document.getElementById("custom-url")?.addEventListener("click", async () => {
    const input = document.getElementById("input")?.value;

    if (!input.startsWith("https://") && !input.startsWith("http://")) {
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerText = "Error: Must be a valid URL!";
    } else {
        const qrURL = URL.createObjectURL(await getQr(input, 200));
        document.getElementById("error").style.display = "none";
        document.getElementById("image").src = qrURL;
    }
})