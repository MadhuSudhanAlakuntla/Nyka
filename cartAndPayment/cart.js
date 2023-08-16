
let pds = JSON.parse(localStorage.getItem('cart-products'))||[];
let items = document.getElementById('items')
function display(products){
    items.innerHTML = "";
    document.getElementById('tp').style.display = 'block'
    document.getElementById('total-items').innerText = products.length;
    products.forEach(function(element,index){
        let item = document.createElement('div'); 
        item.className = 'item';
        let div = document.createElement('div'); 
        let img = document.createElement('img');
        let name = document.createElement('p');
        let qty = document.createElement('p');
        let price = document.createElement('h6');
        let btn = document.createElement('button');
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
    if(products.length==0){
        items.innerText="Nothing to see here"
        document.getElementById('tp').style.display = 'none'
    }
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
let nxtPage = document.querySelector('#tp>button');
// console.log(nxtPage)
nxtPage.addEventListener('click',function(event){
    window.location.href='./address.html';
})