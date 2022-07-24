(() => {
    // Tipos
    const batman: string   = 'Bruce';
    const superman: string = 'Clark';
    const existe: boolean  = false;

    console.log({ batman, superman, existe });
  
    // Tuplas
    const parejaHeroes: [string, string]     = [batman,superman];
    const villano: [string, number, boolean] = ['Lex Lutor',5,true];

    console.log({ parejaHeroes, villano });
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];

    console.log({ aliados });
  
    //Enumeraciones
    enum SuperHero {
        aquaman,
        batman,
        flash = 5,
        superman = 100
    }

    const fuerzaFlash: SuperHero    = SuperHero.flash;
    const fuerzaSuperman: SuperHero = SuperHero.superman;
    const fuerzaBatman: SuperHero   = SuperHero.batman;
    const fuerzaAquaman: SuperHero  = SuperHero.aquaman;

    console.log({ fuerzaFlash, fuerzaSuperman, fuerzaBatman, fuerzaAquaman });
  
    // Retorno de funciones
    function activar_batiseñal(): string {
      return 'activada';
    }
  
    function pedir_ayuda(): void {
      console.log('Auxilio!!!');
    }

    console.log( activar_batiseñal() );
    pedir_ayuda();
  
    // Aserciones de Tipo
    const poder: any            = '100';
    const largoDelPoder: number = (<string>poder).length;

    console.log( { largoDelPoder } );

    enum enumeracion {
      a = 10,
      b,
      c = 9,
      d
    }

    console.log( {enumeracion} )

  })();
  
  