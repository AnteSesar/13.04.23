export default function Korisnik({name, years, onNameCganged}){
    return (
        <div>
        <p>Moje ime je {name} i imam {years} godina.</p>
        <input type="text" onChange={onNameCganged} value={name}/>
        </div>
    );
}