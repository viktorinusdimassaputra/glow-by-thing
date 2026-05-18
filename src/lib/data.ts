export const products = [
  {
    id: "calming-micellar-water",
    name: "Calming Micellar Water",
    category: "Step 1 — Cleanse (Oil)",
    price: 129000,
    formattedPrice: "Rp 129.000",
    rating: 4.8,
    reviews: 96,
    image: "/glow_micellar_water.png",
    badge: "New Release",
    description: "An ultra-gentle, non-rinse micellar water infused with cucumber extract and organic rosewater. Effortlessly dissolves waterproof makeup, heavy sunscreen, and excess sebum while soothing dry, sensitive skin.",
    ingredients: "Water, PEG-6 Caprylic/Capric Glycerides, Cucumber Fruit Extract, Rose Water, Glycerin, Panthenol.",
    howToUse: "Saturate a cotton pad. Gently sweep across face, eyes, and lips. No rinsing required. Follow with water-based cleanser."
  },
  {
    id: "cloud-silk-cleanser",
    name: "Cloud Silk Hydrating Wash",
    category: "Step 2 — Cleanse (Water)",
    price: 149000,
    formattedPrice: "Rp 149.000",
    rating: 4.9,
    reviews: 128,
    image: "/glow_facial_wash.png",
    badge: "Bestseller",
    description: "A silky, low-pH hydrating cleanser that transforms into a cloud-like micro-foam. Formulated with oat amino acids and ceramides to deeply cleanse without stripping the skin's natural moisture barrier.",
    ingredients: "Water, Glycerin, Sodium Cocoyl Glycinate, Ceramide NP, Oat Amino Acids, Panthenol, Centella Asiatica.",
    howToUse: "Massage 1-2 pumps onto damp skin in circular motions. Rinse thoroughly with lukewarm water. Use AM and PM."
  },
  {
    id: "hydrating-milk-toner",
    name: "Hydrating Milk Toner",
    category: "Step 3 — Tone & Prep",
    price: 179000,
    formattedPrice: "Rp 179.000",
    rating: 4.9,
    reviews: 154,
    image: "/glow_hydrating_toner.png",
    badge: "Cult Favorite",
    description: "A skin-cushioning milky toner that floods dehydrated cells with instant moisture. Infused with beta-glucan, panthenol, and triple hyaluronic acid to refine skin texture and optimize active absorption.",
    ingredients: "Water, Glycerin, Beta-Glucan, Sodium Hyaluronate, Panthenol, Centella Asiatica, Allantoin.",
    howToUse: "Pour a few drops into palms and gently pat onto clean face and neck until fully absorbed. Use AM and PM."
  },
  {
    id: "luminous-c-essence",
    name: "Luminous C 15% Essence",
    category: "Step 4 — Treat & Brighten",
    price: 289000,
    formattedPrice: "Rp 289.000",
    rating: 4.8,
    reviews: 84,
    image: "/glow_coll_serum.png",
    badge: "Award Winner",
    description: "A potent 15% L-Ascorbic Acid serum stabilized with Ferulic Acid and Vitamin E. Rapidly fades stubborn hyperpigmentation, brightens skin tone, and provides robust daily environmental defense.",
    ingredients: "Water, Ascorbic Acid, Ethoxydiglycol, Propylene Glycol, Ferulic Acid, Tocopherol, Sodium Hyaluronate.",
    howToUse: "Apply 3-4 drops to clean, dry skin in the morning. Follow with moisturizer and SPF."
  },
  {
    id: "dewy-glow-barrier-cream",
    name: "Dewy Glow Barrier Cream",
    category: "Step 5 — Hydrate & Seal",
    price: 199000,
    formattedPrice: "Rp 199.000",
    rating: 4.7,
    reviews: 210,
    image: "/glow_coll_cream.png",
    badge: "Bestseller",
    description: "Our signature whipped cream moisturizer that locks in hydration for 48 hours without feeling heavy. Formulated with squalane, niacinamide, and a triple ceramide complex to restore compromised skin barriers.",
    ingredients: "Water, Squalane, Niacinamide, Shea Butter, Ceramide NP, Ceramide AP, Ceramide EOP.",
    howToUse: "Apply a dime-sized amount to face and neck as the final step in your routine (before SPF in the morning)."
  },
  {
    id: "glow-shield-spf",
    name: "Glow Shield SPF 50 PA++++",
    category: "Step 6 — Protect & Prime",
    price: 165000,
    formattedPrice: "Rp 165.000",
    rating: 4.9,
    reviews: 312,
    image: "/glow_sunscreen.png",
    badge: "Essential",
    description: "An invisible, weightless hybrid sunscreen that leaves zero white cast. Formulated with hydrating ingredients to act as a glowing, grip-primer under makeup while providing maximum UV protection.",
    ingredients: "Water, Homosalate, Octocrylene, Ethylhexyl Salicylate, Silica, Butylene Glycol, Sodium Hyaluronate.",
    howToUse: "Apply generously 15 minutes before sun exposure as the final step of your AM routine. Reapply every 2 hours."
  }
];

