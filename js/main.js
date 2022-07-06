let productName = document.getElementById('productName');
let productPrice = document.getElementById('productPrice');
let productCategory = document.getElementById('productName');
let productDesc = document.getElementById('productName');
let mainBtn = document.getElementById('mainBtn');

let productcontaner = []

function addproduct() {
    let product = {
        productName:productName.value,
        productPrice:productPrice.value,
        productCategory:productCategory.value,
        productDesc:productDesc.value,
    }
    productcontaner.push(product);
    console.log(productcontaner);
    display(productcontaner);
    clearForm();
};

//  

function display(productList) {
    let cartona =``
    for (let i = 0; i < productList.length; i++) {
        cartona +=`<tr>
        <td id ="test"> ${i}</td>
        <td> ${productList[i].productName}</td>
        <td> ${productList[i].productPrice}</td>
        <td> ${productList[i].productCategory}</td>
        <td> ${productList[i].productDesc}</td>
        <td> <button class="btn btn-warning">update</button></td>
        <td> <button onclick="deleteProduct(${i})" class= "btn btn-danger">delete</button></td>
        </tr>`
    }
    document.getElementById('tableRow').innerHTML=cartona;
};

// 

function clearForm() {
    productName.value="";
    productPrice.value="";
    productCategory.value="";
    productDesc.value="";
};

// 

function deleteProduct(productList) {
    productcontaner.splice(productList,1);
    display(productcontaner);
}

// 
