var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.classList.add("row","m-1");
container.append(row);
        
 async function foo(){
   try{
    let res=await fetch("https://uselessfacts.jsph.pl/random.json"); 
    let data=await res.json();
      console.log(data);
      return bar(data);
  }catch(error){
      console.log(error);
  }
  }
  foo();
  function bar(data){
  row.innerHTML=`<div class="col-md-auto">
    <div class="card border-primary mb-3" style="max-width: 18rem;">
    <div class="card-body text-primary">
    <p class="card-text">${data.text}</p>
    </div>
    </div>
    </div>`;
  document.body.append(container);
}