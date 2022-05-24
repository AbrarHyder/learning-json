function check() {
    // e.preventDefault()
  
  
    postData()
    getData()
}
let btn = document.getElementById("btn")
btn.addEventListener("click",check)

function check2() {
    // e.preventDefault()
  
  
    deleteData(2)
    
}
let btndel = document.getElementById("btndel")
btndel.addEventListener("click",check2)

let url = `http://localhost:3000/consult`

async function getData(){
    try{
        let res = await fetch(url)
        let data = await res.json();
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}

async function postData(){
    let payLoad={
        "message":document.getElementById("inp").value,
        "name":document.getElementById("name").value

    }
    payLoad=JSON.stringify(payLoad)
    
   
    try{
        let res = await fetch(url, {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:payLoad
    
    
        })
        let data = await res.json();
        console.log(data)
     
    }
    catch(error){
        console.log(error)
    }
}

async function deleteData(id){
    let url = `http://localhost:3000/consult/${id}`
    
    
   
    try{
        let res = await fetch(url, {
            method:"DELETE",
            
    
    
        })
        let data = await res.json();
        console.log(data)
     
    }
    catch(error){
        console.log(error)
    }
}