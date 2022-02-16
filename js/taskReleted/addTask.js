 

let taskDiv = document.querySelector('.tasks');
let input = document.getElementById('inputtext');
let btnadd = document.getElementById('btntadd');
let addsection = document.querySelector('.addsection');
let ctask = document.getElementById('ctask');
let ptask = document.getElementById('ptask');
let jwt1 = document.cookie;
let substr = jwt1.substring(4, jwt1.length);
let parsedData = JSON.parse(substr);
let email = parsedData.email;





// window.addEventListener("unload", function(){
//     var count = parseInt(localStorage.getItem('counter') || 0);

//     localStorage.setItem('counter', count++)
//   }, false);


function ValidateTask(task) {
    let trimed = task.trim();

    if (trimed.length > 0) {
        if (trimed.length > 120) {
            alert("Maximum You can add 135 Charactes in one task");
            return false;
        }
        return true;
    } else {
        alert("Task Name and description are must be contain at least 1 character")
        return false;
    }
}

function retrnDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today;
}


function addTask(){
    let inputval = input.value;
    let mark = false;
    let id = Math.floor(Date.now() / 1000);
    if (ValidateTask(inputval)) {
        var taskRec = localStorage.getItem(email);
        if (taskRec) {
            taskRec = JSON.parse(taskRec);
            let today = retrnDate();
            taskRec[email].push({ id, inputval, today, mark });
            localStorage.setItem(email, JSON.stringify(taskRec));
            checkboxafter();
            input.value = "";
        } else {
            let today = retrnDate();
            let taskObj = { id, inputval, today, mark }
            let subarr = [taskObj];
            localStorage.setItem(email, JSON.stringify({ [email]: subarr }));
            checkboxafter();
            input.value = "";
        }
    }
}

btnadd.addEventListener('click', () => {
    if (btnadd.innerText == "Add Task") {
       addTask();
    }

})



window.addEventListener('load', (event) => {
    // let data = JSON.parse(localStorage.getItem(email));

    // data[email].map((ele) => {
    //     let createdv = document.createElement('div');

    //     if(ele.mark == true){

    //         createdv.setAttribute('class', 'card');
    //         createdv.innerHTML = `  
    //         <p  style="margin-top:30px;padding-left:20px;padding-right:10px;color:grey;font-weight:bold">${ele.inputval} </p>
    //         <p style="padding: 10px 10px 10px 20px;">Task Added On : ${ele.today}</p>
    //         <div class="mark">

    //             <input checked  name="markcheck" type="checkbox" id="${ele.id}"  class="markdone">
    //             <label style="padding: 5px 20px 20px 20px;"for="${ele.id}">Task <span>Completed</span></label>
    //             <button name="editbtn"  class="editbtn"  id="${ele.id}">Edit</button>    <button id=${ele.id} name="delbtn" class="delbtn" >Delete</button>   `
    //         ctask.appendChild(createdv);
    //     }else{
    //         createdv.setAttribute('class', 'card');
    //         createdv.innerHTML = `  
    //         <p  style="margin-top:30px;padding-left:20px;padding-right:10px;color:grey;font-weight:bold">${ele.inputval} </p>
    //         <p style="padding: 10px 10px 10px 20px;">Task Added On : ${ele.today}</p>
    //         <div class="mark">

    //             <input   name="markcheck" type="checkbox" id="${ele.id}"  class="markdone">
    //             <label style="padding: 5px 20px 20px 20px;"for="${ele.id}">Task <span>Pendeing</span></label>
    //             <button name="editbtn"  class="editbtn"  id="${ele.id}">Edit</button>    <button id=${ele.id} name="delbtn" class="delbtn" >Delete</button>    `
    //         ptask.appendChild(createdv);
    //     }


    // })
    checkboxafter();
    if (!localStorage.getItem(email)) {
        
        alert("you dont have any task please add");
    }
});


