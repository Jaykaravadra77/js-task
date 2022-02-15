let jwt = document.cookie;

let logout = document.getElementById('logout');
let login = document.getElementById('login');
let dashboard = document.getElementById('dashboard');
let reg = document.getElementById('regestration');
let profile = document.getElementById('profile');


if (jwt) {
    login.style.display = "none";
    reg.style.display = "none";


} else {
    logout.style.display = "none";
    dashboard.style.display = "none";
    profile.style.display = "none";
}


function logOut() {
    document.cookie = "jwt= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    alert('logout Successfully')
    location.replace("http://127.0.0.1:5502/index.html")
}

if (document.URL == "http://127.0.0.1:5502/index.html") {
    if (jwt) {
        location.replace("http://127.0.0.1:5502/Dashboard.html")
    }
}

 

if (document.URL == "http://127.0.0.1:5502/profile.html" || document.URL == "http://127.0.0.1:5502/editprofile.html" || document.URL == "http://127.0.0.1:5502/changePassword.html" )  {
    if (!jwt) {
        location.replace("http://127.0.0.1:5502/index.html")
    }
}

if (document.URL == "http://127.0.0.1:5502/Dashboard.html" ) {
    if (!jwt) {
        location.replace("http://127.0.0.1:5502/index.html")
    }
} 
if (document.URL == "http://127.0.0.1:5502/regestration.html") {
    if (jwt) {
        location.replace("http://127.0.0.1:5502/Dashboard.html")
    }

}

logout.addEventListener('click', logOut);