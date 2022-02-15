

function validateDate(date) {
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    let birthdate = new Date(date);
    if (birthdate <= today) {
        return true;
    } else {
        alert("Invalide Date");
        // clearData();
        return false;
    }
}



function validatePassword(password) {
    if (password.length < 4) {
        alert("Password Should be minmum 4 character long");
        // clearData();
        return false;
    } else {
        return true;
    }
}


function validateName(name) {
    let trimName = name.trim();
    if (trimName.length < 5) {
        alert("Name should be contain minimum 5 characters");
        // clearData
        return false;

    } else {
        return true;
    }

}
if (document.URL == "https://js-taks.herokuapp.com/regestration.html") {
    let form = document.getElementById('form');


    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let email = document.getElementById('email');
        let name = document.getElementById('name');
        let mobile = document.getElementById('mobile');
        let gender = document.getElementById('gender');
        let date = document.getElementById('date');
        let password = document.getElementById('password');

        function clearData() {
            email.value = "";
            name.value = "";
            date.value = "";
            password.value = "";
            mobile.value = "";
            gender.value = "";
        }

        function Register(email, name, mobile, gender, date, password) {
            var arrRec = localStorage.getItem('arrOfRecords');
            if (arrRec) {
                arrRec = JSON.parse(arrRec);
                arrRec.push({ email, name, password, mobile, gender, date });
                localStorage.setItem('arrOfRecords', JSON.stringify(arrRec));
            } else {
                let arrR = [];
                arrR.push({ email, name, password, mobile, gender, date })
                localStorage.setItem('arrOfRecords', JSON.stringify(arrR));
            }
        }


        function validateEmail(email) {
            
            var arrRec = JSON.parse(localStorage.getItem('arrOfRecords'));
            console.log(email);
            let res = true;
            if (arrRec) {
                console.log(arrRec.map((ele) => {
                    if (ele.email == email) {
                        alert(" email should be unique ");
                        res = false
                    }
                }));
                return res;
            } else {
                return true;
            }

        }


        function validateMobile(email) {
           
            var arrRec = JSON.parse(localStorage.getItem('arrOfRecords'));
            console.log(email);
            let res = true;
            if (arrRec) {
                console.log(arrRec.map((ele) => {
                    if (ele.mobile == email) {
                        alert("Mobile-no should be unique ");
                        res = false
                    }
                }));
                return res;
            } else {
                return true;
            }

        }




        if (validateDate(date.value) && validatePassword(password.value) && validateName(name.value) && validateEmail(email.value) && validateMobile(mobile.value)) {
            Register(email.value, name.value, mobile.value, gender.value, date.value, password.value);
            alert("Successfully Registerd");
            clearData();
        }


    })
}

if (document.URL == "https://js-taks.herokuapp.com/editprofile.html") {
    let eval = document.getElementById('email');
    let nval = document.getElementById('name');
    let mval = document.getElementById('mobile');
    let gval = document.getElementById('gender');
    let dval = document.getElementById('date');
    let password = document.getElementById('password');

    let updatefrm = document.getElementById('formupdate');
    updatefrm.addEventListener('submit', (e) => {
        e.preventDefault();


        function updateRecord() {
            var arrRec = localStorage.getItem('arrOfRecords');
            //  let email = eval.value;


            let name = nval.value;
            let mobile = mval.value;
            let gender = gval.value;
            let date = dval.value;
            let parsed = JSON.parse(arrRec);
            let jwt1 = document.cookie;
            let substr = jwt1.substring(4, jwt1.length);
            let parsedData = JSON.parse(substr);

             
     
            

            const newArr = parsed.map(obj => {


                if (obj.email == parsedData.email) {
                    parsedData.name = name;
                    parsedData.email = eval.value;
                    parsedData.mobile = mobile;
                    parsedData.gender = gender;
                    parsedData.date = date;
                    console.log(parsedData);
                    document.cookie = "jwt=" + JSON.stringify(parsedData);

                    return { email: eval.value, name, mobile, gender, date, password: parsedData.password }
                }
                return obj;
            });
            alert('updated Successfully');
            localStorage.setItem('arrOfRecords', JSON.stringify(newArr));
            location.replace('https://js-taks.herokuapp.com/profile.html');
            // document.cookie = "jwt=" + JSON.stringify(ans);
        }


        function validateEmail(email) {

            var arrRec = JSON.parse(localStorage.getItem('arrOfRecords'));
            console.log(email);

            if (arrRec) {
                let res = arrRec.filter((ele) => {
                    return ele.email == email;
                })
                console.log(res);
                if (res.length > 0) {
                    alert("Email should be unique");
                    return false;
                } else {
                    return true;
                }

                // return res;
            } else {
                return true;
            }

        }

        function validateMobile(mobile) {

            var arrRec = JSON.parse(localStorage.getItem('arrOfRecords'));
            // console.log(email);

            if (arrRec) {
                let res = arrRec.filter((ele) => {
                    return ele.mobile == mobile;
                })

                if (res.length > 0) {
                    alert("Mobile-No should be unique");
                    return false;
                } else {
                    return true;
                }

                // return res;
            } else {
                return true;
            }

        }



        let jwt1 = document.cookie;
        let substr = jwt1.substring(4, jwt1.length);
        let parsedData = JSON.parse(substr);
        if (parsedData.email != eval.value) {
            if (validateDate(dval.value) && validateName(nval.value) && validateEmail(eval.value)) {
                updateRecord();
                let data =JSON.parse(localStorage.getItem(parsedData.email));
                localStorage.setItem(eval.value, JSON.stringify({[eval.value]:data[[parsedData.email]]}));
                localStorage.removeItem(parsedData.email);
            }
        } else if (parsedData.mobile != mval.value) {
            if (validateDate(dval.value) && validateName(nval.value) && validateMobile(mval.value)) {
                updateRecord();
            }  
        }else {
            if (validateDate(dval.value) && validateName(nval.value)  ) {
                updateRecord();
            }  
        }

    })


}