const CHAIN_ID = "0x5"
const CHAIN_NAME = "Goerli";

async function connectWallet() {
    if (!window.ethereum) {
        alert("No injected provider found. Install Metamask or login in your Metamask.");
    } else {
        try {
            // const: new variable, never changes (local)
            // let: make a new variable, we can change it (local)
            // var: global variable (can use anywhere) and we can change
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
                params: []
            });
            console.log("accounts: ", accounts);
            const account = accounts[0];
            console.log("account: ", account);

            const chainId = await window.ethereum.request({
                method: "eth_chainId",
                params: []
            });
            console.log("chainId: ", chainId);
            console.log("chainId !== CHAIN_ID: ", chainId !== CHAIN_ID);
            console.log("CHAIN_ID: ", CHAIN_ID);
            if (chainId !== CHAIN_ID) {
                alert("Connected to wrong chain! Please change to " + CHAIN_NAME)
            } else {
                alert("Connected to account: " + String(account) + 
                        " and chainId: " + String(chainId));
            }

            

        } catch {
            alert("Something went wrong connecting. Refresh and try again.");
        }
    }
}