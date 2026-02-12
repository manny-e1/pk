rpserver_express/
│
├── 📂 config/                  <-- Konfigurasi Dasar
│   ├── db.js                   # Koneksi ke Database (Prisma Client Instance)
│   └── constants.js            # Konstanta statis (jika ada)
│
├── 📂 controllers/             <-- "Manager" (Menerima Request, Mengatur Alur)
│   ├── authController.js       # Login/Register (Password & FIDO2 Init)
│   ├── passkeyController.js    # Khusus logika FIDO2/Passkey (WebAuthn)
│   ├── transactionController.js# Menangani Transaksi Real dari User (Panggil Risk Engine)
│   ├── riskEngineController.js # Menangani Admin Dashboard (Simulasi & Update Config Rule)
│   ├── adminConfigController.js# (Opsional) Jika dipisah, khusus CRUD Rule Management
│   └── logController.js        # Mengambil data logs untuk ditampilkan di Dashboard
│
├── 📂 prisma/                  <-- Database Schema (ORM)
│   ├── schema.prisma           # Definisi Tabel (User, Transaction, RiskRule, dll)
│   └── seed.js                 # Data awal (Default Rules & Admin User)
│
├── 📂 routes/                  <-- "Resepsionis" (Mengarah URL ke Controller)
│   └── index.js                # Definisi semua endpoint API (/api/auth, /api/trans, dll)
│
├── 📂 utils/                   <-- "Tools & Helper" (Fungsi Pendukung)
│   ├── geoIpService.js         # Deteksi Lokasi dari IP (MaxMind)
│   ├── jwt.js                  # Generate & Verify Token Session
│   ├── richLogger.js           # Format Log JSON yang rapi untuk AuthLog
│   │
│   └── 📂 riskEngine/          <-- 🧠 OTAK UTAMA RISIKO (MODULAR)
│        ├── index.js           # Orchestrator (Menggabungkan semua pengecekan)
│        ├── configLoader.js    # Mengambil Rule dari DB & Cache (agar cepat)
│        └── 📂 evaluators/     # Logika Pengecekan Spesifik
│             ├── amountCheck.js    # Cek Limit Nominal
│             ├── deviceCheck.js    # Cek VPN, Root, New Device
│             ├── geoCheck.js       # Cek Geo Anomaly / Impossible Travel
│             ├── velocityCheck.js  # Cek Spamming Transaksi
│             └── historyCheck.js   # Cek Dormant & Beneficiary
│
├── .env                        # Password DB & Secret Keys
├── server.js                   # Entry Point (Menjalankan Server Express)
└── package.json                # Daftar Library (Dependencies)




#database migration 

# delete all db
npx prisma migrate reset

# migrate model DB
npx prisma migrate dev --name change_id_to_string

# seeder

npx prisma db seed

# pus update field database
npx prisma db push

