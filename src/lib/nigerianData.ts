export const nigerianFirstNames = [
  "Chinedu", "Ifeanyi", "Ngozi", "Kelechi", "Amarachi", "Obinna", "Somtochukwu",
  "Adewale", "Temidayo", "Adebayo", "Ayomide", "Folake", "Damilola", "Olumide",
  "Muhammad", "Aisha", "Ibrahim", "Fatima", "Abdullahi", "Zainab", "Musa",
  "Blessing", "Oluwaseun", "Chioma", "Emeka", "Yetunde", "Halima", "Aminu",
  "Chidinma", "Oluwadamilola", "Nneka", "Babatunde", "Aisha", "Sodiq", "Omolade",
  "Olamide", "Titilayo", "Mustapha", "Grace", "Ahmed", "Chiagoziem", "Abosede",
  "Kabiru", "Olamilekan", "Yakubu", "Olufunke", "Eze", "Folarin", "Khadijat"
];

export const nigerianLastNames = [
  "Ibrahim", "Hassan", "Yusuf", "Abubakar", "Bello", "Umar", "Muhammed",
  "Adebayo", "Adekunle", "Adeyemi", "Oladipo", "Olatunji", "Oyelami",
  "Okonkwo", "Okafor", "Chukwu", "Nnamdi", "Eze", "Uche", "Nwosu",
  "Ogunlesi", "Oyekanmi", "Olatunde", "Oluwole", "Adegoke", "Ogunyemi",
  "Nwankwo", "Ogbonna", "Uzoma", "Onyekachi", "Ajayi", "Balogun",
  "Lawal", "Ogundele", "Olumide", "Adefemi", "Adeniran", "Ige",
  "Kalu", "Okoro", "Ezeigwe", "Dauda", "Sani", "Abubakar"
];

export const nigerianLocations = [
  "Lagos", "Abuja", "Kano", "Ibadan", "Port Harcourt", "Benin City",
  "Kaduna", "Jos", "Enugu", "Warri", "Uyo", "Ilorin", "Ogbomosho",
  "Aba", "Onitsha", "Sokoto", "Maiduguri", "Bauchi", "Calabar",
  "Owerri", "Akure", "Makurdi", "Minna", "Lokoja", "Ado-Ekiti",
  "Osogbo", "Abeokuta", "Ondo", "Ilesa", "Sagamu", "Awka",
  "Asaba", "Yola", "Gombe", "Dutse", "Birnin Kebbi", "Damaturu",
  "Jalingo", "Lafia", "Nsukka", "Ijebu Ode", "Ede", "Iwo"
];

export function generateRandomPurchase() {
  const firstName = nigerianFirstNames[Math.floor(Math.random() * nigerianFirstNames.length)];
  const lastName = nigerianLastNames[Math.floor(Math.random() * nigerianLastNames.length)];
  const location = nigerianLocations[Math.floor(Math.random() * nigerianLocations.length)];
  return { firstName, lastName, location };
}
