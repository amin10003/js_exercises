console.log("Live let's jump!")

const savedUser = {
    name: "moha",
    password: "1234",
    role: [
        "admin", "student", "mentor"
    ]
}

const _1_name = window.prompt("Enter your name ").toLowerCase()
const _1_pass = window.prompt("Enter your password")
const _1_role = window.prompt("Select role").toLowerCase()

const enteredDetails = {
    name: _1_name,
    password: _1_pass,
    role: _1_role
}

if (enteredDetails.name === "" || enteredDetails.password === "" || enteredDetails.role === "") {
    console.log("No empty field is allowed")
} else if (enteredDetails.password.length < 4) {
    console.log("Password is too short")
} else if (enteredDetails.name !== savedUser.name ||
    enteredDetails.password !== savedUser.password
    ) {
    console.log("Invalid credentials")
} else if(!savedUser.role.includes(enteredDetails.role)){
    console.log("Invalid Role")
} else {
    switch (enteredDetails.role.toLowerCase()) {
        case "admin":
            console.log("Welcome to the Admin Dashboard");
            break
        case "mentor":
            console.log("Welcome to the Mentor Dashbord");
            break
        case "student":
            console.log("Welcome to Student Dashboard");
            break
        default:
            console.log("Welcome User")
    }

    console.log(`${enteredDetails.name} have access to ${enteredDetails.role} Dashboard`)
}