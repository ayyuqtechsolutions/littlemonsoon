export type Category = "coffee" | "chai" | "food" | "sweets";
export type Diet = "veg" | "nonveg";

export interface MenuItem {
  name: string;
  price: string;
  desc?: string;
  category: Category;
  diet: Diet;
  special?: boolean;
}

export const CATEGORIES: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All Items" },
  { id: "coffee", label: "Coffee" },
  { id: "chai", label: "Chai & Cold Drinks" },
  { id: "food", label: "Food (All Day)" },
  { id: "sweets", label: "Sweets" },
];

export const CATEGORY_NOTES: Partial<Record<Category, string>> = {
  coffee: "Add-ons — Oat or Almond Milk (+₹40) · Extra Shot (+₹40) · Decaf (Ask us)",
  sweets: "Cakes sell out by evening. Ask at the counter what is left!",
};

export const MENU: MenuItem[] = [
  { category: "coffee", diet: "veg", name: "Espresso", price: "₹120", desc: "Double shot of house blend. Dark chocolate, roasted almond." },
  { category: "coffee", diet: "veg", name: "Cortado", price: "₹160", desc: "Equal parts espresso and warm milk." },
  { category: "coffee", diet: "veg", name: "Flat White", price: "₹190", desc: "Silky microfoam over double ristretto." },
  { category: "coffee", diet: "veg", name: "Cappuccino", price: "₹180" },
  { category: "coffee", diet: "veg", name: "Filter Kaapi", price: "₹140", desc: "Chicory-leaning decoction in a steel tumbler." },
  { category: "coffee", diet: "veg", name: "The Little Monsoon House", price: "₹240", desc: "Jaggery, cardamom, sea salt.", special: true },

  { category: "chai", diet: "veg", name: "Cutting Chai", price: "₹60", desc: "Half a glass, strong and sweet. The Mumbai way." },
  { category: "chai", diet: "veg", name: "Masala Chai", price: "₹110", desc: "Ginger, cardamom, black pepper, fennel." },
  { category: "chai", diet: "veg", name: "Kashmiri Kahwa", price: "₹150", desc: "Green tea, saffron, almonds, cinnamon." },
  { category: "chai", diet: "veg", name: "Hot Chocolate", price: "₹210", desc: "70% dark, whisked not stirred." },
  { category: "chai", diet: "veg", name: "Iced Americano", price: "₹170" },
  { category: "chai", diet: "veg", name: "Rose Cold Brew Tonic", price: "₹220" },
  { category: "chai", diet: "veg", name: "Nimbu Soda", price: "₹120", desc: "Sweet, salted, or masala." },

  { category: "food", diet: "veg", name: "Bun Maska", price: "₹120" },
  { category: "food", diet: "nonveg", name: "Akuri on Toast", price: "₹260", desc: "Parsi-style scrambled eggs, buttered sourdough.", special: true },
  { category: "food", diet: "nonveg", name: "Masala Omelette Pav", price: "₹220", desc: "Green chilli, onion, coriander, two pavs." },
  { category: "food", diet: "nonveg", name: "Kheema Pav", price: "₹340", desc: "Slow-cooked lamb mince, lemon, raw onion, toasted pav." },
  { category: "food", diet: "veg", name: "Corn & Chilli Cheese Toast", price: "₹240", desc: "Mature cheddar, sourdough." },
  { category: "food", diet: "veg", name: "Mushroom Toastie", price: "₹280", desc: "Garlic mushrooms, gruyere, thyme." },
  { category: "food", diet: "veg", name: "Tomato & Burrata", price: "₹380", desc: "Heirloom tomatoes, basil oil, flaky salt." },
  { category: "food", diet: "veg", name: "Peri-Peri Paneer Sandwich", price: "₹290" },
  { category: "food", diet: "veg", name: "Masala Fries", price: "₹180" },
  { category: "food", diet: "veg", name: "Garlic Cheese Pav", price: "₹160" },
  { category: "food", diet: "nonveg", name: "Egg Bhurji Bowl", price: "₹200", desc: "Spiced scramble over warm khichdi." },

  { category: "sweets", diet: "nonveg", name: "Mawa Cake", price: "₹190", desc: "Baked daily. Cardamom, crisp edge." },
  { category: "sweets", diet: "veg", name: "Orange & Olive Oil Cake", price: "₹200" },
  { category: "sweets", diet: "veg", name: "Banana Bread", price: "₹170", desc: "Brown butter, walnuts." },
  { category: "sweets", diet: "veg", name: "Tiramisu Jar", price: "₹260", desc: "Espresso-soaked, not too sweet." },
  { category: "sweets", diet: "veg", name: "Affogato", price: "₹230", desc: "Vanilla gelato, hot espresso." },
];

export function filterMenu(cat: "all" | Category, diet: "all" | Diet) {
  return MENU.filter((m) => (cat === "all" || m.category === cat) && (diet === "all" || m.diet === diet));
}

export const PHONE = "+918452886999";
export const WHATSAPP = "918452886999";
export const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Hiranandani+Estate+Thane+West";
