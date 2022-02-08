
export enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}

export interface Location {
    name: string;
    url:  string;
}

export enum Species {
    Alien = "Alien",
    Human = "Human",
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}


export const characterDemo = {
    "id": 1,
    "name": "Rick Sanchez",
    "status":Status.Alive,
    "species": Species.Human,
    "type": "",
    "gender": Gender.Male,
    "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/1",
    ],
    "url": "https://rickandmortyapi.com/api/character/1",
    "created": new Date("2017-11-04T18:48:46.250Z")
}

export const characters = [
    characterDemo
]

export const info = {
    "count": 826,
    "pages": 42,
    "next": "https://rickandmortyapi.com/api/character/?page=2",
    "prev": null
}


export const location =  {
    "id": 1,
    "name": "Earth (C-137)",
    "type": "Planet",
    "dimension": "Dimension C-137",
    "residents": [
        "https://rickandmortyapi.com/api/character/38",
        "https://rickandmortyapi.com/api/character/45",
        "https://rickandmortyapi.com/api/character/71",
        "https://rickandmortyapi.com/api/character/82",
        "https://rickandmortyapi.com/api/character/83",
        "https://rickandmortyapi.com/api/character/92",
        "https://rickandmortyapi.com/api/character/112",
        "https://rickandmortyapi.com/api/character/114",
        "https://rickandmortyapi.com/api/character/116",
        "https://rickandmortyapi.com/api/character/117",
        "https://rickandmortyapi.com/api/character/120",
        "https://rickandmortyapi.com/api/character/127",
        "https://rickandmortyapi.com/api/character/155",
        "https://rickandmortyapi.com/api/character/169",
        "https://rickandmortyapi.com/api/character/175",
        "https://rickandmortyapi.com/api/character/179",
        "https://rickandmortyapi.com/api/character/186",
        "https://rickandmortyapi.com/api/character/201",
        "https://rickandmortyapi.com/api/character/216",
        "https://rickandmortyapi.com/api/character/239",
        "https://rickandmortyapi.com/api/character/271",
        "https://rickandmortyapi.com/api/character/302",
        "https://rickandmortyapi.com/api/character/303",
        "https://rickandmortyapi.com/api/character/338",
        "https://rickandmortyapi.com/api/character/343",
        "https://rickandmortyapi.com/api/character/356",
        "https://rickandmortyapi.com/api/character/394"
    ],
    "url": "https://rickandmortyapi.com/api/location/1",
    "created": new Date("2017-11-10T12:42:04.162Z")
}