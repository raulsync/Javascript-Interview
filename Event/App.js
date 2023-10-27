const Products = document.getElementById("products");

Products.addEventListener("click", (e) => {
  console.log(e.target.innerText);
});

//Here Comes event delegation We can addevent on Parent and that apply on childs element
