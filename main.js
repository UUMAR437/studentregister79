studentarray=[];

function sumbit () {
    var name1 = document.getElementById('student1').value;
    var name2 = document.getElementById('student2').value;
    var name3 = document.getElementById('student3').value;
    var name4 = document.getElementById('student4').value;
    studentarray.push(name1, name2, name3, name4);
    console.log(studentarray);
    document.getElementById('DisplayName').innerHTML= studentarray;
    document.getElementById('SumbitButton').style.display="none";
    document.getElementById('sortbutton').style.display="inline-block";
}

function sorting() {
    studentarray.sort();
    console.log(studentarray);
    document.getElementById('DisplayName').innerHTML = studentarray;
}


