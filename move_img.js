function moveImage() {
    selected_faces_div=document.getElementById("selected-faces");
    src1 = "images.jpeg";
    s = "<div class = " + "move-image-section" + "><img height='100px' width='100px' src= "+src1+"></div>";
    selected_faces_div.innerHTML = s+selected_faces_div.innerHTML
    console.log("Image moved successfully!");
}