function checkboxafter() {
    let data = JSON.parse(localStorage.getItem(email));
    if (data) {
        let marked = data[email].filter((ele) => {
            return ele.mark == true;
        })
        let unmarked = data[email].filter((ele) => {
            return ele.mark == false;
        })
      
        
        if (marked.length == 0 && unmarked.length ==0) {
            alert("you dont have any task please add");  
        } 


        ctask.innerHTML = "";
        ptask.innerHTML = "";
        unmarked.map((ele) => {
            let createdv = document.createElement('div');
            createdv.setAttribute('class', 'card');
            createdv.innerHTML = `  
                <p  style="margin-top:30px;padding-left:20px;padding-right:10px;color:grey;font-weight:bold">${ele.inputval} </p>
                <p style="padding: 10px 10px 10px 20px;">Task Added On : ${ele.today}</p>
                <div class="mark">
            
                    <input   name="markcheck" type="checkbox" id="${ele.id}"  class="markdone">
                    <label style="padding: 5px 20px 20px 20px;"for="${ele.id}">Task <span>Pendeing</span></label>
                    <button name="editbtn"  class="editbtn"  id="${ele.id}">Edit</button>    <button id=${ele.id} name="delbtn" class="delbtn" >Delete</button>    `
            ptask.appendChild(createdv);
        })

        marked.map((ele) => {
            let createdv = document.createElement('div');
            createdv.setAttribute('class', 'card');
            createdv.innerHTML = `  
              <p  style="margin-top:30px;padding-left:20px;padding-right:10px;color:grey;font-weight:bold">${ele.inputval} </p>
              <p style="padding: 10px 10px 10px 20px;">Task Added On : ${ele.today}</p>
              <div class="mark">
          
                  <input  checked  name="markcheck" type="checkbox" id="${ele.id}"  class="markdone">
                  <label style="padding: 5px 20px 20px 20px;"for="${ele.id}">Task <span>Completed</span></label>
                  <button name="editbtn"  class="editbtn"  id="${ele.id}">Edit</button>    <button id=${ele.id} name="delbtn" class="delbtn" >Delete</button>    `
            ctask.appendChild(createdv);
        })
    }


    // } else {

    // unmarked.map((ele) => {
    //     let createdv = document.createElement('div');
    //     createdv.setAttribute('class', 'card');
    //     createdv.innerHTML = `  
    //         <p  style="margin-top:30px;padding-left:20px;padding-right:10px;color:grey;font-weight:bold">${ele.inputval} </p>
    //         <p style="padding: 10px 10px 10px 20px;">Task Added On : ${ele.today}</p>
    //         <div class="mark">

    //             <input   name="markcheck" type="checkbox" id="${ele.id}"  class="markdone">
    //             <label style="padding: 5px 20px 20px 20px;"for="${ele.id}">Task <span>Pendeing</span></label>
    //             <button name="editbtn"  class="editbtn"  id="${ele.id}">Edit</button>    <button id=${ele.id} name="delbtn" class="delbtn" >Delete</button>    `
    //     ptask.appendChild(createdv);
    // })

    // marked.map((ele) => {
    //     let createdv = document.createElement('div');
    //     createdv.setAttribute('class', 'card');
    //     createdv.innerHTML = `  
    //       <p  style="margin-top:30px;padding-left:20px;padding-right:10px;color:grey;font-weight:bold">${ele.inputval} </p>
    //       <p style="padding: 10px 10px 10px 20px;">Task Added On : ${ele.today}</p>
    //       <div class="mark">

    //           <input  checked  name="markcheck" type="checkbox" id="${ele.id}"  class="markdone">
    //           <label style="padding: 5px 20px 20px 20px;"for="${ele.id}">Task <span>Pendeing</span></label>
    //           <button name="editbtn"  class="editbtn"  id="${ele.id}">Edit</button>    <button id=${ele.id} name="delbtn" class="delbtn" >Delete</button>    `
    //     ctask.appendChild(createdv);
    // })
}



// }



taskDiv.addEventListener('click', (event) => {
    if (event.target.name == "editbtn") {
        let targetId = event.target.id;
        let data = JSON.parse(localStorage.getItem(email));
        let result = data[email].find((ele) => {
            return ele.id == targetId;
        })
        input.value = result.inputval;
        let dv = document.createElement('button');
        dv.innerText = "Update";
        dv.id = "updatebtn";
        if (addsection.childNodes[5].innerText == "Add Task") {
            addsection.replaceChild(dv, document.getElementById('btntadd'));
        }
        dv.addEventListener('click', () => {

            data[email] = data[email].map((ele) => {
                if (ele.id == targetId) {
                    let today = retrnDate();

                    return { ...ele, inputval: input.value, today }

                }
                return ele;
            })
            if (ValidateTask(input.value)) {
                localStorage.setItem(email, JSON.stringify(data))
                checkboxafter();
                let dv = document.createElement('button');
                dv.innerText = "Add Task";
                dv.id = "btntadd";
                addsection.replaceChild(dv, document.getElementById('updatebtn'));
                input.value = "";
                alert("Update Successfuly");
                dv.addEventListener('click', (e) => {
                   addTask();
                })
            }

        })

    } else if (event.target.name == "markcheck") {
        let data = JSON.parse(localStorage.getItem(email));
        let targetId = event.target.id;
        let checkBox = document.getElementById(`${targetId}`);
        data[email] = data[email].map((ele) => {
            if (ele.id == targetId) {
                if (checkBox.checked) {
                    let today = retrnDate();

                    return { ...ele, today, mark: true }
                } else {
                    let today = retrnDate();

                    return { ...ele, today, mark: false }
                }
            }
            return ele;
        })

        localStorage.setItem(email, JSON.stringify(data))
        checkboxafter();
    } else if (event.target.name == "delbtn") {
        let targetId = event.target.id;

    
        let data = JSON.parse(localStorage.getItem(email));

        for (let i = 0; i < data[email].length; i++) {
            if (data[email][i].id == targetId) {
                data[email].splice(i, 1);
            }
        }

        // location.reload();
        localStorage.setItem(email, JSON.stringify(data));
        checkboxafter();

    }


    // checkboxafter();
})

