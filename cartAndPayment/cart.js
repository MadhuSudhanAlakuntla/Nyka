
var pds = JSON.parse(localStorage.getItem('cart-products'))||[];
var items = document.getElementById('items')
function display(products){
    items.innerHTML = "";
    document.getElementById('total-items').innerText = products.length;
    products.forEach(function(element,index){
        var item = document.createElement('div'); 
        item.className = 'item';
        var div = document.createElement('div'); 
        var img = document.createElement('img');
        var name = document.createElement('p');
        var qty = document.createElement('p');
        var price = document.createElement('h6');
        var btn = document.createElement('button');
        btn.textContent = 'Remove';
        btn.addEventListener('click',function(event){
            event.preventDefault();
            products.splice(index,1);
            localStorage.setItem('cart-products',JSON.stringify(products));
            display(products)
        })
        img.src = products[index].img;
        img.style.width = '100px';
        name.textContent = products[index].name;
        qty.textContent = 'Quantity: '+products[index].qty;
        qty.className = 'name';
        price.textContent = '₹ ' +products[index].price;
        price.style.float = 'top'
        div.append(name,qty,price,btn);
        item.append(img,div);
        items.append(item);
        document.getElementById('total-cost').textContent = total(pds)
    })
    if(products.length==0)items.innerText="Nothing to see here"
}
display(pds);
//getting total price
function total(arr){
    let res = 0;
    arr.map(el=>{
res+=(parseInt(el.price) * parseInt(el.qty));
    })
    return res
}

// console.log(total(products));
//redirecting to address page
var nxtPage = document.querySelector('#tp>button');
// console.log(nxtPage)
nxtPage.addEventListener('click',function(event){
    window.location.href='./address.html';
})