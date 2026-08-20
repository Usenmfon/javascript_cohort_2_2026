const formEle = document.forms[0]

//! retrieving values from html using elements id
// formEle.addEventListener('submit', function(event){
//     event.preventDefault();

//     let fullName = document.getElementById('fullname').value
//     let email = document.getElementById('email').value
//     let course  = document.getElementById('course').value

//     console.log(fullName, email, course)

// });


formEle.addEventListener('submit', function(event){
    event.preventDefault();

    let formData = new FormData(formEle);
    data = Object.fromEntries(formData.entries());

    console.log(data);
    
    formEle.reset();
});