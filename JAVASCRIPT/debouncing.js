

const getData = () => {
    //calls an api and gets data
    console.log("Fetching data ..");
}

const debounce = function (fn, delay) {
    let timer;
    return function(){
        let context = this;
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    }
}

const debouncedGetData = debounce(getData, 300);