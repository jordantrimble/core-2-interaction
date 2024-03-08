// LOGGING DATA OBJECTS
// //--------------------------------

// // log the costumes array
console.log('costumes', costumes)

// // log property with bracket notation
// console.log("costumes[0][title]:", costumes[0]['title']);

// // log property with dot notation
// console.log("costumes[0].title:", costumes[0]['title']);


// // CONSOLE AND DOCUMENT OBJECTS
// //----------------------------------

// // log the console object
// console.log(console);

// // log the document object
// console.log(document);

// // log the document element
// console.log(document.documentElement);


// // EDITING THE DOCUMENT ELEMENT
// // -----------------------------------

// // edit directly
// document.documentElement.style.background = 'pink'

// define a new function
function setBackgroundColor(color) {
    document.documentElement.style.background = color;
}

// run the function
setBackgroundColor('aliceblue');


// SELLECTING ANY HTML ELEMENT
// ----------------------------------

// set main element variable
var mainElement = document.querySelector ('.Main');


// UPDATING AN HTML ELEMENT
// ---------------------------------





// // edit with object property
// mainElement.innerHTML = costumes[0]['title']


// edit with function
function insertCostumeData(costume) {

    // add to inner html
    // mainElement.innerHTML += costume['title'];

    // add template string
    mainElement.innerHTML += `
        <div>${ costume ['title']}</div>
    `;

    // insert advanced html
    mainElement.innerHTML +=`
        <article class="Kirby">
            <h2>${ costume ['title']}</h2>
            <img src="./media/${ costume['image']}"/>
            <p>${ costume ['powers']}</p>
            </article>
        
    `;
}

// manual insertion
// insertCostumeData(costumes[0]);
// insertCostumeData(costumes[1]);
// insertCostumeData(costumes[2]);
// insertCostumeData(costumes[3]);

// FOR EACH LOOPS
//-------------------------

costumes.forEach((costume)=> {
    insertCostumeData(costume);
});