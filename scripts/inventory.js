
let home=document.querySelector("#add_more_product");
home.addEventListener("click",function(){
    window.location.href="index.html";
})

let array=JSON.parse(localStorage.getItem("products"))
let oyaji=document.querySelector("#all_products");

display(array);

function display(arr){

    oyaji.innerHTML="";

    arr.forEach(function(elem,i){

        let one=document.createElement("div");

        let img=document.createElement("img");
        img.setAttribute("src",elem.image);

        let par1=document.createElement("p");
        par1.innerText=elem.desc;

        let par2=document.createElement("p")
        par2.innerText=elem.type;

        let par3=document.createElement("p")
        par3.innerText=elem.price;

        

        let btn=document.createElement("button")
        btn.innerText="Remove";
        btn.setAttribute("id","remove_product")
        btn.addEventListener("click",function(i){
            arr.splice(i,1);
            localStorage.setItem("products",JSON.stringify(arr));
            display(arr);
        })

        one.append(img,par1,par2,par3,btn);

        oyaji.append(one);

    })


}