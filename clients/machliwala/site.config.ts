import type { SiteConfig } from "@fw/types/site.types";

export const siteConfig: SiteConfig = {
  name: "Machliwala Restaurant",
  tagline: "A Royal Family Restaurant",
  subTagline: "Authentic Live Fishes Straight from the Water & Many More",
  logo: { src: "/clients/machliwala/brand/logo.png", alt: "Machliwala Logo" },
  favicon: "/clients/machliwala/brand/favicon.ico",
  phone: "09990928523",
  address: "Near Pakiza Marriage Hall, Ruigola, Madhopara",
  city: "Purnia, Bihar 854301",
  hours: "Daily: Open until 11:00 PM",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.0416954274!2d87.47!3d25.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39efeb003x!2sPurnia%2C%20Bihar!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin", // Placeholder map
  
  social: {
    whatsapp: "09990928523",
    instagram: "https://instagram.com/themachliwala"
  },
  
  theme: "midnight-gold",
  plugins: ["demo-widget"],
  
  seo: {
    title: "Machliwala Restaurant | Authentic Seafood & Dining in Purnia",
    description: "4.1⭐ Rated restaurant in Purnia offering the finest Seafood, Arabian Cuisine, Mandi, and Tandoori dishes. Dine-in, Delivery, and Outdoor seating available."
  },
  
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Menu", href: "/#menu" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Reviews", href: "/#testimonials" },
    { label: "Contact", href: "/#contact" }
  ],
  
  ctaPrimary: {
    label: "Reserve a Table",
    href: "tel:09990928523",
    icon: "Phone"
  },
  ctaSecondary: {
    label: "Order Online",
    href: "link.zomato.com", // Assuming they have a zomato link
    icon: "ShoppingBag",
    external: true
  },
  
  sectionOrder: ["hero", "about", "services", "menu", "gallery", "testimonials", "contact"],
  
  sections: {
    hero: {
      headline: "The Finest Seafood in Town.",
      subheadline: "MACHLIWALA RESTAURANT",
      description: "Experience the authentic taste of freshly prepared Seafood, Arabian Mandi, and Mughlai curries. A perfect dining destination for families and food lovers.",
      ctaPrimary: { label: "Explore Menu", href: "/#menu", icon: "Utensils" },
      ctaSecondary: { label: "Book a Table", href: "tel:09990928523", icon: "Phone" },
      backgroundImage : {src: "https://images.jdmagicbox.com/v2/comp/purnia/r3/9999p6454.6454.241207125259.i4r3/catalogue/machliwala-restaurant-purnia-restaurants-m4qt9g2wng.jpg", alt: "Machliwala Restaurant"},
      quickStats: [
        { label: "Rating", value: "4.1 ⭐" },
        { label: "Specialty", value: "Seafood & Mandi" },
        { label: "Atmosphere", value: "Family Friendly" }
      ]
    },
    about: {
      headline: "Our Story",
      subheadline: "ABOUT US",
      body: "At Machliwala Restaurant, we bring you a thoughtfully curated menu designed to satisfy every palate. We take pride in offering a diverse menu that caters to every taste. Here, you'll discover a wide array of dishes prepared with the freshest ingredients, expertly crafted to bring you a memorable dining experience. Whether you're here for a family gathering, a celebration, or simply to unwind, Machliwala Restaurant promises a journey of flavors that will delight your senses and leave you wanting more. Sit back, relax, and let us serve you an unforgettable meal. Enjoy your time with us! Bon appétit!",
      highlights: [
        { icon: "Flame", title: "Live Fire Cooking", desc: "Authentic tandoor and grill preparations." },
        { icon: "Users", title: "Family Friendly", desc: "Spacious seating perfect for groups and families." },
        { icon: "Music", title: "Live Music", desc: "Enjoy your meal with a serene and trendy atmosphere." }
      ],
      image: {
        src: "https://images.jdmagicbox.com/v2/comp/purnia/r3/9999p6454.6454.241207125259.i4r3/catalogue/machliwala-restaurant-purnia-restaurants-m4qt9g2wng.jpg", alt: "About Us"
      }
    },
    services: {
      headline: "What We Offer",
      subheadline: "AMENITIES & SERVICES",
      layout: "grid",
      items: [
        { id: "s1", title: "Dine-in & Outdoor Seating", description: "Cozy indoor ambiance with a fireplace, plus beautiful outdoor seating.", icon: "Utensils", image: { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&h=400&q=80", alt: "Dine-in" } },
        { id: "s3", title: "Live Music & Sports", description: "Experience a vibrant atmosphere with live music and sports screenings.", icon: "Music", image: { src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&h=400&q=80", alt: "Live Music" } },
        { id: "s4", title: "Family & Kids Friendly", description: "Perfect for groups and kids' birthdays, with high chairs and special options.", icon: "Users", image: { src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=600&h=400&q=80", alt: "Family Friendly" } },
        { id: "s2", title: "Takeaway & Delivery", description: "Get your favorite Halal food and special dishes delivered hot to your doorstep.", icon: "ShoppingBag", image: { src: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=600&h=400&q=80", alt: "Delivery" } },
        { id: "s5", title: "Private Dining Room", description: "Exclusive spaces available for private parties, group lunches, or dinners.", icon: "DoorClosed", image: { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&h=400&q=80", alt: "Private Dining" } },
         { id: "s7", title: "Free Wi-Fi & Amenities", description: "Stay connected with our free Wi-Fi, along with clean, accessible restrooms.", icon: "Wifi", image: { src: "https://images.unsplash.com/photo-1526411116157-21b2b172c6bc?q=80&w=1170&auto=format&fit=crop&w=600&h=400&q=80", alt: "Free Wi-Fi" } },
          { id: "s6", title: "Valet & Free Parking", description: "Hassle-free visits with plenty of free on-site parking and valet service.", icon: "Car", image: { src: "https://images.unsplash.com/photo-1630165356623-266076eaceb6?auto=format&fit=crop&w=600&h=400&q=80", alt: "Valet Parking" } },
        { id: "s8", title: "Easy Payments", description: "We accept table reservations, Credit/Debit cards, and Google Pay.", icon: "CreditCard", image: { src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&h=400&q=80", alt: "Payments" } },
       
      ]
    },
    menu: {
      headline: "Our Menu",
      subheadline: "EXPLORE",
      footerNote: "All prices are subject to change. Please ask your server for today's specials.",
      categories: [
        {
          title: "Machliwala's Special",
          items: [
            { name: "Fish Fillet", priceFull: 495 },
            { name: "Fish Finger", priceFull: 550 },
            { name: "Lahori Fish Tikka", priceHalf: 280, priceFull: 560 },
            { name: "Lahori Fish Tandoori", priceHalf: 300, priceFull: 600 },
            { name: "Royal Fish Tikka", priceHalf: 320, priceFull: 630 },
            { name: "Machliwala Fish Fry", priceHalf: 300, priceFull: 580 },
            { name: "Seenghala Grilled Fish", priceFull: 1600, badge: "Upon Availability" },
          ]
        },
        {
          title: "Platters",
          items: [
            { name: "Shawarma Family", description: "4 Person: ₹1350 | 5 Person: ₹1810 | 6 Person: ₹2240", price: "From ₹1350" },
            { name: "Chicken Mutton Mix Platter", description: "4 Person: ₹2750 | 5 Person: ₹3305 | 6 Person: ₹3610", price: "From ₹2750" },
            { name: "Fish Family Platter", description: "4 Person: ₹3050 | 5 Person: ₹3505 | 6 Person: ₹3840", price: "From ₹3050" }
          ]
        },
        {
          title: "Arabian Starters",
          items: [
            { name: "Shawaya Grill Chicken", priceHalf: 260, priceFull: 500 },
            { name: "Chicken Alfaham", priceHalf: 320, priceFull: 600 },
            { name: "Turkish Kebab", priceHalf: 300, priceFull: 600 },
            { name: "Chicken Strips", priceHalf: 200, priceFull: 300 },
            { name: "Chicken Popcorn", priceHalf: 120, priceFull: 250 },
            { name: "Chicken Crispy", priceHalf: 320, priceFull: 600 },
            { name: "Fish Fillet", priceHalf: 220, priceFull: 450 },
            { name: "Lahori Fish Fry", priceHalf: 250, priceFull: 280 },
            { name: "Turkish Burger", priceFull: 140 },
            { name: "Arabian Shawarma", priceFull: 140 },
            { name: "Lebanese Shawarma", priceFull: 130 }
          ]
        },
        {
          title: "Arabian Main Course",
          items: [
            { name: "Shawaya Mandi", priceHalf: 510, priceFull: 920 },
            { name: "Alfaham Mandi", priceHalf: 530, priceFull: 950 },
            { name: "Laham Mandi", priceHalf: 650, priceFull: 1050 },
            { name: "Pomfret Fish Mandi", priceFull: 1100 },
            { name: "Fish Mandi", priceFull: 1800 },
            { name: "Seenghala Fish Mandi", priceFull: 2100 },
            { name: "Raan Mandi", priceFull: 2295 }
          ]
        },
        {
          title: "Indi-Mughlai Veg Main Course",
          items: [
            { name: "Dal Makhani", priceFull: 160, isVeg: true },
            { name: "Mixed-Veg", priceFull: 240, isVeg: true },
            { name: "Shahi Paneer", priceFull: 280, isVeg: true },
            { name: "Paneer Butter Masala", priceFull: 310, isVeg: true },
            { name: "Paneer Tikka Masala", priceFull: 350, isVeg: true },
            { name: "Paneer Kadhai", priceFull: 270, isVeg: true },
            { name: "Paneer Handi", priceFull: 250, isVeg: true },
            { name: "Matar Paneer", priceFull: 280, isVeg: true },
            { name: "Matar Mashroom Masala", priceFull: 320, isVeg: true },
            { name: "Masroom Masala", priceFull: 380, isVeg: true }
          ]
        },
        {
          title: "Indi-Mughlai Non-Veg Main Course",
          items: [
            { name: "Butter Chicken", priceHalf: 350, priceFull: 650, isVeg: false },
            { name: "Russian Butter Chicken", priceFull: 500, isVeg: false },
            { name: "Chicken Adraki", priceHalf: 330, priceFull: 630, isVeg: false },
            { name: "Chicken Handi Lazeez", priceHalf: 300, priceFull: 580, isVeg: false },
            { name: "Chicken Butter Masala", priceHalf: 380, priceFull: 700, isVeg: false },
            { name: "Chicken Changezi", priceHalf: 320, priceFull: 600, isVeg: false },
            { name: "Chicken Korma", priceHalf: 300, priceFull: 580, isVeg: false },
            { name: "Fish Curry", priceHalf: 280, priceFull: 460, isVeg: false },
            { name: "Murg Musallam", priceFull: 800, isVeg: false },
            { name: "Mutton Nihari", priceHalf: 400, priceFull: 740, isVeg: false },
            { name: "Mutton Korma", priceHalf: 370, priceFull: 700, isVeg: false },
            { name: "Mutton Stew", priceHalf: 380, priceFull: 720, isVeg: false },
            { name: "Mutton Banjara", priceHalf: 390, priceFull: 770, isVeg: false }
          ]
        },
        {
          title: "Beverages",
          items: [
            { name: "Water Bottle", price: 20 },
            { name: "Soft Drink", price: 40 },
            { name: "Iced Tea", price: 120 },
            { name: "Fresh Lime (Water/Soda)", price: 105 },
            { name: "Jaljeera (Water/Soda)", price: 80 },
            { name: "Cold Coffee", price: 90 },
            { name: "Cold Coffee w Ice Cream", price: 150 },
            { name: "Lassi", price: 90 },
            { name: "Special Lassi", price: 110 },
            { name: "Buttermilk (Plain/Masala)", price: 60 },
            { name: "Red Bull", price: 180 },
            { name: "Shikanji", price: 105 },
            { name: "Milkshake (Strawberry/Vanilla/Chocolate)", price: 160 }
          ]
        },
        {
          title: "Mocktails",
          items: [
            { name: "Fruit Punch", price: 170 },
            { name: "Spicy Mango", price: 185 },
            { name: "Mango Mastani", price: 185 },
            { name: "Virgin Pina Colada", price: 180 },
            { name: "Head Banger", price: 185 },
            { name: "Orange Fantasy", price: 195 },
            { name: "Celebration Punch", price: 195 },
            { name: "Miss Monarch", price: 195 },
            { name: "Strawberry Pina Colada", price: 180 },
            { name: "Scotch Caramel", price: 180 },
            { name: "Cranberry Cooler", price: 180 },
            { name: "Virgin Sangria", price: 180 },
            { name: "Flavour of Mojito", description: "Green Apple/Orange/Mango/Watermelon/Blue", price: 190 },
            { name: "Virgin Mojito", price: 180 },
            { name: "Peru Pyala", price: 175 },
            { name: "Evil Princess", price: 170 },
            { name: "Deep Sea Devil", price: 180 },
            { name: "Frozen Margarita", description: "Strawberry/Kiwi/Peach/Kala Khatta/Watermelon", price: 175 },
            { name: "Captain's Choice", price: 195 },
            { name: "Vanilla Punch", price: 160 }
          ]
        },
        {
          title: "SeaFood Special",
          items: [
            { name: "Prawn Tawa Fry", price: 480 },
            { name: "Prawn Tandoori", price: 480 },
            { name: "Prawn Curry", price: 580 },
            { name: "Prawn Lasooni Tikka", price: 630 },
            { name: "Prawn Masala", price: 700 },
            { name: "Lobster Whole", price: 700 },
            { name: "Pomfret Tawa Fry", price: 600 },
            { name: "Pomfret Chip Fry", price: 600 },
            { name: "Pomfret Curry", price: 700 },
            { name: "Pomfret Tandoori", price: 600 },
            { name: "King Fish Curry", price: 350 },
            { name: "Rawas Fry", price: 350 },
            { name: "Rawas Fillet", price: 450 },
            { name: "Mackerel Tawa Fry", price: 380 },
            { name: "Mackerel Curry", price: 350 },
            { name: "Mackerel Dip Fry", price: 350 },
            { name: "Oil Sardine Fry", price: 470 },
            { name: "Oil Sardine Curry", price: 490 }
          ]
        },
        {
          title: "Pizzas",
          items: [
            { name: "Margarita Pizza", priceRegular: 110, priceMedium: 240, priceLarge: 360, isVeg: true },
            { name: "Single Topping Pizza", priceRegular: 120, priceMedium: 240, priceLarge: 350, isVeg: true },
            { name: "Mix-Veg Pizza", priceRegular: 160, priceMedium: 280, priceLarge: 400, isVeg: true },
            { name: "Paneer Makhani Pizza", priceRegular: 220, priceMedium: 340, priceLarge: 460, isVeg: true },
            { name: "Golden Chicken Pizza", priceRegular: 160, priceMedium: 250, priceLarge: 410, isVeg: false },
            { name: "BBQ Chicken Pizza", priceRegular: 170, priceMedium: 280, priceLarge: 430, isVeg: false },
            { name: "Butter-Chicken Pizza", priceRegular: 150, priceMedium: 280, priceLarge: 530, isVeg: false },
            { name: "Hot Chicken Pizza", priceRegular: 180, priceMedium: 340, priceLarge: 600, isVeg: false },
            { name: "Non-Veg Special Pizza", priceRegular: 280, priceMedium: 450, priceLarge: 600, isVeg: false },
            { name: "Mexican Chicken Pizza", priceRegular: 220, priceMedium: 380, priceLarge: 780, isVeg: false },
          ]
        },
        {
          title: "Breads",
          items: [
            { name: "Rumali Roti", price: 15 },
            { name: "Tandoori Roti", price: 20 },
            { name: "Butter Roti", price: 25 },
            { name: "Baby Naan", price: 25 },
            { name: "Plain Naan", price: 25 },
            { name: "Butter Naan", price: 40 },
            { name: "Laccha Paratha", price: 35 },
            { name: "Pudina Paratha", price: 50 },
            { name: "Garlic Naan", price: 60 },
            { name: "Rogani Naan", price: 150 },
          ]
        },
        {
          title: "Basmati",
          items: [
            { name: "Chicken Hyderabadi Dum Biryani", priceHalf: 200, priceFull: 390, isVeg: false },
            { name: "Mutton Hyderabadi Biryani", priceHalf: 280, priceFull: 520, isVeg: false },
            { name: "Steam Rice", priceFull: 80, isVeg: true },
            { name: "Jeera Rice", priceFull: 100, isVeg: true },
            { name: "Veg Biryani", priceFull: 280, isVeg: true },
          ]
        },
        {
          title: "Desserts",
          items: [
            { name: "Kheer Zaffrani", price: 55 },
            { name: "Ice Cream", description: "Vanilla/Chocolate/Strawberry/Mango/Kesar Pista", price: 90 },
            { name: "Shahi Tukda", price: 220 },
            { name: "Kunafa", price: 300 },
            { name: "Chocolate Kunafa", price: 350 },
            { name: "Cheese Kunafa", price: 400 },
          ]
        }
      ]
    },
    gallery: {
      headline: "Our Ambiance",
      subheadline: "EXPERIENCE MACHLIWALA",
      layout: "masonry",
      items: [
        { src: "/clients/machliwala/gallery/img7.jpg", alt: "Beautiful Outdoor Seating with colorful lights" },
        { src: "/clients/machliwala/gallery/img3.jpg", alt: "Signature Chicken Mandi Platter" },
        { src: "/clients/machliwala/gallery/img5.jpg", alt: "Elegant Indoor Dining with Murals" },
        { src: "/clients/machliwala/gallery/img6.jpg", alt: "Delicious Arabian Mandi Platter" },
        { src: "/clients/machliwala/gallery/img2.jpg", alt: "Royal Arabian Mandi Platter with Smoked Flavor" },
        { src: "/clients/machliwala/gallery/img4.png", alt: "Desserts" },
        { src: "/clients/machliwala/gallery/img1.jpg", alt: "Shawaya Mandi Feast" },
        { src: "/clients/machliwala/gallery/img8.jpg", alt: "Mouth-watering Mandi with Grilled Chicken" },
      ]
    },
    testimonials: {
      headline: "Customer Reviews",
      items: [
        {
          id: "t1",
          name: "Ankit Kumar",
          role: "Local Guide",
          review: "The food here is absolutely delicious! Every dish we tried was bursting with flavor and cooked to perfection. Highly recommend 'Kunafa'. All staff behaviour was too good. A must visit place. ❤️",
          rating: 5
        },
        {
          id: "t2",
          name: "Tabish Kamran",
          role: "Customer",
          review: "Had a wonderful experience at Machliwala Restaurant. The ambience is soothing, the food quality is excellent, and the hygiene is truly impressive. Special mention to the host for being so polite and welcoming. Definitely worth visiting!",
          rating: 5
        },
        {
          id: "t3",
          name: "Keep Watching YT",
          role: "Local Guide",
          review: "Food was good. This restaurant is in outer town area that is good thing. It has unique design as well as unique dishes.",
          rating: 4
        },
        {
          id: "t4",
          name: "Shuchi Dwivedi",
          role: "Customer",
          review: "Highly recommended. The food taste was awesome and the present was even more perfect. There was dish called Mandi that was just delicious 😋",
          rating: 5
        },
        {
          id: "t5",
          name: "Aryan",
          role: "Customer",
          review: "This restaurant offers an unforgettable dining experience with delicious food that bursts with flavor and freshness. The ambiance is cozy yet stylish, creating the perfect atmosphere to relax and enjoy. Attentive staff make the entire meal seamless and enjoyable—highly recommended!",
          rating: 5
        }
      ]
    },
    contact: {
      headline: "Visit Us",
      subheadline: "CONTACT & LOCATION",
      description: "We are open daily until 11 PM. Call us to reserve a table or order online.",
      showForm: false,
      showContactInfo: true
    }
  }
};
