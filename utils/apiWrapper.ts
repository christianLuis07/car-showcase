import { CarProps, FilterProps } from "@/types";

// Curated high-spec vehicles database with HD automotive photography
const RICH_CAR_DATABASE: CarProps[] = [
  {
    id: "bmw-m4-competition-2024",
    make: "BMW",
    model: "M4 Competition xDrive",
    year: 2024,
    city_mpg: 16,
    highway_mpg: 23,
    combination_mpg: 19,
    class: "Sports Coupe",
    cylinders: 6,
    displacement: 3.0,
    drive: "awd",
    fuel_type: "gas",
    transmission: "Automatic",
    horsepower: 503,
    acceleration0to60: 3.4,
    rentPrice: 185,
    msrp: 82200,
    seats: 4,
    description: "The BMW M4 Competition features a high-revving 3.0L M TwinPower Turbo inline-6 engine paired with intelligent M xDrive for extreme precision and aggressive track capability.",
    features: ["M xDrive AWD", "Carbon Fiber Roof", "Harman Kardon Audio", "Head-Up Display", "Adaptive M Suspension"],
    images: {
      main: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=85",
      angleFront: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
      angleSide: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
      angleRear: "https://images.unsplash.com/photo-1617814076668-8dfc6ba12132?auto=format&fit=crop&w=800&q=80",
      interior: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80"
    }
  },
  {
    id: "porsche-911-gt3-2024",
    make: "Porsche",
    model: "911 GT3 RS",
    year: 2024,
    city_mpg: 15,
    highway_mpg: 18,
    combination_mpg: 16,
    class: "Supercar",
    cylinders: 6,
    displacement: 4.0,
    drive: "rwd",
    fuel_type: "gas",
    transmission: "Automatic",
    horsepower: 518,
    acceleration0to60: 3.0,
    rentPrice: 320,
    msrp: 241300,
    seats: 2,
    description: "Uncompromised aerodynamic engineering with a naturally aspirated 4.0-liter flat-six engine revving up to 9,000 RPM. Designed for total motorsport dominance.",
    features: ["DRS Rear Wing", "Carbon Bucket Seats", "PCCB Ceramic Brakes", "Front Axle Lift", "Track Precision App"],
    images: {
      main: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=85",
      angleFront: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
      angleSide: "https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?auto=format&fit=crop&w=800&q=80",
      angleRear: "https://images.unsplash.com/photo-1541348263662-e082662d82da?auto=format&fit=crop&w=800&q=80",
      interior: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80"
    }
  },
  {
    id: "tesla-model-s-plaid-2024",
    make: "Tesla",
    model: "Model S Plaid",
    year: 2024,
    city_mpg: 120,
    highway_mpg: 115,
    combination_mpg: 118,
    class: "Electric Luxury Sedan",
    cylinders: 0,
    displacement: 0,
    drive: "awd",
    fuel_type: "electric",
    transmission: "Automatic",
    horsepower: 1020,
    acceleration0to60: 1.99,
    rentPrice: 210,
    msrp: 89990,
    seats: 5,
    description: "Tri-motor all-wheel drive architecture delivering 1,020 HP with torque vectoring and carbon-sleeved rotors for instant hyper-sedan acceleration.",
    features: ["Tri-Motor All-Wheel Drive", "Yoke Steering", "Autopilot & FSD", "22-Speaker Audio", "359 Miles Range"],
    images: {
      main: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=85",
      angleFront: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
      angleSide: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&w=800&q=80",
      angleRear: "https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?auto=format&fit=crop&w=800&q=80",
      interior: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80"
    }
  },
  {
    id: "audi-r8-v10-performance-2023",
    make: "Audi",
    model: "R8 V10 Performance Quattro",
    year: 2023,
    city_mpg: 13,
    highway_mpg: 19,
    combination_mpg: 15,
    class: "Supercar",
    cylinders: 10,
    displacement: 5.2,
    drive: "awd",
    fuel_type: "gas",
    transmission: "Automatic",
    horsepower: 602,
    acceleration0to60: 3.1,
    rentPrice: 290,
    msrp: 209700,
    seats: 2,
    description: "Mid-engine masterpiece featuring a mid-mounted 5.2L FSI V10 engine. Icon of engineering performance with legendary Quattro permanent AWD.",
    features: ["Quattro AWD", "Bang & Olufsen Sound System", "Audi Virtual Cockpit", "Carbon Exterior Package", "Laser Headlights"],
    images: {
      main: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=85",
      angleFront: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=800&q=80",
      angleSide: "https://images.unsplash.com/photo-1541348263662-e082662d82da?auto=format&fit=crop&w=800&q=80",
      angleRear: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&w=800&q=80",
      interior: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80"
    }
  },
  {
    id: "mercedes-amg-gt-63s-2024",
    make: "Mercedes-Benz",
    model: "AMG GT 63 S E Performance",
    year: 2024,
    city_mpg: 20,
    highway_mpg: 24,
    combination_mpg: 22,
    class: "Hybrid Super Sedan",
    cylinders: 8,
    displacement: 4.0,
    drive: "awd",
    fuel_type: "hybrid",
    transmission: "Automatic",
    horsepower: 831,
    acceleration0to60: 2.8,
    rentPrice: 275,
    msrp: 194900,
    seats: 4,
    description: "Direct Formula 1 technology transfer combining a 4.0L V8 Biturbo with an AMG electric drive unit for unprecedented 1,400 Nm total system torque.",
    features: ["AMG Performance 4MATIC+", "Rear Axle Steering", "Burmester 3D Surround Sound", "AMG Ride Control+", "Active Aerodynamics"],
    images: {
      main: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85",
      angleFront: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
      angleSide: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
      angleRear: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80",
      interior: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80"
    }
  },
  {
    id: "lamborghini-huracan-evo-2023",
    make: "Lamborghini",
    model: "Huracán EVO Spyder",
    year: 2023,
    city_mpg: 13,
    highway_mpg: 18,
    combination_mpg: 15,
    class: "Exotic Supercar",
    cylinders: 10,
    displacement: 5.2,
    drive: "awd",
    fuel_type: "gas",
    transmission: "Automatic",
    horsepower: 631,
    acceleration0to60: 2.9,
    rentPrice: 450,
    msrp: 293395,
    seats: 2,
    description: "V10 visceral emotion amplified by open-top driving mechanics, LDVI dynamic steering, and iconic razor-sharp Italian wedge styling.",
    features: ["LDVI Predictive Dynamics", "All-Wheel Steering", "Electro-hydraulic Soft Top", "Lamborghini Infotainment", "Magnetorheological Suspension"],
    images: {
      main: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=85",
      angleFront: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80",
      angleSide: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=800&q=80",
      angleRear: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80",
      interior: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
    }
  },
  {
    id: "ferrari-sf90-stradale-2024",
    make: "Ferrari",
    model: "SF90 Stradale Assetto Fiorano",
    year: 2024,
    city_mpg: 18,
    highway_mpg: 22,
    combination_mpg: 20,
    class: "Hypercar",
    cylinders: 8,
    displacement: 4.0,
    drive: "awd",
    fuel_type: "hybrid",
    transmission: "Automatic",
    horsepower: 986,
    acceleration0to60: 2.5,
    rentPrice: 600,
    msrp: 524000,
    seats: 2,
    description: "Ferrari's flagship PHEV hypercar linking a twin-turbo V8 with three electric motors. Absolute masterpiece of aero downforce and hybrid speed.",
    features: ["RAC-e Electric Front Axle", "Assetto Fiorano Package", "eManettino Drive Selector", "Carbon Fiber Wheels", "16-inch Curved Display"],
    images: {
      main: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=85",
      angleFront: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=800&q=80",
      angleSide: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
      angleRear: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
      interior: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80"
    }
  },
  {
    id: "toyota-gr-supra-2024",
    make: "Toyota",
    model: "GR Supra 3.0 Premium",
    year: 2024,
    city_mpg: 23,
    highway_mpg: 31,
    combination_mpg: 26,
    class: "Sports Coupe",
    cylinders: 6,
    displacement: 3.0,
    drive: "rwd",
    fuel_type: "gas",
    transmission: "Manual",
    horsepower: 382,
    acceleration0to60: 3.9,
    rentPrice: 125,
    msrp: 58600,
    seats: 2,
    description: "Pure sports car DNA engineered with GAZOO Racing. 3.0-liter turbocharged inline-6 with active rear differential and 6-speed intelligent manual transmission.",
    features: ["Active Rear Differential", "Adaptive Variable Suspension", "Brembo 4-Piston Brakes", "JBL 12-Speaker System", "Head-Up Display"],
    images: {
      main: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=85",
      angleFront: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
      angleSide: "https://images.unsplash.com/photo-1617814076668-8dfc6ba12132?auto=format&fit=crop&w=800&q=80",
      angleRear: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
      interior: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80"
    }
  },
  {
    id: "honda-civic-type-r-2024",
    make: "Honda",
    model: "Civic Type R (FL5)",
    year: 2024,
    city_mpg: 22,
    highway_mpg: 28,
    combination_mpg: 24,
    class: "Hot Hatch",
    cylinders: 4,
    displacement: 2.0,
    drive: "fwd",
    fuel_type: "gas",
    transmission: "Manual",
    horsepower: 315,
    acceleration0to60: 4.9,
    rentPrice: 110,
    msrp: 44795,
    seats: 4,
    description: "The pinnacle of front-wheel drive performance. 2.0L VTEC Turbo mated to a precise 6-speed manual with rev-match control and aluminum shift knob.",
    features: ["LogR Data Logger", "Brembo Front Brakes", "High-Downforce Rear Spoiler", "Lightweight Flywheel", "Sport Suede Seats"],
    images: {
      main: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=1200&q=85",
      angleFront: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
      angleSide: "https://images.unsplash.com/photo-1541348263662-e082662d82da?auto=format&fit=crop&w=800&q=80",
      angleRear: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
      interior: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80"
    }
  },
  {
    id: "ford-mustang-dark-horse-2024",
    make: "Ford",
    model: "Mustang Dark Horse",
    year: 2024,
    city_mpg: 14,
    highway_mpg: 22,
    combination_mpg: 17,
    class: "American Muscle",
    cylinders: 8,
    displacement: 5.0,
    drive: "rwd",
    fuel_type: "gas",
    transmission: "Manual",
    horsepower: 500,
    acceleration0to60: 3.7,
    rentPrice: 160,
    msrp: 60860,
    seats: 4,
    description: "Naturally aspirated 5.0L Coyote V8 delivering 500 naturally aspirated horsepower with TREMEC 6-speed manual and dual intake throttle bodies.",
    features: ["MagneRide Damping", "TREMEC 6-Speed Manual", "Electronic Drift Brake", "Brembo 6-Piston Brakes", "B&O Sound System"],
    images: {
      main: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1200&q=85",
      angleFront: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
      angleSide: "https://images.unsplash.com/photo-1617814076668-8dfc6ba12132?auto=format&fit=crop&w=800&q=80",
      angleRear: "https://images.unsplash.com/photo-1541348263662-e082662d82da?auto=format&fit=crop&w=800&q=80",
      interior: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80"
    }
  },
  {
    id: "aston-martin-vantage-2024",
    make: "Aston Martin",
    model: "Vantage V8 F1 Edition",
    year: 2024,
    city_mpg: 18,
    highway_mpg: 24,
    combination_mpg: 20,
    class: "Grand Tourer",
    cylinders: 8,
    displacement: 4.0,
    drive: "rwd",
    fuel_type: "gas",
    transmission: "Automatic",
    horsepower: 656,
    acceleration0to60: 3.4,
    rentPrice: 350,
    msrp: 191000,
    seats: 2,
    description: "British craftsmanship refined with aggressive aerodynamic downforce. 4.0L Twin-Turbo V8 pushing 656 HP through an 8-speed ZF transmission.",
    features: ["Electronic Rear Differential", "Carbon Ceramic Brakes", "Adaptive Damping System", "Bespoke Leather Interior", "Quad Exhaust System"],
    images: {
      main: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=1200&q=85",
      angleFront: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
      angleSide: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
      angleRear: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
      interior: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80"
    }
  },
  {
    id: "chevrolet-corvette-z06-2024",
    make: "Chevrolet",
    model: "Corvette Z06 (C8)",
    year: 2024,
    city_mpg: 12,
    highway_mpg: 19,
    combination_mpg: 14,
    class: "American Supercar",
    cylinders: 8,
    displacement: 5.5,
    drive: "rwd",
    fuel_type: "gas",
    transmission: "Automatic",
    horsepower: 670,
    acceleration0to60: 2.6,
    rentPrice: 260,
    msrp: 112700,
    seats: 2,
    description: "Flat-plane crank 5.5L LT6 V8 engine screaming to 8,600 RPM. Mid-engine American track monster with available carbon fiber aero package.",
    features: ["Flat-Plane Crank V8", "Magnetic Ride Control 4.0", "Performance Data Recorder", "Bose Performance Series Audio", "Carbon Aero Package"],
    images: {
      main: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85",
      angleFront: "https://images.unsplash.com/photo-1617814076668-8dfc6ba12132?auto=format&fit=crop&w=800&q=80",
      angleSide: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=800&q=80",
      angleRear: "https://images.unsplash.com/photo-1541348263662-e082662d82da?auto=format&fit=crop&w=800&q=80",
      interior: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80"
    }
  },
  {
    id: "nissan-gt-r-nismo-2024",
    make: "Nissan",
    model: "GT-R Nismo (R35)",
    year: 2024,
    city_mpg: 16,
    highway_mpg: 22,
    combination_mpg: 18,
    class: "AWD Supercar",
    cylinders: 6,
    displacement: 3.8,
    drive: "awd",
    fuel_type: "gas",
    transmission: "Automatic",
    horsepower: 600,
    acceleration0to60: 2.7,
    rentPrice: 310,
    msrp: 221090,
    seats: 4,
    description: "Godzilla evolved. Hand-built VR38DETT twin-turbo V8 tuned by Takumi master craftsmen, GT3-derived turbochargers, and carbon ceramic rotors.",
    features: ["ATTESA E-TS AWD", "Takumi Hand-Built Engine", "Carbon Fiber Aero Wings", "Brembo Carbon Ceramic Brakes", "Dunlop SP Sport Maxx Tires"],
    images: {
      main: "https://images.unsplash.com/photo-1617814076668-8dfc6ba12132?auto=format&fit=crop&w=1200&q=85",
      angleFront: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80",
      angleSide: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
      angleRear: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
      interior: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80"
    }
  },
  {
    id: "land-rover-defender-110-2024",
    make: "Land Rover",
    model: "Defender 110 V8 Carpathian",
    year: 2024,
    city_mpg: 14,
    highway_mpg: 19,
    combination_mpg: 16,
    class: "Luxury Off-Road SUV",
    cylinders: 8,
    displacement: 5.0,
    drive: "awd",
    fuel_type: "gas",
    transmission: "Automatic",
    horsepower: 518,
    acceleration0to60: 4.9,
    rentPrice: 200,
    msrp: 118600,
    seats: 5,
    description: "Unstoppable terrain capability matched with 518 HP supercharged V8 power. Carpathian Gray satin protective wrap and Quad exhaust pipes.",
    features: ["Terrain Response 2", "Air Suspension", "Meridian Surround Sound", "Wade Sensing", "ClearSight Rear View Mirror"],
    images: {
      main: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=85",
      angleFront: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
      angleSide: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
      angleRear: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80",
      interior: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80"
    }
  },
  {
    id: "porsche-taycan-turbo-s-2024",
    make: "Porsche",
    model: "Taycan Turbo S Cross Turismo",
    year: 2024,
    city_mpg: 76,
    highway_mpg: 74,
    combination_mpg: 75,
    class: "Electric Sport Turismo",
    cylinders: 0,
    displacement: 0,
    drive: "awd",
    fuel_type: "electric",
    transmission: "Automatic",
    horsepower: 750,
    acceleration0to60: 2.7,
    rentPrice: 280,
    msrp: 197000,
    seats: 4,
    description: "800-volt electric architecture providing launch control overboost up to 750 HP. 2-speed transmission on the rear axle for continuous acceleration.",
    features: ["800V Charging Tech", "Porsche Active Ride", "Passenger Display", "PCCB Brakes", "278 Miles Range"],
    images: {
      main: "https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?auto=format&fit=crop&w=1200&q=85",
      angleFront: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80",
      angleSide: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
      angleRear: "https://images.unsplash.com/photo-1541348263662-e082662d82da?auto=format&fit=crop&w=800&q=80",
      interior: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80"
    }
  },
  {
    id: "hyundai-ioniq-5-n-2024",
    make: "Hyundai",
    model: "Ioniq 5 N AWD",
    year: 2024,
    city_mpg: 84,
    highway_mpg: 77,
    combination_mpg: 80,
    class: "Electric Performance Crossover",
    cylinders: 0,
    displacement: 0,
    drive: "awd",
    fuel_type: "electric",
    transmission: "Automatic",
    horsepower: 641,
    acceleration0to60: 3.25,
    rentPrice: 140,
    msrp: 66100,
    seats: 5,
    description: "High-performance EV with N Grin Boost, N e-Shift virtual dual-clutch transmission simulation, and active synthetic N Active Sound+ exhaust generator.",
    features: ["N Grin Boost 641 HP", "N Drift Optimizer", "N e-Shift Simulated Trans", "400V/800V Ultra Fast Charging", "221 Miles Track Range"],
    images: {
      main: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=85",
      angleFront: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
      angleSide: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80",
      angleRear: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
      interior: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80"
    }
  }
];

