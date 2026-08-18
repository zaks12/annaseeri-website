export const siteConfig = {
  name: "ANNASEERI NIG. LTD",
  shortName: "ANNASEERI",
  tagline: "Smart Building for Smart Living",
  rcNumber: "7482041",
  description:
    "ANNASEERI NIG. LTD is a Nigerian company operating across real estate, technology, and construction. We deliver property developments and professional services to clients across our operating areas.",
  phone: "08109323494",
  phoneSecondary: "07031203684",
  email: "annaseeri31@gmail.com",
  address:
    "Suite C3, Floor 2, SHM Complex, Sani Abacha Way, Mabushi, FCT, Abuja, Nigeria",
  hours: "",
  social: {
    facebook: "",
    twitter: "",
    linkedin: "",
    instagram: "",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  title: string;
  description: string;
  icon: "home" | "briefcase" | "trendingUp" | "search" | "shield" | "building" | "fileText" | "landmark" | "barChart";
  features: string[];
};

export const services: Service[] = [
  {
    title: "Residential Property Sales & Leasing",
    description:
      "We assist individuals and families with buying, selling, and leasing residential properties, providing clear guidance at every stage of the transaction.",
    icon: "home",
    features: [
      "Property listings & viewings",
      "Buyer & tenant matching",
      "Negotiation & documentation",
      "Closing & handover support",
    ],
  },
  {
    title: "Commercial Property Sales & Leasing",
    description:
      "We help businesses acquire and lease office, retail, and industrial properties suited to their operational requirements.",
    icon: "briefcase",
    features: [
      "Office & retail leasing",
      "Warehouse & industrial spaces",
      "Tenant representation",
      "Portfolio advisory",
    ],
  },
  {
    title: "Investment Sales & Acquisitions",
    description:
      "We support investors in identifying, acquiring, and disposing of real estate assets that align with their investment objectives.",
    icon: "trendingUp",
    features: [
      "Investment property sourcing",
      "Acquisition & disposal",
      "Portfolio diversification",
      "Off-plan investment access",
    ],
  },
  {
    title: "Project Sales & Marketing",
    description:
      "We provide sales and marketing support for property developments, helping bring projects to market and connect them with the right buyers.",
    icon: "building",
    features: [
      "Project launch strategy",
      "Sales campaign management",
      "Buyer lead generation",
      "Progress reporting",
    ],
  },
  {
    title: "Property Consultancy",
    description:
      "Advisory services covering property ownership, investment, and development, helping clients make informed decisions.",
    icon: "fileText",
    features: [
      "Property advisory",
      "Development feasibility",
      "Market entry guidance",
      "Regulatory compliance support",
    ],
  },
  {
    title: "Mortgage Solutions",
    description:
      "We guide clients through the mortgage process, helping identify suitable financing options for property purchases.",
    icon: "landmark",
    features: [
      "Mortgage eligibility assessment",
      "Lender comparison",
      "Application support",
      "Approval guidance",
    ],
  },
  {
    title: "Research Studies",
    description:
      "Research and analysis of real estate markets, trends, and opportunities to support investment and development decisions.",
    icon: "barChart",
    features: [
      "Market trend analysis",
      "Location studies",
      "Investment opportunity reports",
      "Demand & supply analysis",
    ],
  },
  {
    title: "Valuation Surveys",
    description:
      "Independent property valuations for mortgages, taxation, litigation, and investment purposes.",
    icon: "search",
    features: [
      "Mortgage & loan valuations",
      "Insurance valuations",
      "Tax & litigation support",
      "Feasibility & viability studies",
    ],
  },
  {
    title: "Strategic Growth & Investment Advice",
    description:
      "Strategic guidance on real estate investment and business growth, drawing on our experience across real estate, technology, and construction.",
    icon: "shield",
    features: [
      "Growth strategy advisory",
      "Real estate investment advice",
      "Market entry planning",
      "Long-term portfolio planning",
    ],
  },
];

export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: "3", label: "Business Areas" },
  { value: "2", label: "Active Projects" },
  { value: "Abuja", label: "Operating Area" },
];

export type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  image: string;
};

export const team: TeamMember[] = [
  {
    name: "Nasiru Yunusa Bala",
    role: "Founder & Chief Executive Officer",
    bio: "Nasiru Yunusa is the Founder and Chief Executive Officer of ANNASEERI NIG. LTD. Since the company's inception, he has been responsible for steering the business and guiding its growth to its current position. He has six years of experience in corporate marketing and business development and holds a Bachelor's degree in Urban and Regional Planning from Abubakar Tafawa Balewa University (ATBU), Bauchi.",
    image:
      "/images/nasiru-yunusa-bala.jpg.jpeg",
  },
  {
    name: "Umar Faruq Muhammad",
    role: "Chief Business & Strategy Officer",
    image:
      "https://images.pexels.com/photos/7108269/pexels-photo-7108269.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    name: "Engr. Garba Umar Farouk",
    role: "Chief Operations Officer",
    image:
      "https://images.pexels.com/photos/8124232/pexels-photo-8124232.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    name: "Arc. Ahmed Mohamed",
    role: "Architect",
    image:
      "https://images.pexels.com/photos/12903168/pexels-photo-12903168.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
];

export type ValueItem = {
  title: string;
  description: string;
  icon: "target" | "eye" | "heart" | "shield";
};

export const values: ValueItem[] = [
  {
    title: "Our Mission",
    description:
      "To deliver quality real estate, technology, and construction solutions that create lasting value for our clients and communities across Nigeria.",
    icon: "target",
  },
  {
    title: "Our Vision",
    description:
      "To be a trusted Nigerian brand recognised for integrity, innovation, and quality developments — smart building for smart living.",
    icon: "eye",
  },
  {
    title: "Our Core Values",
    description:
      "Integrity, excellence, and a client-first approach guide every transaction, every build, and every relationship we form.",
    icon: "heart",
  },
];


