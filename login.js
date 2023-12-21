
data = {
    username: "",
    password: ""
}

function login() {

    //     setTimeout(check, 3000);
    //     console.log("wait for 3 sec...");
    // }
   

    let result = check(data.username, data.password)
    console.log(result ? "Authanticated" : "Unauthanticated")
}

let check = (username, password) => {
    if (username == "Danishkhan" && password == "Danish@123") {
        return true;
    }
    else {
        return false;
    }
}
