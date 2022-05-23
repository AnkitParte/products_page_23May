//store the products array in localstorage as "products"

function products(type,desc,price,image){
    this.type=type;
    this.desc=desc;
    this.price=price;
    this.image=image;
}

let show=document.querySelector("#show_products");
show.addEventListener("click",function(){
    window.location.href="inventory.html"
})

let array=JSON.parse(localStorage.getItem("products")) || [];
let form=document.querySelector("#products");
form.addEventListener("submit",addproducts);

function addproducts(){
    event.preventDefault();

    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;

    let obj = new products(type,desc,price,image);

    array.push(obj);

    localStorage.setItem("products",JSON.stringify(array));

    empty();
    


}

function empty(){
    let inputs=document.querySelectorAll("#type,#desc,#price,#image");
    inputs.forEach(o => {o.value = null});
}
