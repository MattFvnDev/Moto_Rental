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
  models,
  customers,
  locations,
  employee1,
  employee2,
  employee3,
  employee6,
  employee5,
  employee4,
  CBR,
  CRF,
  MT,
  R1,
  Tracer,
  ZH,
  ZX,
  Versys,
  CB,
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

export const questions = [
  {
    id: "question-1",
    question: "1. Which payment methods do you accept?",
    answer:
      "You can pay with any debit/credit card - Visa, Mastercard, Maestro, Amex, Discover, Diners, JCB, Unionpay. We use Stripe to process payments, so do not store your card details and never share this information with third parties. ApplePay and GooglePay are also supported.",
  },
  {
    id: "question-2",
    question: "2. What is your best price guarantee?",
    answer:
      "We work with the largest network of motorbike rental agencies in the world, the Riderly team works with them day and night to ensure we are always best on price in the market. If you found the same rental cheaper elsewhere, get in touch and we'll match their price.",
  },
  {
    id: "question-3",
    question: "3. Are all fees included in the rental price?",
    answer:
      "Yes. The vast majority of our rentals include basic insurance, local taxes and any road fees. You have the option to add 'extras' but we'll clearly list any additional costs involved before you book your motorcycle.",
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
  {
    title: "Services",
    Links: [
      {
        name: "Rental",
      },
      {
        name: "Insurance",
      },
      {
        name: "Cooperation",
      },
      {
        name: "Consulting",
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

export const about = [
  {
    id: "about-1",
    icon: models,
    number: "9",
    content: "Motorcycle models",
  },
  {
    id: "about-2",
    icon: locations,
    number: "12",
    content: "Cities in Poland",
  },
  {
    id: "about-3",
    icon: customers,
    number: "3000+",
    content: "Satisfied customers",
  },
]

export const Employees = [
  {
    id: "person-1",
    img: employee1,
    name: "James Miller",
    occupation: "Business Owner",
  },
  {
    id: "person-2",
    img: employee2,
    name: "Ralph Sawicki",
    occupation: "Salesman",
  },
  {
    id: "person-3",
    img: employee3,
    name: "Lauren Moss",
    occupation: "Manager",
  },
  {
    id: "person-4",
    img: employee5,
    name: "Cristin Sachs",
    occupation: "Photographer",
  },
  {
    id: "person-5",
    img: employee4,
    name: "Barb Kortez",
    occupation: "Detailist",
  },
  {
    id: "person-6",
    img: employee6,
    name: "James Diaz",
    occupation: "Mechanic",
  },
]

export const motorcycleModels = [
  {
    id: "motorcycle-1",
    img: CB,
    type: "Naked",
    mark: "Honda",
    model: "CB 1000 R",
    hP: "146",
    weight: "213",
    fuelCapacity: "16",
    engineDisplacement: "998",
    price: "$35",
  },
  {
    id: "motorcycle-2",
    img: CBR,
    type: "Super Sport",
    mark: "Honda",
    model: "CBR 1000 RR-R",
    hP: "217",
    weight: "201",
    fuelCapacity: "16",
    engineDisplacement: "998",
    price: "$52",
  },
  {
    id: "motorcycle-3",
    img: CRF,
    type: "Adventure",
    mark: "Honda",
    model: "CRF 1100 Africa Twin",
    hP: "102",
    weight: "229",
    fuelCapacity: "19",
    engineDisplacement: "1084",
    price: "$43",
  },
  {
    id: "motorcycle-4",
    img: MT,
    type: "Naked",
    mark: "Yamaha",
    model: "MT-10",
    hP: "165",
    weight: "212",
    fuelCapacity: "17",
    engineDisplacement: "998",
    price: "$40",
  },
  {
    id: "motorcycle-5",
    img: R1,
    type: "Super Sport",
    mark: "Yamaha",
    model: "R1",
    hP: "200",
    weight: "201",
    fuelCapacity: "17",
    engineDisplacement: "998",
    price: "$50",
  },
  {
    id: "motorcycle-6",
    img: Tracer,
    type: "Adventure",
    mark: "Yamaha",
    model: "Tracer 9 GT",
    hP: "119",
    weight: "213",
    fuelCapacity: "19",
    engineDisplacement: "890",
    price: "$37",
  },
  {
    id: "motorcycle-7",
    img: ZH,
    type: "Naked",
    mark: "Kawasaki",
    model: "Z H2",
    hP: "200",
    weight: "235",
    fuelCapacity: "19",
    engineDisplacement: "998",
    price: "$42",
  },
  {
    id: "motorcycle-8",
    img: ZX,
    type: "Super Sport",
    mark: "Kawasaki",
    model: "ZX-10RR",
    hP: "204",
    weight: "206",
    fuelCapacity: "17",
    engineDisplacement: "998",
    price: "$55",
  },
  {
    id: "motorcycle-9",
    img: Versys,
    type: "Adventure",
    mark: "Kawasaki",
    model: "Versys 1000",
    hP: "120",
    weight: "257",
    fuelCapacity: "21",
    engineDisplacement: "1043",
    price: "$41",
  },
]