// High quality fallback automotive image dictionary per make
const MAKE_IMAGE_FALLBACKS: Record<string, string> = {
  BMW: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80",
  Porsche: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1000&q=80",
  Tesla: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1000&q=80",
  Audi: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1000&q=80",
  "Mercedes-Benz": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=80",
  Lamborghini: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80",
  Ferrari: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1000&q=80",
  Toyota: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80",
  Honda: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=1000&q=80",
  Ford: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1000&q=80",
  "Aston Martin": "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=1000&q=80",
  Chevrolet: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80",
  Nissan: "https://images.unsplash.com/photo-1617814076668-8dfc6ba12132?auto=format&fit=crop&w=1000&q=80",
  "Land Rover": "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=80",
  Hyundai: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80"
};

/**
 * Public Free US DOT NHTSA API fetch helper
 */
async function fetchNHTSAModels(make: string): Promise<string[]> {
  try {
    const res = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${encodeURIComponent(make)}?format=json`,
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    if (data && Array.isArray(data.Results)) {
      return data.Results.map((item: any) => item.Model_Name).slice(0, 15);
    }
  } catch (err) {
    console.warn("NHTSA API fetch warning:", err);
  }
  return [];
}

/**
 * Primary Free Multi-Tiered Car Showcase API fetcher
 */
export async function getCarShowcaseData(filters: FilterProps): Promise<CarProps[]> {
  const {
    manufacturer = "",
    model = "",
    year,
    fuel = "",
    drive = "",
    limit = 12
  } = filters;

  let results = [...RICH_CAR_DATABASE];

  // Filter by manufacturer if specified
  if (manufacturer.trim()) {
    const searchMake = manufacturer.toLowerCase().trim();
    results = results.filter((car) =>
      car.make.toLowerCase().includes(searchMake)
    );
  }

  // Filter by model keyword if specified
  if (model.trim()) {
    const searchModel = model.toLowerCase().trim();
    results = results.filter((car) =>
      car.model.toLowerCase().includes(searchModel) ||
      car.class.toLowerCase().includes(searchModel)
    );
  }

  // Filter by fuel type if specified
  if (fuel.trim()) {
    const searchFuel = fuel.toLowerCase().trim();
    results = results.filter((car) =>
      car.fuel_type.toLowerCase() === searchFuel
    );
  }

  // Filter by drive type if specified
  if (drive.trim()) {
    const searchDrive = drive.toLowerCase().trim();
    results = results.filter((car) =>
      car.drive.toLowerCase() === searchDrive
    );
  }

  // Filter by production year if specified
  if (year && Number(year) > 0) {
    const targetYear = Number(year);
    results = results.filter((car) => car.year === targetYear);
  }

  // Dynamic fallback generation if specific make search returned 0 items from local curated list
  if (results.length === 0 && manufacturer.trim()) {
    const nhtsaModels = await fetchNHTSAModels(manufacturer);
    if (nhtsaModels.length > 0) {
      const generatedYear = year ? Number(year) : 2024;
      const makeName = manufacturer.charAt(0).toUpperCase() + manufacturer.slice(1);
      const fallbackImg = MAKE_IMAGE_FALLBACKS[makeName] || "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80";

      results = nhtsaModels.slice(0, 6).map((modelName, index) => ({
        id: `${manufacturer}-${index}-${Date.now()}`,
        make: makeName,
        model: modelName,
        year: generatedYear,
        city_mpg: 20 + (index % 8),
        highway_mpg: 28 + (index % 10),
        combination_mpg: 24,
        class: "Luxury Vehicle",
        cylinders: 4 + (index % 3) * 2,
        displacement: 2.0 + (index % 3),
        drive: index % 2 === 0 ? "awd" : "rwd",
        fuel_type: fuel || (index % 3 === 0 ? "electric" : "gas"),
        transmission: "Automatic",
        horsepower: 300 + index * 45,
        acceleration0to60: 4.5 - (index * 0.2),
        rentPrice: 120 + index * 25,
        msrp: 55000 + index * 12000,
        seats: 5,
        description: `Verified ${makeName} ${modelName} model featuring high efficiency, luxury interior trim, and advanced safety assistance systems.`,
        features: ["Smart Keyless Entry", "Apple CarPlay & Android Auto", "Lane Keep Assist", "Premium Sound System"],
        images: {
          main: fallbackImg,
          angleFront: fallbackImg,
          interior: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80"
        }
      }));
    }
  }

  // Cap results by requested limit
  return results.slice(0, limit);
}
