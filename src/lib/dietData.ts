export interface DietRecipe {
  id: string;
  type: string;
  title: string;
  desc: string;
  img: string;
  prepTime: string;
  calories: string;
  benefits: string;
  ingredients: string[];
  instructions: string[];
}

export const dietRecipes: DietRecipe[] = [
  {
    id: "berry-antioxidant-smoothie",
    type: "Breakfast",
    title: "Berry Antioxidant Smoothie",
    desc: "Rich in Vitamin C and antioxidants from mixed berries, helping fight free radicals and boost collagen production for bouncy skin.",
    img: "https://plus.unsplash.com/premium_photo-1663853294228-ced39f53ecc7?auto=format&fit=crop&w=800&q=80",
    prepTime: "5 mins",
    calories: "220 kcal",
    benefits: "High vitamin C prevents collagen degradation and fights UV oxidative stress from the inside.",
    ingredients: [
      "1 cup frozen mixed berries (blueberries, raspberries)",
      "1/2 banana",
      "1 cup almond milk (unsweetened)",
      "1 tbsp chia seeds",
      "1 scoop collagen powder (optional)"
    ],
    instructions: [
      "Place all ingredients into a high-speed blender.",
      "Blend on high for 60 seconds until completely smooth.",
      "Pour into a chilled glass and consume immediately for maximum antioxidant retention."
    ]
  },
  {
    id: "salmon-avocado-salad",
    type: "Lunch",
    title: "Salmon Avocado Salad",
    desc: "Packed with Omega-3 fatty acids to maintain the skin's lipid barrier, keeping it hydrated and reducing inflammation.",
    img: "https://plus.unsplash.com/premium_photo-1676106623868-e0e23643813b?auto=format&fit=crop&w=800&q=80",
    prepTime: "15 mins",
    calories: "450 kcal",
    benefits: "Omega-3s from salmon and healthy fats from avocado strengthen the stratum corneum (moisture barrier).",
    ingredients: [
      "1 fillet of wild-caught salmon (4-6oz)",
      "1/2 ripe avocado, sliced",
      "2 cups mixed leafy greens",
      "1 tbsp extra virgin olive oil",
      "Squeeze of fresh lemon juice",
      "Sea salt and pepper to taste"
    ],
    instructions: [
      "Pan-sear or bake the salmon until cooked to your preference.",
      "Toss the mixed greens with olive oil, lemon juice, salt, and pepper.",
      "Top the dressed greens with sliced avocado and the cooked salmon fillet."
    ]
  },
  {
    id: "ceremonial-matcha-latte",
    type: "Beverage",
    title: "Ceremonial Matcha Latte",
    desc: "Contains EGCG which reduces sebum production and targets acne-causing bacteria, alongside a calming energy boost.",
    img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80",
    prepTime: "5 mins",
    calories: "90 kcal",
    benefits: "EGCG in matcha dramatically lowers inflammation markers and specifically decreases excess oil production linked to acne.",
    ingredients: [
      "1 tsp ceremonial grade matcha powder",
      "2 oz hot water (not boiling, ~175°F)",
      "6 oz oat milk or almond milk",
      "1 tsp honey or maple syrup"
    ],
    instructions: [
      "Sift the matcha powder into a bowl to prevent lumps.",
      "Pour in hot water and whisk vigorously using a bamboo whisk into a zig-zag motion until frothy.",
      "Warm and froth the milk, then pour the milk over the matcha.",
      "Sweeten if desired."
    ]
  },
  {
    id: "glow-bone-broth",
    type: "Dinner",
    title: "Collagen Bone Broth Soup",
    desc: "A rich, slow-simmered broth packed with bioavailable collagen, amino acids, and minerals to rebuild the skin matrix from within.",
    img: "https://images.unsplash.com/photo-1652088079703-38f4a8d6b981?auto=format&fit=crop&w=800&q=80",
    prepTime: "4 hours+",
    calories: "120 kcal",
    benefits: "Directly supplies the amino acids (glycine and proline) your body requires to synthesize new collagen.",
    ingredients: [
      "2 lbs beef marrow bones or organic chicken carcasses",
      "2 carrots, chopped",
      "1 onion, quartered",
      "2 stalks celery, chopped",
      "1 tbsp apple cider vinegar (pulls minerals from bones)",
      "Water to cover"
    ],
    instructions: [
      "Roast bones at 400°F for 30 minutes for deeper flavor (optional).",
      "Place bones, vegetables, and vinegar in a slow cooker or large pot.",
      "Cover completely with water. Simmer on low for 12-24 hours.",
      "Strain the broth, discard the solids, and season with sea salt."
    ]
  },
  {
    id: "citrus-glow-water",
    type: "Beverage",
    title: "Citrus Mint Hydration",
    desc: "Alkalizing infused water that flushes out bodily toxins while keeping internal hydration levels at their peak.",
    img: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80",
    prepTime: "2 mins",
    calories: "10 kcal",
    benefits: "Hydration is the baseline of all skin health. Vitamin C from lemon aids liver detox processes.",
    ingredients: [
      "1 liter filtered water",
      "1/2 lemon, sliced",
      "1/2 orange, sliced",
      "Handful of fresh mint leaves"
    ],
    instructions: [
      "Add lemon slices, orange slices, and mint to a large pitcher.",
      "Pour filtered water over the ingredients.",
      "Let sit in the refrigerator for at least 2 hours before drinking."
    ]
  },
  {
    id: "antioxidant-acai-bowl",
    type: "Breakfast",
    title: "Deep Purple Acai Bowl",
    desc: "A nutrient-dense superfood bowl loaded with polyphenols to bright dull complexions.",
    img: "https://plus.unsplash.com/premium_photo-1663840278090-32c56b18e075?auto=format&fit=crop&w=800&q=80",
    prepTime: "10 mins",
    calories: "320 kcal",
    benefits: "Acai berries have one of the highest ORAC (Oxygen Radical Absorbance Capacity) values in nature.",
    ingredients: [
      "1 frozen unsweetened acai packet",
      "1/2 frozen banana",
      "Splash of coconut water",
      "Fresh berries and grain-free granola for topping"
    ],
    instructions: [
      "Run the acai packet under warm water for 5 seconds to loosen.",
      "Blend acai, banana, and coconut water until very thick.",
      "Scoop into a bowl and arrange toppings aesthetically."
    ]
  },
  {
    id: "turmeric-golden-milk",
    type: "Beverage",
    title: "Healing Golden Milk",
    desc: "An ancient Ayurvedic drink utilizing curcumin to lower systemic body inflammation, great for reducing cystic breakouts.",
    img: "https://plus.unsplash.com/premium_photo-1672076780330-ae81962ee3ce?auto=format&fit=crop&w=800&q=80",
    prepTime: "5 mins",
    calories: "140 kcal",
    benefits: "Curcumin (turmeric) is a vastly powerful anti-inflammatory compound that calms inflammatory skin conditions like eczema and severe acne.",
    ingredients: [
      "1 cup coconut milk (carton, not canned)",
      "1 tsp ground turmeric",
      "1/4 tsp ground ginger",
      "Pinch of black pepper (crucial for turmeric absorption)",
      "1 tsp raw honey"
    ],
    instructions: [
      "In a small saucepan, gently heat the coconut milk.",
      "Whisk in the turmeric, ginger, and black pepper.",
      "Warm for 3-5 minutes. Remove from heat and stir in the honey."
    ]
  },
  {
    id: "walnut-spinach-pesto",
    type: "Lunch",
    title: "Zinc-rich Walnut Pesto",
    desc: "A beautiful green sauce rich in zinc from walnuts and Vitamin E from spinach.",
    img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
    prepTime: "15 mins",
    calories: "380 kcal",
    benefits: "Zinc promotes cell division and wound healing (vital for acne scars), while Vitamin E is a fat-soluble antioxidant.",
    ingredients: [
      "2 cups fresh basil",
      "1 cup fresh spinach",
      "1/2 cup walnuts (toasted)",
      "1/3 cup olive oil",
      "2 cloves garlic",
      "Serve over zucchini noodles or lentil pasta"
    ],
    instructions: [
      "Add basil, spinach, walnuts, and garlic to a food processor.",
      "Pulse until coarsely chopped.",
      "Slowly stream in olive oil while the machine runs until a thick paste forms.",
      "Toss with warm pasta or zucchini noodles."
    ]
  },
  {
    id: "sweet-potato-glow-bowl",
    type: "Dinner",
    title: "Beta-Carotene Glow Bowl",
    desc: "A hearty bowl centered around roasted sweet potatoes, providing serious doses of Vitamin A.",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    prepTime: "30 mins",
    calories: "410 kcal",
    benefits: "Beta-carotene derived from sweet potatoes converts to Vitamin A (Retinol) in the body, boosting cell turnover.",
    ingredients: [
      "1 large sweet potato, cubed",
      "1 cup cooked quinoa",
      "1/2 cup black beans",
      "Olive oil for roasting",
      "Pinch of smoked paprika"
    ],
    instructions: [
      "Toss sweet potato cubes in olive oil and paprika.",
      "Roast at 400°F (200°C) for 25 minutes until tender.",
      "Assemble bowl with a base of quinoa, topped with roasted potatoes and black beans."
    ]
  },
  {
    id: "cacao-maca-bites",
    type: "Snacks",
    title: "Raw Cacao & Maca Bites",
    desc: "Hormone-balancing energy snacks made with raw cacao (high in copper and antioxidants) and adaptogenic maca.",
    img: "https://plus.unsplash.com/premium_photo-1726217054409-bae9bdb35211?auto=format&fit=crop&w=800&q=80",
    prepTime: "15 mins",
    calories: "160 kcal (per 2 bites)",
    benefits: "Maca root helps balance hormones (preventing hormonal acne), while raw cacao provides flavonoids that improve skin microcirculation.",
    ingredients: [
      "1 cup Medjool dates, pitted",
      "1 cup almonds or walnuts",
      "3 tbsp raw cacao powder",
      "1 tbsp maca powder",
      "Pinch of sea salt"
    ],
    instructions: [
      "Pulse nuts in a food processor until entirely crushed.",
      "Add dates, cacao powder, maca, and salt. Process until a sticky dough forms.",
      "Roll into bite-sized balls and store in the refrigerator."
    ]
  }
];
