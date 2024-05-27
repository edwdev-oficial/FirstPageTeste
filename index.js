import configTable from './utils/configTable.js';
import populaTable from './utils/populaTable.js';
import datas from './assets/custDataFake.json' with { type: 'json' };
import { Page2Controller } from './src/controller/page2Controller.js';

const tableCustAddress = document.querySelector ( '.table-cust-adrress' );
const divTest = document.querySelector ( '.div-test' );

if ( divTest ) divTest.onclick = ( e ) => {

    let number = 0;

    const interval = setInterval ( () => {

        let str = '';
        str = str + number;        

        for ( let i = 0; str.length <6; i++ ) {

            str = 0 + str
            
        };

        console.log ( str );
    
    
        divTest.style.backgroundColor = `#${str}`
        // console.log ( divTest.style.backgroundColor );

        number += 100;

    }, 10 );

};

const alignField = {
    nº: 'align-center',
    CEP: 'align-center',
    UF: 'align-center'
};

populaTable ( tableCustAddress, datas, alignField );
configTable ( tableCustAddress );

document.addEventListener( 'DOMContentLoaded', ( ) => {
    
    new Page2Controller ( );

} );