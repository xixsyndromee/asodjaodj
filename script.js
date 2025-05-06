console.log("Lo Gua Doain Bro")

const username = "arya"
const password = "9090"

function login() {
    let inputUsername = document.getElementById("inputUsername").value
    let inputPassword = document.getElementById("inputPassword").value
    if (inputUsername == username) {
        console.log("Username Benar")
        if (inputPassword == password) {
            console.log("Password Benar")
            alert("Login Berhasil")
        } else {
            console.log("Password Salah")
            alert("Login Gagal (Password Salah)")
        }
    } else {
        console.log("Password Salah")
        alert("Login Gagal (Username Salah)")
    }
}
