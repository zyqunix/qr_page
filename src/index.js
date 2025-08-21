const url = `https://api.qrserver.com/v1/create-qr-code`;

export async function getQr(data, size) {
    const response = await fetch(`${url}/?data=${encodeURIComponent(data)}&size=${size}x${size}`);
    return await response.blob();
}