export interface KnowledgeTopic {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  deepDive: string;
  specs: { label: string; value: string }[];
  diagramType: 'engine' | 'transmission' | 'turbo' | 'hybrid' | 'ev' | 'drivetrain' | 'brakes' | 'suspension' | 'aero';
}

export const KNOWLEDGE_TOPICS: KnowledgeTopic[] = [
  {
    id: 'engine-types',
    title: 'Engine Types',
    subtitle: 'From Inline-4 to Naturally Aspirated V12',
    category: 'Powertrain',
    summary: 'Cylinder arrangement dictates balance, packaging, acoustic character, and rev ceiling.',
    deepDive: 'Internal combustion engines convert chemical energy into rotational torque through synchronized four-stroke cycles (intake, compression, power, exhaust). Inline layouts offer compact simplicity and natural balance in six-cylinder form, while V-angles shorten engine length to fit high-displacement eight-, ten-, and twelve-cylinder powerplants.',
    specs: [
      { label: 'Thermal Efficiency', value: '38% – 44% (Modern Direct Injection)' },
      { label: 'Peak Rev Range', value: '6,500 – 9,500 RPM' },
      { label: 'Primary Layouts', value: 'Inline, V-Bank, Boxer, Wankel' }
    ],
    diagramType: 'engine'
  },
  {
    id: 'transmission-systems',
    title: 'Transmission Systems',
    subtitle: 'DCT, Torque-Converter & Manual Gearboxes',
    category: 'Drivetrain',
    summary: 'Multi-ratio gearboxes multiply engine torque and keep powerplants inside their optimal RPM band.',
    deepDive: 'A Dual-Clutch Transmission (DCT/PDK) uses two concentric input shafts—one for odd gears and one for even gears—pre-selecting the next ratio for sub-50 millisecond shifts without torque interruption. Modern 8-speed planetary automatics pair lock-up clutches with rapid hydraulic actuation for both track durability and cruising efficiency.',
    specs: [
      { label: 'DCT Shift Time', value: '< 50 milliseconds' },
      { label: 'Common Ratios', value: '6-Speed Manual / 7–9 Speed Auto' },
      { label: 'Mechanical Efficiency', value: 'Up to 96% (Dry/Wet DCT)' }
    ],
    diagramType: 'transmission'
  },
  {
    id: 'turbocharging',
    title: 'Turbocharging',
    subtitle: 'Forced Induction & Electric Exhaust Turbos',
    category: 'Forced Induction',
    summary: 'Exhaust gas energy spins a compressor turbine to pack denser oxygen into the combustion chamber.',
    deepDive: 'By recovering waste kinetic and thermal energy from exhaust gases, a turbocharger compresses intake air up to 2.6+ bar of boost pressure. Twin-scroll housings separate exhaust pulses to reduce turbo lag, while modern Formula 1–derived e-turbos place an electric motor directly on the turbo shaft for instant zero-RPM spool.',
    specs: [
      { label: 'Turbine Speed', value: '120,000 – 250,000 RPM' },
      { label: 'Peak Boost Pressure', value: '1.2 – 2.6 bar' },
      { label: 'Key Benefit', value: 'High torque density from smaller displacement' }
    ],
    diagramType: 'turbo'
  },
  {
    id: 'hybrid-technology',
    title: 'Hybrid Technology',
    subtitle: 'MHEV, PHEV & Performance E-Axles',
    category: 'Electrification',
    summary: 'Electric motors fill low-RPM torque gaps while capturing kinetic energy under braking.',
    deepDive: 'Performance hybrids pair high-output combustion engines with axial-flux or permanent-magnet electric motors. Under deceleration, regenerative braking converts kinetic energy into stored electrical charge, then deploys instant torque during corner exits or gearshifts to eliminate power interruptions.',
    specs: [
      { label: 'System Voltages', value: '48V (Mild) / 400V–800V (PHEV)' },
      { label: 'Motor Response', value: '< 5 ms instant torque' },
      { label: 'Energy Recovery', value: 'Up to 250+ kW regen' }
    ],
    diagramType: 'hybrid'
  },
  {
    id: 'electric-vehicles',
    title: 'Electric Vehicles',
    subtitle: '800V Architectures & Torque Vectoring',
    category: 'Electrification',
    summary: 'High-voltage battery packs and multi-motor inverters deliver instantaneous acceleration with zero tailpipe emissions.',
    deepDive: 'Modern EV platforms integrate structural lithium-ion or LFP battery packs into the floorpan, lowering the center of gravity below the wheel hubs. Silicon-carbide (SiC) inverters convert DC battery power into three-phase AC at over 98% efficiency, enabling dual- and tri-motor independent wheel torque vectoring.',
    specs: [
      { label: 'Platform Voltage', value: '400V – 800V+' },
      { label: 'Fast Charging', value: 'Up to 350 kW DC' },
      { label: 'Drivetrain Efficiency', value: '~90% wheel-to-grid' }
    ],
    diagramType: 'ev'
  },
  {
    id: 'awd-rwd-fwd',
    title: 'AWD vs RWD vs FWD',
    subtitle: 'Traction Physics & Weight Transfer',
    category: 'Drivetrain',
    summary: 'How power reaches the tarmac defines steering feel, launch traction, and cornering balance.',
    deepDive: 'Front-Wheel Drive (FWD) maximizes cabin packaging and predictable understeer recovery. Rear-Wheel Drive (RWD) separates steering duties at the front axle from propulsion at the rear, delivering pure steering feedback. All-Wheel Drive (AWD) dynamically splits torque across all four contact patches for all-weather launch grip.',
    specs: [
      { label: 'RWD Advantage', value: 'Pure steering & balanced chassis' },
      { label: 'AWD Advantage', value: 'Maximum launch & wet-road traction' },
      { label: 'FWD Advantage', value: 'Compact packaging & efficiency' }
    ],
    diagramType: 'drivetrain'
  },
  {
    id: 'braking-systems',
    title: 'Braking Systems',
    subtitle: 'Carbon-Ceramic Rotors & Monoblock Calipers',
    category: 'Chassis',
    summary: 'High-performance braking converts extreme kinetic energy into heat without thermal fade.',
    deepDive: 'Carbon-ceramic brake discs (CCB/PCCB) embed silicon-carbide matrices with carbon fibers, cutting unsprung rotating mass by up to 50% compared to cast-iron rotors while withstanding temperatures exceeding 1,000°C. Multi-piston aluminum monoblock calipers clamp evenly across 400mm+ rotors.',
    specs: [
      { label: 'Thermal Ceiling', value: '> 1,000°C fade resistance' },
      { label: 'Unsprung Savings', value: '~20–34 kg per vehicle' },
      { label: '100–0 km/h Distance', value: '28 – 32 meters' }
    ],
    diagramType: 'brakes'
  },
  {
    id: 'suspension-systems',
    title: 'Suspension Systems',
    subtitle: 'Double Wishbone, Multi-Link & Active Dampers',
    category: 'Chassis',
    summary: 'Suspension geometry keeps tire contact patches perpendicular to the road under cornering G-forces.',
    deepDive: 'Double-wishbone and multi-link architectures control camber gain as the wheel compresses, maximizing lateral grip. Magnetorheological and active hydraulic dampers adjust damping viscosity in milliseconds based on steering angle, vertical wheel accelerometers, and road surface scans.',
    specs: [
      { label: 'Adjustment Rate', value: 'Up to 1,000 Hz sensor polling' },
      { label: 'Front Geometry', value: 'Double Wishbone / MacPherson' },
      { label: 'Active Roll Control', value: '48V or hydraulic anti-roll' }
    ],
    diagramType: 'suspension'
  },
  {
    id: 'aerodynamics',
    title: 'Automotive Aerodynamics',
    subtitle: 'Venturi Tunnels, Downforce & Active DRS',
    category: 'Aerodynamics',
    summary: 'Sculpting airflow reduces drag at speed while generating hundreds of kilograms of downforce.',
    deepDive: 'Underbody Venturi tunnels accelerate air beneath the flat floor, creating a low-pressure zone that sucks the car onto the tarmac with minimal drag penalty. Active rear wings and front diffusers adjust angle of attack in real time—high downforce in corners, low-drag DRS on straights.',
    specs: [
      { label: 'Drag Coefficient (Cd)', value: '0.20 (EV) – 0.39 (Track Aero)' },
      { label: 'Peak Downforce', value: 'Up to 860 kg @ 285 km/h (GT3 RS)' },
      { label: 'Key Elements', value: 'Splitter, Venturi Floor, Diffuser, Wing' }
    ],
    diagramType: 'aero'
  }
];

