let person = {
  name: "DARK*PRINCE",
  surnamr: "DARK*PRINCE2 ",
  age: 13,
};

person.age = -23;
person.adress = "Москва123321";

person["name"] = "DARK*PRINCE ";
person["age"] = 52;
person["surname"] = "DARK*PRINCE2 ";

let car1 = {
  barnd: "BNW",
  model: "m5cs",
  horsePower: 150,
  start: function () {
    console.log("машина BNW m5cs заводится");
  },
};

// car.start()

// console.log(car);

let company = {
  name: "GitHub",
  owner: {
    name: "Chris",
    surname: "Wanstrath",
    networth: "2.2 billion",
    address: {
      city: "chicGO",
      street: "Amir Temyr 52",
    },
  },
};
company.owner.name = "DARK*PRINCE";
company.owner.surname = "DARK*PRINCE2";




let book = {
  title: "Войнф и мир",
  outhor: "Лев Толстой",
  year: 1867,
}
let book2 = {...book}
book2.title = 'ВОйна и мир 2'
book2.year = 2024


function print(obj) {
  for (let key in obj) {
    console.log(`${key} : ${obj [key]}` );
  }
}
// print(book);
// console.log('--------------');
// print(book2)

// console.log(company );


let school = {
    name: 'President School',
    teachers:{
        math: 'лох123',
        georaphy: 'лохи4321',
        history: 'ты лох да да ты'
    },
    students:{ 
 1: kvantum1,
 2: kvantum2,
 3: kvantum3

    },
hasEatery:false,
}
