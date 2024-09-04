coinSportValue = 0 || localStorage.getItem("cnspt_val");
//TG
const tg = window.Telegram.WebApp;
const tgUser = tg.initDataUnsafe.user;
tg.expand();
//QUERY
kilim = document.querySelector("li#walletList");
fejfa = document.querySelector("bottom");
cnspt = document.querySelector("p.val");
buttonTap = document.querySelector("button.button");

kilim.textContent = "CNSPT Wallet @" + tgUser.username;
fejfa.innerHTML = "Hello, " + tgUser.first_name + ". Have a good day!";

function cnsptAdd() {
    coinSportValue++;
    cnspt.textContent = coinSportValue+" $CNSPT";
    localStorage.setItem("cnspt_val", coinSportValue)
}

buttonTap.addEventListener('click', function() {
    removeWallet(index);
});