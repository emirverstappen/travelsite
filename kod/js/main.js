// Language resources
const translations = {
  en: {
    nav: ["Home", "Transfers", "About", "Contact"],
    heroTitle: "Welcome to Tripello Travel",
    heroDesc: "Your journey starts here. Book your transfer now!",
    heroCta: "Book Now",
    features: [
      { title: "Free Wi-Fi", desc: "Stay connected during your ride." },
      { title: "Flight Tracking", desc: "We monitor your flight for timely pickup." },
      { title: "Baby Seat", desc: "Safe and comfortable for your child." },
      { title: "Professional Drivers", desc: "Experienced and friendly staff." }
    ],
    aboutTitle: "About Our Company",
    aboutDesc: "We are dedicated to providing the best travel transfer experience with professional drivers, modern vehicles, and customer-focused service.",
    testimonialsTitle: "Rewiews",
    testimonial1: '"Great service, punctual and friendly!"',
    testimonial2: '"Very comfortable ride and professional drivers."',
    transfersTitle: "Popular Transfer Routes",
    routes: [
      {
        title: "Dalaman Airport → Marmaris",
        desc: "Fast and comfortable transfer from the airport to Marmaris.",
        price: "$40",
        duration: "1 hour 45 minutes",
        book: "Book"
      },
      {
        title: "Avisos Hotel → Dalaman Airport",
        desc: "Reliable transfer from Avisos Hotel to Dalaman Airport.",
        price: "$40",
        duration: "1 hour 45 minutes",
        book: "Book"
      },
      {
        title: "Marmaris → Dalaman Airport",
        desc: "Enjoy a smooth ride to Dalaman Airport.",
        price: "$60",
        duration: "1 hour 45 minutes",
        book: "Book"
      }
    ],
    contactTitle: "Book Your Transfer",
    form: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      pickup: "Pickup Location",
      destination: "Destination",
      date: "Date",
      time: "Time",
      passengers: "Number of Passengers",
      submit: "Book Now"
    },
    thankYou: "Thank you for your reservation!"
  },
  tr: {
    nav: ["Anasayfa", "Transferler", "Hakkımızda", "İletişim"],
    heroTitle: "Tripello Travel'a Hoşgeldiniz",
    heroDesc: "Yolculuğunuz burada başlıyor. Hemen transferinizi ayırtın!",
    heroCta: "Hemen Rezervasyon",
    features: [
      { title: "Ücretsiz Wi-Fi", desc: "Yolculuk boyunca bağlantıda kalın." },
      { title: "Uçuş Takibi", desc: "Zamanında karşılama için uçuşunuzu izliyoruz." },
      { title: "Bebek Koltuğu", desc: "Çocuğunuz için güvenli ve konforlu." },
      { title: "Profesyonel Sürücüler", desc: "Deneyimli ve güler yüzlü ekip." }
    ],
    aboutTitle: "Hakkımızda",
    aboutDesc: "Profesyonel sürücüler, modern araçlar ve müşteri odaklı hizmet ile en iyi seyahat transfer deneyimini sunuyoruz.",
    testimonialsTitle: "İncelemeler",
    testimonial1: '"Harika hizmet, dakik ve güler yüzlü!"',
    testimonial2: '"Çok konforlu bir yolculuk ve profesyonel sürücüler."',
    transfersTitle: "Popüler Transfer Rotaları",
    routes: [
      {
        title: "Dalaman Havalimanı → Marmaris",
        desc: "Dalaman Havalimanından Marmaris'a hızlı ve konforlu transfer.",
        price: "₺1200",
        duration: "1 saat 45 dakika",
        book: "Rezervasyon"
      },
      {
        title: "Avisos Otel → Dalaman Havalimanı",
        desc: "Avisos Otel'den Dalaman Havalimanına güvenilir transfer.",
        price: "₺1200",
        duration: "1 saat 45 dakika",
        book: "Rezervasyon"
      },
      {
        title: "Marmaris → Dalaman Havalimanı",
        desc: "Marmaris'ten Dalaman Havalimanına konforlu bir yolculuk yapın.",
        price: "₺1800",
        duration: "1 saat 45 dakika",
        book: "Rezervasyon"
      }
    ],
    contactTitle: "Transferinizi Ayırtın",
    form: {
      name: "Ad Soyad",
      email: "E-posta",
      phone: "Telefon",
      pickup: "Alınış Noktası",
      destination: "Varış Noktası",
      date: "Tarih",
      time: "Saat",
      passengers: "Yolcu Sayısı",
      submit: "Rezervasyon Yap"
    },
    thankYou: "Rezervasyonunuz için teşekkürler!"
  }
};

function getCurrentLang() {
  return localStorage.getItem('lang') || 'en';
}

function setCurrentLang(lang) {
  localStorage.setItem('lang', lang);
}

function switchLanguage(lang) {
  setCurrentLang(lang);
  const t = translations[lang];
  // Nav
  document.querySelectorAll('#nav-menu .nav-link').forEach((el, i) => {
    el.textContent = t.nav[i];
  });
  // Homepage
  if (document.getElementById('hero-title')) {
    document.getElementById('hero-title').textContent = t.heroTitle;
    document.getElementById('hero-desc').textContent = t.heroDesc;
    document.getElementById('hero-cta').textContent = t.heroCta;
    for (let i = 0; i < 4; i++) {
      document.getElementById(`feature${i+1}-title`).textContent = t.features[i].title;
      document.getElementById(`feature${i+1}-desc`).textContent = t.features[i].desc;
    }
  }
  // About
  if (document.getElementById('about-title')) {
    document.getElementById('about-title').textContent = t.aboutTitle;
    document.getElementById('about-desc').textContent = t.aboutDesc;
    document.getElementById('testimonials-title').textContent = t.testimonialsTitle;
    document.getElementById('testimonial1').textContent = t.testimonial1;
    document.getElementById('testimonial2').textContent = t.testimonial2;
  }
  // Transfers
  if (document.getElementById('transfers-title')) {
    document.getElementById('transfers-title').textContent = t.transfersTitle;
    for (let i = 0; i < t.routes.length; i++) {
      document.getElementById(`route${i+1}-title`).textContent = t.routes[i].title;
      document.getElementById(`route${i+1}-desc`).textContent = t.routes[i].desc;
      document.getElementById(`route${i+1}-price`).textContent = t.routes[i].price;
      document.getElementById(`route${i+1}-duration`).textContent = t.routes[i].duration;
      document.getElementById(`route${i+1}-book`).textContent = t.routes[i].book;
    }
  }
  // Contact
  if (document.getElementById('contact-title')) {
    document.getElementById('contact-title').textContent = t.contactTitle;
    document.getElementById('form-name').placeholder = t.form.name;
    document.getElementById('form-email').placeholder = t.form.email;
    document.getElementById('form-phone').placeholder = t.form.phone;
    document.getElementById('form-pickup').placeholder = t.form.pickup;
    document.getElementById('form-destination').placeholder = t.form.destination;
    document.getElementById('form-date').placeholder = t.form.date;
    document.getElementById('form-time').placeholder = t.form.time;
    document.getElementById('form-passengers').placeholder = t.form.passengers;
    document.getElementById('form-submit').textContent = t.form.submit;
    if (document.getElementById('thank-you')) {
      document.getElementById('thank-you').textContent = t.thankYou;
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const lang = getCurrentLang();
  switchLanguage(lang);
  document.getElementById('lang-tr').addEventListener('click', () => switchLanguage('tr'));
  document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));
}); 