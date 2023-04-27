export default function KorisnikFunkcija({ime, godine, onNameChange}) {
    // važno je da return vrača samo jednu komponentu, odnosno strpamo više komponenta u jedan <div>
    return (
        <div>
            <p>Moje ime je {ime} i imam {godine} godina.</p>
            <input
                type="text"
                value={ime}
                onChange={onNameChange}
            />
        </div>
    );
}