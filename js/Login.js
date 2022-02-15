let frm = document.getElementById('form');


frm.addEventListener('submit', (e) => {
    e.preventDefault();
    let emailphone = document.getElementById('emailphone');
    let password = document.getElementById('password');


    function isAuthenticate(emailphone, password) {
        let records = localStorage.getItem('arrOfRecords');
        records = JSON.parse(records);
         if(records){
            let ans = records.find((ele) => {
                return (ele.password == password.value ? ele.mobile == emailphone.value || ele.email == emailphone.value : "");
            })
     
            if (ans) {
               
                document.cookie = "jwt=" + JSON.stringify(ans);
                alert('login success');
                location.replace("https://jayjstask.herokuapp.com/Dashboard.html");
            } else {
               alert("invalid Credentials")
            }
    
         }else{
              alert("Please Register First")
         }
       

    }

 
    isAuthenticate(emailphone,password);
})
