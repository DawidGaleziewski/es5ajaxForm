//Fake api for testing:
// https://jsonplaceholder.typicode.com/
const http = new ajaxLibrary();

//Our method accepts callback function which is what we want to do
    //Callback accepts two arguments, error and response
 http.get('https://jsonplaceholder.typicode.com/posts/1', function(error, response){
     //Test for error
        //If error is diffrent than null it will be displayed
     if(error){
         console.log(error)
     }else{
         //if error does not exist and null was passed by callback function work with rest of the code
        console.log(response)
     }
     
 })


//  POST request
const dataToPost = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

http.post('https://jsonplaceholder.typicode.com/posts', dataToPost, function(error, post){
    if(error){
        console.log(error)
    } else{
        console.log(post)
    }
})


//PUT request
http.put('https://jsonplaceholder.typicode.com/posts/1', dataToPost, function(error, post){
    if(error){
        console.log(error)
    } else{
        console.log(post)
    }
})


//DELETE request
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, response){

    if(error){
        console.log(error)
    }else{
        //if error does not exist and null was passed by callback function work with rest of the code
        console.log(response)
    }
    
})
