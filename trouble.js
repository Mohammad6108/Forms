let v1 = 3;
let v2 = 4; // What I fixed here: I added a missing semicolon

// What I fixed here: I took out the written "equals" and then I replaced it with the actual equal sign
//alert("3 times 4 = " + v1 * v2);

// What I fixed here: I respelled it from Elements to Element 
// What I also fixed here: I respelled it from stlye to style
 // This sets the general styling for the divs within the section tag using .style
            let section = document.getElementById("s1")
            section.style.width = "50%"
            section.style.textAlign = "center"
            section.style.fontFamily = "arial, serif"
            section.style.fontWeight = "bold"
            section.style.fontStyle = "italic"
            section.style.fontSize = "20px"

            // Sets the customization for each individual color/div tag
			//.innerHTML is used to add content within each div tag.
			//.style.backgroundColor is used to assign a different background color to each div
			
            // What I fixed here: I respelled it from element to Element with a capital E
            // RED
            const red = document.getElementById("red")
            red.innerHTML = "RED"
            red.style.backgroundColor = "red"

            // What I fixed here: I respelled it from html to HTML
            // ORANGE
            const orange = document.getElementById("orange")
            orange.innerHTML = "ORANGE"
            orange.style.backgroundColor = "orange"

            // YELLOW
            const yellow = document.getElementById("yellow")
            yellow.innerHTML = "YELLOW"
            yellow.style.backgroundColor = "yellow"

            // What I fixed here: I changed the name from purple to green
            // GREEN
            const green = document.getElementById("green")
            green.innerHTML = "GREEN"
            green.style.backgroundColor = "green"

            // INDIGO
            const indigo = document.getElementById("indigo")
            indigo.innerHTML = "INDIGO"
            indigo.style.backgroundColor = "indigo"

            // PURPLE
            const violet = document.getElementById("violet")
            violet.innerHTML = "VIOLET"
            violet.style.backgroundColor = "violet"
