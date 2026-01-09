//event delagation
const list1 = document.querySelector('#myList'); // find by id

//one listner for whole list

list1.addEventListener('click',(event)=>{

    if(event.target.tagName === 'LI'){
        console.log("you clicked item : " +event.target.innerText);
    }
});




const list2 = document.querySelector('.container'); // find by class

const list3 = document.querySelector('h1'); // find by tag

const list4 = document.querySelector('ui li'); // find by child



list1.style.backgroundColor = 'yellow' 

list1.innerHTML = '<li>Empty List </li>';


