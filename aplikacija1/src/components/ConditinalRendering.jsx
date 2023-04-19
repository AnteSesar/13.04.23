function isNumber(broj){
    return Number(broj) === broj;
}

export function ConditinalRendering({props}){
    if (props === undefined) return
    if (!isNumber(props)) return;
    var isVeci = false;
    if (props > 10){
        isVeci = true;
    }
    return (
        <div>
            {isVeci && <p>Ako je broj veći od 10 - ({props})</p>}
            {!isVeci && <p>Ako je broj manji od 10 - ({props})</p>}
        </div>
    )
}