// context is globally shared
const ctx = {
    "accounts": [
        {
            "name": "peter",
            "email": "peter@mit.edu",
            "balance": 0,
            "password": "secret"
        }
    ]
};

function create() {
    const name     = document.getElementById('name');
    const email    = document.getElementById('email');
    const password = document.getElementById('password');
    const status   = document.getElementById('createStatus');
    ctx.accounts.push({
        name: name.value,
        email: email.value,
        balance: 0,
        password: password.value
    })

    // update status & clear form
    name.value = "";
    email.value = "";
    password.value = "";
    status.innerHTML = "Account Created!";

}

function allData() {
    const status = document.getElementById('allDataStatus');
    status.innerHTML = JSON.stringify(ctx.accounts);
};

function login() {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const status = document.getElementById('loginStatus');
    let user = {};

    function isUser(account) {
        return account.email === email.value;
    }

    function findUser() {
        let tempUser = ctx.accounts.find(isUser)
        if(password.value === tempUser.password){
            ctx.loggedIn = tempUser;
            email.value = '';
            password.value = '';
            status.innerHTML = 'Login Successful!'
            
        } else status.innerHTML = "Incorrect username or password";
    }

    findUser();
};

function deposit() {
    const email = document.getElementById('depositEmail');
    const amount = document.getElementById('depositAmount');
    const status = document.getElementById('depositStatus');

    function addDeposit() {
        ctx.accounts.map((account, i) => {
            if (account.email === email.value) {
                console.log(ctx.accounts[i].balance);
                console.log(amount.value);
                ctx.accounts[i].balance += Number(amount.value);
                email.value = '';
                amount.value = '';
                status.innerHTML = 'Deposit Successful';
            } else status.innerHTML = 'Email does not match';
        });
    };

    addDeposit();
};

function withdraw() {
    const email = document.getElementById('withdrawEmail');
    const amount = document.getElementById('withdrawAmount');
    const status = document.getElementById('withdrawStatus');

    ctx.accounts.map((account, i) => {
        if (account.email === email.value) {
            ctx.accounts[i].balance -= Number(amount.value);
            email.value = '';
            amount.value = '';
            status.innerHTML = 'Withdraw Successful';
        } else status.innerHTML = 'Email does not match';
    });

};