
for (var i = 0; i < document.getElementsByClassName("item").length; i++) {
  document.getElementsByClassName("item")[i].lastElementChild.style.display = 'none';
}
let keys = document.querySelectorAll(".item");
keys.forEach(el => {
  el.addEventListener("click", activated);
});
var index=-1;
function activated(e) {
  if(index===parseInt(this.firstElementChild.innerHTML.split(')')[0])-1&& keys[index].lastElementChild.style.display ==='block'){
     keys[index].lastElementChild.style.display = 'none';
     index=-1;
     return;
  }else
   if(index!=-1){
     keys[index].lastElementChild.style.display = 'none';
  }
  e.preventDefault();
  this.lastElementChild.style.display = 'block';
  index=parseInt(this.firstElementChild.innerHTML.split(')')[0])-1;
  console.log(index);

}