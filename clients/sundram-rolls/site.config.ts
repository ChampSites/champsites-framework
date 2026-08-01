import type { SiteConfig } from "../../src/framework/types";

export const siteConfig: SiteConfig = {
  name: "Sundram Roll's",
  tagline: "Best Roll's in Town",
  subTagline: "Famous Kathi Rolls, Burgers & Fast Food in Purnia",
  logo: { src: "/clients/sundram-rolls/brand/logo.png", alt: "Sundram Rolls" },
  favicon: "/clients/sundram-rolls/brand/favicon.ico",
  phone: "08809339666",
  address: "Chitrawani Rd, near Aitiana Tour & Travel, Sarvoday Nagar",
  city: "Purnia, Bihar 854301",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.0416954274!2d87.47!3d25.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39efeb003x!2sPurnia%2C%20Bihar!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin",

  social: {
    whatsapp: "8809339666",
    instagram: "https://www.instagram.com/sundramrollsofficial/",
  },

  theme: "playful",
  schemaType: "Restaurant",
  seo: {
    title: "Sundram Roll's | Best Rolls & Fast Food in Purnia",
    description: "Enjoy the best rolls, burgers, and fast food at Sundram Roll's in Purnia. Dine-in, takeaway, and late-night delivery available.",
  },
  plugins: ["whatsapp-widget"],
  
  footerLinks: [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#hero" },
        { label: "Menu", href: "#menu" },
        { label: "Gallery", href: "#gallery" },
        { label: "Testimonials", href: "#testimonials" },
      ]
    },
    {
      title: "Connect",
      links: [
        { label: "Order on Swiggy", href: "https://www.swiggy.com/restaurants/sundram-rolls-navratan-hatta-purnea-purnea-866820", target: "_blank" },
        { label: "Order on Zomato", href: "https://www.zomato.com/purnea/sundram-rolls-purnea-locality/order", target: "_blank" },
        { label: "WhatsApp Order", href: "https://wa.me/8809339666?text=Hi, I%27d like to order!", target: "_blank" },
      ]
    }
  ],
  
  sectionOrder: ["hero", "about", "features", "menu", "gallery", "testimonials", "map", "contact"],
  
  nav: [
    { label: "Home", href: "#hero" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Location", href: "#map" },
  ],
  ctaPrimary: { label: "Order Now", href: "#map", icon: "Utensils" },
  
  sections: {
    hero: {
      headline: "The Best Rolls\nin Purnia",
      description: "Fast, fresh, and bursting with flavor. Come experience our famous rolls and delicious fast food.",
      badge: "Fast Food Restaurant",
      backgroundImage: {
        src: "/clients/sundram-rolls/gallery/img1.png",
        alt: "Sundram Roll's Shop Front",
      },
      ctaPrimary: { label: "View Menu", href: "#menu", icon: "Utensils" },
      ctaSecondary: { label: "Order Online", href: "https://wa.me/8809339666?text=Hi, I%27d like to order!", external: true },
    },
    stats: {
      items: [
        { label: "Google Rating", value: 4.8, suffix: "★", icon: "Star" },
        { label: "Happy Customers", value: 3100, suffix: "+", icon: "Users" },
        { label: "Menu Options", value: 30, suffix: "+", icon: "Utensils" },
        { label: "Delivery", value: 100, suffix: "%", icon: "Truck" },
      ]
    },
    menu: {
      headline: "Our Menu",
      subheadline: "FOOD MENU",
      categories: [
        {
          title: "Rolls",
          items: [
            { name: "Veg Roll", price: 49, isVeg: true },
            { name: "Egg Roll", price: 49 },
            { name: "Paneer Tikka Roll", price: 79, isVeg: true },
            { name: "Chicken Tikka Roll", price: 79 },
            { name: "Egg Chicken Tikka Roll", price: 89 },
          ]
        },
        {
          title: "Wraps",
          items: [
            { name: "Aloo Wrap", price: 109, isVeg: true },
            { name: "Veg Wrap", price: 119, isVeg: true },
            { name: "Egg Wrap", price: 109 },
            { name: "Paneer Tikka Wrap", price: 129, isVeg: true },
            { name: "Chicken Tikka Wrap", price: 129 },
          ]
        },
        {
          title: "Burger",
          items: [
            { name: "Veg / Aloo Burger", price: 89, isVeg: true },
            { name: "Egg Burger", price: 89 },
            { name: "Paneer / Chicken Burger", price: 119 },
            { name: "Paneer Tikka Burger", price: 129, isVeg: true },
            { name: "Chicken Tikka Burger", price: 129 },
          ]
        },
        {
          title: "Must Try",
          items: [
            { name: "Chicken Biryani", price: 149 },
            { name: "Veg Biryani", price: 149, isVeg: true },
            { name: "Paneer Malai Kebab", price: 149, isVeg: true },
            { name: "Chicken Malai Kebab", price: 149 },
            { name: "French Fries", price: 59, isVeg: true },
            { name: "Ice Tea", price: 49, isVeg: true },
            { name: "Brownie With Vanilla", price: 99, isVeg: true },
            { name: "White Sauce Pasta", price: 149, isVeg: true },
            { name: "Cheese Momos", price: 99, isVeg: true },
            { name: "Paneer Momos", price: 99, isVeg: true },
            { name: "Chicken Lollypop", price: 99 },
            { name: "Tangdi Kebab", price: 149 },
          ]
        }
      ]
    },
    features: {
      headline: "Why Choose Us",
      subheadline: "FAST. FRESH. FLAVORFUL.",
      items: [
        {
          title: "Dine-in & Outdoor Seating",
          desc: "Enjoy a casual, family-friendly atmosphere.",
          icon: "MapPin",
          image: { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format", alt: "Outdoor Seating" }
        },
        {
          title: "Late-Night Food",
          desc: "Satisfy those late-night cravings with our extensive menu.",
          icon: "Clock",
          image: { src: "https://images.unsplash.com/photo-1595440432061-e6c25f9feaf0?q=80&w=681&auto=format", alt: "Late Night Food" }
        },
        {
          title: "Home Delivery",
          desc: "Get your favorite rolls delivered straight to your door with no-contact delivery options.",
          icon: "Truck",
          image: { src: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&auto=format", alt: "Home Delivery" }
        },
        {
          title: "Vegetarian & Vegan Options",
          desc: "Delicious choices available for all dietary preferences.",
          icon: "Heart",
          image: { src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format", alt: "Vegetarian Options" }
        },
      ]
    },
    gallery: {
      headline: "Take a Tour",
      subheadline: "OUR VIBE",
      items: [
        { src: "/clients/sundram-rolls/gallery/img1.png", alt: "Shop Exterior Day" },
        { src: "/clients/sundram-rolls/gallery/img3.png", alt: "Interior Seating Area" },
        { src: "/clients/sundram-rolls/gallery/img4.jpg", alt: "Galaxy Staircase" },
        { src: "/clients/sundram-rolls/gallery/img2.jpg", alt: "Shop Exterior Close" },
        { src: "/clients/sundram-rolls/gallery/img6.png", alt: "Night Life" },
        { src: "/clients/sundram-rolls/gallery/img5.jpg", alt: "Moon Wall Painting" },
        { src: "/clients/sundram-rolls/gallery/img8.png", alt: "Beverages" },
        { src: "/clients/sundram-rolls/gallery/img7.png", alt: "Fries" },
      ]
    },
    testimonials: {
      headline: "Customer Reviews",
      subheadline: "WHAT THEY SAY",
      items: [
        {
          name: "AVINASH KUMAR",
          review: "Chilly potato is good. Roll is also good. Delivery of order is smooth.",
          rating: 5,
          source: "google"
        },
        {
          name: "saurav anand",
          review: "Having limited options but all the dishes are delicious. Mostly i order paneer chilly and this taste is unbeatable compared to other restaurants in this price range. Wraps are also good.",
          rating: 5,
          source: "google"
        },
        {
          name: "OXCEY GAMING",
          review: "My experience at Sundram Roll's was absolutely fabulous! The food was delicious, and the service was top-notch. The atmosphere was also very pleasant.",
          rating: 5,
          source: "google"
        },
        {
          name: "Arpit Mehta",
          review: "This place is fantastic overall! The food is consistently delicious, with every dish being a true delight. The atmosphere is quite pleasant and inviting.",
          rating: 5,
          source: "google"
        }
      ]
    },
    map: {
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.0416954274!2d87.47!3d25.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39efeb003x!2sPurnia%2C%20Bihar!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin",
    }
  }
};

export default siteConfig;
