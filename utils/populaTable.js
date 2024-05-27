export default ( table, datas, alignFild ) => {

    const documentFragment = document.createDocumentFragment ( );

    const fields = Object.keys ( getBiggestObject ( datas ) );

    const tHeadRow = document.createElement ( 'tr' );

    fields.forEach ( field => {

        const th = document.createElement ( 'th' );
        th.innerHTML = field
        tHeadRow.appendChild ( th );

    } )

    if ( table ) table.tHead.appendChild ( tHeadRow );

    datas.forEach ( data => {

        const tr = document.createElement ( 'tr' );

        fields.forEach ( field => {

            const td = document.createElement ( 'td' );
            if ( data [ field ] ) td.innerHTML = data [ field ];
            if ( alignFild [ field ] ) td.classList.add ( 'align-center' );
            tr.appendChild ( td );

        } );

        documentFragment.appendChild ( tr );
        

    } );

    if ( table ) table.tBodies [ 0 ].appendChild ( documentFragment );

};

function getBiggestObject ( arrayObjects ) {

    let biggestObject = null;
    let maxNumberKeys = 0;

    for ( let i = 0; i < arrayObjects.length; i ++ ) {

        const object = arrayObjects [ i ];
        const numberKeys = Object.keys ( object ).length;

        if ( numberKeys > maxNumberKeys ) {

            maxNumberKeys = numberKeys;
            biggestObject = object; 

        }

    }

    return biggestObject;

};