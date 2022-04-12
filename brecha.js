//Obteniendo salarios de hombres y mujeres
const salariosHombres = manSalary.map(
  function(man){
    return man.salary;
  }
);
const salariosMujeres = womanSalary.map(
  function(woman){
    return woman.salary;
  }
);


//Ordenando salarios
const salariosHombresSorted = salariosHombres.sort(
  function(salaryA, salaryB){
    return salaryA - salaryB;
  }
);
const salariosMujeresSorted = salariosMujeres.sort(
  function(salaryC, salaryD){
    return salaryC - salaryD;
  }
);


//Averiguando si el num de elementos de las listas es par o no
function esPar(numElementos){
  if(numElementos % 2 === 0){
    return true;
  }else{
    return false;
  }
};


//Calculando la mediana
function medianaSalarios(lista){

  const mitadLista = parseInt(lista.length / 2); //Buscando la mitad de la lista de elementos

  if(esPar(lista.length)){
    const mitadPersona1 = lista[mitadLista - 1];
    const mitadPersona2 = lista[mitadLista];

    const mediana = (mitadPersona1 + mitadPersona2) / 2;
    return mediana;
  }else{
    const mitadPersona = lista[mitadLista];
    return mitadPersona;
  }
};



//Calculando brecha salarial
const medianaDeHombres = medianaSalarios(salariosHombresSorted);
const medianaDeMujeres = medianaSalarios(salariosMujeresSorted);

const brechaSalarial = (medianaDeHombres - medianaDeMujeres) / medianaDeHombres * 100;

console.log("La brecha salarial entre hombres y mujeres es de:" + " " + brechaSalarial + "%");