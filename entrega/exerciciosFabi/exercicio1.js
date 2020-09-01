/* 1. James estava criando uma array com as cores do arco-íris, e ele esqueceu algumas cores. As cores padrão de um arco-íris são normalmente listadas nesta ordem:

```javascript
let rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
```

mas James tinha isto:
`let rainbow = ["Red", "Orange", "Blackberry", "Blue"];`

Usando somente o método `splice()`, insira as cores que faltam na array e remova a cor "Blackberry", seguindo estes passos:

Remova "Blackberry"
Adicione "Yellow" e "Green"
Adicione "Purple"

--- */

  //let rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];

  
  let rainbow = ["Red", "Orange", "Blackberry", "Blue"];
  console.log("Antes");
  console.log("----------");
  console.log(rainbow);

  console.log("\nRemovido Blackberry:");
  console.log("----------");
  rainbow.splice(2, 1);
  console.log(rainbow);
  
  console.log("\nAdicione Yellow e Green:");
  console.log("----------");
  rainbow.splice(2, 0, "Yellow","Green");
  console.log(rainbow);

  console.log("\nAdicione Purple:");
  console.log("----------");
  rainbow.push("Purple")
  console.log(rainbow);
  