export interface EngineSpec {
  id: string;
  name: string;
  config: string;
  howItWorks: string;
  advantages: string[];
  disadvantages: string[];
  famousCars: string[];
  firingOrder: string;
  balanceRating: string;
}

export const ENGINE_LAB: EngineSpec[] = [
  {
    id: 'i4',
    name: 'Inline-4',
    config: '4 cylinders in a single vertical bank (180° crank throws)',
    howItWorks: 'Four pistons share a single cylinder head and crankshaft. Outer pistons (1 & 4) move opposite to inner pistons (2 & 3), firing once every 180° of crankshaft rotation.',
    advantages: ['Compact packaging & low weight', 'Lower friction and high fuel efficiency', 'Handles high turbo boost reliably'],
    disadvantages: ['Secondary vertical vibration without balance shafts', 'Limited natural acoustic depth'],
    famousCars: ['Mercedes-AMG C63 S E PERFORMANCE', 'Honda Civic Type R', 'Volkswagen Golf R'],
    firingOrder: '1 - 3 - 4 - 2',
    balanceRating: 'Good (with balance shafts)'
  },
  {
    id: 'i6',
    name: 'Inline-6',
    config: '6 cylinders in a single straight row (120° crank throws)',
    howItWorks: 'Pistons move in mirrored pairs (1-6, 2-5, 3-4) at 120° intervals, canceling both primary and secondary forces without needing balance shafts.',
    advantages: ['Inherent primary & secondary mechanical balance', 'Silky-smooth high-RPM delivery', 'Single cylinder head simplifies turbo plumbing'],
    disadvantages: ['Long engine block requires longitudinal bay', 'Higher crankshaft torsional length'],
    famousCars: ['BMW M3 G80', 'Toyota GR Supra MK5', 'BMW M4 Competition'],
    firingOrder: '1 - 5 - 3 - 6 - 2 - 4',
    balanceRating: 'Perfect Natural Balance'
  },
  {
    id: 'v6',
    name: 'V6',
    config: '2 banks of 3 cylinders arranged at 60° or 90° V-angle',
    howItWorks: 'Two short three-cylinder banks share a compact crankshaft, allowing high structural stiffness and short engine-bay packaging for front- or mid-engine cars.',
    advantages: ['Very compact length for tight engine bays', 'High block rigidity for twin-turbocharging', 'Lower center of gravity than tall inline blocks'],
    disadvantages: ['Requires dual cylinder heads & timing sets', 'Uneven rocking couple unless offset crankpins are used'],
    famousCars: ['Nissan GT-R R35', 'Ferrari 296 GTB', 'Alfa Romeo Giulia Quadrifoglio'],
    firingOrder: '1 - 2 - 3 - 4 - 5 - 6',
    balanceRating: 'Very Good (60° bank)'
  },
  {
    id: 'v8',
    name: 'V8',
    config: '2 banks of 4 cylinders at 90° (Cross-plane or Flat-plane crank)',
    howItWorks: 'Eight cylinders fire every 90° of crank rotation. Cross-plane cranks (90° throws) produce the classic deep V8 rumble, while flat-plane cranks (180° throws) rev higher with reduced rotational inertia.',
    advantages: ['Tremendous torque-to-size ratio', '90° bank angle fits wide turbo "hot-V" layouts', 'Iconic exhaust note'],
    disadvantages: ['Higher fuel consumption', 'Wider packaging than inline engines'],
    famousCars: ['BMW M5 F90', 'Audi RS7 Performance', 'Chevrolet Corvette Z06'],
    firingOrder: '1 - 5 - 4 - 8 - 6 - 3 - 7 - 2',
    balanceRating: 'Excellent (Cross-plane)'
  },
  {
    id: 'v10',
    name: 'V10',
    config: '2 banks of 5 cylinders at 72° or 90° V-angle',
    howItWorks: 'Ten cylinders fire every 72° of crankshaft rotation, creating an unmistakable high-frequency Formula 1–inspired wail and razor-sharp throttle response.',
    advantages: ['Exhilarating 8,500+ RPM scream', 'Lighter and shorter than a V12', 'Instantaneous naturally aspirated throttle'],
    disadvantages: ['Complex odd-firing balance acoustics', 'High manufacturing cost'],
    famousCars: ['Lamborghini Huracán', 'Audi R8 V10', 'Porsche Carrera GT', 'BMW M5 E60'],
    firingOrder: '1 - 6 - 5 - 10 - 2 - 7 - 3 - 8 - 4 - 9',
    balanceRating: 'High-RPM Dynamic'
  },
  {
    id: 'v12',
    name: 'V12',
    config: '2 banks of 6 cylinders at 60° or 65° V-angle',
    howItWorks: 'Two naturally balanced inline-6 banks share a single crankshaft, firing every 60° so power strokes overlap continuously for turbine-like smoothness.',
    advantages: ['Perfect primary & secondary balance', 'Unmatched acoustic crescendo', 'Continuous overlapping power delivery'],
    disadvantages: ['Heavy, long, and thermally demanding', 'High fuel consumption and complexity'],
    famousCars: ['Lamborghini Aventador', 'Ferrari 812 Competizione', 'Pagani Utopia'],
    firingOrder: '1 - 7 - 5 - 11 - 3 - 9 - 6 - 12 - 2 - 8 - 4 - 10',
    balanceRating: 'Ultimate Perfection'
  },
  {
    id: 'boxer',
    name: 'Boxer Engine',
    config: 'Horizontally opposed cylinders (180° flat layout)',
    howItWorks: 'Opposing pistons move inward and outward simultaneously like a boxer’s fists, canceling horizontal forces while keeping the engine’s mass ultra-low near the chassis floor.',
    advantages: ['Ultra-low center of gravity', 'Natural horizontal force cancellation', 'Distinctive mechanical soundtrack'],
    disadvantages: ['Wide lateral footprint', 'Dual cylinder heads complicate exhaust routing'],
    famousCars: ['Porsche 911 GT3 RS', 'Porsche 718 Cayman GT4 RS', 'Subaru WRX STI'],
    firingOrder: '1 - 6 - 2 - 4 - 3 - 5 (Flat-6)',
    balanceRating: 'Excellent'
  },
  {
    id: 'rotary',
    name: 'Rotary (Wankel)',
    config: 'Triangular rotor orbiting inside an epitrochoid housing',
    howItWorks: 'Instead of reciprocating pistons, a triangular rotor spins eccentrically, creating three separate combustion chambers that perform intake, compression, ignition, and exhaust in one smooth rotation.',
    advantages: ['Ultra-compact & lightweight', 'Minimal moving parts & high RPM ceiling (9,000+)', 'Zero reciprocating inertia'],
    disadvantages: ['Apex seal wear & oil consumption', 'Lower thermal efficiency & low-end torque'],
    famousCars: ['Mazda RX-7 (FD3S)', 'Mazda 787B Le Mans', 'Mazda RX-8'],
    firingOrder: 'Continuous 3-face rotor cycle',
    balanceRating: 'Smooth Rotational'
  }
];

