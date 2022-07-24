(() => {
  type Auto = {
    carroceria: string;
    modelo    : string;
    antibalas : boolean;
    pasajeros : number;
    disparar? : () => void;
  }

  const batimovil: Auto = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4,
  };

  const bumblebee: Auto = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
      console.log("Disparando");
    },
  };

  console.log( batimovil );
  console.log( bumblebee );

  // Villanos debe de ser un arreglo de objetos personalizados
  type Villians = {
    nombre : string;
    edad   : number;
    mutante: boolean; 
  }

  const villanos: Villians[] = [
    {
      nombre: "Lex Luthor",
      edad: 54,
      mutante: false,
    },
    {
      nombre: "Erik Magnus Lehnsherr",
      edad: 49,
      mutante: true,
    },
    {
      nombre: "James Logan",
      edad: undefined,
      mutante: true,
    },
  ];

  // Multiples tipos
  // cree dos tipos, uno para charles y otro para apocalipsis
  type Hero = {
    poder   : string;
    estatura: number;
  }

  type Villian = {
    lider   : boolean;
    miembros: string[];
  }

  const charles: Hero = {
    poder: "psiquico",
    estatura: 1.78,
  };

  const apocalipsis: Villian = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
  };

  // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
  let mystique: (Hero | Villian);

  mystique = charles;
  console.log( typeof mystique, mystique );

  mystique = apocalipsis;
  console.log( typeof mystique, mystique );
})();
