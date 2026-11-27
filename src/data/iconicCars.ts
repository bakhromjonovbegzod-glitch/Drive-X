export interface IconicCar {
  id: string;
  name: string;
  brand: string;
  era: string;
  engine: string;
  hp: string;
  hpNum: number;
  torque: string;
  torqueNum: number;
  accel: string;
  accelNum: number;
  topSpeed: string;
  topSpeedNum: number;
  weight: string;
  weightNum: number;
  transmission: string;
  drivetrain: string;
  image: string;
  interior: string;
  introduction: string;
  history: string;
  technicalExplanation: string;
  interestingFacts: string[];
}

export const ICONIC_CARS: IconicCar[] = [
  {
    id: 'bmw-m5-f90',
    name: 'BMW M5 F90',
    brand: 'BMW',
    era: '2017–2023 • Sixth Generation',
    engine: '4.4L TwinPower Turbo V8 (S63)',
    hp: '600–635 hp',
    hpNum: 635,
    torque: '750 Nm',
    torqueNum: 750,
    accel: '3.4 sec',
    accelNum: 3.4,
    topSpeed: '305 km/h',
    topSpeedNum: 305,
    weight: '1,895 kg',
    weightNum: 1895,
    transmission: '8-Speed M Steptronic',
    drivetrain: 'M xDrive AWD (with 2WD mode)',
    image: '/images/bmw-m5.jpg',
    interior: '/images/interior-cockpit.jpg',
    introduction: 'The F90 generation marked a watershed moment for the executive super-sedan, introducing all-wheel drive to the M5 lineage for the first time.',
    history: 'Unveiled in 2017, the F90 replaced the dual-clutch transmission of the F10 with a faster, torque-capable 8-speed Steptronic automatic and M xDrive—allowing drivers to switch from all-wheel traction to pure rear-wheel drift dynamics.',
    technicalExplanation: 'Its S63 4.4L V8 places two twin-scroll turbochargers inside the 90° "hot-V" between cylinder banks, shortening exhaust paths for razor-sharp boost response.',
    interestingFacts: [
      'First M5 ever equipped with selectable M xDrive all-wheel drive.',
      'The M5 CS variant shed 70 kg using CFRP hood, roof, and bucket seats.',
      'Reaches 200 km/h from standstill in just 11.1 seconds.'
    ]
  },
  {
    id: 'bmw-m3-g80',
    name: 'BMW M3 G80',
    brand: 'BMW',
    era: '2021–Present • Sixth Generation',
    engine: '3.0L Twin-Turbo Inline-6 (S58)',
    hp: '510–530 hp',
    hpNum: 530,
    torque: '650 Nm',
    torqueNum: 650,
    accel: '3.5 sec',
    accelNum: 3.5,
    topSpeed: '290 km/h',
    topSpeedNum: 290,
    weight: '1,780 kg',
    weightNum: 1780,
    transmission: '8-Speed M Steptronic / 6-Speed Manual',
    drivetrain: 'M xDrive AWD / RWD',
    image: '/images/bmw-m4.jpg',
    interior: '/images/interior-cockpit.jpg',
    introduction: 'Built around the motorsport-bred S58 straight-six, the G80 M3 blends everyday four-door usability with Nürburgring-honed chassis rigidity.',
    history: 'Launched in 2021, the G80 introduced extensive underbody bracing, staggered 19/20-inch wheels, and a 10-stage M Traction Control system calibrated for track precision.',
    technicalExplanation: 'The S58 engine utilizes a 3D-printed cylinder head core for optimized coolant routing and twin mono-scroll turbochargers capable of spinning past 7,200 RPM.',
    interestingFacts: [
      'Cylinder head cooling ducts are manufactured using additive 3D printing.',
      'Includes a built-in M Drift Analyzer that scores slip angle and duration.',
      'Shares its S58 engine architecture with the BMW M4 GT3 race car.'
    ]
  },
  {
    id: 'amg-c63',
    name: 'Mercedes-AMG C63',
    brand: 'Mercedes-Benz',
    era: '2023–Present • W206 E PERFORMANCE',
    engine: '2.0L Turbo Inline-4 + Rear Electric Motor',
    hp: '671 hp',
    hpNum: 671,
    torque: '1,020 Nm',
    torqueNum: 1020,
    accel: '3.4 sec',
    accelNum: 3.4,
    topSpeed: '280 km/h',
    topSpeedNum: 280,
    weight: '2,111 kg',
    weightNum: 2111,
    transmission: '9-Speed AMG SPEEDSHIFT MCT',
    drivetrain: 'AMG Performance 4MATIC+',
    image: '/images/amg-gt.jpg',
    interior: '/images/interior-cockpit.jpg',
    introduction: 'The most radical engineering shift in AMG history: replacing a V8 with the world’s most powerful production four-cylinder paired with Formula 1 hybrid tech.',
    history: 'Following the iconic naturally aspirated 6.2L V8 (W204) and twin-turbo 4.0L V8 (W205), the W206 C63 S E PERFORMANCE debuted an electrified drivetrain co-developed with Mercedes-AMG High Performance Powertrains in Brixworth.',
    technicalExplanation: 'An electric motor mounted directly on the turbocharger shaft eliminates lag by pre-spinning the compressor before exhaust pressure arrives, while a 150 kW rear e-motor drives a two-speed axle.',
    interestingFacts: [
      'Produces 476 hp from just 2.0 liters—a record specific output for a series production engine.',
      'Features a direct-cooled 6.1 kWh performance battery inspired by F1 cells.',
      'Delivers 1,020 Nm of combined system torque.'
    ]
  },
  {
    id: 'porsche-911-gt3-rs',
    name: 'Porsche 911 GT3 RS',
    brand: 'Porsche',
    era: '2022–Present • 992 Generation',
    engine: '4.0L Naturally Aspirated Flat-6',
    hp: '518 hp (525 PS)',
    hpNum: 518,
    torque: '465 Nm',
    torqueNum: 465,
    accel: '3.2 sec',
    accelNum: 3.2,
    topSpeed: '296 km/h',
    topSpeedNum: 296,
    weight: '1,450 kg',
    weightNum: 1450,
    transmission: '7-Speed PDK Dual-Clutch',
    drivetrain: 'Rear-Wheel Drive',
    image: '/images/porsche-911.jpg',
    interior: '/images/interior-cockpit.jpg',
    introduction: 'A street-legal GT3 race car engineered around active Formula 1–style aerodynamics and a 9,000-RPM naturally aspirated flat-six.',
    history: 'Revealed in 2022, the 992 GT3 RS sacrificed its front luggage compartment to house a single massive central radiator, freeing the nose and flanks for active aero blades.',
    technicalExplanation: 'Its swan-neck rear wing includes a hydraulic Drag Reduction System (DRS) that flattens on straights and acts as an airbrake under heavy deceleration, generating 860 kg of total downforce at 285 km/h.',
    interestingFacts: [
      'Lapped the 20.8 km Nürburgring Nordschleife in 6:49.328.',
      'Steering wheel features four rotary dials for compression, rebound, diff, and traction.',
      'CFRP doors, fenders, and roof keep DIN weight at just 1,450 kg.'
    ]
  },
  {
    id: 'nissan-gtr-r35',
    name: 'Nissan GT-R R35',
    brand: 'Nissan',
    era: '2007–2024 • R35 Era',
    engine: '3.8L Twin-Turbo V6 (VR38DETT)',
    hp: '570–600 hp',
    hpNum: 600,
    torque: '637 Nm',
    torqueNum: 637,
    accel: '2.8 sec',
    accelNum: 2.8,
    topSpeed: '315 km/h',
    topSpeedNum: 315,
    weight: '1,752 kg',
    weightNum: 1752,
    transmission: '6-Speed BorgWarner Dual-Clutch',
    drivetrain: 'ATTESA E-TS AWD',
    image: '/images/nissan-gtr.jpg',
    interior: '/images/interior-cockpit.jpg',
    introduction: 'Nicknamed "Godzilla", the R35 GT-R rewrote the supercar rulebook by combining hand-built twin-turbo V6 power with predictive all-wheel-drive telemetry.',
    history: 'Debuting at the 2007 Tokyo Motor Show, the R35 broke away from the Skyline sedan platform to become a dedicated transaxle supercar continuously refined over 17 years.',
    technicalExplanation: 'Each VR38DETT engine is hand-assembled in a clean-room by one of Nissan’s master Takumi craftsmen, feeding a rear-mounted dual-clutch transaxle for balanced weight distribution.',
    interestingFacts: [
      'Only a handful of Takumi master technicians are certified to sign each engine plaque.',
      'Uses a dual-driveshaft layout: one sends power to the rear transaxle, a second sends torque back forward.',
      'Polyphony Digital (Gran Turismo creators) helped design its multi-function telemetry display.'
    ]
  },
  {
    id: 'toyota-supra-mk5',
    name: 'Toyota Supra MK5',
    brand: 'Toyota',
    era: '2019–Present • A90 / J29',
    engine: '3.0L Twin-Scroll Turbo Inline-6 (B58)',
    hp: '383 hp',
    hpNum: 383,
    torque: '500 Nm',
    torqueNum: 500,
    accel: '4.1 sec',
    accelNum: 4.1,
    topSpeed: '250 km/h',
    topSpeedNum: 250,
    weight: '1,520 kg',
    weightNum: 1520,
    transmission: '8-Speed ZF Automatic / 6-Speed Manual',
    drivetrain: 'Rear-Wheel Drive',
    image: '/images/toyota-supra.jpg',
    interior: '/images/interior-cockpit.jpg',
    introduction: 'Reviving a JDM legend after a 17-year hiatus, the fifth-generation GR Supra pairs a short wheelbase with classic straight-six rear-wheel-drive dynamics.',
    history: 'Co-developed with BMW’s platform architecture and tuned independently by Toyota Gazoo Racing, the A90 Supra honors the 2000GT and A80 Supra with a double-bubble roof and wide rear haunches.',
    technicalExplanation: 'Achieving a strict 50:50 front-to-rear weight distribution and a golden wheelbase-to-track ratio of 1.55, the MK5 delivers agile mid-corner rotation.',
    interestingFacts: [
      'Features a "double-bubble" roof inspired by the 1967 Toyota 2000GT.',
      'Offers an enthusiast-developed 6-speed intelligent manual transmission (iMT).',
      'Its wheelbase is shorter than the smaller Toyota GR86 for sharper turn-in.'
    ]
  },
  {
    id: 'audi-rs7',
    name: 'Audi RS7',
    brand: 'Audi',
    era: '2020–Present • C8 Performance',
    engine: '4.0L Twin-Turbo V8 Mild Hybrid',
    hp: '621 hp (630 PS)',
    hpNum: 621,
    torque: '850 Nm',
    torqueNum: 850,
    accel: '3.4 sec',
    accelNum: 3.4,
    topSpeed: '305 km/h',
    topSpeedNum: 305,
    weight: '2,065 kg',
    weightNum: 2065,
    transmission: '8-Speed Tiptronic',
    drivetrain: 'quattro Permanent AWD',
    image: '/images/audi-rs7.jpg',
    interior: '/images/interior-cockpit.jpg',
    introduction: 'Combining fastback grand-touring elegance with flared RS widebody arches, the RS7 Performance delivers relentless all-weather autobahn velocity.',
    history: 'The C8 RS7 Sportback evolved Audi’s 4.0 TFSI biturbo platform with a 48-volt mild-hybrid system, cylinder-on-demand deactivation, and rear-axle steering.',
    technicalExplanation: 'Its mechanical self-locking center differential splits torque 40:60 front-to-rear under normal driving, capable of sending up to 85% to the rear axle when traction demands.',
    interestingFacts: [
      'Performance trim saves 8 kg by reducing acoustic insulation for rawer V8 sound.',
      '440mm carbon-ceramic front brake discs reduce unsprung mass by 34 kg.',
      'Dynamic all-wheel steering turns rear wheels opposite to fronts at low speeds.'
    ]
  },
  {
    id: 'lamborghini-aventador',
    name: 'Lamborghini Aventador',
    brand: 'Lamborghini',
    era: '2011–2022 • LP 780-4 Ultimae',
    engine: '6.5L Naturally Aspirated V12 (L539)',
    hp: '769 hp (780 PS)',
    hpNum: 769,
    torque: '720 Nm',
    torqueNum: 720,
    accel: '2.8 sec',
    accelNum: 2.8,
    topSpeed: '355 km/h',
    topSpeedNum: 355,
    weight: '1,550 kg',
    weightNum: 1550,
    transmission: '7-Speed ISR Automated Manual',
    drivetrain: 'Haldex AWD',
    image: '/images/lamborghini-huracan.jpg',
    interior: '/images/interior-cockpit.jpg',
    introduction: 'The final pure naturally aspirated V12 flagship from Sant’Agata Bolognese—an architectural sculpture of carbon fiber and F1 pushrod suspension.',
    history: 'Introduced in 2011 to succeed the Murciélago, the Aventador debuted Lamborghini’s first in-house carbon-fiber monocoque tub and culminated in the 2022 LP 780-4 Ultimae finale.',
    technicalExplanation: 'Horizontal pushrod coilover dampers mounted inboard like a Formula 1 car reduce unsprung suspension mass while the 6.5L V12 screams to 8,500 RPM.',
    interestingFacts: [
      'Carbon-fiber monocoque passenger cell weighs just 147.5 kg.',
      'Ultimae finale was strictly limited to 350 Coupés and 250 Roadsters.',
      '7-speed ISR single-clutch gearbox delivers intentionally visceral 50ms shifts.'
    ]
  }
];
