const {name: package_name, version: package_version, repository: {url: repository_url}} = require('../package.json');

const PLATFORMS     = {
    PC: 'uplay', PLAYSTATION: 'psn', XBOX: 'xbl', STEAM: 'steam'
};
const APP_IDS       = {
    uplay: 'e3d5ea9e-50bd-43b7-88bf-39794f4e3d40',
    psn  : 'fb4cc4c9-2063-461d-a1e8-84a7d36525fc',
    xbl  : '4008612d-3baf-49e4-957a-33066726a7bc',
    api  : '39baebad-39e5-4552-8c25-2c9b919064e2'
};
const PLATFORM_URLS = {
    uplay: '5172a557-50b5-4665-b7db-e3f2e8c5041d/sandboxes/OSBOR_PC_LNCH_A/',
    psn  : '05bfb3f7-6c21-4c42-be1f-97a33fb5cf66/sandboxes/OSBOR_PS4_LNCH_A/',
    xbl  : '98a601e5-ca91-4440-b1c5-753f601a2c90/sandboxes/OSBOR_XBOXONE_LNCH_A/'
};
const API_URLS      = {
    VERSION_1      : 'https://public-ubiservices.ubi.com/v1/spaces/',
    VERSION_2      : 'https://public-ubiservices.ubi.com/v2/profiles?',
    VERSION_3      : 'https://public-ubiservices.ubi.com/v3/profiles?',
    AUTHENTICATION : 'https://public-ubiservices.ubi.com/v3/profiles/sessions?',
    SERVER_STATUS  : 'https://game-status-api.ubisoft.com/v1/instances?appIds=',
    PROFILE_PICTURE: 'https://ubisoft-avatars.akamaized.net'
};

const SEASONS       = {
    BLACK_ICE     : {
        id    : 1,
        colour: "2E93B3",
        banner: "",
        name  : "Black Ice"
    },
    DUST_LINE     : {
        id    : 2,
        colour: "D0A344",
        banner: "",
        name  : "Dust Line"
    },
    SKULL_RAIN    : {
        id    : 3,
        colour: "47893B",
        banner: "",
        name  : "Skull Rain"
    },
    RED_CROW      : {
        id    : 4,
        colour: "BD1E2C",
        banner: "",
        name  : "Red Crow"
    },
    VELVET_SHELL  : {
        id    : 5,
        colour: "723093",
        banner: "",
        name  : "Velvet Shell"
    },
    HEALTH        : {
        id    : 6,
        colour: "0050B3",
        banner: "",
        name  : "Health"
    },
    BLOOD_ORCHID  : {
        id    : 7,
        colour: "ca361c",
        banner: "",
        name  : "Blood Orchid"
    },
    WHITE_NOISE   : {
        id    : 8,
        colour: "006543",
        banner: "",
        name  : "White Noise"
    },
    CHIMERA       : {
        id    : 9,
        colour: "FFC113",
        banner: "",
        name  : "Chimera"
    },
    PARA_BELLUM   : {
        id    : 10,
        colour: "949F39",
        banner: "",
        name  : "Para Bellum"
    },
    GRIM_SKY      : {
        id    : 11,
        colour: "81A0C1",
        banner: "",
        name  : "Grim Sky"
    },
    WIND_BASTION  : {
        id    : 12,
        colour: "0050B3",
        banner: "",
        name  : "Wind Bastion"
    },
    BURNT_HORIZON : {
        id    : 13,
        colour: "D2005A",
        banner: "",
        name  : "Burnt Horizon"
    },
    PHANTOM_SIGHT : {
        id    : 14,
        colour: "304395",
        banner: "",
        name  : "Phantom Sight"
    },
    EMBER_RISE    : {
        id    : 15,
        colour: "156309",
        banner: "",
        name  : "Ember Rise"
    },
    SHIFTING_TIDES: {
        id    : 16,
        colour: "089EB3",
        banner: "",
        name  : "Shifting Tides"
    },
    VOID_EDGE     : {
        id    : 17,
        colour: "946A97",
        banner: "",
        name  : "Void Edge"
    },
    STEEL_WAVE    : {
        id    : 18,
        colour: "2B7F9B",
        banner: "",
        name  : "Steel Wave"
    }
};
const LATEST_SEASON = SEASONS.STEEL_WAVE;

const REGIONS = {
    AMERICAS      : 'ncsa',
    EUROPE        : 'emea',
    ASIA_AUSTRALIA: 'apac'
};

const RANKS_V1 = {
    UNRANKED    : {
        id   : 0,
        badge: "",
        name : "Unranked"
    },
    COPPER_IV   : {
        id   : 1,
        badge: "",
        name : "Copper IV"
    },
    COPPER_III  : {
        id   : 2,
        badge: "",
        name : "Copper III"
    },
    COPPER_II   : {
        id   : 3,
        badge: "",
        name : "Copper II"
    },
    COPPER_1    : {
        id   : 5,
        badge: "",
        name : "Copper I"
    },
    BRONZE_IV   : {
        id   : 5,
        badge: "",
        name : "Bronze IV"
    },
    BRONZE_III  : {
        id   : 6,
        badge: "",
        name : "Bronze III"
    },
    BRONZE_II   : {
        id   : 7,
        badge: "",
        name : "Bronze II"
    },
    BRONZE_1    : {
        id   : 8,
        badge: "",
        name : "Bronze I"
    },
    SILVER_IV   : {
        id   : 9,
        badge: "",
        name : "Silver IV"
    },
    SILVER_III  : {
        id   : 10,
        badge: "",
        name : "Silver III"
    },
    SILVER_II   : {
        id   : 11,
        badge: "",
        name : "Silver II"
    },
    SILVER_I    : {
        id   : 12,
        badge: "",
        name : "Silver I"
    },
    GOLD_IV     : {
        id   : 13,
        badge: "",
        name : "Gold IV"
    },
    GOLD_III    : {
        id   : 14,
        badge: "",
        name : "Gold III"
    },
    GOLD_II     : {
        id   : 15,
        badge: "",
        name : "Gold II"
    },
    GOLD_I      : {
        id   : 16,
        badge: "",
        name : "Gold I"
    },
    PLATINUM_III: {
        id   : 17,
        badge: "",
        name : "Platinum III"
    },
    PLATINUM_II : {
        id   : 18,
        badge: "",
        name : "Platinum II"
    },
    PLATINUM_I  : {
        id   : 19,
        badge: "",
        name : "Platinum I"
    },
    DIAMOND     : {
        id   : 20,
        badge: "",
        name : "Diamond"
    }
};
const RANKS_V2 = {
    UNRANKED    : {
        id   : 0,
        badge: "",
        name : "Unranked"
    },
    COPPER_V    : {
        id   : 1,
        badge: "",
        name : "Copper V"
    },
    COPPER_IV   : {
        id   : 2,
        badge: "",
        name : "Copper IV"
    },
    COPPER_III  : {
        id   : 3,
        badge: "",
        name : "Copper III"
    },
    COPPER_II   : {
        id   : 4,
        badge: "",
        name : "Copper II"
    },
    COPPER_I    : {
        id   : 5,
        badge: "",
        name : "Copper I"
    },
    BRONZE_V    : {
        id   : 6,
        badge: "",
        name : "Bronze V"
    },
    BRONZE_IV   : {
        id   : 7,
        badge: "",
        name : "Bronze IV"
    },
    BRONZE_III  : {
        id   : 8,
        badge: "",
        name : "Bronze III"
    },
    BRONZE_II   : {
        id   : 9,
        badge: "",
        name : "Bronze II"
    },
    BRONZE_I    : {
        id   : 10,
        badge: "",
        name : "Bronze I"
    },
    SILVER_V    : {
        id   : 11,
        badge: "",
        name : "Silver V"
    },
    SILVER_IV   : {
        id   : 12,
        badge: "",
        name : "Silver V"
    },
    SILVER_III  : {
        id   : 13,
        badge: "",
        name : "Silver III"
    },
    SILVER_II   : {
        id   : 14,
        badge: "",
        name : "Silver II"
    },
    SILVER_I    : {
        id   : 15,
        badge: "",
        name : "Silver I"
    },
    GOLD_III    : {
        id   : 16,
        badge: "",
        name : "Gold III"
    },
    GOLD_II     : {
        id   : 17,
        badge: "",
        name : "Gold II"
    },
    GOLD_I      : {
        id   : 18,
        badge: "",
        name : "Gold I"
    },
    PLATINUM_III: {
        id   : 19,
        badge: "",
        name : "Platinum III"
    },
    PLATINUM_II : {
        id   : 20,
        badge: "",
        name : "Platinum II"
    },
    PLATINUM_I  : {
        id   : 21,
        badge: "",
        name : "Platinum I"
    },
    DIAMOND     : {
        id   : 22,
        badge: "",
        name : "Diamond"
    },
    CHAMPIONS   : {
        id   : 23,
        badge: "",
        name : "Champions"
    }
};

