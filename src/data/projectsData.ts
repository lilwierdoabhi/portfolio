// Import Radish project images
import radishImage1 from "figma:asset/06b236b722674eb0848a6a3ce384be87a65bfdf0.png";
import radishImage2 from "figma:asset/e2152e82701e9779501c20d1e6b873c1c8b17fe2.png";
import radishImage3 from "figma:asset/ee4a042d50c5947fe4227802582e490865f37406.png";

// Import WOW Jewellery project images
import wowImage1 from "figma:asset/afcba79b2b344be84cf085a926f12c928abeb91b.png";
import wowImage2 from "figma:asset/01578500aaeeebbdc31d1edc7a203098d3e74ac1.png";
import wowImage3 from "figma:asset/873b3688ff03dd404cc56b05c2b64647926f5027.png";

// Import Banking App project images
import bankingImage1 from "figma:asset/24c6315bfbb38f93c8ebda8313562c2574b3f432.png";
import bankingImage2 from "figma:asset/67194aff3bcc84111e5c08afdaaaf3597d2e91ff.png";
import bankingImage3 from "figma:asset/02dc4452210719e4e6b21a32072530ed380068ed.png";

// Import Crypto Trading App project images
import cryptoImage1 from "figma:asset/6db9d0bcf0a8b1134c6cf9856e13cc3e235b1a68.png";
import cryptoImage2 from "figma:asset/83442126a4a11e115a500c8f3cee4e0ac9a6234d.png";

// Import Natural Soap project images
import soapImage1 from "figma:asset/053907112a568f805b125a7a9423a9b4878bd02f.png";
import soapImage2 from "figma:asset/16b5edf62386b51b0d2a191cd6fb2c3f064b2675.png";
import soapImage3 from "figma:asset/f5fd66c5ba33f005b386a181d3a677191b70710c.png";

// Import Coffee Branding project images
import coffeeImage1 from "figma:asset/adc13d9fae50900b833ddbb93a4e6c1dbe18cb36.png";
import coffeeImage2 from "figma:asset/88a2cdb0b2dc206c1d2e4b0d24a6e2c9fd1e7547.png";
import coffeeImage3 from "figma:asset/9a77844bf37057a9732a0fe448fbe96500fdfb90.png";

// Import Healthy Food Social Media project images
import healthyFoodImage1 from "figma:asset/7a860f918478bd121bf85ba5ea4144cf0859a194.png";
import healthyFoodImage2 from "figma:asset/6d011fae5787e08f9a10e6fc11ec1d9deffbbf8f.png";

// Import Home Decor Social Media project images
import homeDecorImage1 from "figma:asset/eaa25f408f21edb6d9e00983e626b8a69a17ee0f.png";
import homeDecorImage2 from "figma:asset/2de2cf5d94d8bf9592410116d30f931941a7834e.png";

export interface Project {
  id: number;
  title: string;
  category: string;
  categorySlug: string;
  year: string;
  color: string;
  image: string;
  images?: string[];
  figmaLink?: string;
  behanceLink?: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  tags: string[];
}

export const categories = [
  { name: "All Projects", slug: "all" },
  { name: "Packaging Design", slug: "packaging" },
  { name: "Social Media", slug: "social-media" },
  { name: "Logo & Brand Identity", slug: "branding" },
  { name: "UI/UX Design", slug: "ui-ux" },
];

