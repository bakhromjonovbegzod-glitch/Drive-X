export interface CarModel {
  id: string;
  name: string;
  category: 'Supercars' | 'Luxury Cars' | 'Sport Cars';
  price: string;
  priceNum: number;
  hp: string;
  hpNum: number;
  accel: string;
  accelNum: number;
  engine: string;
  topSpeed: string;
  topSpeedNum: number;
  fuel: string;
  fuelNum: number;
  drivetrain: string;
  torque: string;
  image: string;
  interior: string;
  description: string;
}

export const CARS: CarModel[] = [
  {
    id: 'bmw-m5',
    name: 'BMW M5 Competition',
    category: 'Luxury Cars',
    price: '$122,675',
    priceNum: 122675,
    hp: '717 hp',
    hpNum: 717,
    accel: '3.5 sec',
    accelNum: 3.5,
    engine: '4.4L TwinPower Turbo V8 Hybrid',
    topSpeed: '305 km/h',
    topSpeedNum: 305,
    fuel: '10.5 L/100 km',
    fuelNum: 10.5,
    drivetrain: 'M xDrive AWD',
    torque: '1,000 Nm',
    image: '/images/bmw-m5.jpg',
    interior: '/images/interior-cockpit.jpg',
    description: 'Seventh-generation BMW M5 pairing a 4.4L TwinPower Turbo V8 with an electric motor for 717 hp and 1,000 Nm.'
  },
  {
    id: 'bmw-m4',
    name: 'BMW M4',
    category: 'Sport Cars',
    price: '$100,645',
    priceNum: 100645,
    hp: '503 hp',
    hpNum: 503,
    accel: '3.5 sec',
    accelNum: 3.5,
    engine: '3.0L Twin-Turbo Inline-6',
    topSpeed: '290 km/h',
    topSpeedNum: 290,
    fuel: '9.6 L/100 km',
    fuelNum: 9.6,
    drivetrain: 'M xDrive AWD / 2WD Mode',
    torque: '650 Nm',
    image: '/images/bmw-m4.jpg',
    interior: '/images/interior-cockpit.jpg',
    description: 'Motorsport-derived 3.0L twin-turbo inline-six with carbon-fiber roof and Active M Differential.'
  },
  {
    id: 'amg-gt',
    name: 'Mercedes-Benz AMG GT',
    category: 'Sport Cars',
    price: '$187,620',
    priceNum: 187620,
    hp: '816 hp',
    hpNum: 816,
    accel: '2.8 sec',
    accelNum: 2.8,
    engine: '4.0L V8 Biturbo Hybrid',
    topSpeed: '320 km/h',
    topSpeedNum: 320,
    fuel: '8.2 L/100 km',
    fuelNum: 8.2,
    drivetrain: 'AMG Performance 4MATIC+',
    torque: '1,420 Nm',
    image: '/images/amg-gt.jpg',
    interior: '/images/interior-cockpit.jpg',
    description: 'F1-inspired hybrid powertrain combining a 4.0L V8 biturbo with an AMG Electric Drive Unit for 816 hp.'
  },
  {
    id: 'porsche-911',
    name: 'Porsche 911',
    category: 'Supercars',
    price: '$284,300',
    priceNum: 284300,
    hp: '701 hp',
    hpNum: 701,
    accel: '2.5 sec',
    accelNum: 2.5,
    engine: '3.8L Twin-Turbo Flat-6',
    topSpeed: '322 km/h',
    topSpeedNum: 322,
    fuel: '11.5 L/100 km',
    fuelNum: 11.5,
    drivetrain: 'Porsche Traction Management AWD',
    torque: '800 Nm',
    image: '/images/porsche-911.jpg',
    interior: '/images/interior-cockpit.jpg',
    description: 'Iconic rear-engine 911 Turbo S with Sport Chrono launch control and 2.5-second 0-100 km/h sprint.'
  },
  {
    id: 'lamborghini-huracan',
    name: 'Lamborghini Huracán',
    category: 'Supercars',
    price: '$339,321',
    priceNum: 339321,
    hp: '631 hp',
    hpNum: 631,
    accel: '3.2 sec',
    accelNum: 3.2,
    engine: '5.2L Naturally Aspirated V10',
    topSpeed: '325 km/h',
    topSpeedNum: 325,
    fuel: '14.5 L/100 km',
    fuelNum: 14.5,
    drivetrain: 'RWD / LDVI Dynamics',
    torque: '565 Nm',
    image: '/images/lamborghini-huracan.jpg',
    interior: '/images/interior-cockpit.jpg',
    description: 'Naturally aspirated 5.2L V10 supercar with carbon-fiber aerodynamics and 325 km/h top speed.'
  },
  {
    id: 'audi-rs7',
    name: 'Audi RS7',
    category: 'Luxury Cars',
    price: '$132,700',
    priceNum: 132700,
    hp: '621 hp',
    hpNum: 621,
    accel: '3.4 sec',
    accelNum: 3.4,
    engine: '4.0L Twin-Turbo V8 Mild Hybrid',
    topSpeed: '305 km/h',
    topSpeedNum: 305,
    fuel: '12.1 L/100 km',
    fuelNum: 12.1,
    drivetrain: 'quattro Permanent AWD',
    torque: '850 Nm',
    image: '/images/audi-rs7.jpg',
    interior: '/images/interior-cockpit.jpg',
    description: 'RS 7 Performance Sportback with 621 hp twin-turbo V8, quattro sport differential, and all-wheel steering.'
  }
];

export const CATEGORIES = [
  { name: 'Supercars', count: '2 Flagships', filter: 'Supercars', image: '/images/lamborghini-huracan.jpg' },
  { name: 'Luxury Cars', count: '2 Flagships', filter: 'Luxury Cars', image: '/images/bmw-m5.jpg' },
  { name: 'Sport Cars', count: '2 Flagships', filter: 'Sport Cars', image: '/images/bmw-m4.jpg' },
  { name: 'SUVs', count: 'Performance Utility', filter: 'All', image: '/images/category-suv.jpg' },
  { name: 'Electric Vehicles', count: 'Next-Gen EV', filter: 'All', image: '/images/category-ev.jpg' }
];
