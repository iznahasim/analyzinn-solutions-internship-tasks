
const objects = [
    { Fname: 'Abu Bakar', Lname: 'Saddique', value: 10 },
    { Fname: 'Ali', Lname: 'Raza', value: 15 },
    { Fname: 'Usman', Lname: 'Umer', value: 5 }
  ];
  
  let max = objects[0];
  for (let i = 1; i < objects.length; i++) {
    if (objects[i].value > max.value) {
      max = objects[i];
    }
  }
  console.log(max);












  