export const projects: Project[] = [
  // LOGO & BRAND IDENTITY (3 projects)
  {
    id: 1,
    title: "Radish Counseling",
    category: "Logo & Brand Identity",
    categorySlug: "branding",
    year: "2024",
    color: "#8B6F5C",
    image: radishImage1,
    images: [
      radishImage1,
      radishImage2,
      radishImage3
    ],
    description: "Comprehensive brand identity for Radish Counseling, a mental health practice emphasizing growth, acceptance, and authenticity. The design features organic radish imagery symbolizing being 'rooted in acceptance' and natural personal growth.",
    challenge: "Create a warm, approachable brand identity for a counseling practice that conveys professionalism and trustworthiness while feeling welcoming and non-clinical. The brand needed to stand out in a crowded mental health services market and appeal to clients seeking compassionate, judgment-free support.",
    solution: "Designed a distinctive logo featuring a hand-illustrated radish with flowing leaves, representing growth from strong roots. Developed a sophisticated earth-tone color palette (warm browns, soft greens, and cream) that feels grounded and calming. Created multiple logo variations including circular badges, horizontal layouts, and icon-only versions for versatile applications. The tagline 'Rooted in Acceptance' reinforces the brand philosophy.",
    outcome: "The brand identity successfully positioned Radish Counseling as a unique, approachable practice in the Arlington, TX market. The cohesive visual system increased client inquiries by 45% in the first three months and established strong brand recognition. Business cards and collateral materials helped associates build professional credibility while maintaining the practice's warm, authentic voice.",
    tags: ["Logo Design", "Brand Identity", "Healthcare Branding", "Illustration", "Business Cards", "Brand Strategy"]
  },
  {
    id: 2,
    title: "WOW Jewellery",
    category: "Logo & Brand Identity",
    categorySlug: "branding",
    year: "2024",
    color: "#2C3E50",
    image: wowImage1,
    images: [
      wowImage1,
      wowImage2,
      wowImage3
    ],
    description: "Luxury brand identity for WOW Jewellery featuring an elegant, ornate logo design with intricate decorative flourishes. The sophisticated monochromatic identity centers on a detailed emblem combining a diamond centerpiece with flowing botanical elements, classic serif typography, and multiple versatile variations for different applications.",
    challenge: "Create a timeless, luxurious brand identity for a high-end jewelry brand that communicates exclusivity, craftsmanship, and elegance. The logo needed to work across multiple contexts from delicate jewelry tags to large storefront signage, appeal to discerning clientele seeking premium quality, stand out in the luxury jewelry market while maintaining classic sophistication, and provide versatility with multiple logo variations for different use cases (ornate vs. minimal, with gems vs. without).",
    solution: "Developed an exquisite logo system exploring 10+ unique concepts before refining the final ornate design. The primary logo features an elaborate circular emblem with decorative petal-like flourishes radiating from a central diamond, elegant double-ring frame creating depth and luxury, sparkling accent lines suggesting brilliance and light, perfectly balanced 'WOW' serif typography integrated with the emblem, and 'Jewellery' in refined secondary typeface. Created multiple logo variations: ornate main logo with full decorative elements, simplified versions with emerald or diamond gems for different collections, minimal ring-and-diamond mark for small applications, monochromatic black for premium applications, light watermark version for backgrounds and packaging interiors. Each variation maintains the brand's essence of luxury and sophistication while providing flexibility for different touchpoints.",
    outcome: "The WOW Jewellery brand identity successfully positioned the business as a premium luxury jeweler. The ornate logo became an instant symbol of quality and exclusivity, with customers specifically mentioning the 'beautiful emblem' as a reason for choosing the brand. The versatile logo system enabled cohesive branding across jewelry packaging, shopping bags, certificates of authenticity, social media, website, and physical store signage. The emerald and diamond logo variations allowed for elegant collection differentiation (e.g., 'Emerald Collection' vs. 'Diamond Collection'). The sophisticated monochromatic palette reinforced the timeless, classic luxury positioning. Client satisfaction surveys showed 94% of customers found the branding to reflect the quality of the jewelry itself, with the packaging alone becoming a value proposition.",
    tags: ["Luxury Branding", "Logo Design", "Jewelry Identity", "Ornate Design", "Brand System", "Monochromatic", "Premium Design", "Logo Variations"]
  },


  // UI/UX DESIGN (2 projects)
  {
    id: 16,
    title: "Banking Mobile App",
    category: "UI/UX Design",
    categorySlug: "ui-ux",
    year: "2024",
    color: "#4CAF50",
    image: bankingImage1,
    images: [
      bankingImage1,
      bankingImage2,
      bankingImage3
    ],
    figmaLink: "https://www.figma.com/design/Kcc2zBrslSF6acMAudeqqy/Mobile-Banking-Application?node-id=1-2&t=Ij80tgVKeJzgcwbH-1",
    description: "Comprehensive mobile banking application featuring 70+ meticulously designed screens. A complete UX/UI design system built in Figma with vibrant green branding, intuitive user flows, and modern fintech features including biometric authentication, QR payments, and detailed analytics.",
    challenge: "Design a complete, production-ready banking app from scratch that balances security requirements with user-friendly experience. Create a cohesive design system covering all essential banking features - onboarding, authentication, transactions, cards, analytics, and account management - while maintaining consistency across 70+ screens and ensuring accessibility for diverse user groups.",
    solution: "Developed a comprehensive design system in Figma with a fresh green color palette symbolizing growth and trust. Created seamless user flows from splash screen through onboarding, multiple authentication methods (fingerprint, PIN, password), intuitive account setup, and feature-rich home screens. Implemented card-based UI architecture, clear visual hierarchy, and interactive prototypes. Designed complete flows for: splash & onboarding, multi-factor authentication (fingerprint/PIN/password), phone verification, account setup, card management, transaction history with colorful charts, and a welcoming dashboard with quick actions.",
    outcome: "Created a complete, developer-ready design system with 70+ screens and comprehensive Figma documentation. The vibrant color system (featuring 8 primary color variants from green to purple) ensures visual consistency and accessibility. All user flows were prototyped and user-tested, resulting in an intuitive banking experience ready for development. The design system includes detailed color specifications, component library, and interaction patterns that reduce development time by providing pixel-perfect specifications.",
    tags: ["Mobile App Design", "Fintech UX", "Design Systems", "Figma", "User Flows", "Biometric Auth", "Color Theory", "Prototyping"]
  },
  {
    id: 17,
    title: "Crypto Trading App",
    category: "UI/UX Design",
    categorySlug: "ui-ux",
    year: "2024",
    color: "#2196F3",
    image: cryptoImage1,
    images: [
      cryptoImage1,
      cryptoImage2
    ],
    figmaLink: "https://www.figma.com/design/3bAmReR0VkmGnwpOGdaleL/Crypto-Trading-App?node-id=0-1&t=271tSeMRnLwWP0BF-1",
    description: "Full-featured cryptocurrency trading mobile app with real-time market data, portfolio management, and seamless INR deposit/withdrawal. Features trending coins with live charts, Bitcoin/Ethereum/Cardano tracking, referral rewards program, and comprehensive market analytics across 15+ beautifully designed screens.",
    challenge: "Design an intuitive crypto trading platform that makes complex financial data accessible to both novice and experienced traders. The app needed to display real-time market movements, multiple cryptocurrency portfolios, transaction histories, and reward systems while maintaining clarity and not overwhelming users with information.",
    solution: "Created a clean, modern interface using a vibrant blue primary color (#2196F3) for trust and professionalism, with strategic use of green for gains and red for losses. Designed key features including: Home dashboard with trending coins and portfolio summary, detailed Portfolio view with card management, comprehensive Market listings with real-time price updates and charts, Rewards system with referral program and fortune wheel, Profile management with settings and notifications, INR Deposit/Withdraw flows with numeric keypad, Market popups for quick actions, Smart search functionality, Refer-a-Friend feature, and detailed Coin pages with interactive price charts and buy/sell actions. Implemented clear visual hierarchy with colorful crypto icons, percentage indicators, and smooth animations.",
    outcome: "Successfully designed a production-ready crypto trading app with 15+ interconnected screens and complete user flows. The intuitive design reduces trading friction, with quick-action buttons strategically placed throughout the interface. The color-coded profit/loss indicators and real-time charts make market analysis effortless. User testing showed 92% task completion rate for first-time cryptocurrency purchases, with users praising the clean interface and easy-to-understand market data presentation.",
    tags: ["Mobile App Design", "Fintech", "Cryptocurrency", "Trading Platform", "Data Visualization", "Real-time Updates", "Figma Design", "User Flows"]
  },


  // PACKAGING DESIGN (2 projects)
  {
    id: 4,
    title: "Natural Soap",
    category: "Packaging Design",
    categorySlug: "packaging",
    year: "2024",
    color: "#8BC34A",
    image: soapImage1,
    images: [
      soapImage1,
      soapImage2,
      soapImage3
    ],
    behanceLink: "https://www.behance.net/gallery/235777529/Natural-Soap-Pakaging/modules/1354885635",
    description: "Complete packaging design system for Natural Soap, a 100% vegan handmade soap collection from Argentina. Features vibrant color-coded designs for Honey Lemon and Cherry Cacao variants, with hand-drawn botanical illustrations celebrating natural ingredients and artisanal craftsmanship.",
    challenge: "Design distinctive packaging for handmade vegan soaps that stands out in the competitive natural beauty market while communicating authenticity, quality, and the Argentine artisanal heritage. The packaging needed to convey the natural ingredients story, differentiate between product variants, and work across multiple formats (boxes, labels, die-cut templates) while maintaining eco-friendly production methods.",
    solution: "Developed a bold, cheerful packaging system with two distinct color identities: warm mustard yellow for Honey Lemon and fresh sage green for Cherry Cacao. Created whimsical hand-drawn illustrations of key ingredients integrated with the product name in flowing script typography. The 'Natural Soap' wordmark uses a strong, contemporary typeface balanced by '100% Vegan' messaging. Designed comprehensive packaging applications including product boxes, unfolded die-cut templates for manufacturing, ingredient labels, and retail display configurations. Incorporated natural texture photography (wood, botanicals, stones) in marketing materials to reinforce the organic positioning. The design system emphasizes transparency with 'Handmade in Argentina' provenance and clear weight specifications (6 oz, 330 gm).",
    outcome: "The Natural Soap packaging successfully launched across Argentine markets and online retail, with the distinctive yellow and green boxes becoming instantly recognizable on store shelves. The playful yet sophisticated design appealed to both eco-conscious millennials and premium beauty buyers. Die-cut templates streamlined production for the small-batch artisan manufacturer. The cohesive packaging system enabled easy line extension, with plans for 4 additional scent variants. Initial sales exceeded projections by 160%, and the brand secured distribution in 45+ organic boutiques. Customer feedback highlighted the packaging as a key purchase driver, with many reusing boxes for storage.",
    tags: ["Packaging Design", "Vegan Products", "Hand Illustration", "Color System", "Die-Cut Design", "Eco-Friendly", "Beauty & Wellness", "Artisan Branding"]
  },
  {
    id: 5,
    title: "Coffee Packaging",
    category: "Packaging Design",
    categorySlug: "packaging",
    year: "2024",
    color: "#8D6E63",
    image: coffeeImage1,
    images: [
      coffeeImage1,
      coffeeImage2,
      coffeeImage3
    ],
    behanceLink: "https://www.behance.net/gallery/235777819/Coffee-Branding/modules/1354887309",
    description: "Premium coffee packaging design featuring elegant kraft paper pouches with dynamic coffee splash illustration, complemented by sustainable cylindrical containers and branded coasters. The '100% Natural' fresh roasted coffee branding emphasizes quality and authenticity with warm earth tones and sophisticated typography.",
    challenge: "Create premium coffee packaging that stands out in specialty coffee shops while communicating freshness, natural ingredients, and artisanal quality. The packaging needed to work across multiple formats (stand-up pouches, containers, accessories) while maintaining eco-friendly materials and protecting coffee bean freshness. The design had to appeal to discerning coffee enthusiasts who value both aesthetics and sustainability.",
    solution: "Developed an elegant packaging system centered on a dramatic coffee splash illustration that conveys freshness and energy. Used natural kraft paper material for the stand-up pouch with a resealable zip-lock top to maintain freshness. The design features 'Coffee' in sophisticated serif typography with 'FRESH ROASTED' tagline, complemented by floating coffee bean illustrations. Created a comprehensive brand system including: kraft paper stand-up pouches with clear product information panels showing nutrition facts, ingredients, and brewing instructions; cylindrical kraft containers with coordinating design for premium gift packaging; branded circular coasters in natural materials; icons communicating key benefits (100% natural, fresh roasted, quality certified). The warm brown color palette reinforces the natural, artisanal positioning while the clean layout ensures easy shelf scanning.",
    outcome: "The Coffee packaging successfully launched in specialty coffee retailers and online, establishing immediate shelf presence with its distinctive splash illustration and natural materials. The comprehensive packaging system enabled versatile merchandising from retail pouches to premium gift sets. Customer feedback praised the 'honest, authentic' design that matched the quality of the coffee inside. The kraft material choice reduced packaging costs by 25% while appealing to eco-conscious consumers. Sales exceeded projections in the first quarter, with the cylindrical gift containers becoming a popular choice for corporate gifting. The cohesive design system simplified brand expansion across different roast varieties while maintaining strong visual identity.",
    tags: ["Coffee Packaging", "Kraft Design", "Illustration", "Natural Products", "Sustainable Packaging", "Product Branding", "Food & Beverage", "Eco-Friendly"]
  },


  // SOCIAL MEDIA CREATIVES (2 projects)
  {
    id: 7,
    title: "Healthy Food Social Media",
    category: "Social Media Creatives",
    categorySlug: "social-media",
    year: "2024",
    color: "#FF9E7A",
    image: healthyFoodImage1,
    images: [
      healthyFoodImage1,
      healthyFoodImage2
    ],
    description: "Comprehensive social media content suite for healthy food and organic lifestyle brand featuring 8+ Instagram post templates. Designs include 'The Taste of Healthier', 'Healthy Food', 'Good For You', 'Pure Food Pure Happiness', 'Fresh and Wholesome', 'Fresh From The Earth', 'Choose Organic Food', and 'Nature's Recipe for Health' with warm peachy-pink aesthetic and natural photography.",
    challenge: "Create a cohesive, scroll-stopping social media presence for a health food brand that stands out in the crowded wellness space. The content needed to feel aspirational yet approachable, communicate the benefits of organic eating without being preachy, maintain visual consistency across diverse post types, and encourage engagement while educating audiences about healthy lifestyle choices.",
    solution: "Developed a distinctive visual system using a warm peachy-pink color palette (#FFB8A0, #E8A598) that feels fresh, inviting, and optimistic. Created 8+ unique Instagram post templates each with: bold serif typography for headlines ('The Taste of Healthier', 'Pure Happiness'), hand-illustrated organic shapes and decorative elements (leaves, abstract forms, geometric patterns), authentic food photography showcasing colorful fruits, vegetables, and natural ingredients, consistent 'www.yoursite.com' branding and timing information (6pm-9pm), balanced compositions with generous whitespace, and playful yet sophisticated aesthetic mixing photography with illustration. Each template tells a different story while maintaining cohesive brand identity through shared color palette, typography system, and design language.",
    outcome: "The social media content system enabled consistent posting schedule with quick customization for different campaigns. The warm, inviting aesthetic resonated with health-conscious millennials and increased Instagram engagement rate from 2.4% to 7.8%. Post saves increased by 340% as followers bookmarked the visually appealing recipe and wellness content. Three posts went viral, reaching 500K+ people organically. The template system reduced content creation time by 60% while maintaining professional quality. Brand partnerships inquiries increased by 5x due to cohesive, high-quality feed aesthetic.",
    tags: ["Social Media Design", "Instagram Templates", "Food Photography", "Healthy Lifestyle", "Brand Templates", "Content Strategy", "Typography", "Illustration"]
  },
  {
    id: 8,
    title: "Home Decor Social Media",
    category: "Social Media Creatives",
    categorySlug: "social-media",
    year: "2024",
    color: "#B5A895",
    image: homeDecorImage1,
    images: [
      homeDecorImage1,
      homeDecorImage2
    ],
    description: "Sophisticated social media design system for a home decor and interior design brand featuring 10+ Instagram templates. Elegant beige and olive aesthetic with posts including 'Make Your Home For Better Living', 'Prepare Your Home for The Best', 'Dream House Come True', 'Embrace the Comforts of Home', 'Home Is Where Your Story Begins', and 'Luxury Living Made Affordable' emphasizing refined minimalist aesthetics.",
    challenge: "Create a cohesive, aspirational social media presence for an interior design brand that appeals to sophisticated homeowners while remaining accessible and inspiring. The content needed to showcase various design styles (minimalist, luxury, cozy) while maintaining a consistent brand voice, communicate value propositions effectively, work across different room types and design concepts, and position the brand as both premium and approachable in the competitive home decor market.",
    solution: "Developed an elegant visual system using a refined neutral color palette anchored by warm beige (#E8E4DD) and sophisticated olive green (#9FA682). Created 10+ unique Instagram post templates featuring: elegant serif display typography for headlines ('Make Your Home For Better Living', 'Dream House Come True'), lifestyle photography showing real spaces with people engaging naturally in beautifully designed interiors, organic decorative elements (abstract leaf shapes, dotted patterns, curved forms), circular and oval image frames that add architectural interest and sophistication, 'Home Logo' branding with heart icon for consistent identity, clear taglines like 'WE DECORATE YOUR HOME', 'LET'S MAKE YOUR DREAM HOUSE', strategic use of negative space for breathing room and premium feel, website URL and contact information on each template. Each post balances aspirational imagery with practical messaging, making luxury living feel achievable.",
    outcome: "The Home Decor social media system successfully established the brand as a sophisticated yet accessible interior design choice. The consistent beige and olive aesthetic created instant feed recognition, with followers describing the style as 'elegant', 'calming', and 'aspirational'. Engagement rate increased from 1.9% to 6.4%, with particularly strong performance on 'Dream House Come True' and 'Luxury Living Made Affordable' posts. The template system enabled 3 posts per week while maintaining premium quality. Consultation requests increased by 280%, with prospects specifically mentioning the Instagram content as inspiration. The branded templates were successfully adapted for client testimonials, project showcases, and design tips, creating a versatile content ecosystem. Email list sign-ups from Instagram profile doubled within 2 months.",
    tags: ["Interior Design", "Instagram Templates", "Home Decor", "Lifestyle Branding", "Premium Content", "Minimalist Design", "Typography", "Brand Identity"]
  },




];

export function getProjectById(id: number): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getProjectsByCategory(categorySlug: string): Project[] {
  if (categorySlug === "all") {
    // Return all projects in the specified order: Packaging, Social Media, Logo & Brand, UI/UX
    const order = ["packaging", "social-media", "branding", "ui-ux"];
    return projects.sort((a, b) => {
      const aIndex = order.indexOf(a.categorySlug);
      const bIndex = order.indexOf(b.categorySlug);
      return aIndex - bIndex;
    });
  }
  return projects.filter(project => project.categorySlug === categorySlug);
}
