const platforms = [
  {
    "id": 1,
    "name": "PC",
    "slug": "pc",
    "platforms": [
      {
        "id": 4,
        "name": "PC",
        "slug": "pc",
        "games_count": 526743,
        "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      }
    ]
  },
  {
    "id": 2,
    "name": "PlayStation",
    "slug": "playstation",
    "platforms": [
      {
        "id": 187,
        "name": "PlayStation 5",
        "slug": "playstation5",
        "games_count": 1026,
        "image_background": "https://media.rawg.io/media/games/709/709bf81f874ce5d25d625b37b014cb63.jpg",
        "image": null,
        "year_start": 2020,
        "year_end": null
      },
      {
        "id": 18,
        "name": "PlayStation 4",
        "slug": "playstation4",
        "games_count": 6772,
        "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 16,
        "name": "PlayStation 3",
        "slug": "playstation3",
        "games_count": 3166,
        "image_background": "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 15,
        "name": "PlayStation 2",
        "slug": "playstation2",
        "games_count": 2031,
        "image_background": "https://media.rawg.io/media/games/07b/07b5abbe6330a76d6b30636d3aa5e0f3.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 27,
        "name": "PlayStation",
        "slug": "playstation1",
        "games_count": 1666,
        "image_background": "https://media.rawg.io/media/games/d64/d646810b629081cc12aec49ed9f49441.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 19,
        "name": "PS Vita",
        "slug": "ps-vita",
        "games_count": 1444,
        "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 17,
        "name": "PSP",
        "slug": "psp",
        "games_count": 1368,
        "image_background": "https://media.rawg.io/media/screenshots/c9c/c9c4e6d1792b5e12676819f3b57e5e26.jpeg",
        "image": null,
        "year_start": null,
        "year_end": null
      }
    ]
  },
  {
    "id": 3,
    "name": "Xbox",
    "slug": "xbox",
    "platforms": [
      {
        "id": 1,
        "name": "Xbox One",
        "slug": "xbox-one",
        "games_count": 5595,
        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 186,
        "name": "Xbox Series S/X",
        "slug": "xbox-series-x",
        "games_count": 886,
        "image_background": "https://media.rawg.io/media/games/b34/b3419c2706f8f8dbe40d08e23642ad06.jpg",
        "image": null,
        "year_start": 2020,
        "year_end": null
      },
      {
        "id": 14,
        "name": "Xbox 360",
        "slug": "xbox360",
        "games_count": 2797,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 80,
        "name": "Xbox",
        "slug": "xbox-old",
        "games_count": 736,
        "image_background": "https://media.rawg.io/media/games/2ee/2eef5ed5e82c28d1299ecc2a0e60f2cb.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      }
    ]
  },
  {
    "id": 4,
    "name": "iOS",
    "slug": "ios",
    "platforms": [
      {
        "id": 3,
        "name": "iOS",
        "slug": "ios",
        "games_count": 77231,
        "image_background": "https://media.rawg.io/media/games/238/2383a172b4d50a7b44e07980eb7141ea.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      }
    ]
  },
  {
    "id": 8,
    "name": "Android",
    "slug": "android",
    "platforms": [
      {
        "id": 21,
        "name": "Android",
        "slug": "android",
        "games_count": 52339,
        "image_background": "https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      }
    ]
  },
  {
    "id": 5,
    "name": "Apple Macintosh",
    "slug": "mac",
    "platforms": [
      {
        "id": 5,
        "name": "macOS",
        "slug": "macos",
        "games_count": 103532,
        "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 55,
        "name": "Classic Macintosh",
        "slug": "macintosh",
        "games_count": 674,
        "image_background": "https://media.rawg.io/media/screenshots/52b/52b958a7b263d4f264648b710e76a236.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 41,
        "name": "Apple II",
        "slug": "apple-ii",
        "games_count": 424,
        "image_background": "https://media.rawg.io/media/screenshots/ed5/ed5d628f77ca3d2c16f041fe1267f224.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      }
    ]
  },
  {
    "id": 6,
    "name": "Linux",
    "slug": "linux",
    "platforms": [
      {
        "id": 6,
        "name": "Linux",
        "slug": "linux",
        "games_count": 76568,
        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      }
    ]
  },
  {
    "id": 7,
    "name": "Nintendo",
    "slug": "nintendo",
    "platforms": [
      {
        "id": 7,
        "name": "Nintendo Switch",
        "slug": "nintendo-switch",
        "games_count": 5417,
        "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 8,
        "name": "Nintendo 3DS",
        "slug": "nintendo-3ds",
        "games_count": 1693,
        "image_background": "https://media.rawg.io/media/screenshots/375/375f84d018242d7519a230f623981217.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 9,
        "name": "Nintendo DS",
        "slug": "nintendo-ds",
        "games_count": 2484,
        "image_background": "https://media.rawg.io/media/games/dc6/dc68ca77e06ad993aade7faf645f5ec2.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 13,
        "name": "Nintendo DSi",
        "slug": "nintendo-dsi",
        "games_count": 37,
        "image_background": "https://media.rawg.io/media/screenshots/b45/b452e9b20e969a64d0088ae467d1dcab.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 10,
        "name": "Wii U",
        "slug": "wii-u",
        "games_count": 1127,
        "image_background": "https://media.rawg.io/media/games/6c8/6c8cb4780ce30b76b944cf656e8fff49.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 11,
        "name": "Wii",
        "slug": "wii",
        "games_count": 2231,
        "image_background": "https://media.rawg.io/media/games/9fb/9fbaea2168caea1f806546dfdaaeb1da.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 105,
        "name": "GameCube",
        "slug": "gamecube",
        "games_count": 633,
        "image_background": "https://media.rawg.io/media/games/83b/83b59a9d512bec8bc8bda6b539b215b2.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 83,
        "name": "Nintendo 64",
        "slug": "nintendo-64",
        "games_count": 363,
        "image_background": "https://media.rawg.io/media/screenshots/4cf/4cf1e2b4cd701605225fb443d5e84f77.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 24,
        "name": "Game Boy Advance",
        "slug": "game-boy-advance",
        "games_count": 952,
        "image_background": "https://media.rawg.io/media/games/35f/35f815a22c4678b4fe76073f0f56df8e.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 43,
        "name": "Game Boy Color",
        "slug": "game-boy-color",
        "games_count": 419,
        "image_background": "https://media.rawg.io/media/games/7ca/7ca0df41799243443a4e3887720fdf2a.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 26,
        "name": "Game Boy",
        "slug": "game-boy",
        "games_count": 611,
        "image_background": "https://media.rawg.io/media/games/e40/e4043e92866d08ec9fdd212dcd3a1224.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 79,
        "name": "SNES",
        "slug": "snes",
        "games_count": 965,
        "image_background": "https://media.rawg.io/media/games/360/360f00cbb4b4364b9af0e7ff8e397b65.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 49,
        "name": "NES",
        "slug": "nes",
        "games_count": 983,
        "image_background": "https://media.rawg.io/media/games/470/47058af09b864c2d211a08271eccfb4f.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      }
    ]
  },
  {
    "id": 9,
    "name": "Atari",
    "slug": "atari",
    "platforms": [
      {
        "id": 28,
        "name": "Atari 7800",
        "slug": "atari-7800",
        "games_count": 64,
        "image_background": "https://media.rawg.io/media/screenshots/565/56504b28b184dbc630a7de118e39d822.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 31,
        "name": "Atari 5200",
        "slug": "atari-5200",
        "games_count": 64,
        "image_background": "https://media.rawg.io/media/screenshots/678/6786598cba3939d48ed60cbd1a3723f4.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 23,
        "name": "Atari 2600",
        "slug": "atari-2600",
        "games_count": 286,
        "image_background": "https://media.rawg.io/media/screenshots/b12/b12ed274eed80e4aced37badf228d1cf.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 22,
        "name": "Atari Flashback",
        "slug": "atari-flashback",
        "games_count": 30,
        "image_background": "https://media.rawg.io/media/screenshots/2aa/2aa07f58491e14b0183333f8956bc802.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 25,
        "name": "Atari 8-bit",
        "slug": "atari-8-bit",
        "games_count": 308,
        "image_background": "https://media.rawg.io/media/screenshots/038/0385a47d3a43b218204268af5361a19e.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 34,
        "name": "Atari ST",
        "slug": "atari-st",
        "games_count": 835,
        "image_background": "https://media.rawg.io/media/games/32d/32d851318b042aba3df62e52d868d599.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 46,
        "name": "Atari Lynx",
        "slug": "atari-lynx",
        "games_count": 56,
        "image_background": "https://media.rawg.io/media/screenshots/ba7/ba7241cc52c340124317f8ab56ed7383.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 50,
        "name": "Atari XEGS",
        "slug": "atari-xegs",
        "games_count": 22,
        "image_background": "https://media.rawg.io/media/screenshots/769/7691726d70c23c029903df08858df001.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 112,
        "name": "Jaguar",
        "slug": "jaguar",
        "games_count": 38,
        "image_background": "https://media.rawg.io/media/games/8fc/8fcc2ff5c7bcdb58199b1a4326817ceb.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      }
    ]
  },
  {
    "id": 10,
    "name": "Commodore / Amiga",
    "slug": "commodore-amiga",
    "platforms": [
      {
        "id": 166,
        "name": "Commodore / Amiga",
        "slug": "commodore-amiga",
        "games_count": 2079,
        "image_background": "https://media.rawg.io/media/screenshots/101/1015fe740ce5654eb97c9140f6da3c3e.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      }
    ]
  },
  {
    "id": 11,
    "name": "SEGA",
    "slug": "sega",
    "platforms": [
      {
        "id": 167,
        "name": "Genesis",
        "slug": "genesis",
        "games_count": 834,
        "image_background": "https://media.rawg.io/media/games/a9a/a9a2472f862b041d2980103ddbb61c91.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 107,
        "name": "SEGA Saturn",
        "slug": "sega-saturn",
        "games_count": 367,
        "image_background": "https://media.rawg.io/media/screenshots/681/68145c58e234705ed4559a05c043f41a.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 119,
        "name": "SEGA CD",
        "slug": "sega-cd",
        "games_count": 160,
        "image_background": "https://media.rawg.io/media/screenshots/b3e/b3e41d90f811a8a153fc30bdd6cefc92.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 117,
        "name": "SEGA 32X",
        "slug": "sega-32x",
        "games_count": 46,
        "image_background": "https://media.rawg.io/media/screenshots/d9f/d9f308b5d824ae8f047edc0a998a587b.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 74,
        "name": "SEGA Master System",
        "slug": "sega-master-system",
        "games_count": 229,
        "image_background": "https://media.rawg.io/media/games/32d/32d851318b042aba3df62e52d868d599.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 106,
        "name": "Dreamcast",
        "slug": "dreamcast",
        "games_count": 362,
        "image_background": "https://media.rawg.io/media/games/5b4/5b4af50ce68cf94dcab24f3dba33eaab.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      },
      {
        "id": 77,
        "name": "Game Gear",
        "slug": "game-gear",
        "games_count": 222,
        "image_background": "https://media.rawg.io/media/games/079/0795d52725058c8d9d360a4b233f1e4f.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      }
    ]
  },
  {
    "id": 12,
    "name": "3DO",
    "slug": "3do",
    "platforms": [
      {
        "id": 111,
        "name": "3DO",
        "slug": "3do",
        "games_count": 97,
        "image_background": "https://media.rawg.io/media/screenshots/d8c/d8c399c09701ae2603043a3bb3a0bff5.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      }
    ]
  },
  {
    "id": 13,
    "name": "Neo Geo",
    "slug": "neo-geo",
    "platforms": [
      {
        "id": 12,
        "name": "Neo Geo",
        "slug": "neogeo",
        "games_count": 123,
        "image_background": "https://media.rawg.io/media/screenshots/633/6334882482c86e4a37254dcae9a82e89.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      }
    ]
  },
  {
    "id": 14,
    "name": "Web",
    "slug": "web",
    "platforms": [
      {
        "id": 171,
        "name": "Web",
        "slug": "web",
        "games_count": 260089,
        "image_background": "https://media.rawg.io/media/screenshots/edd/edd31d4a79e7a25c1a58cb2700c40ba0.jpg",
        "image": null,
        "year_start": null,
        "year_end": null
      }
    ]
  }
];
export default platforms;