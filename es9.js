//1. Asynchronous Iteration (for-await-of)

async function processDownloads(urls) {
    for await (let data of urls.map(url => fetch(url))) {
        const json = await data.json();
        console.log("Downloaded:", json);
    }
}

//2. Rest/Spread for Objects

//A. The Spread Operator (Copying/Merging)
const user = { name: "John", age: 30 };
const updatedUser = { ...user, location: "NY" }; 
// Result: { name: "John", age: 30, location: "NY" }


//B. The Rest Operator (Destructuring)
const laptop = { brand: "Dell", price: 1000, ram: "16GB", cpu: "i7" };
const { brand, price, ...specs } = laptop;

console.log(specs); // { ram: "16GB", cpu: "i7" }



//3. Promise.prototype.finally()

fetch("/api/data")
    .then(res => res.json())
    .catch(err => console.error(err))
    .finally(() => {
        hideLoadingSpinner();
});

//4. New Regular Expression (RegEx) Improvements

//es9 way
const regex = /(?<year>\d{4})-(?<month>\d{2})/;
const match = regex.exec("2024-12");
console.log(match.groups.year); // "2024"

//old way 
const str = "John-Doe";
const regex1 = /(\w+)-(\w+)/; // Two groups: First Name and Last Name
const result = regex1.exec(str);

console.log(result[1]); // "John"
console.log(result[2]); // "Doe"

