//store default row

//create object to serve as database of grade points values
const gradeValues = {
    "H1": 100, "O1":56,
    "H2": 88, "O2":46,
    "H3": 77, "O3":37,
    "H4": 66, "O4":28,
    "H5": 55, "O5":20,
    "H6": 44, "O6":12,
    "H7": 33, "O7":0,
    "H8": 22, "O8":0
}

function activateLevel(){
    //allow selection of level
    var dropdown = document.getElementById("level");
    dropdown.disabled = false;

    //create higher option
    var higher = document.createElement("option");
    higher.innerHTML = "Higher";
    higher.setAttribute("value", "higher");
    dropdown.appendChild(higher);

    //create ordinary option
    var ordinary = document.createElement("option");
    ordinary.innerHTML = "Ordinary";
    ordinary.setAttribute("value", "ordinary");
    dropdown.appendChild(ordinary);

    //prevent re-adding levels
    var prevDropdown = document.getElementById("subjects");
    prevDropdown.setAttribute("onchange", "")
}

function activateGrade(){
    //get level value
    var level = document.getElementById("level").value;

    //get grade dropdown and remove any existing elements to allow switching between Higher and Ordinary
    //also allow selection of grade
    var dropdown = document.getElementById("grade");
    dropdown.innerHTML = "";
    dropdown.disabled = false;

    //create "Choose a grade" placeholder
    var defaultOption = document.createElement("option");
    defaultOption.innerHTML = "Choose a grade";
    defaultOption.setAttribute("value", "");
    defaultOption.disabled = true;
    defaultOption.selected = true;
    defaultOption.hidden = true;
    dropdown.appendChild(defaultOption);

    //logic to decide higher or ordinary
    if (level === "higher"){
        var grade = "H";
    } else if (level === "ordinary"){
        var grade = "O";
    }

    //create grade options 1-8
    for(i=1; i<=8; i++){
        fullGrade = grade + i;

        var gradeOption = document.createElement("option");
        gradeOption.innerHTML = fullGrade;
        gradeOption.setAttribute("value", fullGrade);
        dropdown.appendChild(gradeOption);
    }

    //reset points
    document.getElementById("pointsCont").innerHTML = "";

}

function calculatePoints(){
    //get grade value from pseudo-database
    var selectedGrade = document.getElementById("grade").value;
    var gradeValue = gradeValues[selectedGrade];

    //check if additional points due to honours maths are needed
    const level = document.getElementById("level").value;
    const subject = document.getElementById("subjects").value;

    if (level === "higher" && subject === "maths"){
        gradeValue += 25;
    }

    //display points value
    document.getElementById("pointsCont").innerHTML = gradeValue;

    //recalculate if subject changes
    var subjects = document.getElementById("subjects");
    subjects.setAttribute("onChange", "calculatePoints()")
}

function resetPopints(){
    
}