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
