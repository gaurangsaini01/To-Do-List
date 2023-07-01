const form=document.querySelector(".form");
const searchbox=document.querySelector(".searchbox");
const list=document.querySelector(".list-items");
// const buttons=document.querySelector(".buttons")
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(searchbox.value===""){
      swal({
        title: "ERROR! You Must Add A Task!",
        icon: "warning",
      });
    }
    else{
    const newLi=document.createElement("li");
    newLi.innerHTML=`<p>${searchbox.value}</p>
    <div class="buttons ">
      <button class="completed button">Complete</button>
      <button class="remove button">Remove</button>`
      newLi.classList.add("list-item");
      list.appendChild(newLi);
      searchbox.value="";
    }
})
list.addEventListener('click',(e)=>{
  console.log(e.target)
  if(e.target.innerText==="Complete"){
    e.target.parentNode.previousElementSibling.classList.toggle("linethrough");
  }
  if(e.target.innerText==="Remove")
  {
    e.target.parentNode.parentNode.remove();
  }
});
