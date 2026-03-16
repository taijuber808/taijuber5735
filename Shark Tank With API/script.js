const API="https://fakestoreapi.com/products"

let main=document.getElementById("data-list-wrapper")

// LOAD DATA
window.onload=()=>{
fetchData()
}

// FETCH
function fetchData(url=API){

fetch(url)
.then(res=>res.json())
.then(data=>display(data))
.catch(err=>console.log(err))

}


// DISPLAY
function display(data){

main.innerHTML=""

data.forEach(p=>{

let card=document.createElement("div")

card.className="card"

card.innerHTML=`

<img src="${p.image}">
<h3>${p.title}</h3>
<p>Founder: ${p.founder}</p>
<p>Category: ${p.category}</p>
<p>Price: ₹${p.price}</p>

<button onclick="deletePitch(${p.id})">Delete</button>

`

main.append(card)

})

}

// CREATE
document.getElementById("add-pitch").onclick=()=>{

let newPitch={

title:document.getElementById("pitch-title").value,
image:document.getElementById("pitch-image").value,
category:document.getElementById("pitch-category").value,
founder:document.getElementById("pitch-founder").value,
price:Number(document.getElementById("pitch-price").value)

}

fetch(API,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(newPitch)
})
.then(()=>fetchData())

}

// DELETE
function deletePitch(id){

fetch(`${API}/${id}`,{
method:"DELETE"
})
.then(()=>fetchData())

}

// UPDATE FULL
document.getElementById("update-pitch").onclick=()=>{

let id=document.getElementById("update-pitch-id").value

let updated={

title:document.getElementById("update-pitch-title").value,
image:document.getElementById("update-pitch-image").value,
category:document.getElementById("update-pitch-category").value,
founder:document.getElementById("update-pitch-founder").value,
price:Number(document.getElementById("update-pitch-price").value)

}

fetch(`${API}/${id}`,{

method:"PUT",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(updated)

}).then(()=>fetchData())

}

// UPDATE PRICE
document.getElementById("update-price-pitch").onclick=()=>{

let id=document.getElementById("update-price-pitch-id").value

fetch(`${API}/${id}`,{

method:"PATCH",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({

price:Number(document.getElementById("update-price-pitch-price").value)

})

}).then(()=>fetchData())

}

// SORT
document.getElementById("sort-low").onclick=()=>{

fetchData(`${API}?_sort=price&_order=asc`)

}

document.getElementById("sort-high").onclick=()=>{

fetchData(`${API}?_sort=price&_order=desc`)

}

// FILTER
document.getElementById("filter-Food").onclick=()=>{

fetchData(`${API}?category=Food`)

}

document.getElementById("filter-Electronics").onclick=()=>{

fetchData(`${API}?category=Electronics`)

}

document.getElementById("filter-Personal").onclick=()=>{

fetchData(`${API}?category=Personal-Care`)

}

// SEARCH
document.getElementById("search-btn").onclick=()=>{

let field=document.getElementById("search-by-select").value
let value=document.getElementById("search-by-input").value

fetchData(`${API}?${field}_like=${value}`)

}

