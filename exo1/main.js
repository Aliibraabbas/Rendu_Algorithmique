class Personnage {
    constructor(
        name,
        Health
    ) {
        this.name = name;
        this.Health = Health;
    }
}

const musics = [
    "Anissa - Wejdene",
    "chanteur2 - music2 ",
    "chanteur3 - music3 ",
    "chanteur4 - music4 ",
    "hanteur5 - music5 ",
]


let Trajet = {
    changements: 0,
    radio: musics[0],
    feuxrouges: 30,
}


let personnage = new Personnage('John', 10);


while (Trajet.feuxrouges > 0) {

    let music = Math.floor(Math.random()*musics.length)
    let musicplay = musics[music]
    if (musicplay == Trajet.radio) {
        Personnage.Health = Personnage.Health -1, 
        Trajet.changements ++
    } else {
        Trajet.feuxrouges = Trajet.feuxrouges -1
        console.log('musique à la radio: ' , musicplay , ', Nombre de feux restants :' , Trajet.feuxrouges ) 
    } 
    if (personnage.Health === 0) {
        Trajet.feuxrouges = 0;
    }
}

if (personnage.Health > 0) {
    console.log(personnage.name, 'est bien arrivé à la  destination et a dû changé', Trajet.changements , 'fois de taxi pour arrivé .');
} else {
    console.log('Explosion ');
}

