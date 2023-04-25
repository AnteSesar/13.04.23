export default function Komponenta3({podatak1, podatak2}) {
    return (
        <div>
            <p>{podatak1} {podatak2}</p>
        </div>
    );
}
//  ako je nešto jednostavno kao ovo, nemora biti u div-u (ako ima samo jedan element (npr. samo jedan <p>...</p>))