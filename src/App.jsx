import React, { useState, useEffect, useRef } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Phone,
  Navigation,
  Sparkles,
  Star,
  Globe,
  Instagram,
  Languages,
} from "lucide-react";

// Buddha SVG Component
const BuddhaIcon = ({ className }) => (
  <svg viewBox="0 0 100 120" className={className} fill="currentColor">
    <ellipse cx="50" cy="20" rx="12" ry="14" />
    <ellipse cx="50" cy="45" rx="18" ry="20" />
    <path d="M32 65 Q50 55 68 65 L68 90 Q50 100 32 90 Z" />
    <ellipse cx="50" cy="105" rx="25" ry="8" opacity="0.3" />
  </svg>
);

// Lotus SVG Component
const LotusIcon = ({ className }) => (
  <svg viewBox="0 0 100 60" className={className} fill="currentColor">
    <path
      d="M50 55 Q45 40 35 45 Q25 50 30 35 Q35 20 50 25 Q65 20 70 35 Q75 50 65 45 Q55 40 50 55"
      opacity="0.9"
    />
    <path
      d="M50 55 Q40 35 25 40 Q15 35 25 25 Q40 15 50 20 Q60 15 75 25 Q85 35 75 40 Q60 35 50 55"
      opacity="0.7"
    />
    <path
      d="M50 55 Q35 30 15 35 Q5 25 20 15 Q45 5 50 15 Q55 5 80 15 Q95 25 85 35 Q65 30 50 55"
      opacity="0.5"
    />
  </svg>
);

// Mandala Pattern Component
const MandalaPattern = ({ className }) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="0.5"
  >
    <circle cx="100" cy="100" r="90" opacity="0.3" />
    <circle cx="100" cy="100" r="70" opacity="0.4" />
    <circle cx="100" cy="100" r="50" opacity="0.5" />
    <circle cx="100" cy="100" r="30" opacity="0.6" />
    {[...Array(12)].map((_, i) => (
      <line
        key={i}
        x1="100"
        y1="10"
        x2="100"
        y2="40"
        transform={`rotate(${i * 30} 100 100)`}
        opacity="0.4"
      />
    ))}
    {[...Array(8)].map((_, i) => (
      <path
        key={`p${i}`}
        d="M100 60 Q110 80 100 100 Q90 80 100 60"
        transform={`rotate(${i * 45} 100 100)`}
        fill="currentColor"
        opacity="0.2"
      />
    ))}
  </svg>
);

// Decorative Corner Component
const DecorativeCorner = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <path
      d="M0 100 Q0 50 50 50 Q50 0 100 0 L100 15 Q55 15 55 55 Q15 55 15 100 Z"
      opacity="0.6"
    />
    <circle cx="75" cy="25" r="6" opacity="0.8" />
    <circle cx="25" cy="75" r="6" opacity="0.8" />
    <circle cx="50" cy="50" r="4" opacity="0.9" />
    <path
      d="M65 35 Q70 30 75 35 Q80 40 75 45 Q70 50 65 45 Q60 40 65 35"
      opacity="0.5"
    />
    <path
      d="M35 65 Q40 60 45 65 Q50 70 45 75 Q40 80 35 75 Q30 70 35 65"
      opacity="0.5"
    />
  </svg>
);

// Floating Flowers Component
const FloatingFlower = ({ style, delay }) => (
  <div
    className="absolute animate-float opacity-20"
    style={{
      ...style,
      animationDelay: `${delay}s`,
      animationDuration: "6s",
    }}
  >
    <LotusIcon className="w-8 h-6 text-gold" />
  </div>
);

// Divider Component
const Divider = ({ light = false }) => (
  <div className="flex items-center justify-center gap-4 my-8">
    <div
      className={`h-px w-12 md:w-20 ${light ? "bg-white/40" : "bg-maroon/30"}`}
    ></div>
    <Star
      className={`w-4 h-4 ${light ? "text-gold" : "text-gold"} animate-pulse`}
    />
    <LotusIcon
      className={`w-10 h-6 ${light ? "text-white/70" : "text-maroon/60"}`}
    />
    <Star
      className={`w-4 h-4 ${light ? "text-gold" : "text-gold"} animate-pulse`}
    />
    <div
      className={`h-px w-12 md:w-20 ${light ? "bg-white/40" : "bg-maroon/30"}`}
    ></div>
  </div>
);

