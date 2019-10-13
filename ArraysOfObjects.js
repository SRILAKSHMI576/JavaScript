var officers = [
    {id: 20, name: "Captain Piett"},
    {id: 24, name: "general veers"},
    {id: 56, name: "admiral ozzel"},
    {id: 88, name: "commander jerjerrod"}
]


var officersIds = officers.map(function (officer) {
   // console.log(officer)
    return officer
  });

 // console.log(officersIds)


var students_Information = [
    {
        name: {
            firstname: "sri",
            lastname: "laxmi"
        }, 
        id: "123",
        marks: {
            maths: 90,
            telugu: 98
        },
        age: 20, 
        address: {
            state: "Andhra pradesh", 
            pincode: "34345234", 
            house_no: "2-456"
        }
    },

    {
        name: {
            firstname: "srinu",
            lastname: "srinivas"
        },
        id: "456", 
        marks: {
            maths: 89,
            telugu: 78
        },
        age: 20, 
        address: {
            state: "telengana", 
            pincode: "454115095", 
            house_no: "4-345"        }
    },
    {
        name: {
            firstname: "nitya",
            lastname: "nilaa"
        }, 
        id: "789",
        marks: {
            maths: 95,
            telugu: 88
        },
        age: 20, 
        address: {
            state: "karnataka", 
            pincode: "346334277", 
            house_no: "8-243"
        }
    },

    
]

var students_details = students_Information.map(function (student){
    const total_marks = student.marks.maths + student.marks.telugu;
    const avg = total_marks / 2;
    return  {id: student.id, total:  total_marks, age: student.age, avg_marks: avg};
})

var avg_filter = students_details.filter(function (student){
    return student.avg_marks > 90
})
console.log(students_details)

console.log(avg_filter)

