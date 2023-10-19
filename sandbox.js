// let age = 25;
// let year = 2001;

// console.log(age, year);

// const greet = () => 'hellow world';

// let dvlottery = ['Dennis', 'Dickson','Bright', 'Emma','Nicho'];

// const myDvs = function(lotto_fuo, index){
//     console.log(`${lotto_fuo} has ${index}`);
// }

// dvlottery.forEach(myDvs);

// let ul = document.querySelector('.people');

// let fam = ['Bright', 'Dennis', 'Dickson', 'Emma'];

// let html = ``;

// fam.forEach(function(person){
//     html += `<li style="color: purple">${person}</li>`;
//     ul.innerHTML = html;
// })


// object literal
    // blogi = [{title: 'The journey of Emma Boy', like: 50}, {title: 'Emma the traveller', like: 30}];
    // console.log(blogi);

// let ul = document.querySelector('.people');
// let html = ``;

// let user = {
//     name: 'Emma',
//     age: '22',
//     location: 'Abuja',
//     email: 'obrim89@gmail.com',
//     blogs: [{title: 'The journey of Emma Boy', likes: 50}, 
//             {title: 'Emma the traveller', likes: 20}
//             ],
//     login(){
//         console.log("The user logged in");
//     },
//     logout(){
//         console.log("the user logged out");
//     },
//     logBlogs(){
//         console.log("The user has written two blogs");
//         this.blogs.forEach(blog => { 
//             //console.log(blog.title, blog.likes);
//             html += `<li style=color: "purple">${blog.title} has ${blog.likes} likes</li> `;
//             ul.innerHTML = html;

//         });
//     }
// }


// console.log(user['age']);
// console.log(user.email);

// console.log(typeof user);
// user.logBlogs();


//////////////////////////////////////////
//MATH OBJECTS
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.1

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// const num = Math.random();

// console.log(num);
// console.log(Math.round(num * 100));

///////////querySelector
// const para = document.querySelector('div.error');
// console.log(para);

// const paras = document.querySelectorAll('p');

// paras.forEach(para =>{
//     console.log(para);
// }); 

/////////////////////Get element by ID and classname
// const title = document.getElementById('page-title');
// const errors = document.getElementsByClassName('error');
// const para = document.getElementsByTagName('p');
// console.log(title);
// console.log(errors[0]);
// console.log(para[1]);


//   const para = document.querySelector('p');
//   console.log(para.innerText);

// const paras = document.querySelectorAll('p');
// paras.forEach(para =>{
//     console.log(para.innerText);
// });

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     para.innerText += ' new text';
//     console.log(para.innerText);
// })

// const content = document.querySelector('.content');
// // content.innerHTML += '<h3>THIS IS A NEW CONTENT</h3>';
// // console.log(content.innerHTML);

// const content = document.querySelector('.content');

// const people = ['Dennis','Dickson','Emma'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`; 
// });

// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'www.facebook.com'); 
// console.log(link.getAttribute('href'));

// const klas = document.querySelector('p');
// klas.setAttribute('class','success');
// console.log(klas.getAttribute('class','success'));
// klas.setAttribute('style', 'color: green');

//Set Attribut do not append properties
// const head = document.querySelector('h1');
//head.setAttribute('style','margin: 50px');//cant append style to color defind in html.

//Gona use java stlye object.
// console.log(head.style);
// console.log(head.style.color);
// head.style.margin ='50px';
// head.style.color = 'crimson';
// head.style.margin = '';

// const content = document.querySelector('p');

// // content.classList.add('error');
// content.classList.remove('success');
// // content.classList.add('success');


// const paras = document.querySelectorAll('p');

// paras.forEach(p =>{
//     if(p.textContent.includes('error')){
//         p.classList.add('error');
//     }
//     if(p.textContent.includes('success')){
//         p.classList.add('success');
//     }
// });

// const head = document.querySelector('h1');
// head.classList.toggle('test');
// head.classList.toggle('test');


/////DOM traversing
// const title = document.querySelector('article');
// console.log(title.children)
// console.log(Array.from(title.children));

//  const article = document.querySelector('article');
// Array.from(title.children).forEach(child => {
//     child.classList.add('article-element');
// });
// const title = document.querySelector('h2');

// console.log(title.previousElementSibling );

////Events
// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('cliked me')
// });
// const ul = document.querySelector('ul');

// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     const li = document.createElement('li');
//     li.textContent = 'Do something new';
//     ul.append(li);
// });

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', (e) => {
       
//         e.target.remove();
//     });
// }); 



// 

/////////GHOST TEARS
const countries = ['GHANA','GREECE','GRENADA','LIBYA','LIBERIA','LEBANON','MONACO','MONGOLIA','MONTENEGRO','AFGHANISTAN', 'ALBANIA', 'ALGERIA', 'ANDORRA', 'ANGOLA', 'ANTIGUA AND BARBUDA', 'ARGENTINA', 'ARMENIA', 'AUSTRALIA', 'AZERBAIJAN'];
const ul = document.querySelector('ul');

const text = document.querySelector('h3');

const  failed = document.querySelector('.failed');

let group = [];

let a;

let sc; //selected country

ul.addEventListener('click', e => { 
    if(e.target.tagName === 'LI'){
text.append(e.target.innerText.toUpperCase());
    }
    ///Appending Charactors into HTML

    for(a = 0; a < countries.length; a++){
    if((text.innerText.indexOf(text.innerText) < 1) && (text.innerText.length === 1) && (text.innerText[0] === countries[a][0])){
        group.push(countries[a]);
    }
}   ///creating array for countries starting with same letter

    const random = Math.random();
    const randoma = Math.round(random * (group.length-1));

    if(text.innerText.length === 1){
        sc = group[randoma];
        console.log(sc); 
        text.append(sc[text.innerText.length]);
        //console.log(sc);
    }
    //Randomizing the country letter next move
    
    for(let u = 0; u < group.length; u++){
        if((text.innerText.slice(0, text.innerText.length) !== sc.slice(0, text.innerText.length)) && (text.innerText.slice(0, text.innerText.length) === group[u].slice(0, text.innerText.length))){
            sc = group[u];
        }else if((text.innerText.slice(0, text.innerText.length) !== sc.slice(0, text.innerText.length)) && (text.innerText.slice(0, text.innerText.length) !== group[u].slice(0, text.innerText.length))){
            failed.append('SORRY, YOU FAILED=====> PLAY again');
            break;
        }
    } 
    

     
     


    if(text.innerText.length % 2 !== 0 && text.innerText.length !== sc.length){
        
        text.append(sc[text.innerText.length]);
    }

// console.log(randoma);
    // console.log(group);

});
     
// const arr = ["John"];
// const texti = arr.join();
// console.log(texti);

 

//  //Seting code execution time
//  setTimeout(()=>{
// //code in here
//  }, 5000);//second parameter is the time 5000 in miliseconds