let namee = document.getElementById('name');
let email = document.getElementById('email');
let dob = document.getElementById('dob');
let mobile = document.getElementById('mobile');
let gender = document.getElementById('gender');
let btnedit = document.getElementById('btnedit');
let cp = document.querySelector('.cp');

if (document.URL == "http://127.0.0.1:5502/profile.html") {
    let jwt1 = document.cookie;
    let substr = jwt1.substring(4, jwt1.length);
    let parsedData = JSON.parse(substr);
    btnedit.addEventListener('click', () => {
        location.replace("http://127.0.0.1:5502/editprofile.html")
    })
    cp.addEventListener('click', () => {
        location.replace("http://127.0.0.1:5502/changePassword.html")
    })

    console.log(parsedData);
    if (jwt1) {
        namee.innerText = parsedData.name;
        email.innerText = parsedData.email;
        dob.innerText = parsedData.date;
        mobile.innerText = parsedData.mobile;
        gender.innerText = parsedData.gender;

    }

}

if (document.URL == "http://127.0.0.1:5502/editprofile.html") {
    let jwt1 = document.cookie;
    if (jwt1) {
        let substr = jwt1.substring(4, jwt1.length);
        let parsedData = JSON.parse(substr);
        namee.value = parsedData.name;
        email.value = parsedData.email;
        mobile.value = parsedData.mobile;
        gender.value = parsedData.gender;
        date.value = parsedData.date;
    }

}




// console.log(result);