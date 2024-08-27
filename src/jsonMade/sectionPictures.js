
export function shuffleArray(array) {
    const newArray = [...array]; // Create a copy of the array to avoid mutating the original
    
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    
    return newArray;
  }
export const objectImage = {
  img1: "/janko-ferlic-sfL_QOnmy00-unsplash.jpg",
  img2: "/keren-fedida-BfGuQJpDolQ-unsplash.jpg",
  img3: "/will-van-wingerden-dsvJgiBJTOs-unsplash.jpg",
  img4: "/henry-be--Pg63JThyCg-unsplash.jpg",
  img5: "/annie-spratt-lIWF2uHxs0Q-unsplash.jpg",
  img6: "/rabie-madaci-RJ0dPrxj8N8-unsplash.jpg",
};

 export const img = ['/eugene-chystiakov-wcMysLw5ROM-unsplash.jpg',
  '/eugene-chystiakov-wcMysLw5ROM-unsplash.jpg',
  '/girl-with-red-hat-mWI9FhbS43I-unsplash.jpg','/kelly-sikkema-7hspi6m0yO4-unsplash.jpg','/mediamodifier-QTL3JDJJ7OE-unsplash.jpg','/anne-nygard-qY3xHh2MOms-unsplash.jpg','/thomas-martinsen-4H9IuFBIpYM-unsplash.jpg','/sophia-baboolal-rMYrkFfw36U-unsplash.jpg','/rhamely-ibWI5ILt9P0-unsplash.jpg','/thought-catalog-6cfzNWD_KUo-unsplash.jpg','/jan-kahanek-g3O5ZtRk2E4-unsplash.jpg','/charles-etoroma-ddPTOSMa-MI-unsplash.jpg','/kelly-sikkema-2q_frVRXWfQ-unsplash.jpg','/aaron-burden-AXqMy8MSSdk-unsplash.jpg','/marissa-grootes-vdaJJbls3xE-unsplash.jpg','/kari-shea-apcUIqOPEIo-unsplash.jpg','/debby-hudson-asviIGR3CPE-unsplash.jpg','/josh-felise-yIMy3ERBc3o-unsplash.jpg','/rhamely-pJPE-ZlQVnM-unsplash.jpg','/erik-mclean-aNZnKZKfAq8-unsplash.jpg','/olga-prudnikova-EgYcr_N-UyE-unsplash.jpg','/surface-eChLA6svf_Y-unsplash.jpg','/mike-tinnion-3ym6i13Y9LU-unsplash.jpg','/jan-kahanek-g3O5ZtRk2E4-unsplash.jpg','/marissa-grootes-vdaJJbls3xE-unsplash.jpg','/debby-hudson-asviIGR3CPE-unsplash.jpg','/eugene-chystiakov-wcMysLw5ROM-unsplash.jpg','/girl-with-red-hat-mWI9FhbS43I-unsplash.jpg','/kelly-sikkema-7hspi6m0yO4-unsplash.jpg','/mediamodifier-QTL3JDJJ7OE-unsplash.jpg','/anne-nygard-qY3xHh2MOms-unsplash.jpg','/thomas-martinsen-4H9IuFBIpYM-unsplash.jpg','/sophia-baboolal-rMYrkFfw36U-unsplash.jpg','/rhamely-ibWI5ILt9P0-unsplash.jpg','/thought-catalog-6cfzNWD_KUo-unsplash.jpg','/jan-kahanek-g3O5ZtRk2E4-unsplash.jpg','/charles-etoroma-ddPTOSMa-MI-unsplash.jpg','/kelly-sikkema-2q_frVRXWfQ-unsplash.jpg','/aaron-burden-AXqMy8MSSdk-unsplash.jpg','/marissa-grootes-vdaJJbls3xE-unsplash.jpg','/kari-shea-apcUIqOPEIo-unsplash.jpg','/debby-hudson-asviIGR3CPE-unsplash.jpg','/josh-felise-yIMy3ERBc3o-unsplash.jpg','/rhamely-pJPE-ZlQVnM-unsplash.jpg','/erik-mclean-aNZnKZKfAq8-unsplash.jpg','/olga-prudnikova-EgYcr_N-UyE-unsplash.jpg','/surface-eChLA6svf_Y-unsplash.jpg','/mike-tinnion-3ym6i13Y9LU-unsplash.jpg','/jan-kahanek-g3O5ZtRk2E4-unsplash.jpg','/marissa-grootes-vdaJJbls3xE-unsplash.jpg','/kelly-sikkema-7hspi6m0yO4-unsplash.jpg',]
