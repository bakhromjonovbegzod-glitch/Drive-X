export interface Brand {
  id: string;
  name: string;
  country: string;
  founded: number;
  founder: string;
  tagline: string;
  monogram: string;
  accent: string;
  famousModels: string[];
  innovations: string[];
  history: string;
}

export const BRANDS: Brand[] = [
  {
    id: 'bmw',
    name: 'BMW',
    country: 'Germany',
    founded: 1916,
    founder: 'Karl Rapp, Gustav Otto, Franz Josef Popp',
    tagline: 'Sheer Driving Pleasure',
    monogram: 'BMW',
    accent: '#1677FF',
    famousModels: ['BMW M5 F90', 'BMW M3 G80', 'BMW M1', 'BMW 2002 Turbo', 'BMW i8'],
    innovations: ['TwinPower Turbocharging', 'VALVETRONIC Variable Valve Lift', 'Carbon-Core CFRP Chassis', 'M xDrive Torque Vectoring'],
    history: 'Founded in Munich in 1916 as an aircraft engine manufacturer, Bayerische Motoren Werke transitioned to motorcycles in 1923 and automobiles in 1928. Over a century, BMW became synonymous with naturally balanced inline-six engines, near-50:50 weight distribution, and the iconic M motorsport division.'
  },
  {
    id: 'mercedes-benz',
    name: 'Mercedes-Benz',
    country: 'Germany',
    founded: 1926,
    founder: 'Karl Benz & Gottlieb Daimler',
    tagline: 'The Best or Nothing',
    monogram: 'MB',
    accent: '#38BDF8',
    famousModels: ['300 SL Gullwing', 'Mercedes-AMG C63', 'Mercedes-AMG GT', 'S-Class', 'CLK GTR'],
    innovations: ['1886 Patent-Motorwagen', 'Anti-lock Braking System (ABS)', 'Electronic Stability Program (ESP)', 'F1-Derived E PERFORMANCE Hybrid'],
    history: 'Tracing its lineage to Karl Benz’s 1886 Patent-Motorwagen—the world’s first internal-combustion automobile—Mercedes-Benz officially formed in 1926 through the merger of Benz & Cie. and Daimler-Motoren-Gesellschaft. Its AMG performance arm pioneers handcrafted V8s and Formula 1 electric-turbocharged hybrids.'
  },
  {
    id: 'audi',
    name: 'Audi',
    country: 'Germany',
    founded: 1909,
    founder: 'August Horch',
    tagline: 'Vorsprung durch Technik',
    monogram: 'AUDI',
    accent: '#60A5FA',
    famousModels: ['Audi Quattro', 'Audi RS7', 'Audi R8 V10', 'Audi RS6 Avant', 'Audi e-tron GT'],
    innovations: ['quattro Permanent All-Wheel Drive', 'ASF Aluminum Space Frame', 'TFSI Direct-Injection Turbo', 'HD Matrix Laser Lighting'],
    history: 'Established by engineer August Horch in Zwickau in 1909, Audi revolutionized rallying and road-car traction in 1980 with the quattro all-wheel-drive system. Modern Audi Sport models blend lightweight aluminum-carbon architectures with twin-turbocharged V8 performance.'
  },
  {
    id: 'porsche',
    name: 'Porsche',
    country: 'Germany',
    founded: 1931,
    founder: 'Ferdinand Porsche',
    tagline: 'Driven by Dreams',
    monogram: '911',
    accent: '#3B82F6',
    famousModels: ['Porsche 911 GT3 RS', 'Porsche 917K', 'Carrera GT', 'Porsche 918 Spyder', 'Taycan Turbo GT'],
    innovations: ['PDK Dual-Clutch Transmission', 'Active DRS Aerodynamics', '800-Volt EV Architecture', 'Porsche Ceramic Composite Brakes (PCCB)'],
    history: 'Founded as an engineering consultancy in Stuttgart in 1931 by Ferdinand Porsche, the marque launched its first sports car, the 356, in 1948 and the timeless rear-engine 911 in 1963. Porsche holds the record for the most overall victories at the 24 Hours of Le Mans.'
  },
  {
    id: 'ferrari',
    name: 'Ferrari',
    country: 'Italy',
    founded: 1939,
    founder: 'Enzo Ferrari',
    tagline: 'We Are the Competition',
    monogram: 'SF',
    accent: '#1677FF',
    famousModels: ['Ferrari F40', 'Ferrari 250 GTO', 'LaFerrari', 'Ferrari 458 Speciale', 'SF90 Stradale'],
    innovations: ['F1 Electro-Hydraulic Paddle Shift', 'Side Slip Control (SSC)', 'High-Revving Flat-Plane V8 & V12', 'Active Underbody Vortex Generators'],
    history: 'Born in Maranello out of Enzo Ferrari’s Scuderia Ferrari racing team, Ferrari built its first badged car—the 125 S with a 1.5L V12—in 1947. As the only constructor to compete in every Formula 1 World Championship season since 1950, Ferrari transfers track aerodynamics directly to road cars.'
  },
  {
    id: 'lamborghini',
    name: 'Lamborghini',
    country: 'Italy',
    founded: 1963,
    founder: 'Ferruccio Lamborghini',
    tagline: 'Expect the Unexpected',
    monogram: 'LMB',
    accent: '#00E5FF',
    famousModels: ['Miura', 'Countach', 'Diablo', 'Lamborghini Aventador', 'Huracán Tecnica'],
    innovations: ['Transverse Mid-Engine Supercar Layout (Miura)', 'Forged Carbon Fiber Composites', 'LDVI Predictive Vehicle Dynamics', 'ALA Active Aerodynamics'],
    history: 'Ferruccio Lamborghini established Automobili Lamborghini in Sant’Agata Bolognese in 1963 with a mission to build the ultimate grand tourer. The 1966 Miura invented the mid-engine supercar blueprint, followed by wedge-shaped V12 icons from the Countach to the carbon-monocoque Aventador.'
  },
  {
    id: 'toyota',
    name: 'Toyota',
    country: 'Japan',
    founded: 1937,
    founder: 'Kiichiro Toyoda',
    tagline: 'Let’s Go Places',
    monogram: 'TYT',
    accent: '#2563EB',
    famousModels: ['Toyota 2000GT', 'Supra MK4 & MK5', 'AE86 Sprinter Trueno', 'GR Yaris', 'Toyota Prius'],
    innovations: ['Toyota Production System (Lean)', 'Hybrid Synergy Drive (1997)', 'Gazoo Racing Rally Homologation', 'Solid-State Battery Research'],
    history: 'Spun out from Toyoda Automatic Loom Works in 1937, Toyota became a global benchmark for reliability, manufacturing precision, and hybrid electrification with the 1997 Prius. Through Toyota Gazoo Racing, it also crafts purist icons like the GR Supra and GR Yaris.'
  },
  {
    id: 'tesla',
    name: 'Tesla',
    country: 'United States',
    founded: 2003,
    founder: 'Martin Eberhard, Marc Tarpenning, Elon Musk, JB Straubel, Ian Wright',
    tagline: 'Accelerating Sustainable Energy',
    monogram: 'TSL',
    accent: '#38BDF8',
    famousModels: ['Model S Plaid', 'Model 3 Performance', 'Roadster', 'Model X', 'Cybertruck'],
    innovations: ['Tri-Motor Carbon-Sleeved Electric Drive', 'Gigacasting Structural Battery Packs', 'Over-the-Air (OTA) Firmware Updates', 'Supercharger High-Speed Network'],
    history: 'Founded in Silicon Valley in 2003, Tesla proved electric vehicles could outperform internal-combustion sports cars starting with the 2008 Roadster. Its 1,020-hp Model S Plaid and structural megacasting techniques reshaped global EV engineering.'
  },
  {
    id: 'chevrolet',
    name: 'Chevrolet',
    country: 'United States',
    founded: 1911,
    founder: 'Louis Chevrolet & William C. Durant',
    tagline: 'Find New Roads',
    monogram: 'CHV',
    accent: '#1D4ED8',
    famousModels: ['Corvette Z06 (C8)', 'Camaro ZL1 1LE', 'Chevelle SS 454', 'Bel Air', 'Corvette Stingray'],
    innovations: ['Small-Block V8 Architecture (1955)', 'Magnetic Ride Control Dampers', 'Flat-Plane Crank LT6 V8', 'Mid-Engine Corvette Platform'],
    history: 'Co-founded by Swiss race driver Louis Chevrolet in Detroit in 1911, Chevrolet democratized V8 performance with the legendary 1955 Small-Block V8. The Corvette evolved from a 1953 fiberglass roadster into a world-beating mid-engine track machine.'
  },
  {
    id: 'volkswagen',
    name: 'Volkswagen',
    country: 'Germany',
    founded: 1937,
    founder: 'German Labour Front (engineering led by Ferdinand Porsche)',
    tagline: 'Das Auto',
    monogram: 'VW',
    accent: '#1677FF',
    famousModels: ['Golf GTI & Golf R', 'Beetle', 'Scirocco', 'Phaeton W12', 'ID.R Electric Prototype'],
    innovations: ['Hot-Hatch Architecture (Golf GTI)', 'DSG Dual-Clutch Gearbox', 'VR6 Narrow-Angle Engine', 'MEB Modular Electric Platform'],
    history: 'Founded in Wolfsburg in 1937 to create an accessible people’s car, Volkswagen went on to invent the modern hot hatchback with the 1976 Golf GTI and pioneer mass-market DSG dual-clutch transmissions and modular EV platforms.'
  }
];