export interface HistoryMilestone {
  era: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  innovation: string;
}

export const HISTORY_MILESTONES: HistoryMilestone[] = [
  {
    era: 'Genesis',
    year: '1886',
    title: 'First Benz Patent-Motorwagen',
    subtitle: 'The Birth of the Automobile',
    description: 'Karl Benz patented the three-wheeled Motorwagen in Mannheim, Germany—powered by a single-cylinder 954 cc four-stroke engine producing 0.75 horsepower.',
    innovation: 'Integrated internal-combustion chassis'
  },
  {
    era: 'Mass Mobility',
    year: '1908',
    title: 'Ford Model T',
    subtitle: 'Assembly Line Revolution',
    description: 'Henry Ford introduced standardized interchangeable parts and the moving assembly line, transforming the automobile from a bespoke luxury into global transportation.',
    innovation: 'Moving assembly line production'
  },
  {
    era: 'Cubic Inches',
    year: '1960s',
    title: 'Muscle Car Era',
    subtitle: 'Big-Block V8 Dominance',
    description: 'American and European manufacturers dropped massive V8 engines into mid-size coupes, celebrating raw mechanical torque, iconic styling, and straight-line drama.',
    innovation: 'High-displacement V8 performance'
  },
  {
    era: 'Forced Induction',
    year: '1980s',
    title: 'Turbo Performance Era',
    subtitle: 'Group B Rally & Street Icons',
    description: 'Turbocharging and all-wheel drive matured in Group B rallying and Formula 1, birthing street legends like the Audi Quattro, Porsche 959, and Ferrari F40.',
    innovation: 'Turbocharging + AWD synergy'
  },
  {
    era: 'Digital Aero',
    year: '2000s',
    title: 'Modern Supercars',
    subtitle: 'Carbon Monocoques & Dual-Clutch Era',
    description: 'Paddle-shift dual-clutch gearboxes, carbon-fiber tubs, and active aerodynamics shattered the 350 km/h and 1,000-horsepower barriers.',
    innovation: 'Carbon composites & DCT gearboxes'
  },
  {
    era: 'Electrification',
    year: '2020s',
    title: 'Electric Vehicle Revolution',
    subtitle: '800V Architecture & Hybrid Hypercars',
    description: 'Silicon-carbide inverters, tri-motor torque vectoring, and F1-derived hybrid powertrains deliver sub-2.5-second acceleration alongside software-defined cockpits.',
    innovation: 'High-voltage EV & hybrid telemetry'
  }
];