export const ingredientsDatabase = [
  {
    name: "Niacinamide",
    aka: "Vitamin B3",
    status: "Safe / Gentle",
    benefits: "Fades hyperpigmentation, strengthens skin barrier, shrinks appearance of pores, regulates sebum.",
    pairsWith: "Retinol, Hyaluronic Acid, Azelaic Acid, Peptides, Ceramides.",
    doNotMix: "Pure L-Ascorbic Acid (Vitamin C) if you have highly sensitive skin (can cause temporary flushing)."
  },
  {
    name: "Retinol",
    aka: "Vitamin A",
    status: "Potent / Use with care",
    benefits: "Accelerates cell turnover, boosts collagen production, diminishes fine lines, wrinkles, and acne.",
    pairsWith: "Ceramides, Hyaluronic Acid, Niacinamide, Peptides (for buffering and repair).",
    doNotMix: "AHA, BHA, Benzoyl Peroxide, Vitamin C in the exact same routine."
  },
  {
    name: "Salicylic Acid",
    aka: "BHA (Beta Hydroxy Acid)",
    status: "Active Exfoliant",
    benefits: "Oil-soluble acid that penetrates deep into pores to dissolve dead skin cells and sebum, highly effective for blackheads and acne.",
    pairsWith: "Hyaluronic Acid, Ceramides, Niacinamide.",
    doNotMix: "Retinol, Glycolic Acid (AHA), or other strong exfoliants simultaneously."
  },
  {
    name: "Hyaluronic Acid",
    aka: "Sodium Hyaluronate",
    status: "Very Safe / Hydrating",
    benefits: "A humectant that draws moisture into the skin, holding 1000x its weight in water to instantly plump fine lines.",
    pairsWith: "Literally everything. Used as a hydrating base for all actives.",
    doNotMix: "Nothing. Completely safe universally."
  },
  {
    name: "Ascorbic Acid",
    aka: "Vitamin C",
    status: "Potent Antioxidant",
    benefits: "Neutralizes free radicals, brightens hyperpigmentation, and stimulates collagen synthesis.",
    pairsWith: "Vitamin E, Ferulic Acid, Sunscreen (SPF).",
    doNotMix: "Retinol, AHA/BHA, Benzoyl Peroxide (can cause severe irritation and destabilize the Vit C)."
  },
  {
    name: "Azelaic Acid",
    aka: "Dicarboxylic Acid",
    status: "Safe / Gentle Active",
    benefits: "Reduces redness, treats rosacea, kills acne-causing bacteria, and fades stubborn post-acne marks (PIE/PIH).",
    pairsWith: "Niacinamide, Hyaluronic Acid, Moisturizers.",
    doNotMix: "Use caution when mixing with strong AHA/BHA exfoliants."
  },
  {
    name: "Centella Asiatica",
    aka: "Cica / Gotu Kola",
    status: "Soothing / Healing",
    benefits: "Calms inflammation, speeds up wound healing, and restores compromised skin barriers. Excellent for sensitive skin.",
    pairsWith: "All ingredients, especially harsh actives (Retinol/Acids) to buffer irritation.",
    doNotMix: "Nothing. Universally safe."
  },
  {
    name: "Ceramides",
    aka: "Lipids / Sphingolipids",
    status: "Barrier Repair",
    benefits: "Naturally occurring lipids that make up 50% of the skin barrier. Prevents transepidermal water loss (TEWL).",
    pairsWith: "Retinol, Exfoliating Acids, Cholesterol, Fatty Acids.",
    doNotMix: "Nothing. Essential for healthy skin."
  },
  {
    name: "Panthenol",
    aka: "Pro-Vitamin B5",
    status: "Soothing / Hydrating",
    benefits: "Acts as both a humectant (attracts water) and an emollient (seals cracks in skin). Heals redness and micro-tears.",
    pairsWith: "Hyaluronic Acid, Ceramides, Centella Asiatica.",
    doNotMix: "Nothing. Extremely gentle."
  },
  {
    name: "Glycolic Acid",
    aka: "AHA (Alpha Hydroxy Acid)",
    status: "Potent Exfoliant",
    benefits: "Water-soluble acid that dissolves bonds between dead skin cells on the surface. Evens skin texture and boosts glow.",
    pairsWith: "Hyaluronic Acid, Ceramides, Snail Mucin.",
    doNotMix: "Retinol, Vitamin C, Salicylic Acid (BHA) in the same routine."
  },
  {
    name: "Lactic Acid",
    aka: "Gentle AHA",
    status: "Gentle Exfoliant",
    benefits: "A larger molecular AHA that exfoliates the surface gently while simultaneously acting as a humectant (hydrating).",
    pairsWith: "Hyaluronic Acid, Ceramides.",
    doNotMix: "Retinol, Vitamin C."
  },
  {
    name: "Snail Mucin",
    aka: "Snail Secretion Filtrate",
    status: "Repairing / Hydrating",
    benefits: "Packed with glycoproteins and hyaluronic acid. Deeply hydrates, repairs barrier damage, and gives a 'glass skin' glow.",
    pairsWith: "Acids, Retinol, Vitamin C (perfect buffer).",
    doNotMix: "Nothing."
  },
  {
    name: "Peptides",
    aka: "Polypeptides / Matrixyl",
    status: "Anti-Aging / Firming",
    benefits: "Short chains of amino acids that signal the skin to build more collagen and elastin, firming the skin.",
    pairsWith: "Ceramides, Hyaluronic Acid, Retinol.",
    doNotMix: "Direct Acids (AHA/BHA) as low pH can break down the peptide bonds."
  },
  {
    name: "Bakuchiol",
    aka: "Vegan Retinol Alternative",
    status: "Gentle Anti-Aging",
    benefits: "Functions similarly to Retinol by boosting cell turnover and collagen, but without the redness, peeling, or sun sensitivity.",
    pairsWith: "Squalane, Niacinamide, Vitamin C.",
    doNotMix: "Nothing. It is stable and gentle enough to mix."
  },
  {
    name: "Tranexamic Acid",
    aka: "TXA",
    status: "Brightening",
    benefits: "Inhibits melanin synthesis and is highly effective against stubborn melasma and hyperpigmentation.",
    pairsWith: "Niacinamide, Alpha Arbutin, Vitamin C.",
    doNotMix: "Safe to mix, but monitor for irritation on highly sensitive skin."
  },
  {
    name: "Alpha Arbutin",
    aka: "Bearberry Extract",
    status: "Pigment Inhibitor",
    benefits: "A safe alternative to Hydroquinone. Fades sun spots, age spots, and acne scars safely over time.",
    pairsWith: "Vitamin C, Niacinamide, Tranexamic Acid (for maximum brightening).",
    doNotMix: "Nothing."
  },
  {
    name: "Benzoyl Peroxide",
    aka: "BPO",
    status: "Potent Acne Treatment",
    benefits: "Delivers oxygen into pores to immediately kill P. acnes bacteria. Reduces severe inflammatory acne.",
    pairsWith: "Clindamycin, Hydrating moisturizers like Ceramides to offset severe dryness.",
    doNotMix: "Retinol, Vitamin C, AHA/BHA (will cause extreme dryness, peeling, and chemical burns)."
  },
  {
    name: "Squalane",
    aka: "Plant-derived Squalene",
    status: "Lightweight Oil",
    benefits: "A highly stable, non-comedogenic oil that mimics skin's natural sebum. Locks in moisture without clogging pores.",
    pairsWith: "Retinol, Hyaluronic Acid, Any Active.",
    doNotMix: "Nothing."
  },
  {
    name: "Glycerin",
    aka: "Glycerol",
    status: "Ultimate Humectant",
    benefits: "Often overlooked but is the most effective and universally tolerated humectant in skincare. Deeply hydrates.",
    pairsWith: "Water, Hyaluronic Acid, Ceramides.",
    doNotMix: "Nothing."
  },
  {
    name: "Green Tea Extract",
    aka: "EGCG",
    status: "Soothing Antioxidant",
    benefits: "Reduces sebum (oil) production, calms redness, and provides strong antioxidant defense against UV damage.",
    pairsWith: "Sunscreen, Niacinamide, Salicylic Acid (great acne-fighting combo).",
    doNotMix: "Nothing."
  }
];
