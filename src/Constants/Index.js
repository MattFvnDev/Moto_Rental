import {
  helmet,
  users,
  motorcycle,
  hidden,
  services,
  world,
  person1,
  person2,
  person3,
  facebook,
  instagram,
  linkedin,
  twitter,
} from "../assets/index"

export const cities = [
  {
    id: "city-1",
    name: "Gdańsk",
  },
  {
    id: "city-2",
    name: "Katowice",
  },
  {
    id: "city-3",
    name: "Kraków",
  },
  {
    id: "city-4",
    name: "Lublin",
  },
  {
    id: "city-5",
    name: "Łódź",
  },
  {
    id: "city-6",
    name: "Opole",
  },
  {
    id: "city-7",
    name: "Poznań",
  },
  {
    id: "city-8",
    name: "Rzeszów",
  },
  {
    id: "city-9",
    name: "Szczecin",
  },
  {
    id: "city-10",
    name: "Warszawa",
  },
  {
    id: "city-11",
    name: "Wrocław",
  },
]

export const motorcycles = [
  {
    id: "motorcycle-1",
    name: "Honda CB 1000 R",
    mark: "Honda",
  },
  {
    id: "motorcycle-2",
    name: "Honda CBR 1000 RR-R",
    mark: "Honda",
  },
  {
    id: "motorcycle-3",
    name: "Honda CRF 1100 L AFRICA TWIN",
    mark: "Honda",
  },
  {
    id: "motorcycle-4",
    name: "Kawasaki Ninja ZX-10R",
    mark: "Kawasaki",
  },
  {
    id: "motorcycle-5",
    name: "Kawasaki Z H2",
    mark: "Kawasaki",
  },
  {
    id: "motorcycle-6",
    name: "Kawasaki Versys 1000",
    mark: "Kawasaki",
  },
  {
    id: "motorcycle-7",
    name: "Yamaha R1",
    mark: "Yamaha",
  },
  {
    id: "motorcycle-8",
    name: "Yamaha MT-10",
    mark: "Yamaha",
  },
  {
    id: "motorcycle-9",
    name: "Yamaha Tracer 9",
    mark: "Yamaha",
  },
]

export const plans = [
  {
    id: "plan-1",
    icon: motorcycle,
    title: "Select Your Motorcycle",
    content:
      "We offer the best range of motorcycles for your needs with an attractive insurance package, convenient payments and unlimited miles.",
  },
  {
    id: "plan-2",
    icon: users,
    title: "Contact Our Employees",
    content:
      "Our qualified and pleasant employees are ready anytime to help you with any questions or concerns.",
  },
  {
    id: "plan-3",
    icon: helmet,
    title: "Let's Ride",
    content:
      "Whether you're ridding, we've got you covered with our wide range of motorcycles and best insurance.",
  },
]

export const choices = [
  {
    id: "choice-1",
    icon: world,
    title: "World Driving Experience",
    content:
      "Take your driving experience to the highest level with our top-notch motorcycles for your adventures.",
  },
  {
    id: "choice-2",
    icon: services,
    title: "One service many features",
    content:
      "Get everything you need in one convenient service. We offer convenient terms, transparent price with our all-inclusive pricing policy.",
  },
  {
    id: "choice-3",
    icon: hidden,
    title: "No hidden Fees",
    content:
      "Enjoy peace of mind with our no hidden charges policy. We provide clear terms and fair prices.",
  },
]

export const testimonials = [
  {
    id: "testimonial-1",
    content:
      "I was very satisfied with the organization of picking up the motorcycle at the Wrocław airport and dropping it off at the ferry in Gdańsk. There were no problems and the motorcycle served me well. I definitely recommend it!",
    name: "Jenny Matzs",
    city: "Wrocław",
    img: person1,
  },
  {
    id: "testimonial-2",
    content:
      "I found out about Moto Rental from various travel blogs and decided to book a motorcycle here for 5 days in Poznań. I am very satisfied with the booking process, the support before, during and after the trip.",
    name: "Mark Tuwim",
    city: "Poznań",
    img: person2,
  },
  {
    id: "testimonial-3",
    content:
      "A great experience from booking the rental online to receiving email confirmation and step by step instructions on how to receive and return the motorcycle. All happened exactly like Moto Rental employees said it would.",
    name: "Karl Muniger",
    city: "Rzeszów",
    img: person3,
  },
]

export const footerLinks = [
  {
    title: "Support",
    Links: [
      {
        name: "Help Center",
      },
      {
        name: "Status",
      },
      {
        name: "Privacy Policy",
      },
      {
        name: "Terms & Conditions",
      },
    ],
  },
  {
    title: "Company",
    Links: [
      {
        name: "About",
      },
      {
        name: "Customers",
      },
      {
        name: "Careers",
      },
      {
        name: "Contact",
      },
    ],
  },
  {
    title: "Community",
    Links: [
      {
        name: "Partners",
      },
      {
        name: "Blog",
      },
      {
        name: "Newsletters",
      },
      {
        name: "FAQ",
      },
    ],
  },
]

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
]
