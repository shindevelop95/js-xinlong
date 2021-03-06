'use strict'
const getInfo = document.querySelector('.about__text');
const getImg = document.querySelector('.gallery__img__group');
const getCard = document.querySelector('.card__wrapper')
const navInner = document.querySelector(".nav__inner")

window.addEventListener("scroll",() => {
    if(window.scrollY > 100){
        navInner.classList.add("nav__active")
    }else{
        navInner.classList.remove("nav__active")
    }
})

const about = [
    {
        title: 'Conquer',
        img:'/assets/w4.jpg',
        text:'Battle with mythical and odd looking monster with different combat style such as melee using sword or from a distant using gun. Solve dungeon puzzle to unlock the final battle with the boss and save the goddess Deity to escape from the island',
        flexReverse:'row',
        moveLeft:'move__left',
        shiftRight:'shift__right'
       
    },
    {
        title: 'Survive',
        img:'/assets/w5.jpg',
        text:'Try to survive as long as possible in an hostile, intense environments. From freezing cold land, to scorching hot deserted island, each environment presents unique challenges and opponents. ',
        shiftLeft:'shift__left'
    },
    {
        title: 'Craft',
        img:'/assets/w3.jpg',
        text:'A system that allows player to create virrtual objects during the gameplay, ranging from making a rust hammer, to mixing ingredients to create item such as healing potion in the world of Dawn & Dusk. During your advancement throughout the gameplay, forge powerful weapons and craft food to maintain your health.',
        flexReverse:'row',
        moveLeft:'move__left',
        shiftRight:'shift__right'
    },
    {
        title: 'Explore',
        img:'/assets/w1.jpg',
        text:'A mesmerizing, exciting world of mystery awaits you. Venture into completed darkness, running through the bushes, discover and cross path with strange and peculiar creatures, dive deep into the dungeon and solve mysterious puzzles, but be wary of going too far..',
        shiftLeft:'shift__left'
    }
]

const members = [
    {
        stdName:'Xinlong Wang',
        role:'UX Developer',
        description:'A third-year computer science undergraduate who passionate about learning new technologies, building full-stack applications, and UX/UI design, a self taught programmer & designer who love to build cool stuffs at his free time. Good team player with strong communication and interpersonal skills.',
        email:'xwang071@sim.edu.sg',
        abImg:'assets/team/m4.png'
    },
    {
        stdName:'Chang Cham Chuan',
        role:'Project Manager',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        email:'xwang071@sim.edu.sg',
        img:'/assets/team/p3.jpg',
        abImg:'assets/team/m3.png'
    },
    {
        stdName:'Decen Ng',
        role:'Designer Lead',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        email:'xwang071@sim.edu.sg',
        img:'',
        abImg:'assets/team/m5.png'
    },
    {
        stdName:'Ching Jing Jue',
        role:'Game Developer',
        description:'A soon-to-graduate computer science student interested in games and programming. Learning more about game programming through watching lots of tutorials and applying them. Strives to be able to publish a game that he is proud of.',
        email:'jingjue1@hotmail.com',
        img:'',
        abImg:'assets/team/m1.png'
    },
    {
        stdName:'Ching Jing Xian',
        role:'Game Developer',
        description:'A computer science undergraduate in his last semester. Self-learnt most of unity-related things. Currently very interested in procedural generated contents',
        email:'cjx6@hotmail.com',
        img:'',
        abImg:'assets/team/m2.png'
    },
]

const createImage = function(imgPath){
    return new Promise(function(resolve,reject) {
        const img = document.createElement('img');
        img.src = imgPath;
        img.setAttribute("data-aos","fade-up")
        img.addEventListener('load', function(){
           resolve(img)
        });

        img.addEventListener('error', function(){
            reject(new Error('Image not found'))
        })
    })
}
/*

let aboutInfo = '';
const loadNPause = async function(a){
    console.log("display A", a)
    try{
        let img = await createImage(a.img)
        console.log("show me the image here", img)
            aboutInfo =
            `<div class="about__info ${a.shiftLeft} ${a.shiftRight} ${a.flexReverse}">
                <div class="about__left">
                    ${img}
                </div>
                <div class="about__right ${a.moveLeft}">
                    <div class="about__header2">${a.title}</div>
                    <div class="about__inner__text" data-aos="fade-down" data-aos-duration="1500">${a.text}</div>
                </div>
            </div>
        `
        getInfo.insertAdjacentHTML('afterend',aboutInfo)
       
      
    }catch(e){
        console.log(e)
    }
}

about.forEach(a => {
    loadNPause(a)
})

*/



/*Gallery Section*/
/*
let gImg = ' ';
for(let i = 1; i <=6; i++){
    gImg = `<img data-aos="zoom-in" alt="" src="assets/gallery/g${i}.JPG"/>`
getImg.insertAdjacentHTML('afterbegin',gImg);
}*/
/*Card Section*/
let mem = ' '
/*members.forEach(member => {
    mem = `<div class="card__content item">
                <img src=${member.img ? member.img:member.abImg} alt="">
                <h2>${member.stdName}</h2>
                <span>${member.role}</span>
                <p>${member.description}</p>
                <p>${member.email}</p>
            </div>`
getCard.insertAdjacentHTML('afterbegin',mem)
})*/



