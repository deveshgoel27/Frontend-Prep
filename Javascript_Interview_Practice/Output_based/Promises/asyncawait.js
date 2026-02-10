async function fetchData() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log("data is fetched",data);
    }catch(err){
        console.log("error : ",err);

    }
}

fetchData();


// async await -> it is a way to handle asynchronous operations in JavaScript.