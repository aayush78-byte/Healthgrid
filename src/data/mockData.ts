export const hospitals = [
  { id: 1, name: "City Hospital", distance: "2.3 km", location: "Downtown, New Delhi", beds: { icu: 12, general: 45, emergency: 8 }, totalBeds: 65, availableBeds: 23, emergencyStatus: "Available", lat: 28.6139, lng: 77.2090, rating: 4.5 },
  { id: 2, name: "AIIMS Delhi", distance: "5.1 km", location: "Ansari Nagar, New Delhi", beds: { icu: 30, general: 120, emergency: 20 }, totalBeds: 170, availableBeds: 41, emergencyStatus: "Available", lat: 28.5672, lng: 77.2100, rating: 4.8 },
  { id: 3, name: "Apollo Healthcare", distance: "3.7 km", location: "Sarita Vihar, New Delhi", beds: { icu: 20, general: 80, emergency: 15 }, totalBeds: 115, availableBeds: 12, emergencyStatus: "Limited", lat: 28.5355, lng: 77.2910, rating: 4.6 },
  { id: 4, name: "Rural Health Center", distance: "12.5 km", location: "Outer Delhi", beds: { icu: 3, general: 15, emergency: 2 }, totalBeds: 20, availableBeds: 8, emergencyStatus: "Available", lat: 28.7041, lng: 77.1025, rating: 3.9 },
  { id: 5, name: "Max Super Speciality", distance: "4.2 km", location: "Saket, New Delhi", beds: { icu: 25, general: 90, emergency: 12 }, totalBeds: 127, availableBeds: 5, emergencyStatus: "Critical", lat: 28.5245, lng: 77.2066, rating: 4.7 },
];

export const patients = [
  { id: "P001", name: "Rahul Sharma", age: 34, diagnosis: "Vishama Jwara (Malaria)", doctor: "Dr. Priya Mehta", treatment: "Antimalarial + Ayurvedic Support", date: "2024-03-10", namasteCode: "AYU-FEV-102", icd11Code: "1A40" },
  { id: "P002", name: "Anita Gupta", age: 28, diagnosis: "Amlapitta (Hyperacidity)", doctor: "Dr. Suresh Kumar", treatment: "PPI + Shatavari", date: "2024-03-09", namasteCode: "AYU-GAS-045", icd11Code: "DA23" },
  { id: "P003", name: "Vikram Singh", age: 52, diagnosis: "Prameha (Diabetes Type 2)", doctor: "Dr. Anjali Rao", treatment: "Metformin + Guduchi", date: "2024-03-08", namasteCode: "AYU-MET-201", icd11Code: "5A11" },
  { id: "P004", name: "Meera Patel", age: 41, diagnosis: "Sandhivata (Osteoarthritis)", doctor: "Dr. Ravi Verma", treatment: "NSAIDs + Guggulu", date: "2024-03-07", namasteCode: "AYU-MSK-078", icd11Code: "FA00" },
  { id: "P005", name: "Arjun Das", age: 65, diagnosis: "Hridroga (Coronary Heart Disease)", doctor: "Dr. Priya Mehta", treatment: "Statins + Arjuna Bark", date: "2024-03-06", namasteCode: "AYU-CVS-112", icd11Code: "BA80" },
];

export const alerts = [
  { id: 1, type: "outbreak", title: "Dengue Outbreak Alert", message: "Increased dengue cases reported in South Delhi. Take precautions.", severity: "high", date: "2024-03-10" },
  { id: 2, type: "capacity", title: "Hospital Capacity Warning", message: "Max Super Speciality ICU beds at 80% capacity.", severity: "medium", date: "2024-03-09" },
  { id: 3, type: "advisory", title: "Seasonal Flu Advisory", message: "Influenza cases rising. Get vaccinated.", severity: "low", date: "2024-03-08" },
  { id: 4, type: "outbreak", title: "Malaria Cases Rising", message: "Monsoon season malaria surge in rural areas.", severity: "high", date: "2024-03-07" },
];

