
data = {
    username: "",
    password: ""
}

const userinfo = [{ 'username': 'Danishkhan', 'password': 'Danish@123', 'name': 'Danish Khan', 'age': 25 },
{ 'username': 'deepak', 'password': 'deepak@123', 'name': 'Deepak Kumar ', 'age': 22 },
{ 'username': 'sandeep', 'password': 'sandeep@123', 'name': 'Sandeep Kumar', 'age': 23 },];

function login() {


    let result = check(data.username, data.password)
    console.log(`my name ${result.name} and my age is ${result.age}`)
}


const check = (username, password) => {
    for (userData of userinfo) {
        // console.log(userData)
        if (userData.username == username && userData.password == password) {
            return userData
        }
    }
    return false
}