const WEAPON_TYPES = {
    ASSAULT          : 1,
    SUB_MACHINE_GUN  : 2,
    LIGHT_MACHINE_GUN: 3,
    MARKSMAN_RIFLE   : 4,
    PISTOL           : 5,
    SHOTGUN          : 6,
    MACHINE_PISTOL   : 7,
    SHIELD           : 8,
    LAUNCHER         : 9,
    UTILITY          : 'B'
};
const WEAPONS      = {
    '417'              : {
        id  : 'B79310C0',
        name: '417',
        type: WEAPON_TYPES.MARKSMAN_RIFLE,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5djkS4YtAtOF0vBmg0T60x/ea2b1ff7e5367e66c99bc7ad7e95bfe3/417.png'
    },
    L85A2              : {
        id  : 'B79310C6',
        name: 'L85A2',
        type: WEAPON_TYPES.ASSAULT_RIFLE,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5vYQpoyk36foDzDq49jBd0/1479a2d7189e545555ceccecf6bd7cc3/L85A2.png'
    },
    AR33               : {
        id  : 'B79310D8',
        name: 'AR33',
        type: WEAPON_TYPES.ASSAULT_RIFLE,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/16U6xEvX8I5xQd9duveBLN/45d22960872cfa3fb6be9eb47fa0be4e/AR33.png'
    },
    G36C               : {
        id  : 'B79310DE',
        name: 'G36C',
        type: WEAPON_TYPES.ASSAULT_RIFLE,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2SZoqSXKoNPvZFIJsFsDE5/cb109885bf19c8697abf832f10cfd9a6/G36C.png'
    },
    R4_C               : {
        id  : 'B79310D2',
        name: 'R4-C',
        type: WEAPON_TYPES.ASSAULT_RIFLE,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/dQbqK9VxczuiscwBDSkT8/777a062f6095dde0371eab5200dcb451/R4-C.png'
    },
    '556XI'            : {
        id  : 'B79310D4',
        name: '556XI',
        type: WEAPON_TYPES.ASSAULT_RIFLE,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2dgpAeAWb3SkZV7rxDbVdQ/fa32323256b7c6f8a1977d3f71e7d4b2/556xi.png'
    },
    F2                 : {
        id  : '9B2CA14F',
        name: 'F2',
        type: WEAPON_TYPES.ASSAULT_RIFLE,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5HTvw1cJInVAGxOLXR0war/2f142437f5c0944fdcfcce8a03c37676/F2.png'
    },
    AK_12              : {
        id  : '106FE7150',
        name: 'AK-12',
        type: WEAPON_TYPES.ASSAULT_RIFLE,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7KAZZgnpqD07y47jVVXEuh/e0d7e67101f8f966aa6e1c59e835454f/AK-12.png'
    },
    AUG_A2             : {
        id  : '9B2CA14A',
        name: 'AUG A2',
        type: WEAPON_TYPES.ASSAULT_RIFLE,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1eO39zRe8XxJXH1KZiIWhM/02049ced0fbfa630833e8b0d3c03de07/AUG_A2.png'
    },
    '552_COMMANDO'     : {
        id  : 'B79310D3',
        name: '552 Commando',
        type: WEAPON_TYPES.ASSAULT_RIFLE,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1LT0N89YaOHvRwn3Pphr8K/02d4a3da9cda132d8201fd134f24fede/552_Commando.png'
    },
    '416_C_CARBINE'    : {
        id  : '106FE714D',
        name: '416-C CARBINE',
        type: WEAPON_TYPES.ASSAULT_RIFLE,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2I86r2a2QD8EHTZVZnxcxy/2913450ba952a16c29fac1f5ce58ba1a/416-C_Carbine.png'
    },
    C8_SFW             : {
        id  : '2CEABF00B',
        name: 'C8-SFW',
        type: WEAPON_TYPES.ASSAULT_RIFLE,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1itXpz2GnvdwwRyhX1SYa2/b58ff71048fa3bb5ed09d5d935dc90f4/C8-SFW.png'
    },
    MK17_CQB           : {
        id  : '2CEAAA814',
        name: 'MK17 CQB',
        type: WEAPON_TYPES.ASSAULT_RIFLE,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4LytczDQmu0M63gO2WtCCm/331ef3b1938352ae71d7c0bd23de3596/Mk17_CQB.png'
    },
    PARA_308           : {
        id  : '8ACBED9B8',
        name: 'PARA-308',
        type: WEAPON_TYPES.ASSAULT_RIFLE,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6ub8y2Cs5EYhVPfDWuVVkW/82ca131a41ee4ba2e0b75f2dc52ed9e3/PARA-308.png'
    },
    TYPE_89            : {
        id  : '9A25C4B26',
        name: 'Type-89',
        type: WEAPON_TYPES.ASSAULT_RIFLE,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7wLf325q9amF8bnVP1QGr0/2faff1a197f90dcded4472852a317d6b/Type-89.png'
    },
    C7E                : {
        id  : 'A3038BA91',
        name: 'C7E',
        type: WEAPON_TYPES.ASSAULT_RIFLE,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/63vTDjkXeKq7rOoSBhoJD4/08603e6603d564e0fa38af9ec86b7c1f/C7E.png'
    },
    M762               : {
        id  : 'E50FB57FB',
        name: 'M762',
        type: WEAPON_TYPES.ASSAULT_RIFLE,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4oWAgi7tgQP1Tq0HooRtye/9109a74921ee17610d4bd85a61582823/M762.png'
    },
    V308               : {
        id  : 'BE9996F2D',
        name: 'V308',
        type: WEAPON_TYPES.ASSAULT_RIFLE,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5YBZe76NUDO32eF66wW90g/488c315743d59230962a4d67618223d6/V308.png'
    },
    SPEAR_308          : {
        id  : 'BE99AD3BD',
        name: 'SPEAR .308',
        type: WEAPON_TYPES.ASSAULT_RIFLE,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/29LjYuJ4s6yA8k9Uv2u28C/89ec812559e7d74b7c269279f4c46d92/Spear_.308.png'
    },
    AR_15_50           : {
        id  : '1EFE80F033',
        name: 'AR-15.50',
        type: WEAPON_TYPES.ASSAULT_RIFLE,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4lGGEGZLkbldz114Wl5hCo/78a04c46654f80fae03e730bd79f3563/AR-15.50.png'
    },
    M4                 : {
        id  : '1EFE81B5D5',
        name: 'M4',
        type: WEAPON_TYPES.ASSAULT_RIFLE,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3jhi90ycmuc8mAiuSXFoCi/bcf354459e7becd6ede52ee97917c832/M4.png'
    },
    AK_74M             : {
        id  : '23D027C51C',
        name: 'AK-74M',
        type: WEAPON_TYPES.ASSAULT_RIFLE,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1j5HiQP8aFphTe65fqDdg0/23eecb5c603c5ba9f59fc6cbc5e4a531/AK-74M.png'
    },
    ARX200             : {
        id  : '2418EC4362',
        name: 'ARX200',
        type: WEAPON_TYPES.ASSAULT_RIFLE,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6VgkPBsr1WApI3rWc9kcM0/b18b8e25f3e951e8e722213f2ee59eb0/ARX200.png'
    },
    F90                : {
        id  : '2902BBFED9',
        name: 'F90',
        type: WEAPON_TYPES.ASSAULT_RIFLE,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/62tE3th2ThcGHlrcqWkmEX/d69c9de199542e25fa55f6d293f15671/r6-operator-weapon-ar-f90.png'
    },
    COMMANDO_9         : {
        id  : 'BE998B05E',
        name: 'Commando 9',
        type: WEAPON_TYPES.SUB_MACHINE_GUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4P9dpUph5w3MSsLNnW6be/04baba24990fcb75a9c0bcfd01b7d190/Commando_9.png'
    },
    FMG_9              : {
        id  : 'B79310D0',
        name: 'FMG-9',
        type: WEAPON_TYPES.SUB_MACHINE_GUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/0oneJNsBR06QjuowxwtHG/bd3b391c6eec2bd615f2ed83197a13ac/FMG-9.png'
    },
    MP5K               : {
        id  : 'B79310D1',
        name: 'MP5K',
        type: WEAPON_TYPES.SUB_MACHINE_GUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1pk8nOI7ybQjYOSI4fuzOm/fcd78df0f729be545e75c09aae85c360/MP5K.png'
    },
    UMP45              : {
        id  : 'B79310CF',
        name: 'UMP45',
        type: WEAPON_TYPES.SUB_MACHINE_GUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6X2EZPq2s8UKrP67uxz5FI/f0df4c57d5890c79311e4eb62d4470e7/UMP45.png'
    },
    MP5                : {
        id  : 'B79310C1',
        name: 'MP5',
        type: WEAPON_TYPES.SUB_MACHINE_GUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/60YbOvSBQt6ZUlu8YDXoZm/51ef3857b2986de700262432e8433714/MP5.png'
    },
    P90                : {
        id  : 'B79310C7',
        name: 'P90',
        type: WEAPON_TYPES.SUB_MACHINE_GUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4nGrNspOvII2oS3lEMkg5x/2398a493c298bc654f97c58767aa40f3/P90.png'
    },
    '9X19VSN'          : {
        id  : '106FE7151',
        name: '9x19VSN',
        type: WEAPON_TYPES.SUB_MACHINE_GUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/42gH96xTTYaTZsfXI3c0wL/a7edbf11af97091ee884b68e59fe6a4f/9x19VSN.png'
    },
    MP7                : {
        id  : '106FE714F',
        name: 'MP7',
        type: WEAPON_TYPES.SUB_MACHINE_GUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3a4dgTWGdiJqALhtRp4pKy/f2568d3de3cfe7e4b53179e8653cd2a2/MP7.png'
    },
    '9MM_C1'           : {
        id  : '2CEABC77A',
        name: '9mm C1',
        type: WEAPON_TYPES.SUB_MACHINE_GUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/60sbThKtOpNOwKu3OP0oGV/672fd9263f7786402a0d855273473a6f/9mm_C1.png'
    },
    MPX                : {
        id  : '5BD3A85FC',
        name: 'MPX',
        type: WEAPON_TYPES.SUB_MACHINE_GUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5HFewpAJ8npDDCKFnEadhL/d398bb477d6b56fe41bfdb5862ed31c0/MPX.png'
    },
    M12                : {
        id  : '8ACBEC5F2',
        name: 'M12',
        type: WEAPON_TYPES.SUB_MACHINE_GUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4FxqA5pa8JY9QQ7FEcjwPw/ffc779fcde5b970e7b95db6653637dab/M12.png'
    },
    MP5SD              : {
        id  : '99EB07773',
        name: 'MP5SD',
        type: WEAPON_TYPES.SUB_MACHINE_GUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5HaMldwFltBwiiyDDfkPpD/6de3aa9aaa17458e7f6186ba59b8deff/MP5SD.png'
    },
    PDW9               : {
        id  : 'A3038BA94',
        name: 'PDW9',
        type: WEAPON_TYPES.SUB_MACHINE_GUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4yYCuRnduMq35CTHfq6wwU/b7d49cdbcb05917e014c99efeaadd33b/PDW9.png'
    },
    VECTOR_45_ACP      : {
        id  : 'A3038BA92',
        name: 'Vector .45 ACP',
        type: WEAPON_TYPES.SUB_MACHINE_GUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7D1cDf13FqUhoLihzvuPln/068aa7e507155598449c58c0a49a90d6/Vector_.45_ACP.png'
    },
    T_5_SMG            : {
        id  : 'B699FDA28',
        name: 'T-5 SMG',
        type: WEAPON_TYPES.SUB_MACHINE_GUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1Ne8bvX8BdCALevWKMllQN/4baa3e79d323de134dd182e0272b9c3b/T-5_SMG.png'
    },
    SCORPION_EVO_3_A1  : {
        id  : 'E50FA8B51',
        name: 'Scorpion EVO 3 A1',
        type: WEAPON_TYPES.SUB_MACHINE_GUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6OdwaLWxcnFvhlVwWbP2Du/4f7e94bdb6d34d5c0aa7b7b147b4092e/Scorpion_EVO_3_A1.png'
    },
    K1A                : {
        id  : '128C51CBEF',
        name: 'K1A',
        type: WEAPON_TYPES.SUB_MACHINE_GUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5mUa2p8WXbiyD71qUI8sGk/ed753b6f0ae30ab5737486dfcf32ee9f/K1A.png'
    },
    MX4_STORM          : {
        id  : '172522E967',
        name: 'Mx4 Storm',
        type: WEAPON_TYPES.SUB_MACHINE_GUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4qRh1frGkQZxNyeKA4D6n1/20f89cd1d9953f06207b7340ea77fb17/Mx4_Storm.png'
    },
    AUG_A3             : {
        id  : '2418EC6F2C',
        name: 'AUG A3',
        type: WEAPON_TYPES.SUB_MACHINE_GUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3W9XJdMOgpHSw55HfwRSAv/cf8f220678d503e6c3e535c00b2e636a/AUG_A3.png'
    },
    P10_RONI           : {
        id  : '2902BB46BB',
        name: 'P10 RONI',
        type: WEAPON_TYPES.SUB_MACHINE_GUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7K86OBjL3zmYWt0ZvUcCLj/16a947334e39f27da177d787773593e4/r6-operator-weapon-smg-p10roni.png'
    },
    '6P41'             : {
        id  : 'B79310DA',
        name: '6P41',
        type: WEAPON_TYPES.LIGHT_MACHINE_GUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1wxS2HOCvoPAfnJEDFWjfw/7feddb98582ec37b500243d3f3e19eca/6P41.png'
    },
    G8A1               : {
        id  : '106FE714C',
        name: 'G8A1',
        type: WEAPON_TYPES.LIGHT_MACHINE_GUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4TIb7oeJesaROOOfTlCBaZ/ffd6a802f9a779a0d39b2122c49b3254/G8A1.png'
    },
    M249               : {
        id  : '8ACBE8797',
        name: 'M249',
        type: WEAPON_TYPES.LIGHT_MACHINE_GUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7z8UpVPS3P14OC1oL9dDIn/39c0c657f154218003fd4b2a9250b92f/M249.png'
    },
    T_95_LSW           : {
        id  : 'B699FDA29',
        name: 'T-95 LSW',
        type: WEAPON_TYPES.LIGHT_MACHINE_GUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/23HCxaNTRUHBlFAvCTMZQm/fe319cc164fac034a29e9b114ae7d5cb/T-95_LSW.png'
    },
    LMG_E              : {
        id  : 'E50FB57FC',
        name: 'LMG-E',
        type: WEAPON_TYPES.LIGHT_MACHINE_GUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7JVJIew6t3iKwgByvrFXyi/7ba44dfda28b525506633e453104a604/LMG-E.png'
    },
    ALDA_5_56          : {
        id  : '172522E96A',
        name: 'ALDA 5.56',
        type: WEAPON_TYPES.LIGHT_MACHINE_GUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/39yB6TFl9ph6Rb4bDV4lqK/7f9b3abf8dff19bacc026a7212849ca4/ALDA_5.56.png'
    },
    M249_SAW           : {
        id  : '2902BB7B8C',
        name: 'M249 SAW',
        type: WEAPON_TYPES.LIGHT_MACHINE_GUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7z8UpVPS3P14OC1oL9dDIn/39c0c657f154218003fd4b2a9250b92f/M249.png'
    },
    OTS_03             : {
        id  : '106FE7152',
        name: 'OTs-03',
        type: WEAPON_TYPES.MARKSMAN_RIFLE,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4fXznwDtLt61VCF8QIF4N3/34e2e6d6c33d4c504c945bdd13c322f6/OTs-03.png'
    },
    CAMRS              : {
        id  : '2CEAAB41D',
        name: 'CAMRS',
        type: WEAPON_TYPES.MARKSMAN_RIFLE,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4dBzqVVmnpv1DZi91LAnEN/e374b4ea289fc992280b943cdbb94d60/CAMRS.png'
    },
    SR_25              : {
        id  : '2CEABFB43',
        name: 'SR-25',
        type: WEAPON_TYPES.MARKSMAN_RIFLE,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3H3sICdj6BK8LhtQPRd2aJ/26826ebba73e0e5fd503256d069f3256/SR-25.png'
    },
    MK_14_EBR          : {
        id  : '128C5259FA',
        name: 'Mk 14 EBR',
        type: WEAPON_TYPES.MARKSMAN_RIFLE,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6KIMqp5dA95z1RI3PrG9jv/eb939638169811a3fa858a44e6e5d97e/Mk_14_EBR.png'
    },
    CSRX_300           : {
        id  : '33E28FCCA0',
        name: 'CSRX 300',
        type: WEAPON_TYPES.MARKSMAN_RIFLE,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7tUB9ZNXJhdN6ejAkCEeFQ/99691bcc19f641cf872925905d08a539/CSRX_300.png'
    },
    P226_MK_25         : {
        id  : 'B79310CA',
        name: 'P226 MK 25',
        type: WEAPON_TYPES.PISTOL,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/RTQvPQcywlRwUS1FjIKCX/6fc72fee2191c2e723276bc10ae4114e/P226_Mk_25.png'
    },
    M45_MEUSOC         : {
        id  : 'B79310D7',
        name: 'M45 MEUSOC',
        type: WEAPON_TYPES.PISTOL,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3u5cecgWYl3WuJK50mKEGd/a4a0eb15c710edfc0d29e98c2ee7ea33/M45_MEUSOC.png'
    },
    '5_7_USG'          : {
        id  : '9B2CA14C',
        name: '5.7 USG',
        type: WEAPON_TYPES.PISTOL,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/tkYcSAJSe5yGkeUhzZqBO/e81feb86df4a7eb6951052bec26b6ed7/5.7_USG.png'
    },
    P9                 : {
        id  : 'B79310D9',
        name: 'P9',
        type: WEAPON_TYPES.PISTOL,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6Fd1cl17KA0CtgodEiiY6v/d0f145ea72f2aacbd04260ba7d8f1c74/P9.png'
    },
    LFP586             : {
        id  : 'B79310C8',
        name: 'LFP586',
        type: WEAPON_TYPES.PISTOL,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1zc7UtdBfCZakwbiYqBvSz/1fd3f1584de38ca7c9315d498f094276/LFP586.png'
    },
    GSH_18             : {
        id  : '106FE7153',
        name: 'GSH-18',
        type: WEAPON_TYPES.PISTOL,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5s5Q33j3MNcXf9lwfxfd7m/4eb3a6af1d431481b6ddcec44fbc7602/GSh-18.png'
    },
    PMM                : {
        id  : '9B2CB308',
        name: 'PMM',
        type: WEAPON_TYPES.PISTOL,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3y4LIwwm8YNQHAv8oOkWCK/a2375901cee34e68fa39c976d85de8aa/PMM.png'
    },
    P12                : {
        id  : 'B79310CB',
        name: 'P12',
        type: WEAPON_TYPES.PISTOL,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2mpM7rah7rwEW0bViIirUC/ed9caa4db58421519fa4db390b1aa164/P12.png'
    },
    MK1_9MM            : {
        id  : '37ACC03F7',
        name: 'MK1 9mm',
        type: WEAPON_TYPES.PISTOL,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3tWoNeF3jQYs3w4EOydQYs/434409c96693df1fd3e969d778e70795/Mk1_9mm_BI.png'
    },
    D_50               : {
        id  : '53AEC9396',
        name: 'D-50',
        type: WEAPON_TYPES.PISTOL,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6mMQRDsrComRFa7bC6cNkG/8cd17e545e3d28dcc11a040d000cfa16/D-50.png'
    },
    PRB92              : {
        id  : '8ACBEC355',
        name: 'PRB92',
        type: WEAPON_TYPES.PISTOL,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/dl28J1HsE7mzhj66pmd5D/b8d8fc48d2dde13154047de94abbd8ca/PRB92.png'
    },
    P229               : {
        id  : '959B5DBD4',
        name: 'P229',
        type: WEAPON_TYPES.PISTOL,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/76ja0RxqzHW9PpvWgpG7Sk/cb753b50b20fe67deaef54d8b2a46b54/P229.png'
    },
    USP40              : {
        id  : 'A3038BA93',
        name: 'USP40',
        type: WEAPON_TYPES.PISTOL,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7FxemzWRtlpAhK9MyKp1Gp/817cc25b6b7c3575dc1ba53a6a8170a9/USP40.png'
    },
    Q_929              : {
        id  : 'B699FDA2A',
        name: 'Q-929',
        type: WEAPON_TYPES.PISTOL,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2fRVszR5yGDHbV0AL8muso/0838dac90b66aa810daa49d36382fb64/Q-929.png'
    },
    RG15               : {
        id  : 'E50FB57FD',
        name: 'RG15',
        type: WEAPON_TYPES.PISTOL,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2LNSsp7B7wUnnPUweir7Jm/9f66d53be7a63a17a55253a0bea6eec1/RG15.png'
    },
    BAILIFF_410        : {
        id  : '172522E96B',
        name: 'Bailiff 410',
        type: WEAPON_TYPES.PISTOL,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/N8FLbo4fsNyBe8msKgRhT/8f403dc0b58087bcafab786dd95ba33f/Bailiff_410.png'
    },
    KERATOS_357        : {
        id  : '199D70994A',
        name: 'Keratos .357',
        type: WEAPON_TYPES.PISTOL,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4niSMDCeiryoMBXJZq60Vv/48339331d05e289868cf4050c49b1b2b/D-40.png'
    },
    '1911_TACOPS'      : {
        id  : '1EFE81B5D4',
        name: '1911 TACOPS',
        type: WEAPON_TYPES.PISTOL,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/189UukZ6fVnvQR6LJtLYry/6eec29603d5b7b0ca8cab6ac0ef083ac/1911_TACOPS.png'
    },
    P_10C              : {
        id  : '1EFE80F702',
        name: 'P-10C',
        type: WEAPON_TYPES.PISTOL,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2l4qwB50zSFhFZVYRLNwqg/20df8114f69f96f2adc54779ccc5bbaa/P-10C.png'
    },
    _44_MAG_SEMI_AUTO  : {
        id  : '2418EC5F35',
        name: '.44 Mag Semi-Auto',
        type: WEAPON_TYPES.PISTOL,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6W3Jz0YcQzbZ6BOPr7VVel/4c67f342964132a652f7d5821e887050/.44_Mag_Semi-Auto.png'
    },
    SDP_9MM            : {
        id  : '2A69013364',
        name: 'SDP 9mm',
        type: WEAPON_TYPES.PISTOL,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/Tgsdyz3XEqmgUYi9aZZgb/6755f4da7af7a7179ffab92acf8d477e/SDP_9mm.png'
    },
    M590A1             : {
        id  : '9B2CA14E',
        name: 'M590A1',
        type: WEAPON_TYPES.SHOTGUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2zRHmgqENNiZqXQxC9Rsbj/e6542407c642f9b7c5a4546afb6db30a/M590A1.png'
    },
    M1014              : {
        id  : 'B79310CC',
        name: 'M1014',
        type: WEAPON_TYPES.SHOTGUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2pUiVbwNnQnDTesmWXktqW/f27c1fab9a354bb89cbe309a688f5e02/M1014.png'
    },
    SG_CQB             : {
        id  : '9B2CA14B',
        name: 'SG-CQB',
        type: WEAPON_TYPES.SHOTGUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5JoL3b36Fsztt9Q2XYmrbJ/dacec96948d3f8fe92914a69b9aac593/SG-CQB.png'
    },
    SASG_12            : {
        id  : '9B2CB313',
        name: 'SASG-12',
        type: WEAPON_TYPES.SHOTGUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2Q6mL4CbifmIgifV2yV3Hi/2bb2b323f055b03a2c1ba516c262c24e/SASG-12.png'
    },
    M870               : {
        id  : '106FE714E',
        name: 'M870',
        type: WEAPON_TYPES.SHOTGUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2rkU6g4Rlg0e0U4rczWGTV/a51589a54c43f476d8eb984c0ea881e9/M870.png'
    },
    SUPER_90           : {
        id  : '2CEABFF54',
        name: 'Super 90',
        type: WEAPON_TYPES.SHOTGUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1TLWSu0xHJlAsfEfafeC9X/f9647e70a18962bf1627095c8b46832e/Super_90.png'
    },
    SPAS_12            : {
        id  : '2CEABF739',
        name: 'SPAS-12',
        type: WEAPON_TYPES.SHOTGUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7Hp6Fbss6uI59OT4nZNB6e/a4d09954803cb2580353cfa03e8c778b/SPAS-12.png'
    },
    SPAS_15            : {
        id  : '8ACBEBD23',
        name: 'SPAS-15',
        type: WEAPON_TYPES.SHOTGUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/CyofBgipHq4RTafvPFWd4/bc3d0ecc871b70e57735855f852efacf/SPAS-15.png'
    },
    SUPERNOVA          : {
        id  : '959B746E6',
        name: 'Supernova',
        type: WEAPON_TYPES.SHOTGUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2tpjCRFLcc3hogjJGbKDsi/5ad0ab63b7245022aca5c1c1fb42d473/SuperNova.png'
    },
    ITA12L             : {
        id  : 'A3038B5A5',
        name: 'ITA12L',
        type: WEAPON_TYPES.SHOTGUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4Y6ziRzm9RiPii83fm8BV1/1f472744d2c2dec8d9206f4d8733d92c/ITA12L.png'
    },
    ITA12S             : {
        id  : 'A3038BA90',
        name: 'ITA12S',
        type: WEAPON_TYPES.SHOTGUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5G4DroaSdqHzJWCe7qqbHZ/5dd2e03f853182c78a1e7fcbc642f0cf/ITA12S.png'
    },
    SIX12              : {
        id  : 'B699FDA2B',
        name: 'SIX12',
        type: WEAPON_TYPES.SHOTGUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2v6MwsHwjOZ5Muid53lyfN/e5f1c4997db93abfe3ac356fce23376c/SIX12.png'
    },
    SIX12_SD           : {
        id  : 'B699FDA2C',
        name: 'SIX12 SD',
        type: WEAPON_TYPES.SHOTGUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1GTua079Xbtkpjhx96sRsW/079ed1a71a0d12b5e48e1b0d40b87110/SIX12_SD.png'
    },
    FO_12              : {
        id  : 'E50FB57FA',
        name: 'FO-12',
        type: WEAPON_TYPES.SHOTGUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4TDWnhbgvLkc6HBWDJp2ST/f50cbd83d6d295ab59f17f7e21d713bc/FO-12.png'
    },
    BOSG_12_2          : {
        id  : '128C51DEC8',
        name: 'BOSG.12.2',
        type: WEAPON_TYPES.SHOTGUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2ZjVndetsX8WEn5ZfyUQa0/e3a781be7eab22876d25f748e8fd0f5a/BOSG.12.2.png'
    },
    ACS12              : {
        id  : 'BE99AD3BE',
        name: 'ACS12',
        type: WEAPON_TYPES.SHOTGUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/13z63kT1NLzn1U99o7WC4T/8655d3200f24b87246c36f2622603457/ACS12_PB.png'
    },
    TCSG12             : {
        id  : '2418EC7D3A',
        name: 'TCSG12',
        type: WEAPON_TYPES.SHOTGUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2NDbY7BTBJ9R09LUilTlRf/3728337cd3ba14ed6ab9de0c22e879af/TCSG12.png'
    },
    SUPER_SHORTY       : {
        id  : '1EFE80F701',
        name: 'Super Shorty',
        type: WEAPON_TYPES.SHOTGUN,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7Dq8LDmIxAveRqXM17orUW/cbd96b47cd8ca74a7827b16ef73fe7cf/r6-operator-weapon-sa-supershorty.png'
    },
    SMG_11             : {
        id  : 'B79310CE',
        name: 'SMG-11',
        type: WEAPON_TYPES.MACHINE_PISTOL,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3WExw7Kepz9uAiWAbWW457/875fc631a3cf9fcc2849d9db2989cbcd/SMG-11.png'
    },
    BEARING_9          : {
        id  : '99EB0571E',
        name: 'Bearing 9',
        type: WEAPON_TYPES.MACHINE_PISTOL,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4mdftEOh5Vu9KhhpgKLKrT/abedcc75868774018295ec2a08a7b3de/Bearing_9.png'
    },
    C75_AUTO           : {
        id  : '128C51DEC6',
        name: 'C75 Auto',
        type: WEAPON_TYPES.MACHINE_PISTOL,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3wUuefwPjU705mZkTdJ9UH/8ccb11884cfa34c176ac5500af139177/C75_Auto.png'
    },
    SMG_12             : {
        id  : '128C51CBED',
        name: 'SMG-12',
        type: WEAPON_TYPES.MACHINE_PISTOL,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/EwJgB7KdgOb6dDm7ro33u/b73f0890f992c1a365210f08efcc6db5/SMG-12.png'
    },
    SPSMG9             : {
        id  : '1EFE81B5D6',
        name: 'SPSMG9',
        type: WEAPON_TYPES.MACHINE_PISTOL,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5EtwSgylXckBNg4n6gDR9J/bc6fc6c5c12ae11da59aee95828ebd76/SPSMG9.png'
    },
    G52_TACTICAL_SHIELD: {
        id  : '',
        name: 'G52-Tactical Shield',
        type: WEAPON_TYPES.SHIELD,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7qmWjGZayvK4t6E80Gvu7g/8b789d6d639744dce100c2cfb9709e6a/G52-Tactical_Shield.png'
    },
    LE_ROC             : {
        id  : '',
        name: 'Le Roc',
        type: WEAPON_TYPES.SHIELD,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4XLgMhsaiz20Gd5JJp80lW/40af7e3fafc77831bd761a02af83927c/Extendable-Shield.png'
    },
    BALLISTIC_SHIELD   : {
        id  : '',
        name: 'Ballistic Shield',
        type: WEAPON_TYPES.SHIELD,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2C21gwsjOka5Rwp8qSM5hA/a38937032260bce4f690fb9bb8adf4c0/Ballistic_Shield.png'
    },
    CCE_SHIELD         : {
        id  : '',
        name: 'CCE Shield',
        type: WEAPON_TYPES.SHIELD,
        icon: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5mmGgrYdJJHw2moBIEW9An/64e9727d959d7afdbb4fb06e2f75574a/CCE_Shield.png'
    }
};
const ROLES        = {
    ATTACKER: 'Attacker',
    DEFENDER: 'Defender',
    RECRUIT : 'Recruit'
};
const CTUS         = {
    SAS               : 'sas',
    FBI_SWAT          : 'FBI SWAT',
    GIGN              : 'GIGN',
    SPETSNAZ          : 'Spetsnaz',
    GSG_9             : 'GSG 9',
    JTF2              : 'JTF2',
    NAVY_SEALS        : 'Navy SEALs',
    BOPE              : 'BOPE',
    SAT               : 'SAT',
    GEO               : 'GEO',
    SDU               : 'SDU',
    GROM              : 'GROM',
    '707TH_SMG'       : '707th SMB',
    CBRN              : 'CBRN',
    GIS               : 'GIS',
    MPS               : 'MPS',
    DELTA_FORCE       : '1st SFOD-D',
    GIGR              : 'GIGR',
    SASR              : 'SASR',
    SECRET_SERVICE    : 'U.S Secret Service',
    JAEGERCORPS       : 'Jægerkorpset',
    FUERZAS_ESPECIALES: 'Furerzas Especiales',
    APCA              : 'APCA',
    NIGHTHAVEN        : 'NIGHTHAVEN',
    UNAFFILIATED      : 'UNAFFILIATED',
    REU               : 'REU',
    INKABA_TASK_FORCE : 'Inkaba Task Force'
};
const OPERATORS    = {
    RECRUIT_SAS     : {
        id     : 'recruitsas',
        name   : 'Recruit SAS',
        role   : ROLES.RECRUIT,
        ctu    : CTUS.SAS,
        icon   : '',
        index  : '1:1',
        weapons: [],
        stats  : []
    },
    RECRUIT_FBI     : {
        id     : 'recruitfbi',
        name   : 'Recruit FBI',
        role   : ROLES.RECRUIT,
        ctu    : CTUS.FBI_SWAT,
        icon   : '',
        index  : '1:2',
        weapons: [],
        stats  : []
    },
    RECRUIT_GIGN    : {
        id     : 'recruitgign',
        name   : 'Recruit GIGN',
        role   : ROLES.RECRUIT,
        ctu    : CTUS.GIGN,
        icon   : '',
        index  : '1:3',
        weapons: [],
        stats  : []
    },
    RECRUIT_SPETSNAZ: {
        id     : 'recruitspetsnaz',
        name   : 'Recruit Spetsnaz',
        role   : ROLES.RECRUIT,
        ctu    : CTUS.SPETSNAZ,
        icon   : '',
        index  : '1:4',
        weapons: [],
        stats  : []
    },
    RECRUITGSG      : {
        id     : 'recruitgsg',
        name   : 'Recruit GSG 9',
        role   : ROLES.RECRUIT,
        ctu    : CTUS.GSG_9,
        icon   : '',
        index  : '1:5',
        weapons: [],
        stats  : []
    },
    SMOKE           : {
        id     : 'smoke',
        name   : 'Smoke',
        role   : ROLES.DEFENDER,
        ctu    : CTUS.SAS,
        icon   : '',
        index  : '2:1',
        weapons: [],
        stats  : [
            {
                id   : 'smoke_poisongaskill',
                name : 'poision_gas_kills',
                label: 'Poison Gas Kills'
            }
        ]
    },
    MUTE            : {
        id     : 'mute',
        name   : 'Mute',
        role   : ROLES.DEFENDER,
        ctu    : CTUS.SAS,
        icon   : '',
        index  : '3:1',
        weapons: [],
        stats  : [
            {
                id   : 'mute_gadgetjammed',
                name : 'utility_jammed',
                label: 'Gadgets Jammed'
            },
            {
                id   : 'mute_jammerdeployed',
                name : 'jammers_deployed',
                label: 'Jammers Deployed'
            }
        ]
    },
    SLEDGE          : {
        id     : 'sledge',
        name   : 'Sledge',
        role   : ROLES.ATTACKER,
        ctu    : CTUS.SAS,
        icon   : '',
        index  : '4:1',
        weapons: [],
        stats  : [
            {
                id   : 'sledge_hammerkill',
                name : 'sledgehammer_kills',
                label: 'Kills with Breaching Hammer'
            },
            {
                id   : 'sledge_hammerhole',
                name : 'sledgehammer_breaches',
                label: 'Destruction by Breaching Hammer'
            }
        ]
    },
    THATCHER        : {
        id     : 'thatcher',
        name   : 'Thatcher',
        role   : ROLES.ATTACKER,
        ctu    : CTUS.SAS,
        icon   : '',
        index  : '5:1',
        weapons: [],
        stats  : [
            {
                id   : 'thatcher_gadgetdestroywithemp',
                name : 'emp_destroyed_utility',
                label: 'Gadgets Destroyed by EMP'
            }
        ]
    },
    CASTLE          : {
        id     : 'castle',
        name   : 'Castle',
        role   : ROLES.DEFENDER,
        ctu    : CTUS.FBI_SWAT,
        icon   : '',
        index  : '2:2',
        weapons: [],
        stats  : [
            {
                id   : 'castle_kevlarbarricadedeployed',
                name : 'roamers_locked_out_from_site',
                label: 'Armor Panels Deployed'
            }
        ]
    },
    PULSE           : {
        id     : 'pulse',
        name   : 'Pulse',
        role   : ROLES.DEFENDER,
        ctu    : CTUS.FBI_SWAT,
        icon   : '',
        index  : '4:2',
        weapons: [],
        stats  : [
            {
                id   : 'pulse_heartbeatassist',
                name : 'scanner_assists',
                label: 'Heartbeat Scanner Assists'
            },
            {
                id   : 'pulse_heartbeatspot',
                name : 'heartbeats_spotted',
                label: 'Heartbeats Spotted'
            }
        ]
    },
    ASH             : {
        id     : 'ash',
        name   : 'Ash',
        role   : ROLES.ATTACKER,
        ctu    : CTUS.FBI_SWAT,
        icon   : '',
        index  : '3:2',
        weapons: [],
        stats  : [
            {
                id   : 'ash_bonfirekill',
                name : 'breaching_round_kills',
                label: 'Kills with Breaching Round'
            },
            {
                id   : 'ash_bonfirewallbreached',
                name : 'walls_breached',
                label: 'Destruction by Breaching Round'
            }
        ]
    },
    THERMITE        : {
        id     : 'thermite',
        name   : 'Thermite',
        role   : ROLES.ATTACKER,
        ctu    : CTUS.FBI_SWAT,
        icon   : '',
        index  : '5:2',
        weapons: [],
        stats  : [
            {
                id   : 'thermite_chargekill',
                name : 'charges_kills',
                label: 'Kills with Thermal Charge'
            },
            {
                id   : 'thermite_reinforcementbreached',
                name : 'reinforcements_breached',
                label: 'Reinforcements Breached by Thermal Charge'
            },
            {
                id   : 'thermite_chargedeployed',
                name : 'charges_deployed',
                label: 'Thermal Charges Deployed'
            }
        ]
    },
    DOC             : {
        id     : 'doc',
        name   : 'Doc',
        role   : ROLES.DEFENDER,
        ctu    : CTUS.GIGN,
        icon   : '',
        index  : '2:3',
        weapons: [],
        stats  : [
            {
                id   : 'doc_teammaterevive',
                name : 'teammates_saved',
                label: 'Teammates Revived'
            },
            {
                id   : 'doc_selfrevive',
                name : 'failed_spawnpeak_attempts',
                label: 'Self Revives'
            },
            {
                id   : 'doc_hostagerevive',
                name : 'hostages_saved',
                label: 'Hostages Revived'
            }
        ]
    },
    ROOK            : {
        id     : 'rook',
        name   : 'Rook',
        role   : ROLES.DEFENDER,
        ctu    : CTUS.GIGN,
        icon   : '',
        index  : '3:3',
        weapons: [],
        stats  : [
            {
                id   : 'rook_armortakenteammate',
                name : 'sweaters_grabbed_teammates',
                label: 'Armor Plate Taken by Teammates'
            },
            {
                id   : 'rook_armortakenourself',
                name : 'sweaters_grabbed_you',
                label: 'Armors Taken for Self'
            },
            {
                id   : 'rook_armorboxdeployed',
                name : 'sweaters_deployed',
                label: 'Armor Crates Deployed'
            }
        ]
    },
    TWITCH          : {
        id     : 'twitch',
        name   : 'Twitch',
        role   : ROLES.ATTACKER,
        ctu    : CTUS.GIGN,
        icon   : '',
        index  : '4:3',
        weapons: [],
        stats  : [
            {
                id   : 'twitch_shockdronekill',
                name : 'drone_kills',
                label: 'Kills with Shock Drone'
            },
            {
                id   : 'twitch_gadgetdestroybyshockdrone',
                name : 'utility_destroyed',
                label: 'Gadgets Destroyed by Shock Drone'
            }
        ]
    },
    MONTAGNE        : {
        id     : 'montagne',
        name   : 'Montagne',
        role   : ROLES.ATTACKER,
        ctu    : CTUS.GIGN,
        icon   : '',
        index  : '5:3',
        weapons: [],
        stats  : [
            {
                id   : 'montagne_shieldblockdamage',
                name : 'bullets_blocked_le_roc',
                label: 'Bullets Blocked by Extended Shield'
            }
        ]
    },
    KAPKAN          : {
        id     : 'kapkan',
        name   : 'Kapkan',
        role   : ROLES.DEFENDER,
        ctu    : CTUS.SPETSNAZ,
        icon   : '',
        index  : '4:4',
        weapons: [],
        stats  : [
            {
                id   : 'kapkan_boobytrapkill',
                name : 'edds_kills',
                label: 'EDD Kills'
            },
            {
                id   : 'kapkan_boobytrapdeployed',
                name : 'edds_deployed',
                label: 'EDD Deployed'
            }
        ]
    },
    TACHANKA        : {
        id     : 'tachanka',
        name   : 'Tachanka',
        role   : ROLES.DEFENDER,
        ctu    : CTUS.SPETSNAZ,
        icon   : '',
        index  : '5:4',
        weapons: [],
        stats  : [
            {
                id   : 'tachanka_turretkill',
                name : 'turrent_kills',
                label: 'Mounted LMG Kills'
            },
            {
                id   : 'tachanka_turretdeployed',
                name : 'turrets_deployed',
                label: 'Mounted LMG Deployed'
            }
        ]
    },
    GLAZ            : {
        id     : 'glaz',
        name   : 'Glaz',
        role   : ROLES.ATTACKER,
        ctu    : CTUS.SPETSNAZ,
        icon   : '',
        index  : '2:4',
        weapons: [],
        stats  : [
            {
                id   : 'glaz_sniperkill',
                name : 'sniper_kills',
                label: 'Sniper Kills'
            },
            {
                id   : 'glaz_sniperpenetrationkill',
                name : 'penetration_kills',
                label: 'Penetration Sniper Kills'
            }
        ]
    },
    FUZE            : {
        id     : 'fuze',
        name   : 'Fuze',
        role   : ROLES.ATTACKER,
        ctu    : CTUS.SPETSNAZ,
        icon   : '',
        index  : '3:4',
        weapons: [],
        stats  : [
            {
                id   : 'fuze_clusterchargekill',
                name : 'cluster_charge_kills',
                label: 'Cluster Charge Kills'
            }
        ]
    },
    JAGER           : {
        id     : 'jager',
        name   : 'Jager',
        role   : ROLES.DEFENDER,
        ctu    : CTUS.GSG_9,
        icon   : '',
        index  : '4:5',
        weapons: [],
        stats  : [
            {
                id   : 'jager_gadgetdestroybycatcher',
                name : 'utility_caught',
                label: 'Gadget Destroyed by ADS'
            }
        ]
    },
    BANDIT          : {
        id     : 'bandit',
        name   : 'Bandit',
        role   : ROLES.DEFENDER,
        ctu    : CTUS.GSG_9,
        icon   : '',
        index  : '5:5',
        weapons: [],
        stats  : [
            {
                id   : 'bandit_batterykill',
                name : 'battery_kills',
                label: 'Shock Wire Kills'
            }
        ]
    },
    BLITZ           : {
        id     : 'blitz',
        name   : 'Blitz',
        role   : ROLES.ATTACKER,
        ctu    : CTUS.GSG_9,
        icon   : '',
        index  : '2:5',
        weapons: [],
        stats  : [
            {
                id   : 'blitz_flashedenemy',
                name : 'flashed_enemies',
                label: 'Enemies Blinded by Flash Shield'
            },
            {
                id   : 'blitz_flashfollowupkills',
                name : 'flash_kills',
                label: 'Post-flash follow up kills'
            },
            {
                id   : 'blitz_flashshieldassist',
                name : 'flash_assisted_kills',
                label: 'Post-flash assisted kills'
            }
        ]
    },
    IQ              : {
        id     : 'iq',
        name   : 'Iq',
        role   : ROLES.ATTACKER,
        ctu    : CTUS.GSG_9,
        icon   : '',
        index  : '3:5',
        weapons: [],
        stats  : [
            {
                id   : 'iq_gadgetspotbyef',
                name : 'utility_discovered',
                label: 'Gadgets Spotted by Electronics Detector'
            }
        ]
    },
    FROST           : {
        id     : 'frost',
        name   : 'Frost',
        role   : ROLES.DEFENDER,
        ctu    : CTUS.JTF2,
        icon   : '',
        index  : '3:6',
        weapons: [],
        stats  : [
            {
                id   : 'frost_dbno',
                name : 'frost_mat_hits',
                label: 'Enemies Caught in Welcome Mats'
            }
        ]
    },
    BUCK            : {
        id     : 'buck',
        name   : 'Buck',
        role   : ROLES.ATTACKER,
        ctu    : CTUS.JTF2,
        icon   : '',
        index  : '2:6',
        weapons: [],
        stats  : [
            {
                id   : 'buck_kill',
                name : 'skeleton_key_kills',
                label: 'Kills with the Skeleton Key'
            }
        ]
    },
    VALKYRIE        : {
        id     : 'valkyrie',
        name   : 'Valkyrie',
        role   : ROLES.DEFENDER,
        ctu    : CTUS.NAVY_SEALS,
        icon   : '',
        index  : '3:7',
        weapons: [],
        stats  : [
            {
                id   : 'valkyrie_camdeployed',
                name : 'black_eyes_deployed',
                label: 'Black Eye Cameras Deployed'
            }
        ]
    },
    BLACKBEARD      : {
        id     : 'blackbeard',
        name   : 'Blackbeard',
        role   : ROLES.ATTACKER,
        ctu    : CTUS.NAVY_SEALS,
        icon   : '',
        index  : '2:7',
        weapons: [],
        stats  : [
            {
                id   : 'blackbeard_gunshieldblockdamage',
                name : 'bullets_stopped_by_shield',
                label: 'Bullets Stopped by Shield'
            }
        ]
    },
    CAVEIRA         : {
        id     : 'caveira',
        name   : 'Caveira',
        role   : ROLES.DEFENDER,
        ctu    : CTUS.BOPE,
        icon   : '',
        index  : '3:8',
        weapons: [],
        stats  : [
            {
                id   : 'caveira_interrogations',
                name : 'interrogations',
                label: 'Successful Interrogations Performed'
            }
        ]
    },
    CAPITAO         : {
        id     : 'capitao',
        name   : 'Capitao',
        role   : ROLES.ATTACKER,
        ctu    : CTUS.BOPE,
        icon   : '',
        index  : '2:8',
        weapons: [],
        stats  : [
            {
                id   : 'capitao_lethaldartkills',
                name : 'firebolt_kills',
                label: 'Kills with Asphyxiating Bolts'
            }
        ]
    },
    ECHO            : {
        id     : 'echo',
        name   : 'Echo',
        role   : ROLES.DEFENDER,
        ctu    : CTUS.SAT,
        icon   : '',
        index  : '3:9',
        weapons: [],
        stats  : [
            {
                id   : 'echo_enemy_sonicburst_affected',
                name : 'attackers_stunned',
                label: 'Enemies Disoriented by Yokai'
            }
        ]
    },
    HIBANA          : {
        id     : 'hibana',
        name   : 'Hibana',
        role   : ROLES.ATTACKER,
        ctu    : CTUS.SAT,
        icon   : '',
        index  : '2:9',
        weapons: [],
        stats  : [
            {
                id   : 'hibana_detonate_projectile',
                name : 'xkairos_detonated',
                label: 'X-KAIROS Pellets Detonated'
            }
        ]
    },
    MIRA            : {
        id     : 'mira',
        name   : 'Mira',
        role   : ROLES.DEFENDER,
        ctu    : CTUS.GEO,
        icon   : '',
        index  : '3:A',
        weapons: [],
        stats  : [
            {
                id   : 'black_mirror_gadget_deployed',
                name : 'black_mirrors_deployed',
                label: 'Black Mirror Deployed'
            }
        ]
    },
    JACKAL          : {
        id     : 'jackal',
        name   : 'Jackal',
        role   : ROLES.ATTACKER,
        ctu    : CTUS.GEO,
        icon   : '',
        index  : '2:A',
        weapons: [],
        stats  : [
            {
                id   : 'cazador_assist_kill',
                name : 'kills_assisted_by_eyenox',
                label: 'Eyenox Tracking Assist'
            }
        ]
    },
    LESION          : {
        id     : 'lesion',
        name   : 'Lesion',
        role   : ROLES.DEFENDER,
        ctu    : CTUS.SDU,
        icon   : '',
        index  : '3:B',
        weapons: [],
        stats  : [
            {
                id   : 'caltrop_enemy_affected',
                name : 'enemies_poisoned',
                label: 'Enemies Poisoned by Gu Mine'
            }
        ]
    },
    YING            : {
        id     : 'ying',
        name   : 'Ying',
        role   : ROLES.ATTACKER,
        ctu    : CTUS.SDU,
        icon   : '',
        index  : '2:B',
        weapons: [],
        stats  : [
            {
                id   : 'dazzler_gadget_detonate',
                name : 'candelas_detonated',
                label: 'Candela Devices Detonated'
            }
        ]
    },
    ELA             : {
        id     : 'ela',
        name   : 'Ela',
        role   : ROLES.DEFENDER,
        ctu    : CTUS.GROM,
        icon   : '',
        index  : '2:C',
        weapons: [],
        stats  : [
            {
                id   : 'concussionmine_detonate',
                name : 'grzmot_mines_detonated',
                label: 'Grzmot Mines Detonated'
            }
        ]
    },
    ZOFIA           : {
        id     : 'zofia',
        name   : 'Zofia',
        role   : ROLES.ATTACKER,
        ctu    : CTUS.GROM,
        icon   : '',
        index  : '3:C',
        weapons: [],
        stats  : [
            {
                id   : 'concussiongrenade_detonate',
                name : 'concussion_grenades_detonated',
                label: 'Concussion Grenades Detonated'
            }
        ]
    },
    VIGIL           : {
        id     : 'vigil',
        name   : 'Vigil',
        role   : ROLES.DEFENDER,
        ctu    : CTUS['707TH_SMG'],
        icon   : '',
        index  : '3:D',
        weapons: [],
        stats  : [
            {
                id   : 'attackerdrone_diminishedrealitymode',
                name : 'drones_deceived',
                label: 'Drones Deceived'
            }
        ]
    },
    DOKKAEBI        : {
        id     : 'dokkaebi',
        name   : 'Dokkaebi',
        role   : ROLES.ATTACKER,
        ctu    : CTUS['707TH_SMG'],
        icon   : '',
        index  : '2:D',
        weapons: [],
        stats  : [
            {
                id   : 'phoneshacked',
                name : 'phones_hacked',
                label: 'Phones Hacked'
            }
        ]
    },
    LION            : {
        id     : 'lion',
        name   : 'Lion',
        role   : ROLES.ATTACKER,
        ctu    : CTUS.CBRN,
        icon   : '',
        index  : '3:E',
        weapons: [],
        stats  : [
            {
                id   : 'tagger_tagdevice_spot',
                name : 'enemies_detected_by_cancer',
                label: 'Enemies Detected by EE-ONE-D'
            }
        ]
    },
    FINKA           : {
        id     : 'finka',
        name   : 'Finka',
        role   : ROLES.ATTACKER,
        ctu    : CTUS.CBRN,
        icon   : '',
        index  : '4:E',
        weapons: [],
        stats  : [
            {
                id   : 'rush_adrenalinerush',
                name : 'adrenal_surges',
                label: 'Adrenal Surge Bonus'
            }
        ]
    },
    MAESTRO         : {
        id     : 'maestro',
        name   : 'Maestro',
        role   : ROLES.DEFENDER,
        ctu    : CTUS.GIS,
        icon   : '',
        index  : '2:F',
        weapons: [],
        stats  : [
            {
                id   : 'barrage_killswithturret',
                name : 'evil_eye_kills',
                label: 'Enemies Killed by Evil Eye'
            }
        ]
    },
    ALIBI           : {
        id     : 'alibi',
        name   : 'Alibi',
        role   : ROLES.DEFENDER,
        ctu    : CTUS.GIS,
        icon   : '',
        index  : '3:F',
        weapons: [],
        stats  : [
            {
                id   : 'deceiver_revealedattackers',
                name : 'enemies_deceived',
                label: 'Enemies Tricked by Prisma'
            }
        ]
    },
    CLASH           : {
        id     : 'clash',
        name   : 'Clash',
        role   : ROLES.DEFENDER,
        ctu    : CTUS.MPS,
        icon   : '',
        index  : '3:10',
        weapons: [],
        stats  : [
            {
                id   : 'clash_sloweddown',
                name : 'kills_affected_by_cce',
                label: 'Enemies Killed While Slowed Down'
            }
        ]
    },
    MAVERICK        : {
        id     : 'maverick',
        name   : 'Maverick',
        role   : ROLES.ATTACKER,
        ctu    : CTUS.DELTA_FORCE,
        icon   : '',
        index  : '2:10',
        weapons: [],
        stats  : [
            {
                id   : 'maverick_wallbreached',
                name : 'walls_breached',
                label: 'Walls Breached With Torch'
            }
        ]
    },
    KAID            : {
        id     : 'kaid',
        name   : 'Kaid',
        role   : ROLES.DEFENDER,
        ctu    : CTUS.GIGR,
        icon   : '',
        index  : '3:11',
        weapons: [],
        stats  : [
            {
                id   : 'kaid_electroclawelectrify',
                name : 'successfull_electroclaw_deployments',
                label: 'Electroclaws Successfully Deployed'
            }
        ]
    },
    NOMAD           : {
        id     : 'nomad',
        name   : 'Nomad',
        role   : ROLES.ATTACKER,
        ctu    : CTUS.GIGR,
        icon   : '',
        index  : '2:11',
        weapons: [],
        stats  : [
            {
                id   : 'nomad_airjabdetonate',
                name : 'airjabs_captured',
                label: 'Airjabs Detonated'
            }
        ]
    },
    MOZZIE          : {
        id     : 'mozzie',
        name   : 'Mozzie',
        role   : ROLES.DEFENDER,
        ctu    : CTUS.SASR,
        icon   : '',
        index  : '2:12',
        weapons: [],
        stats  : [
            {
                id   : 'mozzie_droneshacked',
                name : 'drones_captured',
                label: 'Drones Hacked'
            }
        ]
    },
    GRIDLOCK        : {
        id     : 'gridlock',
        name   : 'Gridlock',
        role   : ROLES.ATTACKER,
        ctu    : CTUS.SASR,
        icon   : '',
        index  : '3:12',
        weapons: [],
        stats  : [
            {
                id   : 'gridlock_traxdeployed',
                name : 'trax_deployed',
                label: 'Trax Deployed'
            }
        ]
    },
    WARDEN          : {
        id     : 'warden',
        name   : 'Warden',
        role   : ROLES.DEFENDER,
        ctu    : CTUS.SECRET_SERVICE,
        icon   : '',
        index  : '2:14',
        weapons: [],
        stats  : [
            {
                id   : 'warden_killswithglasses',
                name : 'kills_with_glasses',
                label: 'Kills While Using Glance'
            }
        ]
    },
    NOKK            : {
        id     : 'nokk',
        name   : 'Nokk',
        role   : ROLES.ATTACKER,
        ctu    : CTUS.JAEGERCORPS,
        icon   : '',
        index  : '2:13',
        weapons: [],
        stats  : [
            {
                id   : 'nokk_observationtooldeceived',
                name : 'observation_tools_deceived',
                label: 'Observation Tools Deceived'
            }
        ]
    },
    GOYO            : {
        id     : 'goyo',
        name   : 'Goyo',
        role   : ROLES.DEFENDER,
        ctu    : CTUS.FUERZAS_ESPECIALES,
        icon   : '',
        index  : '2:15',
        weapons: [],
        stats  : [
            {
                id   : 'goyo_volcandetonate',
                name : 'volcans_detonated',
                label: 'Volcán Detonated by Your Team'
            }
        ]
    },
    AMARU           : {
        id     : 'amaru',
        name   : 'Amaru',
        role   : ROLES.ATTACKER,
        ctu    : CTUS.APCA,
        icon   : '',
        index  : '2:16',
        weapons: [],
        stats  : [
            {
                id   : 'amaru_distancereeled',
                name : 'distance_reeled',
                label: 'Total Distance Reeled'
            }
        ]
    },
    WAMAI           : {
        id     : 'wamai',
        name   : 'Wamai',
        role   : ROLES.DEFENDER,
        ctu    : CTUS.NIGHTHAVEN,
        icon   : '',
        index  : '3:17',
        weapons: [],
        stats  : [
            {
                id   : 'wamai_gadgetdestroybymagnet',
                name : 'projectiles_captured',
                label: 'Projectiles Captured'
            }
        ]
    },
    KALI            : {
        id     : 'kali',
        name   : 'Kali',
        role   : ROLES.ATTACKER,
        ctu    : CTUS.NIGHTHAVEN,
        icon   : '',
        index  : '2:17',
        weapons: [],
        stats  : [
            {
                id   : 'kali_gadgetdestroywithexplosivelance',
                name : 'utility_destroyed_lv',
                label: 'Gadgets Destroyed with the LV'
            }
        ]
    },
    ORYX            : {
        id     : 'oryx',
        name   : 'Oryx',
        role   : ROLES.DEFENDER,
        ctu    : CTUS.UNAFFILIATED,
        icon   : '',
        index  : '2:18',
        weapons: [],
        stats  : [
            {
                id   : 'oryx_killsafterdash',
                name : 'kills_after_dash',
                label: 'Kills after Remah Dashes'
            }
        ]
    },
    IANA            : {
        id     : 'iana',
        name   : 'Iana',
        role   : ROLES.ATTACKER,
        ctu    : CTUS.REU,
        icon   : '',
        index  : '2:19',
        weapons: [],
        stats  : [
            {
                id   : 'iana_killsafterreplicator',
                name : 'kills_after_replicator',
                label: 'Kills after using Replicators'
            }
        ]
    },
    MELUSI          : {
        id     : 'melusi',
        name   : 'Melusi',
        role   : ROLES.DEFENDER,
        ctu    : CTUS.INKABA_TASK_FORCE,
        icon   : '',
        index  : '2:1A',
        weapons: [],
        stats  : [
            {
                id   : 'melusi_sloweddown',
                name : 'attackers_affected_banshee',
                label: 'Attackers slowed by Banshee'
            }
        ]
    },
    ACE             : {
        id     : 'ace',
        name   : 'Ace',
        role   : ROLES.ATTACKER,
        ctu    : CTUS.NIGHTHAVEN,
        icon   : '',
        index  : '4:17',
        weapons: [],
        stats  : [
            {
                id   : 'ace_selmadetonate',
                name : 'selma_detonations',
                label: 'S.E.L.M.A. Detonations'
            }
        ]
    }
};

