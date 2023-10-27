// Fetching User IP Using external-ip NPM Module

async function fetchUserIP() {

    try {

        const response = await fetch('https://api.ipify.org?format=json');
        const ipString = await response.json();
        return ipString.ip;

    } catch (err) {

        console.error("Error While Fetching IP Is:- ", err);

    }
}

export default fetchUserIP;