export const diseaseData = [
  { month: "Oct", malaria: 45, dengue: 78, influenza: 32 },
  { month: "Nov", malaria: 38, dengue: 65, influenza: 48 },
  { month: "Dec", malaria: 22, dengue: 30, influenza: 72 },
  { month: "Jan", malaria: 15, dengue: 12, influenza: 85 },
  { month: "Feb", malaria: 28, dengue: 22, influenza: 55 },
  { month: "Mar", malaria: 42, dengue: 45, influenza: 38 },
];

export const drugInventory = [
  { id: 1, name: "Paracetamol 500mg", stock: 2500, unit: "tablets", status: "adequate", threshold: 500 },
  { id: 2, name: "Amoxicillin 250mg", stock: 180, unit: "capsules", status: "low", threshold: 200 },
  { id: 3, name: "Chloroquine Phosphate", stock: 850, unit: "tablets", status: "adequate", threshold: 300 },
  { id: 4, name: "Insulin (Rapid-acting)", stock: 45, unit: "vials", status: "critical", threshold: 50 },
  { id: 5, name: "Guduchi Extract", stock: 320, unit: "capsules", status: "adequate", threshold: 100 },
  { id: 6, name: "Ashwagandha Tablets", stock: 90, unit: "tablets", status: "low", threshold: 150 },
  { id: 7, name: "Arjuna Bark Powder", stock: 200, unit: "packets", status: "adequate", threshold: 50 },
  { id: 8, name: "Metformin 500mg", stock: 30, unit: "tablets", status: "critical", threshold: 100 },
];

export const dualCodingExamples = [
  { traditional: "Vishama Jwara", namasteCode: "AYU-FEV-102", icd11: "1A40", icd11Name: "Malaria", confidence: 94 },
  { traditional: "Amlapitta", namasteCode: "AYU-GAS-045", icd11: "DA23", icd11Name: "Gastro-oesophageal reflux disease", confidence: 89 },
  { traditional: "Prameha", namasteCode: "AYU-MET-201", icd11: "5A11", icd11Name: "Type 2 diabetes mellitus", confidence: 91 },
  { traditional: "Sandhivata", namasteCode: "AYU-MSK-078", icd11: "FA00", icd11Name: "Osteoarthritis of knee", confidence: 87 },
  { traditional: "Pandu Roga", namasteCode: "AYU-HEM-033", icd11: "3A00", icd11Name: "Iron deficiency anaemia", confidence: 92 },
  { traditional: "Shwasa", namasteCode: "AYU-RES-055", icd11: "CA23", icd11Name: "Asthma", confidence: 88 },
];

export const healthRecords = [
  { id: 1, type: "Diagnosis", title: "Annual Health Checkup", doctor: "Dr. Priya Mehta", date: "2024-03-01", details: "All vitals normal. Blood sugar slightly elevated." },
  { id: 2, type: "Prescription", title: "Fever Treatment", doctor: "Dr. Suresh Kumar", date: "2024-02-15", details: "Paracetamol 500mg, 3x daily for 5 days." },
  { id: 3, type: "Lab Report", title: "Complete Blood Count", doctor: "Dr. Anjali Rao", date: "2024-01-20", details: "Hemoglobin: 14.2, WBC: 7500, Platelets: 250000" },
  { id: 4, type: "Vaccination", title: "Influenza Vaccine", doctor: "Dr. Ravi Verma", date: "2023-12-10", details: "Seasonal flu vaccine administered." },
];

export const bedOccupancyData = [
  { time: "6AM", icu: 75, general: 60, emergency: 40 },
  { time: "9AM", icu: 80, general: 70, emergency: 55 },
  { time: "12PM", icu: 85, general: 78, emergency: 65 },
  { time: "3PM", icu: 90, general: 82, emergency: 70 },
  { time: "6PM", icu: 88, general: 75, emergency: 60 },
  { time: "9PM", icu: 82, general: 68, emergency: 45 },
];
