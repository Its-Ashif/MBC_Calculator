function Calc({total=0},{p=0},{h=0},{q=0},{f=0},{g=0},{cd=0},{jer=0}){
    return <div>
        <div className="layout">
             <h5>total - {total}</h5>
             <h5>Pound - {p} - {p*24.5}</h5>
             <h5>Half - {h} - {h*24.5}</h5>
             <h5>Quater - {q} - {q*26.5}</h5>
             <h5>Forasi - {f} - {f*24.6}</h5>
             <h5>Gol - {g} - {g*82}</h5>
             <h5>C.D. - {cd} - {cd*82}</h5>
        </div>
    </div>
}

export default Calc