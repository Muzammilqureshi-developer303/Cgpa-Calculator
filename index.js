const gradeMap = {
  A: 4.0,
  B: 3.0,
  C: 2.0,
  D: 1.0,
  F: 0.0
};

document.querySelector('.cal_button a').addEventListener('click', function (e) {
  e.preventDefault();

  const rows = document.querySelectorAll('.table-row');
  let totalPoints = 0;
  let totalCredits = 0;

  rows.forEach(row => {
    const gradeSelect = row.querySelectorAll('select')[0];
    const creditSelect = row.querySelectorAll('select')[1];

    const grade = gradeSelect.value;
    const credit = parseInt(creditSelect.value);

    if (gradeMap[grade] !== undefined && !isNaN(credit)) {
      totalPoints += gradeMap[grade] * credit;
      totalCredits += credit;
    }
  });

  const resultParagraph = document.querySelector('.result p');

  if (totalCredits === 0) {
    resultParagraph.textContent = "Please select valid grades and credit hours.";
  } else {
    const cgpa = (totalPoints / totalCredits).toFixed(2);
    if(cgpa<2){
        resultParagraph.textContent = `Your CGPA is: ${cgpa} you Need To Do Hard WOrk`;
    }
    else if(cgpa>2&&cgpa<2.5){
        resultParagraph.textContent = `Your CGPA is: ${cgpa} keep on Working hard . `;
    }
    else if(cgpa>2.5&&cgpa<3.0){
        resultParagraph.textContent = `Your CGPA is: ${cgpa} Satisfactory . keep it up You Can Acheive Your goals `;
    }
    else if(cgpa>3.0){
        resultParagraph.textContent = `Your CGPA is: ${cgpa} Excellent`;
    }
    else{
        resultParagraph.textContent = `Your CGPA is: ${cgpa} Great`;
    }
  }
});

const clearButtons = document.querySelectorAll('.clear-btn');
clearButtons.forEach(button => {
  button.addEventListener('click', function () {
    const row = this.parentElement;
    const selects = row.querySelectorAll('select');
    selects.forEach(select => {
      select.selectedIndex = 0;
    });

    document.querySelector('.result p').textContent = "";
  });
});

