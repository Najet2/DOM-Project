var plusBtn = document.getElementsByClassName("plus");
var minusBtn = document.getElementsByClassName("minus");
var total = document.getElementById("total");

console.log(plusBtn, minusBtn, total);

var plusBtn = document.getElementsByClassName("plus");

for (let btn of plusBtn) {
    btn.addEventListener("click", function () {
        var itemName = btn.getAttribute("name");
        var qty = document.getElementById(itemName + "_qty");
        var price = document.getElementById(itemName + "_price");
        qty.innerHTML = +qty.innerHTML + 1;
        total.innerHTML = +total.innerHTML + +price.innerHTML;
    });
}

for (let btn of minusBtn) {
    btn.addEventListener("click", function () {
        var itemName = btn.getAttribute("name");
        var qty = document.getElementById(itemName + "_qty");
        var price = document.getElementById(itemName + "_price");
        if (+qty.innerHTML > 0) {
            qty.innerHTML = +qty.innerHTML - 1;
            total.innerHTML = +total.innerHTML - +price.innerHTML;
        }
    });
}

for (let btn of minusBtn) {
    btn.addEventListener("click", function () {
        var itemName = btn.getAttribute("name");
        var qty = document.getElementById(itemName + "_qty");
        var price = document.getElementById(itemName + "_price");
        if (+qty.innerHTML > 0) {
            qty.innerHTML = +qty.innerHTML - 1;
            total.innerHTML = +total.innerHTML - +price.innerHTML;
        }
    });
}

var likeBtn = document.getElementsByClassName("heart");
for (let btn of likeBtn) {
    btn.addEventListener("click", function () {
        var itemName = btn.getAttribute("name");
        var itemLike = document.getElementById(itemName + "_heart");
        var fill = btn.getAttribute("fill");
        if (fill === "grey") {
            itemLike.setAttribute("fill", "red");
        } else {
            itemLike.setAttribute("fill", "grey");
        }
    });
}

var clickBtn = document.getElementsByClassName("product");
for (let btn of clickBtn) {
    btn.addEventListener("click", function () {
        var lineName = btn.getAttribute("name");
        var lineclick = document.getElementById("div_" + lineName);
        var qty = document.getElementById(lineName + "_qty").innerHTML;
        var price = document.getElementById(lineName + "_price").innerHTML;
        total.innerHTML = +total.innerHTML - +qty * +price;
        lineclick.remove();
    });
}
