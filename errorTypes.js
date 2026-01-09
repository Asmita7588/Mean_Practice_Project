//reference error 

try{
    console.log(userStatus);  // it will give reference error because userstatus variable never defined 
}catch(err){
    console.error("caught a reference error !");
}


//type Error

try{
    const age = 25;

    age.toUpperCase();
}catch(err){
    console.error("caught a type error : you can't upper case a number")
}


// syntax error 

//const x = ;

