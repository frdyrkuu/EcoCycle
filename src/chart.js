var plastic_val = document.getElementById("plastic-count");
var plastic_TextContent = plastic_val.textContent;
var plastic_count = parseInt(plastic_TextContent);

var paper_val = document.getElementById("paper-count");
var paper_TextContent = paper_val.textContent;
var paper_count = parseInt(paper_TextContent);

var metal_val = document.getElementById("metal-count");
var metal_TextContent = metal_val.textContent;
var metal_count = parseInt(metal_TextContent);

var others_val = document.getElementById("others-count");
var others_TextContent = others_val.textContent;
var others_count = parseInt(others_TextContent);

var total_count = plastic_count + paper_count + metal_count + others_count;

var plastic_percentage = ((plastic_count / total_count) * 100).toFixed(2);
var paper_percentage = ((paper_count / total_count) * 100).toFixed(2);
var metal_percentage = ((metal_count / total_count) * 100).toFixed(2);
var others_percentage = ((others_count / total_count) * 100).toFixed(2);

var plastic_percentage_span = document.getElementById("plastic-percentage");
plastic_percentage_span.textContent = plastic_percentage + "%";

var paper_percentage_span = document.getElementById("paper-percentage");
paper_percentage_span.textContent = paper_percentage + "%";

var metal_percentage_span = document.getElementById("metal-percentage");
metal_percentage_span.textContent = metal_percentage + "%";

var others_percentage_span = document.getElementById("others-percentage");
others_percentage_span.textContent = others_percentage + "%";


// PAPER
// Get the .paper-bar element
var paperBar = document.querySelector('.paper-bar');

switch (true) {
    case (paper_percentage <= 10):
        paperBar.classList.remove('w-3/4');
        paperBar.classList.add('w-10');
        break;
    case (paper_percentage <= 20):
        paperBar.classList.remove('w-3/4');
        paperBar.classList.add('w-20');
        break;
    case (paper_percentage <= 30):
        paperBar.classList.remove('w-3/4');
        paperBar.classList.add('w-30');
        break;
    case (paper_percentage <= 40):
        paperBar.classList.remove('w-3/4');
        paperBar.classList.add('w-40');
        break;
    case (paper_percentage <= 50):
        paperBar.classList.remove('w-3/4');
        paperBar.classList.add('w-50');
        break;
    case (paper_percentage <= 60):
        paperBar.classList.remove('w-3/4');
        paperBar.classList.add('w-60');
        break;
    case (paper_percentage <= 70):
        paperBar.classList.remove('w-3/4');
        paperBar.classList.add('w-70');
        break;
    case (paper_percentage <= 80):
        paperBar.classList.remove('w-3/4');
        paperBar.classList.add('w-80');
        break;
    case (paper_percentage <= 90):
        paperBar.classList.remove('w-3/4');
        paperBar.classList.add('w-90');
        break;
    default:
        // If paper_percentage is greater than 100, set the width to 100%
        paperBar.classList.remove('w-3/4');
        paperBar.classList.add('w-full');
}

// plastic
// Get the .plastic-bar element
var plasticBar = document.querySelector('.plastic-bar');

switch (true) {
    case (plastic_percentage <= 10):
        plasticBar.classList.remove('w-3/4');
        plasticBar.classList.add('w-10');
        break;
    case (plastic_percentage <= 20):
        plasticBar.classList.remove('w-3/4');
        plasticBar.classList.add('w-20');
        break;
    case (plastic_percentage <= 30):
        plasticBar.classList.remove('w-3/4');
        plasticBar.classList.add('w-30');
        break;
    case (plastic_percentage <= 40):
        plasticBar.classList.remove('w-3/4');
        plasticBar.classList.add('w-40');
        break;
    case (plastic_percentage <= 50):
        plasticBar.classList.remove('w-3/4');
        plasticBar.classList.add('w-50');
        break;
    case (plastic_percentage <= 60):
        plasticBar.classList.remove('w-3/4');
        plasticBar.classList.add('w-60');
        break;
    case (plastic_percentage <= 70):
        plasticBar.classList.remove('w-3/4');
        plasticBar.classList.add('w-70');
        break;
    case (plastic_percentage <= 80):
        plasticBar.classList.remove('w-3/4');
        plasticBar.classList.add('w-80');
        break;
    case (plastic_percentage <= 90):
        plasticBar.classList.remove('w-3/4');
        plasticBar.classList.add('w-90');
        break;
    default:
        // If plastic_percentage is greater than 100, set the width to 100%
        plasticBar.classList.remove('w-3/4');
        plasticBar.classList.add('w-full');
}


