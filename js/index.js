var exclui = document.querySelector("#apaga");
console.log(event.target);

exclui.addEventListener("click", function(event){
    console.log(event.target)
    event.target.remove();

});