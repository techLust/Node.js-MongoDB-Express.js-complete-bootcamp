function moveImage() {
    selected_faces_div=document.getElementById("selected-faces");
    src1 = "images.jpeg";
    s = "<div class = " + "move-image-section" + "><img height='100px' width='100px' src= "+src1+"></div>";
    selected_faces_div.innerHTML = s+selected_faces_div.innerHTML
    console.log("Image moved successfully!");
    moveText();
}

function moveText(){
    console.log('Moving text.....');
    textDiv = document.getElementById('move-text');
    let userData = {
        name: 'Romio', age: 24, address: 'Jiaganj'
    }
    s = "<span> Name: "+ userData.name +", Age: "+ userData.age +", Adderss: "+userData.address +"</span>"
    textDiv.innerHTML += s;
    console.log('Text moved successfully');
}

// const data = [
//     { id: 1, name: 'romio', age: 24, address: 'jiaganj', img_url: 'images.jpeg' },
//     { id: 2, name: 'mahatab', age: 23, address: 'berhampore', img_url: 'index.jpeg' },
//     { id: 3, name: 'nivil', age: 25, address: 'bhagwangola', img_url: 'img-1.png' }
// ];

// // Elements
// const $letfImageSection = document.querySelector('active-image-section');
// const $rightImageSection = document.querySelector('move-image-section');
// const $textSection = document.querySelector('move-text-section');
// const $activeImg = document.querySelector('active-img');

// let leftParentDiv = document.getElementsByClassName('active-image-section');
// for(let i of data){
//     let s = "<div class ='active-img'><img height='100px' width='100px' src='"+i.img_url+"'></div>";
//     // var imageDiv = document.
// }

// console.log('Hello');