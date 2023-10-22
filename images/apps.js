let movies= [
    {
        name:"Falcon and the Winter Soldier",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, animi",
        image: "images/slider 2.png"

    },
    {
        name:"Loki",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, animi",
        image: "images/slider 1.png"

    },
    {
        name:"Wanda Vision",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, animi",
        image: "images/slider 3.png"

    },
    {
        name:"Raya and the Last Dragon",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, animi",
        image: "images/slider 4.png"

    },
    {
        name:"Luca",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, animi",
        image: "images/slider 5.png"

    },
];

const carousel=document.querySelector('.carousel');
let slider=[];
let slideIndex=0; //track the current slide

const createSlide= () =>  {
    if(slideIndex>=movies.length){
        slideIndex=0;
    }
    //create DOM element
    let slide= document.createElement('div');
    var imgElement= document.createElement('img');
    let content= document.createElement('div');
    let h1= document.createElement('h1');
    let p= document.createElement('p');

    //attach all the elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

}