// Sparkle Animation Component
const SparkleEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-gold rounded-full animate-sparkle"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${3 + Math.random() * 2}s`,
        }}
      />
    ))}
  </div>
);

// Translations
const translations = {
  en: {
    weddingInvitation: "Wedding Invitation",
    buddhistQuote: "॥ Atta Deep Bhava ॥",
    brideParents: "Smt. Sujata & Late Mahendraji Patil",
    brideParentsText:
      "Cordially solicit your gracious presence to shower your blessings on the auspicious occasion of the wedding of their Daughter",
    groomParents: "Smt. Ranjana & Late Padmakarji Gondane",
    location: "NAGPUR",
    weddingCeremony: "Wedding Ceremony",
    weddingDate: "Sunday, 25th January 2026",
    weddingTime: "at 07:00 PM",
    venue: "Venue",
    venueName: "The Bhatia Farms & Lawns",
    venueAddress1: "Opp. Delhi Public School",
    venueAddress2: "Kamptee Road, Khairy",
    venueAddress3: "Nagpur - 440029",
    venueDate: "Sunday, 25th Jan 2026",
    venueTime: "07:00 PM Onwards",
    getDirections: "Get Directions",
    welcomeTitle: "Awaiting to Welcome You",
    hostedBy: "Alka Mohit Patil",
    patilFamily: "Patil Family",
    sweetInvitation: "Sweet Invitation By",
    childrenNames: "Ayansh, Karunesh & Agastya",
    noAher: "🙏 No Aher Please 🙏",
    from: "From",
    contactPerson: "Mohit Mahendra Patil",
    contactAddress1: "Plot No. 960, Buddha Nagar Unit no. 1, ",
    contactAddress2: "Dr. Ambedkar Marg",
    contactAddress3: "Nagpur - 440017",
    namoBuddhay: "Namo Buddhay",
    footerMessage: "We look forward to celebrating this special day with you",
    coupleNames: "Ankita & Priyesh",
    brideName: "Ankita",
    groomName: "Priyesh",
    designedBy: "Designed by",
    willovate: "Willovate Private Limited",
  },
  mr: {
    weddingInvitation: "विवाह निमंत्रण",
    buddhistQuote: "॥ अत्त दीप भव ॥",
    brideParents: "सौ. सुजाता व स्व. महेंद्रजी पाटील",
    brideParentsText:
      "यांच्या कन्येच्या विवाहसोहळ्यास आपल्या शुभाशीर्वादाची विनम्र विनंती",
    groomParents: "सौ. रंजना व स्व. पद्मकरजी गोंडाणे",
    location: "नागपूर",
    weddingCeremony: "विवाहसोहळा",
    weddingDate: "रविवार, २५ जानेवारी २०२६",
    weddingTime: "संध्याकाळी ७:०० वाजता",
    venue: "ठिकाण",
    venueName: "द भाटिया फार्म्स अँड लॉन्स",
    venueAddress1: "दिल्ली पब्लिक स्कूल समोर",
    venueAddress2: "कांपटी रोड, खैरी",
    venueAddress3: "नागपूर - ४४००२९",
    venueDate: "रविवार, २५ जानेवारी २०२६",
    venueTime: "संध्याकाळी ७:०० वाजता",
    getDirections: "दिशा मिळवा",
    welcomeTitle: "आपले स्वागत करण्यासाठी उत्सुक",
    hostedBy: "अल्का मोहित पाटील",
    patilFamily: "पाटील परिवार",
    sweetInvitation: "गोड निमंत्रण",
    childrenNames: "आयांश, करुणेश आणि अगस्त्य",
    noAher: "🙏 कृपया अहेर नको 🙏",
    from: "तर्फे",
    contactPerson: "मोहित महेंद्र पाटील",
    contactAddress1: "प्लॉट क्र. ९६०, बुद्धा नगर युनिट क्र. १, ",
    contactAddress2: "डॉ. आंबेडकर मार्ग",
    contactAddress3: "नागपूर - ४४००१७",
    namoBuddhay: "नमो बुद्धाय",
    footerMessage: "या खास दिवसाची आपल्यासोबत साजरी करण्यासाठी उत्सुक आहोत",
    coupleNames: "अंकिता आणि प्रियेश",
    brideName: "अंकिता",
    groomName: "प्रियेश",
    designedBy: "डिझाइन केले",
    willovate: "विलोवेट प्रायव्हेट लिमिटेड",
  },
};

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [language, setLanguage] = useState("en");
  const audioRef = useRef(null);
  const hasStartedRef = useRef(false);

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Initialize audio
    if (!audioRef.current) {
      audioRef.current = new Audio("/song.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
      audioRef.current.preload = "auto";
    }

    const audio = audioRef.current;

    // Function to start playing music
    const startMusic = () => {
      if (!hasStartedRef.current && audio.paused) {
        audio.play()
          .then(() => {
            hasStartedRef.current = true;
            console.log("Music started successfully");
          })
          .catch((err) => {
            console.log("Autoplay blocked, waiting for user interaction:", err);
          });
      }
    };

    // Try immediate autoplay
    startMusic();

    // Fallback: play on any user interaction
    const handleInteraction = () => {
      startMusic();
    };

    const events = ['click', 'touchstart', 'scroll', 'mousemove', 'keydown'];
    events.forEach((event) => {
      document.addEventListener(event, handleInteraction, { once: true, passive: true });
    });

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, handleInteraction);
      });
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
      {/* Language Toggle Button */}
      <button
        onClick={() => setLanguage(language === "en" ? "mr" : "en")}
        className="fixed top-4 right-4 z-50 bg-maroon/90 hover:bg-maroon text-white px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 backdrop-blur-sm border border-gold/30 hover:scale-105 active:scale-95"
        aria-label="Toggle Language"
      >
        <Languages className="w-4 h-4" />
        <span className="text-sm font-medium">
          {language === "en" ? "मराठी" : "English"}
        </span>
      </button>

      {/* Hero Section */}
      <section className="relative min-h-[128vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/image5.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-cream/85 via-cream/80 to-cream/85"></div>
        </div>{" "}
        {/* Animated Mandala Background */}
        <MandalaPattern className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] text-maroon/10 animate-spin-slow" />
        {/* Sparkle Effects */}
        <SparkleEffect />
        {/* Floating Flowers */}
        <FloatingFlower style={{ top: "10%", left: "5%" }} delay={0} />
        <FloatingFlower style={{ top: "20%", right: "8%" }} delay={1} />
        <FloatingFlower style={{ bottom: "30%", left: "10%" }} delay={2} />
        <FloatingFlower style={{ bottom: "20%", right: "5%" }} delay={3} />
        <FloatingFlower style={{ top: "50%", left: "3%" }} delay={4} />
        <FloatingFlower style={{ top: "60%", right: "3%" }} delay={5} />
        {/* Decorative Borders */}
        <div className="absolute inset-4 md:inset-8 border-2 border-maroon/30 pointer-events-none animate-fade-in"></div>
        <div className="absolute inset-6 md:inset-12 border border-gold/40 pointer-events-none animate-fade-in-delay"></div>
        {/* Corner Decorations */}
        <DecorativeCorner className="absolute top-6 left-6 md:top-12 md:left-12 w-20 h-20 md:w-28 md:h-28 text-maroon/70 animate-fade-in" />
        <DecorativeCorner className="absolute top-6 right-6 md:top-12 md:right-12 w-20 h-20 md:w-28 md:h-28 text-maroon/70 -scale-x-100 animate-fade-in" />
        <DecorativeCorner className="absolute bottom-6 left-6 md:bottom-12 md:left-12 w-20 h-20 md:w-28 md:h-28 text-maroon/70 -scale-y-100 animate-fade-in" />
        <DecorativeCorner className="absolute bottom-6 right-6 md:bottom-12 md:right-12 w-20 h-20 md:w-28 md:h-28 text-maroon/70 scale-[-1] animate-fade-in" />
        <div className="relative z-10 text-center px-4 sm:px-8 md:px-16 max-w-4xl mx-auto py-12 sm:py-16">
          {/* Buddha Image with Glow */}
          <div className="relative inline-block animate-fade-in-up">
            <div className="absolute inset-0 blur-2xl bg-gold/40 rounded-full scale-150"></div>
            <img
              src="/images/buddha.png"
              alt="Buddha"
              className="relative w-28 h-32 sm:w-32 sm:h-36 md:w-36 md:h-40 mx-auto mb-6 drop-shadow-2xl object-contain"
            />
          </div>

          {/* Buddhist Quote */}
          <p className="text-maroon/90 text-base md:text-lg tracking-[0.3em] mb-8 font-medium animate-fade-in-up animation-delay-200">
            {t.buddhistQuote}
          </p>

          {/* Wedding Title */}
          <h1 className="font-serif text-4xl md:text-6xl text-maroon mb-10 italic animate-fade-in-up animation-delay-400 drop-shadow-sm">
            {t.weddingInvitation}
          </h1>

          <Divider />

          {/* Bride's Parents */}
          <div className="mb-10 animate-fade-in-up animation-delay-600">
            <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              <span className="font-semibold text-maroon">
                {t.brideParents}
              </span>
              <br />
              <span className="italic">{t.brideParentsText}</span>
            </p>
          </div>

          {/* Bride Name */}
          <div className="mb-8 animate-fade-in-up animation-delay-800 group">
            <h2 className="font-serif text-5xl sm:text-6xl md:text-8xl text-maroon italic drop-shadow-sm group-hover:scale-105 transition-transform duration-500 cursor-default">
              {t.brideName}
            </h2>
          </div>

          {/* & Symbol */}
          <div className="relative my-6">
            <span className="font-serif text-4xl md:text-5xl text-gold drop-shadow-md animate-pulse-slow">
              &
            </span>
          </div>

          {/* Groom Name */}
          <div className="mb-8 animate-fade-in-up animation-delay-1000 group">
            <h2 className="font-serif text-5xl sm:text-6xl md:text-8xl text-maroon italic drop-shadow-sm group-hover:scale-105 transition-transform duration-500 cursor-default">
              {t.groomName}
            </h2>
          </div>

          {/* Groom's Parents */}
          <div className="mt-10 animate-fade-in-up animation-delay-1200">
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              S/o{" "}
              <span className="font-semibold text-maroon">
                {t.groomParents}
              </span>
              <br />
              <span className="text-maroon font-semibold tracking-widest text-lg">
                {t.location}
              </span>
            </p>
          </div>

          <Divider />

          {/* Wedding Date */}
          <div className="mt-8 sm:mt-12 animate-fade-in-up animation-delay-1400">
            <div className="bg-white/70 backdrop-blur-md border-2 border-maroon/20 rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10 inline-block shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 max-w-full mx-2 sm:mx-4">
              <p className="text-maroon text-lg sm:text-xl md:text-2xl font-serif mb-3 italic">
                {t.weddingCeremony}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-maroon mb-2">
                <Calendar className="w-6 h-6 md:w-7 md:h-7 text-gold" />
                <span className="text-xl sm:text-2xl md:text-4xl font-serif font-semibold text-center">
                  {t.weddingDate}
                </span>
              </div>
              <p className="text-gold text-lg sm:text-xl md:text-2xl font-medium mt-3">
                {t.weddingTime}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section
        id="venue"
        data-animate
        className="relative py-20 md:py-32 overflow-hidden"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098')`,
          }}
        >
          <div className="absolute inset-0 bg-maroon/85"></div>
        </div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Sparkle Effects */}
        <SparkleEffect />

        <div
          className={`container mx-auto px-6 md:px-12 relative z-10 transition-all duration-1000 ${
            isVisible.venue
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-14">
            <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-gold mx-auto mb-6 animate-pulse" />
            <p className="text-gold text-base md:text-lg tracking-[0.3em] mb-5 uppercase font-semibold">
              {t.venue}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 italic drop-shadow-lg px-2 sm:px-4">
              {t.venueName}
            </h2>
            <Divider light />
          </div>

          <div className="max-w-3xl mx-auto px-3 sm:px-4">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-14 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 hover:scale-[1.02]">
              <div className="relative mb-8">
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gold p-4 rounded-full shadow-lg animate-bounce-slow">
                    <MapPin className="w-8 h-8 text-maroon" />
                  </div>
                </div>
              </div>

              <p className="text-white text-xl md:text-2xl leading-relaxed mb-8 text-center font-light">
                {t.venueAddress1}
                <br />
                {t.venueAddress2}
                <br />
                <span className="font-medium">{t.venueAddress3}</span>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 mb-8">
                <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition-colors">
                  <Calendar className="w-5 h-5 text-gold" />
                  <span className="text-cream text-base md:text-lg">
                    {t.venueDate}
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition-colors">
                  <Clock className="w-5 h-5 text-gold" />
                  <span className="text-cream text-base md:text-lg">
                    {t.venueTime}
                  </span>
                </div>
              </div>

              <div className="text-center mt-10">
                <a
                  href="https://maps.google.com/?q=The+Bhatia+Farms+Lawns+Kamptee+Road+Nagpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-gold text-maroon px-8 sm:px-10 py-4 rounded-full font-semibold hover:bg-white hover:scale-110 active:scale-95 transition-all duration-300 text-base sm:text-lg shadow-xl min-h-[48px]"
                >
                  <Navigation className="w-5 h-5" />
                  {t.getDirections}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section
        id="welcome"
        data-animate
        className="relative py-12 md:py-32 overflow-hidden"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/image1.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-cream/85"></div>
        </div>{" "}
        {/* Floating Mandalas */}
        <MandalaPattern className="absolute -top-20 -left-20 w-80 h-80 text-maroon/5 animate-spin-slow" />
        <MandalaPattern className="absolute -bottom-20 -right-20 w-96 h-96 text-gold/5 animate-spin-slow-reverse" />
        <div
          className={`container mx-auto px-6 md:px-12 relative z-10 transition-all duration-1000 ${
            isVisible.welcome
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-3xl mx-auto text-center">
            <img
              src="/images/Image9.png"
              alt="Lotus"
              className="w-28 h-28 mx-auto mb-6 animate-pulse"
            />

            <h2 className="font-serif text-3xl md:text-5xl text-maroon mb-8 italic">
              {t.welcomeTitle}
            </h2>

            <Divider />

            <div className="mt-12 space-y-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl border border-maroon/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                <p className="text-gray-700 text-xl md:text-2xl font-medium">
                  {t.hostedBy}
                </p>
                <p className="text-gold text-2xl my-2">&</p>
                <p className="text-gray-700 text-xl md:text-2xl font-medium">
                  {t.patilFamily}
                </p>
              </div>

              <div className="bg-gradient-to-r from-maroon/5 via-gold/10 to-maroon/5 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gold/20 hover:border-gold/40 transition-colors">
                <p className="text-maroon/70 text-xs sm:text-sm tracking-widest mb-3 uppercase">
                  {t.sweetInvitation}
                </p>
                <p className="text-maroon text-xl sm:text-2xl md:text-3xl font-serif italic leading-relaxed">
                  {t.childrenNames}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        data-animate
        className="relative py-20 md:py-32 overflow-hidden"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('/images/image3.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-maroon/85 via-maroon/80 to-maroon/85"></div>
        </div>{" "}
        {/* Decorative */}
        <div className="absolute top-10 left-10 opacity-20 animate-float">
          <LotusIcon className="w-24 h-16 text-gold" />
        </div>
        <div
          className="absolute bottom-10 right-10 opacity-20 animate-float"
          style={{ animationDelay: "3s" }}
        >
          <LotusIcon className="w-24 h-16 text-gold" />
        </div>
        {/* Sparkles */}
        <SparkleEffect />
        <div
          className={`container mx-auto px-6 md:px-12 relative z-10 transition-all duration-1000 ${
            isVisible.contact
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-2xl mx-auto px-3 sm:px-4">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-14 shadow-2xl text-center hover:shadow-3xl transition-all duration-500 border-t-4 border-gold hover:scale-[1.02]">
              <p className="text-maroon/60 text-xs sm:text-sm tracking-[0.2em] mb-3 uppercase">
                {t.from}
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-maroon mb-6 italic">
                {t.contactPerson}
              </h3>
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"></div>
              <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mb-8 px-2">
                {t.contactAddress1}
                {t.contactAddress2}
                <br />
                <span className="font-semibold text-maroon">
                  {t.contactAddress3}
                </span>
              </p>
              <a
                href="tel:+918149242289"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-maroon to-maroon/90 text-white px-8 sm:px-10 py-4 rounded-full font-semibold hover:from-gold hover:to-gold hover:text-maroon transition-all duration-300 active:scale-95 text-base sm:text-lg shadow-xl hover:scale-110 min-h-[48px]"
              >
                <Phone className="w-5 h-5" />
                +91 81492 42289
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-maroon py-16 text-center overflow-hidden">
        {/* Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        <div className="relative z-10">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 blur-2xl bg-gold/40 rounded-full scale-150"></div>
            <img
              src="/images/buddha.png"
              alt="Buddha"
              className="relative w-20 h-24 md:w-24 md:h-28 mx-auto opacity-90 drop-shadow-2xl object-contain"
            />
          </div>

          <p className="text-2xl md:text-3xl font-serif text-gold mb-3 italic">
            {t.namoBuddhay}
          </p>
          <p className="text-cream/80 text-base md:text-lg mb-8 max-w-md mx-auto">
            {t.footerMessage}
          </p>

          <Divider light />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-cream/60 text-xs sm:text-sm px-4">
            <LotusIcon className="w-6 h-4 text-gold/50" />
            <span>{t.coupleNames}</span>
            <span className="text-gold">|</span>
            <span>25th January 2026</span>
            <LotusIcon className="w-6 h-4 text-gold/50" />
          </div>

          {/* Willovate Footer */}
          <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-gold/30">
            <div className="max-w-4xl mx-auto px-4">
              {/* Designed By */}
              <p className="text-cream/70 text-xs sm:text-sm md:text-base text-center mb-4 sm:mb-6 tracking-wide">
                {t.designedBy}{" "}
                <span className="text-gold font-semibold tracking-wider">
                  {t.willovate}
                </span>
              </p>

              {/* Contact Links */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-6 md:gap-8">
                {/* Phone */}
                <a
                  href="tel:+919356603646"
                  className="group flex items-center gap-2 sm:gap-3 text-cream/80 hover:text-gold transition-all duration-300 hover:scale-105 active:scale-95"
                  aria-label="Call us"
                >
                  <div className="bg-gold/20 p-2 rounded-full group-hover:bg-gold/30 transition-colors">
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" />
                  </div>
                  <span className="text-xs sm:text-sm md:text-base font-medium">
                    +91 935 660 3646
                  </span>
                </a>

                {/* Website */}
                <a
                  href="https://www.willovate.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 sm:gap-3 text-cream/80 hover:text-gold transition-all duration-300 hover:scale-105 active:scale-95"
                  aria-label="Visit our website"
                >
                  <div className="bg-gold/20 p-2 rounded-full group-hover:bg-gold/30 transition-colors">
                    <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" />
                  </div>
                  <span className="text-xs sm:text-sm md:text-base font-medium">
                    www.willovate.in
                  </span>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/willovate_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 sm:gap-3 text-cream/80 hover:text-gold transition-all duration-300 hover:scale-105 active:scale-95"
                  aria-label="Follow us on Instagram"
                >
                  <div className="bg-gold/20 p-2 rounded-full group-hover:bg-gold/30 transition-colors">
                    <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" />
                  </div>
                  <span className="text-xs sm:text-sm md:text-base font-medium">
                    @willovate_
                  </span>
                </a>
              </div>

              {/* Decorative Line */}
              <div className="mt-5 sm:mt-8 w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