// metal
// Get the .metal-bar element
var metalBar = document.querySelector('.metal-bar');

switch (true) {
    case (metal_percentage <= 10):
        metalBar.classList.remove('w-3/4');
        metalBar.classList.add('w-10');
        break;
    case (metal_percentage <= 20):
        metalBar.classList.remove('w-3/4');
        metalBar.classList.add('w-20');
        break;
    case (metal_percentage <= 30):
        metalBar.classList.remove('w-3/4');
        metalBar.classList.add('w-30');
        break;
    case (metal_percentage <= 40):
        metalBar.classList.remove('w-3/4');
        metalBar.classList.add('w-40');
        break;
    case (metal_percentage <= 50):
        metalBar.classList.remove('w-3/4');
        metalBar.classList.add('w-50');
        break;
    case (metal_percentage <= 60):
        metalBar.classList.remove('w-3/4');
        metalBar.classList.add('w-60');
        break;
    case (metal_percentage <= 70):
        metalBar.classList.remove('w-3/4');
        metalBar.classList.add('w-70');
        break;
    case (metal_percentage <= 80):
        metalBar.classList.remove('w-3/4');
        metalBar.classList.add('w-80');
        break;
    case (metal_percentage <= 90):
        metalBar.classList.remove('w-3/4');
        metalBar.classList.add('w-90');
        break;
    default:
        // If metal_percentage is greater than 100, set the width to 100%
        metalBar.classList.remove('w-3/4');
        metalBar.classList.add('w-full');
}

// others
// Get the .others-bar element
var othersBar = document.querySelector('.others-bar');

switch (true) {
    case (others_percentage <= 10):
        othersBar.classList.remove('w-3/4');
        othersBar.classList.add('w-10');
        break;
    case (others_percentage <= 20):
        othersBar.classList.remove('w-3/4');
        othersBar.classList.add('w-20');
        break;
    case (others_percentage <= 30):
        othersBar.classList.remove('w-3/4');
        othersBar.classList.add('w-30');
        break;
    case (others_percentage <= 40):
        othersBar.classList.remove('w-3/4');
        othersBar.classList.add('w-40');
        break;
    case (others_percentage <= 50):
        othersBar.classList.remove('w-3/4');
        othersBar.classList.add('w-50');
        break;
    case (others_percentage <= 60):
        othersBar.classList.remove('w-3/4');
        othersBar.classList.add('w-60');
        break;
    case (others_percentage <= 70):
        othersBar.classList.remove('w-3/4');
        othersBar.classList.add('w-70');
        break;
    case (others_percentage <= 80):
        othersBar.classList.remove('w-3/4');
        othersBar.classList.add('w-80');
        break;
    case (others_percentage <= 90):
        othersBar.classList.remove('w-3/4');
        othersBar.classList.add('w-90');
        break;
    default:
        // If others_percentage is greater than 100, set the width to 100%
        othersBar.classList.remove('w-3/4');
        othersBar.classList.add('w-full');
}


console.log("Plastic percentage: " + plastic_percentage + "%");
console.log("Paper percentage: " + paper_percentage + "%");
console.log("Metal percentage: " + metal_percentage + "%");
console.log("Others percentage: " + others_percentage + "%");