export interface DidYouKnowFact {
  id: string;
  question: string;
  shortAnswer: string;
  explanation: string;
  metric: string;
}

export const DID_YOU_KNOW_FACTS: DidYouKnowFact[] = [
  {
    id: 'turbo',
    question: 'Why do some engines use turbochargers?',
    shortAnswer: 'To recycle exhaust energy into extra oxygen and power.',
    explanation: 'Roughly one-third of fuel energy exits an engine as hot exhaust gas. A turbocharger uses that escaping gas to spin a compressor wheel up to 200,000+ RPM, forcing denser air into the cylinders so a 3.0L engine can produce the power of a 5.0L V8.',
    metric: '+40% Power Density'
  },
  {
    id: 'inline6',
    question: 'Why does BMW use inline-six engines?',
    shortAnswer: 'Because a straight-six is naturally balanced in both primary and secondary forces.',
    explanation: 'Unlike a V6 or inline-4, an inline-six has six pistons moving in mirrored pairs at 120° crank intervals. Every upward and downward inertia cancels out completely, delivering signature turbine-like smoothness up to 7,500+ RPM without heavy balance shafts.',
    metric: '120° Firing Balance'
  },
  {
    id: 'v12',
    question: 'What makes a V12 engine special?',
    shortAnswer: 'Continuous overlapping power strokes every 60° of crankshaft rotation.',
    explanation: 'A V12 essentially fuses two perfectly balanced inline-six engines onto one crankshaft. Because a cylinder fires every 60°, there is never a gap between combustion pulses—creating effortless torque, zero vibration, and an unmistakable operatic exhaust note.',
    metric: '60° Firing Interval'
  },
  {
    id: 'aero',
    question: 'Why are supercars so aerodynamic?',
    shortAnswer: 'Air resistance squares with speed—above 200 km/h, aero governs grip and stability.',
    explanation: 'Doubling vehicle speed quadruples aerodynamic drag. Supercars channel air through front splitters, underbody Venturi tunnels, and rear diffusers to create negative lift (downforce), pressing tires onto the asphalt with hundreds of kilograms of extra grip without adding physical weight.',
    metric: '4× Drag at 2× Speed'
  }
];
