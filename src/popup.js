import { getQr } from "./index.js";

document.getElementById("button")?.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const qrURL = URL.createObjectURL(await getQr(tab.url, 200));
    document.getElementById("image").src = qrURL;
});

document.getElementById("custom-url")?.addEventListener("click", async () => {
    const qrURL = URL.createObjectURL(await getQr(document.getElementById("input")?.value, 200));
    document.getElementById("image").src = qrURL;
})