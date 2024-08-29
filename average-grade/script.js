alert("Average and Grade Calculator");

grade1 = parseFloat(prompt("Enter the first note:"));
grade2 = parseFloat(prompt("Enter the second note:"));

// calculate average

averageGrade = (grade1 + grade2)/2;

// calculate grade

if(averageGrade >= 8.5){
    alert(`Average: ${averageGrade.toFixed(2)}. Your grade is A`)
}else if(averageGrade < 8.5 && averageGrade >= 7.5){
    alert(`Average: ${averageGrade.toFixed(2)}. your grade is B`)
}else if(averageGrade < 7.5 && averageGrade >= 6){
    alert(`Average: ${averageGrade.toFixed(2)}. your grade is C`)
}else if(averageGrade < 6 && averageGrade >= 5){
    alert(`Average: ${averageGrade.toFixed(2)}. your grade is D`)
}else{
    alert(`Average: ${averageGrade.toFixed(2)}. your grade is E`)
}