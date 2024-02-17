let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let blk1 = document.querySelector(".blk1");
let blk2 = document.querySelector(".blk2");

btn1.addEventListener("click", function(){
    btn1.classList.add("active");
    btn2.classList.remove("active");
    blk1.style.display = 'block';
    blk2.style.display = 'none';
});

btn2.addEventListener("click", function(){
    btn1.classList.remove("active");
    btn2.classList.add("active"); 
    blk1.style.display = 'none';
    blk2.style.display = 'block';  
});