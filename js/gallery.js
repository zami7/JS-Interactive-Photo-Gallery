function upDate(previewPic){
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
    imageDiv.textContent = previewPic.alt;
      {console.log("Mouse is over the image");}    
    }
    
function unDo() {   
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('images/bg.jpg')"; 
    imageDiv.textContent = "Hover over an image below to display here.";
      {console.log("Mouse is out of the image");}
    }	