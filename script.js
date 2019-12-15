
 //window.addEventListener("click", clicked)

  
function clicked(click, click2, click3) {
//1. Copy City name to clipboard. 
//Regex will make sure that city name gets copied to clipboard (regardless of how user toggles between coordinates and city nam in kt)

  let city = click.path[1].innerText
  let cityname = city.toString().trim() 
  let regx = /^\d{2}[.]/
  if (cityname.match(regx)) {
    cityname = click.path[1].previousElementSibling.innerText.trim();
  }
  
    navigator.clipboard.writeText(cityname).then(function () {

        //2. Open Google maps in new tab using coordinats 
        let coordinats = click.path[2].childNodes[8].innerText //|| click.path[1].innerText 
        let cleaned = coordinats.toString().trim().split(",").join("+")
        let baseurl = "https://www.google.com/maps/dir/"
        let fulllink = baseurl.concat(cleaned)
        let win = window.open(fulllink, "_blank");
        win.focus();
        
                
              }, function() {
        console.log("fail")
      // clipboard write failed 
    });

}
  


 
  //KT fires onload event before vehicles info is recieved. I am using settimeout to wait for data from KT
  //Adding buttons to the page once data is recieved
 
window.onload = setTimeout (function () {
   let djole6 = document.querySelectorAll("span.location-coords.text")

djole6.forEach( 
    function(currentValue, currentIndex, listObj) { 
        var button = document.createElement("input");
        button.type= "button";
        button.addEventListener("click", clicked);
        button.setAttribute("type", "button");
        button.setAttribute("value", "maps");
    
   

currentValue.append(button)
    
} )
 }, 3000) 

