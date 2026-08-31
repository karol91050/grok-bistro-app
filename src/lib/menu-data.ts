export type MenuCategory = "przystawki" | "zupy" | "dania" | "desery" | "napoje";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
  featured?: boolean;
  vegetarian?: boolean;
};

export const CATEGORIES: { id: MenuCategory; label: string }[] = [
  { id: "przystawki", label: "Przystawki" },
  { id: "zupy", label: "Zupy" },
  { id: "dania", label: "Dania główne" },
  { id: "desery", label: "Desery" },
  { id: "napoje", label: "Napoje" },
];

export const MENU: MenuItem[] = [
  {
    id: "oscypek",
    name: "Oscypek z żurawiną",
    description: "Wędzony ser owczy z grilla, żurawina i miód spadziowy.",
    price: 28,
    category: "przystawki",
    image: "/images/dish-oscypek.jpg",
    featured: true,
    vegetarian: true,
  },
  {
    id: "moskole",
    name: "Moskole z bundzem",
    description: "Pieczone placki ziemniaczane, bundz, masło czosnkowe.",
    price: 24,
    category: "przystawki",
    image: "/images/dish-oscypek.jpg",
    vegetarian: true,
  },
  {
    id: "tatar",
    name: "Tatar z pstrąga",
    description: "Świeży pstrąg z Popradu, kapary, szczypior, żółtko.",
    price: 36,
    category: "przystawki",
    image: "/images/dish-pstrag.jpg",
  },
  {
    id: "kwasnica",
    name: "Kwaśnica na wędzonce",
    description: "Beskidzka kwaśnica z żeberkiem, ziemniakami i chlebem żytnim.",
    price: 22,
    category: "zupy",
    image: "/images/dish-kwasnica.jpg",
    featured: true,
  },
  {
    id: "zurek",
    name: "Żurek staropolski",
    description: "Zakwas, biała kiełbasa, jajko, majeranek — w chlebie na życzenie.",
    price: 20,
    category: "zupy",
    image: "/images/dish-kwasnica.jpg",
  },
  {
    id: "borowiki",
    name: "Krem z borowików",
    description: "Leśne borowiki, śmietana, szczypior i grzanki z masłem.",
    price: 24,
    category: "zupy",
    image: "/images/dish-kwasnica.jpg",
    vegetarian: true,
  },
  {
    id: "pierogi",
    name: "Pierogi ruskie ze skwarkami",
    description: "Ręczne pierogi z ruskim farszem, skwarki, cebulka, śmietana.",
    price: 32,
    category: "dania",
    image: "/images/dish-pierogi.jpg",
    featured: true,
    vegetarian: true,
  },
  {
    id: "pstrag",
    name: "Pstrąg z Popradu",
    description: "Cały pstrąg z grilla, zioła z łąk, cytryna, pieczone warzywa.",
    price: 48,
    category: "dania",
    image: "/images/dish-pstrag.jpg",
    featured: true,
  },
  {
    id: "placek",
    name: "Placek po zbójnicku",
    description: "Ogromny placek ziemniaczany, gulasz wołowy, śmietana, szczypior.",
    price: 42,
    category: "dania",
    image: "/images/dish-pierogi.jpg",
  },
  {
    id: "golonka",
    name: "Golonka pieczona",
    description: "Chrupiąca skórka, kapusta kiszona, musztarda i pieczywo.",
    price: 52,
    category: "dania",
    image: "/images/dish-kwasnica.jpg",
  },
  {
    id: "kaczka",
    name: "Kaczka z jabłkami",
    description: "Udko pieczone w jabłkach i żurawinie, kasza gryczana.",
    price: 56,
    category: "dania",
    image: "/images/dish-szarlotka.jpg",
  },
  {
    id: "szarlotka",
    name: "Szarlotka góralska",
    description: "Ciepła szarlotka z kruszonką, lody waniliowe, cynamon.",
    price: 18,
    category: "desery",
    image: "/images/dish-szarlotka.jpg",
    featured: true,
    vegetarian: true,
  },
  {
    id: "sernik",
    name: "Sernik na zimno",
    description: "Sernik z twarogu z lokalnej mleczarni, sos malinowy.",
    price: 16,
    category: "desery",
    image: "/images/dish-szarlotka.jpg",
    vegetarian: true,
  },
  {
    id: "grzaniec",
    name: "Grzaniec domowy",
    description: "Czerwone wino, miód, pomarańcza, cynamon i goździki.",
    price: 16,
    category: "napoje",
    image: "/images/dish-szarlotka.jpg",
  },
  {
    id: "kompot",
    name: "Kompot z suszu",
    description: "Suszone śliwki, jabłka i gruszki — jak u babci.",
    price: 10,
    category: "napoje",
    image: "/images/dish-oscypek.jpg",
    vegetarian: true,
  },
  {
    id: "piwo",
    name: "Piwo rzemieślnicze",
    description: "Rotacja beczek z małych browarów Sądecczyzny, 0,5 l.",
    price: 14,
    category: "napoje",
    image: "/images/dish-kwasnica.jpg",
  },
  {
    id: "kawa",
    name: "Kawa z palarni",
    description: "Espresso lub przelew z ziaren palonych w Nowym Sączu.",
    price: 12,
    category: "napoje",
    image: "/images/dish-oscypek.jpg",
    vegetarian: true,
  },
];

export function getItem(id: string) {
  return MENU.find((item) => item.id === id);
}

export function searchMenu(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return MENU;
  return MENU.filter(
    (item) =>
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q),
  );
}
