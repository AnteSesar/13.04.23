export default function KorisnikDjete({ime, godine, children}) {
    return (
        <div>
            <p>Ime mog djeteta je {ime} i ima {godine} godina.</p>
            <p>{children}</p>
        </div>
    );
}