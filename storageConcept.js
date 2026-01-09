const user = {
  name: "Alex",
  location: { city: "New York" }
};

// Shallow Copy 
const shallowClone = { ...user };
shallowClone.location.city = "London"; 
console.log(user.location.city); // "London" ( Original value got changed)

// Deep Copy 
const deepClone = structuredClone(user);
deepClone.location.city = "Tokyo";
console.log(user.location.city); // "London" (Safe Original stayed same)


// 1. Local Storage (Stays forever)
localStorage.setItem("theme", "dark");
const currentTheme = localStorage.getItem("theme");
// localStorage.removeItem("theme");

localStorage.getItem("formStep");

localStorage.removeItem("formStep")

localStorage.clear();

localStorage.key(1) // get the name of key at  specfi index

// 2. Session Storage (Stays until tab closes)
sessionStorage.setItem("formStep", "2");

sessionStorage.getItem("formStep");

sessionStorage.removeItem("formStep")

sessionStorage.clear();

sessionStorage.key(1) // get the name of key at  specfi index

// 3. Cookies (Sent to server, usually for login)
document.cookie = "userToken=abc123xyz; expires=Fri, 31 Dec 2026 23:59:59 GMT; path=/";