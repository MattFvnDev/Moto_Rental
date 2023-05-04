import {
  helmet,
  users,
  motorcycle,
  hidden,
  services,
  world,
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
