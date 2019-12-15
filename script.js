
window.addEventListener("click", clicked)


  
function clicked(click, click2, click3) {
   
   //1.Copy current location to clipboard
    let cityname = click.path[1].nextElementSibling.children[1].innerHTML.trim();

    navigator.clipboard.writeText(cityname).then(function () {

        //2. Open Google maps in new tab using coordinats 
        let coordinats = click.path[1].nextElementSibling.children[2].innerHTML.toString().trim().split(",").join("+")
        let baseurl = "https://www.google.com/maps/dir/"
        let fulllink = baseurl.concat(coordinats)
        let win = window.open(fulllink, "_blank");
        win.focus();
        
                
              }, function() {
        console.log("fail")
      /* clipboard write failed */
    });





  }

 
