export type PropertyStatus = "Completed" | "Ongoing" | "Upcoming";

export type PropertyType =
  | "Residential"
  | "Commercial"
  | "Mixed-Use";

export type Property = {
  slug: string;
  name: string;
  location: string;
  type: PropertyType;
  status?: PropertyStatus;
  description: string;
  features: string[];
  images: string[];
};

export const properties: Property[] = [
  {
    slug: "karmo-project",
    name: "Karmo Project",
    location: "Karmo, Abuja",
    type: "Residential",
    description:
      "The Karmo Project is a residential development by ANNASEERI NIG. LTD, located in Karmo, Abuja. Contact ANNASEERI NIG. LTD for further project details and availability.",
    features: [],
    images: [
      "https://images.pexels.com/photos/31656168/pexels-photo-31656168.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/8142046/pexels-photo-8142046.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
  },
  {
    slug: "jabi-project",
    name: "Jabi Project",
    location: "Jabi, Abuja",
    type: "Commercial",
    description:
      "The Jabi Project is a commercial development by ANNASEERI NIG. LTD, located in Jabi, Abuja. Contact ANNASEERI NIG. LTD for further project details and availability.",
    features: [],
   images: [
  "/images/jab (3).jpeg",
  "/images/jab (1).jpeg",
  "/images/jab (2).jpeg",
],
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getAllPropertySlugs(): string[] {
  return properties.map((p) => p.slug);
}

