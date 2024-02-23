export function konsolraIr(SZEMELYLISTA) {
    /* A szemelylista adatait kiirja konzolra */
    for (let index = 0; index < SZEMELYLISTA.length; index++) {
        console.log(`név: ${SZEMELYLISTA[index].nev}, tel: ${SZEMELYLISTA[index].tel}`);
    }
}

export function listaOsszeallit(SZEMELYLISTA) {
    let txt="<ul>"
    for (let index = 0; index < SZEMELYLISTA.length; index++) {
        txt+=`<li>név: ${SZEMELYLISTA[index].nev}, tel: ${SZEMELYLISTA[index].tel}</li>`
        
    }
    txt+="</ul>"
    return txt
}

export function masiklistaOsszeallit(SZEMELYLISTA) {
    let txt2="<div>"
    for (let index = 0; index < SZEMELYLISTA.length; index++) {
        txt2+=`<div id="emberadatok"><h3>név: ${SZEMELYLISTA[index].nev}</h3> <p>tel: ${SZEMELYLISTA[index].tel}</p> <p>${SZEMELYLISTA[index].suly}</p></div>`
        
    }
    txt2+="</div>"
    return txt2
}