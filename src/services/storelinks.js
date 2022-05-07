export async function getLinkSave(key){
    const mylinks = await localStorage.getItem(key);

    let linksSaves = JSON.parse(mylinks) || [] // caso nao tenha nada salvo retornar um array vazio
    return linksSaves;
}


export async function saveLinkStorage(key,newlink){
    let linkStored = await getLinkSave(key);
    //Verificar links duplicados
    const resLink = linkStored.some(link =>link.id === newlink.id); //Verificar se no array existe um item igual

    if (resLink){
        console.log('ESSE LINK JA EXISTE NA LISTA')
        return;
    }

    linkStored.push(newlink);
    await localStorage.setItem(key,JSON.stringify(linkStored));
    console.log('LINK SALVO COM SUCESSO')
};

export function deleteLinks(Links,idItem){
    let mylinks = Links.filter(item =>{
        return(item.id !== idItem)
    })

    localStorage.setItem('@encurtarLink',JSON.stringify(mylinks));
    return mylinks;
};