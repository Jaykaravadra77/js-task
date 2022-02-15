let opass = document.getElementById('opassword');
let npass = document.getElementById('npassword');
let formcp = document.getElementById('formcp');

function validatePassword(password) {
    if (password.length < 4) {
        alert("Password Should be minmum 4 character long");
        clearData();
        return false;
    } else {
        return true;
    }
}


formcp.addEventListener('submit', (e) => {
    e.preventDefault();
    let arrRec = localStorage.getItem('arrOfRecords');
    let jwt1 = document.cookie;
    let count = 0;
    if (arrRec && jwt1) {
        let substr = jwt1.substring(4, jwt1.length);
        let jwtData = JSON.parse(substr);
        if (validatePassword(npass)) {
            let parsed = JSON.parse(arrRec);
            for (let i in parsed) {
                if (parsed[i].password == opass.value && parsed[i].email == jwtData.email) {
                    count++;
                    parsed[i].password = npass.value;
                    localStorage.setItem('arrOfRecords', JSON.stringify(parsed));
                    location.replace('http://127.0.0.1:5502/Dashboard.html')
                    break;
                }
            }
            if (count > 0) {
                alert("Password changed Successfully")
            }else{
                alert("Wrong old Password")
            }
        } else {
            alert("Password should be minimum 4 character")
        }




    }
})