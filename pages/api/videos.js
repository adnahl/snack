// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json(
    [
      {
        id: 1,
        snacker: 'Pauly',
        user: 'pauly',
        title: 'Not Kidding',
        coverImage: 'C1.png',
        chapterName: 'I work here!',
        pos: {
          season: 2,
          chapter: 1
        },
        views: 5,
        timeView: 4432, // seconds
        likes: 5,
        dislikes: 0,
        tags: [
          'funny',
          'comedy',
          'jokes',
          'pranks'
        ]
      },
      {
        id: 2,
        snacker: 'Alex Sonta',
        user: 'alexsonta',
        title: 'Singing the dream',
        coverImage: 'C2.png',
        chapterName: 'Una hora antes del show',
        pos: {
          season: 1,
          chapter: 3
        },
        views: 13223,
        timeView: 479056, // seconds
        likes: 6305,
        dislikes: 111,
        tags: [
          'music',
          'concerts',
          'sogns',
          'singing'
        ]
      },
      {
        id: 3,
        snacker: 'Violeta Rex',
        user: 'lavioleta',
        title: 'A mad nigth show',
        coverImage: 'C3.png',
        chapterName: 'The mortal kiss',
        pos: {
          season: 1,
          chapter: 5
        },
        views: 801059,
        timeView: 410902542,
        likes: 302104,
        dislikes: 105,
        tags: [
          'music',
          'concerts',
          'sogns',
          'singing',
          'electronic',
          'techno',
          'party'
        ]
      },
      {
        id: 4,
        snacker: 'Vicky Suz',
        user: 'vsuz',
        title: 'Oops',
        coverImage: 'C4.png',
        chapterName: 'Sugar sugar',
        pos: {
          season: 1,
          chapter: 1
        },
        views: 2,
        timeView: 542,
        likes: 2,
        dislikes: 0,
        tags: [
          'funny',
          'comedy',
          'jokes',
          'lifestyle'
        ]
      },
      {
        id: 5,
        snacker: 'Omega Hack',
        user: 'omega_hack',
        title: 'The game is not over',
        coverImage: 'C5.png',
        chapterName: 'A special f*** trick',
        pos: {
          season: 2,
          chapter: 3
        },
        views: 100,
        timeView: 30208,
        likes: 100,
        dislikes: 0,
        tags: [
          'videogames',
          'tricks',
          'gameplay',
          'gamer'
        ]
      },
      {
        id: 6,
        snacker: 'Girl 1up',
        user: 'girl1up',
        title: 'Get Ready',
        coverImage: 'C6.png',
        chapterName: 'Atari time',
        pos: {
          season: 1,
          chapter: 1
        },
        views: 0,
        timeView: 0,
        likes: 0,
        dislikes: 0,
        tags: [
          'videogames',
          'tricks',
          'gameplay',
          'gamer',
          'retro'
        ]
      },
      {
        id: 7,
        snacker: 'Dj Moon',
        user: 'djmoon',
        title: 'Powerful Mix',
        coverImage: 'C7.png',
        chapterName: "the party's just begun",
        pos: {
          season: 1,
          chapter: 1
        },
        views: 0,
        timeView: 0,
        likes: 0,
        dislikes: 0,
        tags: [
          'music',
          'concerts',
          'sogns',
          'singing',
          'electronic',
          'techno',
          'party'
        ]
      },
      {
        id: 8,
        snacker: 'Free girl',
        title: 'Vibras Urbanas',
        coverImage: 'C8.png',
        chapterName: "Let's skate",
        pos: {
          season: 1,
          chapter: 1
        },
        views: 12060,
        timeView: 17555801,
        likes: 9980,
        dislikes: 422,
        tags: [
          'free',
          'arte',
          'deporte',
          'lifestyle',
          'calle',
          'callejera',
          'libre',
          'rebelde'
        ]
      },
      {
        id: 9,
        snacker: 'Vicky',
        title: 'Fotografías del aire',
        coverImage: 'C9.png',
        chapterName: 'Al fin llegué a Tuvalu',
        pos: {
          season: 1,
          chapter: 12
        },
        views: 100010,
        timeView: 1805123,
        likes: 90854,
        dislikes: 1000,
        tags: [
          'paisajes',
          'fotografia',
          'mundo',
          'viaje',
          'calle',
          'callejera',
          'fotos',
          'arte'
        ]
      },
      {
        id: 10,
        snacker: '2many Girls',
        title: 'Diario de chicas',
        coverImage: 'C10.png',
        chapterName: 'Quería con las dos!!!',
        pos: {
          season: 2,
          chapter: 1
        },
        views: 41022535,
        timeView: 0,
        likes: 37023900,
        dislikes: 19304,
        tags: [
          'chicas',
          'tips',
          'secretos',
          'lifestyle',
          'travesias'
        ]
      },
      {
        id: 11,
        snacker: 'Surfer Girl',
        title: 'Bahia Lovers',
        coverImage: 'C11.png',
        chapterName: 'Weding surf',
        pos: {
          season: 1,
          chapter: 1
        },
        views: 0,
        timeView: 0,
        likes: 0,
        dislikes: 0,
        tags: [
          'girls',
          'sports',
          'surf',
          'beach',
          'sun',
          'sunset'
        ]
      },
      {
        id: 12,
        snacker: 'YoYo',
        title: 'A regular street show',
        coverImage: 'C12.png',
        chapterName: 'Coming home',
        pos: {
          season: 1,
          chapter: 7
        },
        views: 120090,
        timeView: 65923001,
        likes: 100551,
        dislikes: 1002,
        tags: [
          'paisajes',
          'fotografia',
          'mundo',
          'viaje',
          'calle',
          'callejera',
          'fotos',
          'arte'
        ]
      },
      {
        id: 13,
        snacker: 'Miree',
        title: 'El Show de Miree',
        coverImage: 'C13.png',
        chapterName: 'Salgo de caza desde casa',
        pos: {
          season: 1,
          chapter: 23
        },
        views: 10544013,
        timeView: 6930000000,
        likes: 9985510,
        dislikes: 51000,
        tags: [
          'chicas',
          'tips',
          'secretos',
          'lifestyle',
          'travesias'
        ]
      },
      {
        id: 14,
        snacker: 'Cori G',
        title: 'Queriéndote',
        coverImage: 'C14.png',
        chapterName: 'Muy pronto... Nueva canción en vivo',
        pos: {
          season: 1,
          chapter: 6
        },
        views: 12102,
        timeView: 0,
        likes: 0,
        dislikes: 0,
        tags: [
          'musica',
          'concierto',
          'canción',
          'baladas',
          'emotivo'
        ]
      },
      {
        id: 15,
        snacker: 'Zcontrol',
        title: 'Hacking the life',
        coverImage: 'C15.png',
        chapterName: 'I tried to cook using only hacks',
        pos: {
          season: 1,
          chapter: 1
        },
        views: 9013008,
        timeView: 11880000000,
        likes: 5000135,
        dislikes: 1980,
        tags: [
          'hacks',
          'tips',
          'tricks',
          'lifestyle',
          'hacking'
        ]
      },
      {
        id: 16,
        snacker: 'Ricky Mix',
        title: 'The Rebel Machines',
        coverImage: 'C16.png',
        chapterName: 'The concert 12/12/2020',
        pos: {
          season: 1,
          chapter: 1
        },
        views: 680220,
        timeView: 2000000831,
        likes: 500892,
        dislikes: 120
      },
      {
        id: 17,
        snacker: 'Dj Rock',
        title: 'Mr. Dance',
        coverImage: 'C17.png',
        chapterName: 'Party Sep 05',
        pos: {
          season: 1,
          chapter: 8
        },
        views: 18095,
        timeView: 43012980,
        likes: 15002,
        dislikes: 28
      },
      {
        id: 18,
        snacker: 'Aleska Vera',
        title: 'Comedy Show',
        coverImage: 'C18.png',
        chapterName: 'Are you kidding?',
        pos: {
          season: 3,
          chapter: 2
        },
        views: 78500,
        timeView: 2747500,
        likes: 65000,
        dislikes: 159
      },
      {
        id: 19,
        snacker: 'Puppie',
        title: 'Puppie unplugged',
        coverImage: 'C19.png',
        chapterName: 'Nobody knows',
        pos: {
          season: 1,
          chapter: 1
        },
        views: 1200,
        timeView: 360502,
        likes: 1000,
        dislikes: 0
      },
      {
        id: 20,
        snacker: 'Paul Kosvok',
        title: 'The master class',
        coverImage: 'C20.png',
        chapterName: 'Step 1',
        pos: {
          season: 1,
          chapter: 1
        },
        views: 120210,
        timeView: 4700631,
        likes: 98000,
        dislikes: 540,
        tags: [
          'musica',
          'concierto',
          'canción',
          'clases'
        ]
      },
      {
        id: 21,
        snacker: 'VEWO',
        title: 'The Guitar Fest',
        coverImage: 'C21.png',
        chapterName: 'Klismen',
        pos: {
          season: 2,
          chapter: 8
        },
        views: 120210,
        timeView: 4700631,
        likes: 98000,
        dislikes: 540,
        tags: [
          'musica',
          'concierto',
          'canción',
          'pop',
          'rock',
          'rap',
          'rck'
        ]
      },
      {
        id: 22,
        snacker: 'Miree',
        title: 'El Show de Miree',
        coverImage: 'C22.png',
        chapterName: 'A desconocidos "Osea... soy la otra"',
        pos: {
          season: 1,
          chapter: 8
        },
        views: 18501,
        timeView: 15850320,
        likes: 12500,
        dislikes: 20,
        tags: [
          'chicas',
          'tips',
          'secretos',
          'lifestyle',
          'travesias'
        ]
      },
      {
        id: 23,
        snacker: 'Miree',
        title: 'El Show de Miree',
        coverImage: 'C23.png',
        chapterName: 'Fuera de control',
        pos: {
          season: 1,
          chapter: 9
        },
        views: 15350,
        timeView: 10000098,
        likes: 10920,
        dislikes: 50,
        tags: [
          'chicas',
          'tips',
          'secretos',
          'lifestyle',
          'travesias'
        ]
      },
      {
        id: 24,
        snacker: 'Miree',
        title: 'El Show de Miree',
        coverImage: 'C24.png',
        chapterName: '¿Qué pasó con Ricky?',
        pos: {
          season: 1,
          chapter: 6
        },
        views: 55321,
        timeView: 53210098,
        likes: 2510,
        dislikes: 50,
        tags: [
          'chicas',
          'tips',
          'secretos',
          'lifestyle',
          'travesias'
        ]
      },
      {
        id: 25,
        snacker: 'Miree',
        title: 'El Show de Miree',
        coverImage: 'C25.png',
        chapterName: 'Me prefiere a mí!!!',
        pos: {
          season: 1,
          chapter: 2
        },
        views: 1321,
        timeView: 732100,
        likes: 310,
        dislikes: 10,
        tags: [
          'chicas',
          'tips',
          'secretos',
          'lifestyle',
          'travesias'
        ]
      }
    ]
  )
}
