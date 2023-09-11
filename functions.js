var itemsOnScreen = "";
var result = "";

var screenItems = document.querySelector("#screenItems");
var calcBtn = document.querySelectorAll(".btnNum");

function resultOfEquation(itemsOnScreen){
    try {
        result = eval(itemsOnScreen);
        if (isNaN(result)) {
            throw new Error("Invalid input");
        }
        screenItems.textContent = result;
    } catch (error) {
        screenItems.textContent = "Error";
    }
    itemsOnScreen = "";
    // result = eval(itemsOnScreen);
    // screenItems.textContent = result;
    // itemsOnScreen = "";
}

calcBtn.forEach((button) => {
    button.addEventListener("click", () => {
        var btnValue = button.textContent;
        itemsOnScreen += btnValue;
        screenItems.textContent = itemsOnScreen;
    })
})

var btnEqual = document.querySelector("#btnEqual");
btnEqual.addEventListener("click", function(){
    resultOfEquation(itemsOnScreen);
    itemsOnScreen = ""; 
});