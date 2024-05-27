export class Page2View {

    #tableListCustumer = document.querySelector ( '.table-cust-adrress' );

    constructor ( ) {

        this.init ( );

    };

    init ( ) {

        if ( this.#tableListCustumer ) this.selectLineTable ( );

    };

    selectLineTable ( ) {

        const tBody = this.#tableListCustumer.tBodies [ 0 ];
        const tHead = this.#tableListCustumer.tHead;
        const rows = tBody.rows;

        rows [ 0 ].classList.add ( 'selected-row' );

        document.onkeydown = ( e ) => {

            e.preventDefault ( );

            const selectedRow = document.querySelector ( '.selected-row' );

            if ( e.key === 'ArrowUp' && selectedRow.rowIndex > 1 ) {

                selectedRow.classList.remove ( 'selected-row' );
                rows [ selectedRow.rowIndex - 2 ].classList.add ( 'selected-row' );
                return;
            
            }

            if ( e.key === 'ArrowDown' &&  selectedRow.rowIndex < rows.length ) {

                selectedRow.classList.remove ( 'selected-row' );
                rows [ selectedRow.rowIndex ].classList.add ( 'selected-row' );
                return;                

            }

            if ( e.key === 'Enter' ) {

                const object = { };

                for ( let i = 0; i < selectedRow.cells.length; i++ ) {

                    const key = tHead.rows [ 0 ].cells [ i ].innerHTML;
                    const value = selectedRow.cells [ i ].innerHTML;
                    if ( value ) object [ key ] = value;

                };

                console.log ( object );

            };

        };
                
    };

};
