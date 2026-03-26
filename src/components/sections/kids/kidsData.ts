export interface Kid {
  id: string;
  name: string;
  age: number;
  image: string;
  ethnicity: string;
  gender: string;
  height: string;
  weight: string;
  eyeColor: string;
  hair: string;
  dressSize: string;
}

const firstNames = [
  "Kevin", "Amara", "Jaiden", "Zuri", "Emeka", "Nia", "Kofi", "Aisha",
  "Tunde", "Fatima", "Chidi", "Lila", "Oba", "Yara", "Tariq", "Imani",
  "Dayo", "Kaya", "Nonso", "Aaliyah", "Kwame", "Sade", "Jelani", "Adia",
  "Sekou", "Zara", "Idris", "Amina", "Juma", "Layla", "Obi", "Nala",
  "Eze", "Makena", "Tayo", "Adaeze", "Femi", "Halima", "Kalu", "Sanaa",
];

const lastNames = [
  "Ilolo", "Okonkwo", "Mensah", "Abara", "Bakare", "Nwosu", "Asante",
  "Diallo", "Eze", "Osei", "Bello", "Chukwu", "Kamara", "Adeyemi",
  "Ofori", "Toure", "Nnamdi", "Afolabi", "Okoro", "Owusu",
];

const ethnicities = [
  "African American", "Nigerian", "Ghanaian", "Caribbean", "Kenyan",
  "South African", "Ethiopian", "Jamaican", "Trinidadian", "Somali",
];

const genders = ["Male", "Female"];
const eyeColors = ["Brown", "Dark Brown", "Hazel", "Black"];
const hairColors = ["Black", "Dark Brown", "Brown"];
const dressSizes = ["Zero", "Small", "Medium", "XS", "S"];

function generateKids(count: number): Kid[] {
  const kids: Kid[] = [];
  for (let i = 0; i < count; i++) {
    const firstName = firstNames[i % firstNames.length];
    const lastName = lastNames[i % lastNames.length];
    const gender = genders[i % genders.length];
    kids.push({
      id: String(i + 1),
      name: `${firstName} ${lastName}`,
      age: Math.floor(Math.random() * 10) + 2,
      image: "/dashboard/profile-image.jpg",
      ethnicity: ethnicities[i % ethnicities.length],
      gender,
      height: `${Math.floor(Math.random() * 24) + 30}"`,
      weight: `${Math.floor(Math.random() * 30) + 20}lbs`,
      eyeColor: eyeColors[i % eyeColors.length],
      hair: hairColors[i % hairColors.length],
      dressSize: dressSizes[i % dressSizes.length],
    });
  }
  return kids;
}

export const mockKids = generateKids(68 * 20); // 68 pages worth
