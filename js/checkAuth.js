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
    location.replace("https://jayjstask.herokuapp.com/home.html")
}

if (document.URL == "https://jayjstask.herokuapp.com/home.html") {
    if (jwt) {
        location.replace("https://jayjstask.herokuapp.com/Dashboard.html")
    }
}

if (document.URL == "https://jayjstask.herokuapp.com") {
    if (jwt) {
        location.replace("https://jayjstask.herokuapp.com/Dashboard.html")
    }
}

 

if (document.URL == "https://jayjstask.herokuapp.com/profile.html" || document.URL == "https://jayjstask.herokuapp.com/editprofile.html" || document.URL == "https://jayjstask.herokuapp.com/changePassword.html" )  {
    if (!jwt) {
        location.replace("https://jayjstask.herokuapp.com/home.html")
    }
}

if (document.URL == "https://jayjstask.herokuapp.com/Dashboard.html" ) {
    if (!jwt) {
        location.replace("https://jayjstask.herokuapp.com/home.html")
    }
} 
if (document.URL == "https://jayjstask.herokuapp.com/regestration.html") {
    if (jwt) {
        location.replace("https://jayjstask.herokuapp.com/Dashboard.html")
    }

}

logout.addEventListener('click', logOut);