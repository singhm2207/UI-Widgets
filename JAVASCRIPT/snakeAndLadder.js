let count = 0;
const getSnakesInfo = () => {
    const form = document.getElementById("getSnakesInfo");
    const noOfSnakes = parseInt(form.elements[0].value);
    if(!form.elements[1].value && !form.elements[1].value){
        alert("Please fill all the fields");
        return;
    }
    if(count === 0 && !isNaN(noOfSnakes)){
        count = parseInt(noOfSnakes);
    }
    if(count !== 0){
        form.elements[0].disabled = true;
    }
}