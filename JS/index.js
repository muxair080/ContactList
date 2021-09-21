console.log("Starting with the grate name of allah");
// take main list div
let list = document.getElementById("List");
// take value form input tag
let input = document.getElementById("searching");
// event listner
let headid = -1;
let Addbtn = document.getElementById('Add');
// for stroging contact name we use local storage;

let obj = {
    'A': [], 'B': [], 'C': [], 'D': [], 'E': [], 'F': [], 'G': [], 'H': [], 'I': [], 'J': [], 'K': [], 'L': [], 'M': [], 'N': [], 'O': [], 'P': [], 'Q': [], 'R': [], 'S': [], 'T': [], 'U': [], 'V': [], 'W': [], 'X': [], 'Y': [], 'Z': []
};
// obj[Object.keys(obj)[6]].push("Abbas");
//  console.log(obj[Object.keys(obj)[6]]);
//  console.log(Object.keys(obj)[0]);

showdata();

Addbtn.addEventListener('click', () => {
    // console.log(input);
    // value of input tag
    let value = input.value;
    // console.log(value);
    // console.log(value[0]);
    let regex = /([a-zA-Z])/
    // condition 1 check that name must be started with alphabet
    if (regex.test(value[0])) {
        //
        // let newcontact = document.getElementById("newcontact");
                    datastoring(value);
                    showdata(); 
        }
    input.value = "";
});

function datastoring(value) {
    // console.log("Value of 0 index : ", value[0]);
    // console.log("Obj length : ", Object.keys(obj).length);
    
    for (let i = 0; i < Object.keys(obj).length; i++) {
        let backup = JSON.parse(localStorage.getItem(Object.keys(obj)[i]));
        // console.log("Back up : " , backup);
        // console.log(Object.keys(obj)[i]);
        if (value[0].toUpperCase() == Object.keys(obj)[i]) {
            // console.log("If condition");
            if(backup != null) {
                obj[Object.keys(obj)[i]] = backup;
            }
            // console.log("After assigning backup : " , obj[Object.keys(obj)[i]])
            obj[Object.keys(obj)[i]].push(value);
            // console.log("Array name : ", Object.keys(obj)[i]);
            console.log(obj[Object.keys(obj)[i]]);
            //    Object.keys(obj)[i].sort();
            obj[Object.keys(obj)[i]].sort();
            console.log(obj[Object.keys(obj)[i]]);
            localStorage.setItem(Object.keys(obj)[i], JSON.stringify(obj[Object.keys(obj)[i]]));
            break;
        }
        else {
            // console.log("In else condition");
            continue;
        }
    }
}


function showdata() {
    let index = 27;
    for (let i = 0; i < Object.keys(obj).length; i++) {
        let contactlist = JSON.parse(localStorage.getItem(Object.keys(obj)[i]));
        //    console.log("contact list : ",contactlist);
        if (contactlist != null) {
            let newone = document.getElementById(`${Object.keys(obj)[i]}`);
            // console.log(newone);
            newone.innerHTML = '';
            for (let key in contactlist) {
                
                // 
                newone.innerHTML += `
                <div>
                <li class = "${Object.keys(obj)[i].toLowerCase()}"> ${contactlist[key]}</li>
                <h3 id = "${index++}">X</h3>
                </div>`
                
                // console.log(newone.innerHTML);
            //    index++;
            }
        }
        else {
           continue;
        }
    }
    // console.log(Object.keys(obj)[i]);
}

function searching(value , i) {
    let li_es = document.getElementsByClassName(`${Object.keys(obj)[i].toLowerCase()}`);
    console.log("length",li_es.length);
    
    for(let i = 0 ; i< li_es.length ; i++) {
        console.log("li_es values : ",li_es[i].innerHTML);
        var result = value.localeCompare(li_es[i].innerHTML);
        // let result = 
        if(result === 0){
            consxole.log("Item found : ",value);
            console.log("Value : ",value , "Li value : ", li_es[i].innerHTML);
            break;
        }
        else{
            console.log("Item Not found : ",value);
            console.log("Value : ",value , "Li value : ", li_es[i].innerHTML);
        }

    }
    // console.log("Reasult : ",result);
    // if(result == 0){
    // }
    // else if(result == -1){
    //     console.log("Not Found and result : " , result," : value is ",value);
    // }
    // else{
    //     console.log("Not Found and result : " , result," : value is ",value);   
    // }

    
}

function DeleteData() {
    let index = 27;
  
//    for(let i = 0 ; i<Object.keys(obj).length; i++) {
    for(key in Object.keys(obj)) {
        let li_es = document.getElementsByClassName(`${Object.keys(obj)[key].toLowerCase()}`);
        console.log("length",li_es.length);
       let delitem = document.getElementById(`${index++}`);
       console.log(delitem);
    let contactlist = JSON.parse(localStorage.getItem(Object.keys(obj)[key]));
    console.log(contactlist);
        // console.log("Array size : ",contactlist.length);
        // console.log("Li_es inner Html",li_es.innerHTML);
        delitem.addEventListener('click' , ()=>{
            console.log("Event Fired");
            // contactlist.find(searching , key);
            let index = contactlist.indexOf(li_es.innerHTML);
            console.log(index);
            if(index !== -1){
                console.log("Item found : ",li_es[key].innerHTML);
                console.log("Value : ",li_es[key].innerHTML , "Li value : ", li_es[key].innerHTML);
            }
            else{
                console.log("Item Not found : ",li_es[key].innerHTML);
                console.log("Value : ",li_es[key].innerHTML, "Li value : ", li_es[key].innerHTML);
            }
            // let result =  contactlist.includes(li_es.innerHTML);


            // console.log('value of result :  ', result);    
            // let val = localStorage.removeItem(li_es.innerHTML);
            // console.log(val);
        })
        // console.log("DelItem : ",delitem);
        // index++;
    
    }
}

DeleteData();