const STATISTICS            = {
    PLAY_TIME       : {
        RANKED          : 'rankedpvp_timeplayed:infinite',
        QUICK_MATCH     : 'casualpvp_timeplayed:infinite',
        TOTAL_PVP       : 'generalpvp_timeplayed:infinite',
        TRAINING_GROUNDS: 'generalpve_timeplayed:infinite'
    },
    TRAINING_GROUNDS: {
        SOLO           : {
            HIGH_SCORE_NORMAL_DIFFICULTY   : 'allterrohuntsolo_normal_bestscore:infinite',
            HIGH_SCORE_HARD_DIFFICULTY     : 'allterrohuntsolo_hard_bestscore:infinite',
            HIGH_SCORE_REALISTIC_DIFFICULTY: 'allterrohuntsolo_realistic_bestscore:infinite'
        },
        SQUAD          : {
            HIGH_SCORE_NORMAL_DIFFICULTY   : 'allterrohuntcoop_normal_bestscore:infinite',
            HIGH_SCORE_HARD_DIFFICULTY     : 'allterrohuntcoop_hard_bestscore:infinite',
            HIGH_SCORE_REALISTIC_DIFFICULTY: 'allterrohuntcoop_realistic_bestscore:infinite'
        },
        CLASSIC        : {
            MATCHES_WON   : 'terrohuntclassicpve_matchwon:infinite',
            MATCHES_LOST  : 'terrohuntclassicpve_matchlost:infinite',
            MATCHES_PLAYED: 'terrohuntclassicpve_matchplayed:infinite',
            HIGH_SCORE    : 'terrohuntclassicpve_bestscore:infinite'
        },
        PROTECT_HOSTAGE: {
            MATCHES_WON   : 'protecthostagepve_matchwon:infinite',
            MATCHES_LOST  : 'protecthostagepve_matchlost:infinite',
            MATCHES_PLAYED: 'protecthostagepve_matchplayed:infinite',
            HIGH_SCORE    : 'protecthostagepve_bestscore:infinite'
        },
        RESCUE_HOSTAGE : {
            MATCHES_WON          : 'rescuehostagepve_matchwon:infinite',
            MATCHES_LOST         : 'rescuehostagepve_matchlost:infinite',
            MATCHES_PLAYED       : 'rescuehostagepve_matchplayed:infinite',
            HIGH_SCORE           : 'rescuehostagepve_bestscore:infinite',
            HOSTAGE_DEFENDED     : 'generalpve_hostagedefense:infinite',
            HOSTAGE_RESCUED      : 'generalpve_hostagerescue:infinite',
            HOSTAGE_DENIED_REVIVE: 'generalpve_revivedenied:infinite'
        },
        BOMB           : {
            MATCHES_WON   : 'plantbombpve_matchwon:infinite',
            MATCHES_LOST  : 'plantbombpve_matchlost:infinite',
            MATCHES_PLAYED: 'plantbombpve_matchplayed:infinite',
            HIGH_SCORE    : 'plantbombpve_bestscore:infinite'
        },
        KILLS          : {
            TOTAL      : 'generalpve_kills:infinite',
            BLINDED    : 'generalpve_blindkills:infinite',
            ASSISTS    : 'generalpve_killassists:infinite',
            MELEE      : 'generalpve_meleekills:infinite',
            PENETRATION: 'generalpve_penetrationkills:infinite',
        },

        BULLETS_FIRED          : 'generalpve_bulletfired:infinite',
        BULLETS_HIT            : 'generalpve_bullethit:infinite',
        HEADSHOTS              : 'generalpve_headshot:infinite',
        DEATHS                 : 'generalpve_death:infinite',
        MATCHES_LOST           : 'generalpve_matchlost:infinite',
        MATCHES_PLAYED         : 'generalpve_matchplayed:infinite',
        MATCHES_WON            : 'generalpve_matchwon:infinite',
        REVIVES                : 'generalpve_revive:infinite',
        TIME_PLAYED            : 'generalpve_timeplayed:infinite',
        INJURED                : 'generalpve_dbno:infinite',
        INJURED_ASSISTS        : 'generalpve_dbnoassists:infinite',
        GADGET_DESTROYED       : 'generalpve_gadgetdestroy:infinite',
        BARRICADES_DEPLOYED    : 'generalpve_barricadedeployed:infinite',
        REINFORCEMENTS_DEPLOYED: 'generalpve_reinforcementdeploy:infinite',
        HOT_BREACHES           : 'generalpve_rappelbreach:infinite',
        DEATHS_SUICIDE         : 'generalpve_suicide:infinite',
        DISTANCE_TRAVELLED     : 'generalpve_distancetravelled:infinite',

        SERVER_AGGRESSION     : 'generalpve_serveraggression:infinite',
        SERVER_DEFENDER       : 'generalpve_serverdefender:infinite',
        SERVER_SHACKED        : 'generalpve_servershacked:infinite',
        CUSTOM_PVE_TIME_PLAYED: 'custompve_timeplayed:infinite'
    },
    GENERAL         : {
        KILLS: {
            TOTAL      : 'generalpvp_kills:infinite',
            BLINDED    : 'generalpvp_blindkills:infinite',
            ASSISTS    : 'generalpvp_killassists:infinite',
            MELEE      : 'generalpvp_meleekills:infinite',
            PENETRATION: 'generalpvp_penetrationkills:infinite',
        },

        BULLETS_FIRED          : 'generalpvp_bulletfired:infinite',
        BULLETS_HIT            : 'generalpvp_bullethit:infinite',
        HEADSHOTS              : 'generalpvp_headshot:infinite',
        DEATHS                 : 'generalpvp_death:infinite',
        MATCHES_LOST           : 'generalpvp_matchlost:infinite',
        MATCHES_PLAYED         : 'generalpvp_matchplayed:infinite',
        MATCHES_WON            : 'generalpvp_matchwon:infinite',
        REVIVES                : 'generalpvp_revive:infinite',
        TIME_PLAYED            : 'generalpvp_timeplayed:infinite',
        INJURED                : 'generalpvp_dbno:infinite',
        INJURED_ASSISTS        : 'generalpvp_dbnoassists:infinite',
        GADGET_DESTROYED       : 'generalpvp_gadgetdestroy:infinite',
        BARRICADES_DEPLOYED    : 'generalpvp_barricadedeployed:infinite',
        REINFORCEMENTS_DEPLOYED: 'generalpvp_reinforcementdeploy:infinite',
        HOT_BREACHES           : 'generalpvp_rappelbreach:infinite',
        DEATHS_SUICIDE         : 'generalpvp_suicide:infinite',
        DISTANCE_TRAVELLED     : 'generalpvp_distancetravelled:infinite',

        SERVER_AGGRESSION     : 'generalpvp_serveraggression:infinite',
        SERVER_DEFENDER       : 'generalpvp_serverdefender:infinite',
        SERVER_SHACKED        : 'generalpvp_servershacked:infinite',
        CUSTOM_PVP_TIME_PLAYED: 'custompvp_timeplayed:infinite'
    },
    RANKED          : {
        KILLS : 'rankedpvp_kills:infinite',
        DEATHS: 'rankedpvp_death:infinite',

        MATCHES_LOST  : 'rankedpvp_matchlost:infinite',
        MATCHES_WON   : 'rankedpvp_matchwon:infinite',
        MATCHES_PLAYED: 'rankedpvp_matchplayed:infinite',
        PLAY_TIME     : 'rankedpvp_timeplayed:infinite',
    },
    QUICK_MATCH     : {
        KILLS         : 'casualpvp_kills:infinite',
        DEATHS        : 'casualpvp_death:infinite',
        MATCHES_LOST  : 'casualpvp_matchlost:infinite',
        MATCHES_PLAYED: 'casualpvp_matchplayed:infinite',
        MATCHES_WON   : 'casualpvp_matchwon:infinite',
        PLAY_TIME     : 'casualpvp_timeplayed:infinite'
    },
    OPERATORS       : Object.entries(OPERATORS).reduce((result, [operator_id, operator]) => {
        result[operator_id.toUpperCase()] = {};
        [['pvp', 'general'], ['pve', 'training_grounds']].forEach(([game_mode, game_mode_id]) => {
            game_mode_id          = game_mode_id.toUpperCase();
            const getOperatorStat = (stat) => `operator${game_mode}_${stat}:${operator.index}:infinite`;

            result[operator_id.toUpperCase()][game_mode_id] = {
                KILLS          : {
                    GENERAL  : getOperatorStat('kills'),
                    MELEE    : getOperatorStat('meleekills'),
                    ASSISTS  : getOperatorStat('killassists'),
                    HEADSHOTS: getOperatorStat('headshot')
                },
                DEATHS         : getOperatorStat('death'),
                ROUNDS         : {
                    WON : getOperatorStat('roundwon'),
                    LOST: getOperatorStat('roundlost'),
                },
                INJURED        : getOperatorStat('dbno'),
                EXPERIENCE     : getOperatorStat('totalxp'),
                PLAY_TIME      : getOperatorStat('timeplayed'),
                PRIMARY_UTILITY: operator.stats.reduce((actual, {id, name}) => {
                    actual[name.toUpperCase()] = getOperatorStat(id);

                    return actual;
                }, {})
            };
        });


        return result;
    }, {})
};
const STATISTICS_MODS       = Object.assign({
    [STATISTICS.PLAY_TIME.RANKED]          : 'convertSecondsToHours',
    [STATISTICS.PLAY_TIME.QUICK_MATCH]     : 'convertSecondsToHours',
    [STATISTICS.PLAY_TIME.TOTAL_PVP]       : 'convertSecondsToHours',
    [STATISTICS.PLAY_TIME.TRAINING_GROUNDS]: 'convertSecondsToHours',
}, Object.entries(OPERATORS).reduce((result, [operator_id, operator]) => {
    result[`operatorpve_timeplayed:${operator.index}:infinite`] = 'convertSecondsToHours';
    result[`operatorpvp_timeplayed:${operator.index}:infinite`] = 'convertSecondsToHours';

    return result;
}, {}));
const ADDITIONAL_STATISTICS = Object.assign({
        "PLAY_TIME=>DISCOVERY"         : [
            [
                "PLAY_TIME=>TOTAL_PVP",
                "PLAY_TIME=>QUICK_MATCH",
                "PLAY_TIME=>RANKED"
            ],
            (statistics) => {
                return statistics.play_time.total_pvp - statistics.play_time.quick_match - statistics.play_time.ranked;
            }
        ],
        "RANKED=>KILL_DEATH_RATIO"     : [
            [
                "RANKED=>KILLS",
                "RANKED=>DEATHS"
            ],
            (statistics) => {
                return (statistics.ranked.kills / statistics.ranked.deaths).toFixed(2);
            }
        ],
        "RANKED=>WIN_PROBABILITY"      : [
            [
                "RANKED=>MATCHES_WON",
                "RANKED=>MATCHES_PLAYED"
            ],
            (statistics) => {
                return ((statistics.ranked.matches_won / statistics.ranked.matches_played) * 100).toFixed(2);
            }
        ],
        "QUICK_MATCH=>KILL_DEATH_RATIO": [
            [
                "QUICK_MATCH=>KILLS",
                "QUICK_MATCH=>DEATHS"
            ],
            (statistics) => {
                return (statistics.quick_match.kills / statistics.quick_match.deaths).toFixed(2);
            }
        ],
        "QUICK_MATCH=>WIN_PROBABILITY" : [
            [
                "QUICK_MATCH=>MATCHES_WON",
                "QUICK_MATCH=>MATCHES_PLAYED"
            ],
            (statistics) => {
                return ((statistics.quick_match.matches_won / statistics.quick_match.matches_played) * 100).toFixed(2);
            }
        ]
    },
    Object.entries(OPERATORS).reduce((result, [operator_id, operator]) => {
        ['general', 'training_grounds'].forEach(game_mode_id => {
            const createStatPath = path => `OPERATORS=>${operator_id.toUpperCase()}=>${game_mode_id.toUpperCase()}=>${path}`;
            const getStatistics  = statistics => statistics.operators[operator_id.toLowerCase()][game_mode_id.toLowerCase()];

            result[createStatPath('KILLS=>KILL_DEATH_RATIO')]     = [
                [
                    createStatPath('KILLS=>GENERAL'),
                    createStatPath('DEATHS')
                ],
                statistics => {
                    if (getStatistics(statistics).kills.general === 0) {
                        return 0;
                    }

                    return (getStatistics(statistics).kills.general / getStatistics(statistics).deaths).toFixed(2);
                }
            ];
            result[createStatPath('KILLS=>HEADSHOT_PROBABILITY')] = [
                [
                    createStatPath('KILLS=>GENERAL'),
                    createStatPath('KILLS=>HEADSHOTS')
                ],
                statistics => {
                    if (getStatistics(statistics).kills.general === 0) {
                        return 0;
                    }

                    return ((getStatistics(statistics).kills.headshots / getStatistics(statistics).kills.general) * 100).toFixed(2);
                }
            ];
            result[createStatPath('ROUNDS=>TOTAL')]               = [
                [
                    createStatPath('ROUNDS=>LOST'),
                    createStatPath('ROUNDS=>WON')
                ],
                statistics => {
                    return getStatistics(statistics).rounds.lost + getStatistics(statistics).rounds.won;
                }
            ];
            result[createStatPath('ROUNDS=>WIN_PROBABILITY')]     = [
                [
                    createStatPath('ROUNDS=>TOTAL'),
                    createStatPath('ROUNDS=>WON')
                ],
                statistics => {
                    if (getStatistics(statistics).rounds.total === 0) {
                        return 0;
                    }

                    return ((getStatistics(statistics).rounds.won / (getStatistics(statistics).rounds.won + getStatistics(statistics).rounds.lost)) * 100).toFixed(2);
                }
            ];
        });


        return result;
    }, {})
);

const HTTP_USER_AGENT                     = [`${package_name}/${package_version}`, repository_url].join(' ');
const REGEX_HTTP_HEADER_JSON_CONTENT_TYPE = /^application\/json/;

module.exports = {
    PLATFORMS,
    PLATFORM_URLS,
    API_URLS,
    APP_IDS,
    SEASONS,
    LATEST_SEASON,
    REGIONS,
    RANKS_V1,
    RANKS_V2,
    WEAPON_TYPES,
    WEAPONS,
    ROLES,
    CTUS,
    OPERATORS,
    HTTP_USER_AGENT,
    REGEX_HTTP_HEADER_JSON_CONTENT_TYPE,
    STATISTICS,
    STATISTICS_MODS,
    ADDITIONAL_STATISTICS
};