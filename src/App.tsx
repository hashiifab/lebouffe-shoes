import { useState, useEffect, useRef } from "react";
import {
  Footprints,
  Scissors,
  Heart,
  MessageSquare,
  ChevronRight,
  ChevronLeft,
  Star,
  Ruler,
  Package,
  Sparkles,
  Menu,
  X,
} from "lucide-react";

function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const testimonials = [
    {
      name: "Rani Pratiwi",
      text: "Jujur, sepatu ini bener-bener pas di hati! Dari desain sampe kenyamanannya, semua sesuai banget sama yang aku bayangin. Makasih ya, seneng banget!",
      rating: 5,
      image: "./test-1.png",
    },
    {
      name: "Sinta Maharani",
      text: "Sepatunya keren banget! Modelnya oke, nyaman dipake, dan aku suka banget sama kualitasnya. Worth it banget lah!",
      rating: 5,
      image: "./test-2.png",
    },
    {
      name: "Diana Sari",
      text: "Proses pemesanan gampang banget, dan hasilnya bener-bener sesuai dengan ekspektasi. Senang banget akhirnya dapet sepatu yang pas!",
      rating: 5,
      image: "./test-3.png",
    },
  ];

  const process = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Konsultasi",
      description:
        "Bagikan visi dan preferensi gaya Anda dengan para pengrajin kami",
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Pengukuran",
      description:
        "Pengukuran yang tepat memastikan sepatu pas dengan sempurna",
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Pembuatan",
      description: "Pengrajin terampil mewujudkan sepatu impian Anda",
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Pengiriman",
      description:
        "Sepatu custom Anda, dikemas dengan hati-hati dan dikirimkan dengan aman",
    },
  ];

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsNavOpen(false);
  };

  const productContainerRef = useRef<HTMLDivElement>(null);

  const products = [
    { imgSrc: "./test-1.png", name: "Melly Heels" },
    { imgSrc: "./test-2.png", name: "Yuna Flatshoes" },
    { imgSrc: "./test-3.png", name: "Diana Heels" },
    { imgSrc: "./test-4.png", name: "Lucy Heels" },
  ];

  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <a href="#">
                <img src="./logo-1.svg" width={100} alt="logo" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["story", "journey", "testimonials", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize ${
                    isScrolled
                      ? "text-amber-900 hover:text-amber-700"
                      : "text-amber-800 hover:text-amber-600"
                  } transition-colors`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Toggle */}
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="md:hidden"
            >
              {isNavOpen ? (
                <X
                  className={`w-6 h-6 ${
                    isScrolled ? "text-amber-900" : "text-white"
                  }`}
                />
              ) : (
                <Menu
                  className={`w-6 h-6 ${
                    isScrolled ? "text-amber-900" : "text-white"
                  }`}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden absolute w-full bg-white/95 backdrop-blur-md transition-all duration-300 ${
            isNavOpen ? "max-h-64 shadow-lg" : "max-h-0 overflow-hidden"
          }`}
        >
          <div className="px-4 py-2">
            {["story", "journey", "testimonials", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-3 text-amber-900 hover:text-amber-700 capitalize transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <header className="relative h-screen flex flex-col items-center justify-end bg-gray-100 overflow-hidden">
        {/* Hero Section */}
        <div className="relative z-10 text-center px-4">
          {/* Header Content */}
          <h1 className="text-6xl md:text-7xl font-semibold text-amber-900 mb-4">
            Lebouffe
          </h1>
          <p className="text-base text-justify sm:text-xl md:text-2xl text-gray-700 mb-6 max-w-full sm:max-w-3xl mx-auto">
            Handmade custom shoes yang mengutamakan kenyamanan dan kualitas,
            dirancang khusus sesuai dengan kebutuhan Anda.
          </p>
        </div>

        {/* Horizontal Product Showcase */}
        <div
          className="flex overflow-hidden py-8 max-w-full relative"
          ref={productContainerRef}
        >
          {/* Duplicated Product Container */}
          <div className="flex animate-infinite-loop gap-4 sm:gap-8">
            {products.concat(products).map((product, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 min-w-[300px] sm:min-w-[400px] md:min-w-[500px] h-auto snap-start"
              >
                <img
                  src={product.imgSrc}
                  alt={product.name}
                  className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-md"
                />
                <h3 className="text-lg sm:text-2xl text-center mt-4 sm:mt-6 font-medium">
                  {product.name}
                </h3>
                <button
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/lebouffe_/",
                      "_blank"
                    )
                  }
                  className="bg-amber-700 text-white w-full py-2 sm:py-3 rounded-md mt-4 sm:mt-6 hover:bg-amber-600 transition-colors"
                >
                  Lihat di Instagram
                </button>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="story" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif text-amber-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-amber-800 mb-6">
                Lebouffe Shoes lahir di Bandung dengan keyakinan bahwa setiap
                orang layak memiliki sepatu yang nyaman dan berkualitas. Setiap
                pasang dibuat dengan perhatian penuh oleh pengrajin kami,
                menjadikannya unik dan istimewa.
              </p>

              <div className="flex items-center space-x-4">
                <Heart className="text-amber-700" />
                <span className="text-amber-800">
                  Made with love in Bandung
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                src="./about.png"
                alt="Shoe craftsman at work"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-amber-100 p-4 rounded-lg">
                <Sparkles className="w-8 h-8 text-amber-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="journey" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-amber-900 text-center mb-16">
            The Journey
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-6 rounded-xl shadow-lg mb-4 transform hover:scale-105 transition-transform h-64 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-200 to-amber-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <div className="text-amber-700 mb-4 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-serif text-amber-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-amber-800">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-20 px-4 bg-white overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-amber-900 text-center mb-16">
            Happy Feet
          </h2>
          <div className="relative">
            <div className="flex items-center">
              <button
                onClick={handlePrevTestimonial}
                className="absolute left-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg text-amber-700 hover:text-amber-600 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="relative w-full overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${activeTestimonial * 100}%)`,
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="bg-amber-50 rounded-xl shadow-lg overflow-hidden">
                        <div className="md:flex">
                          <div className="md:w-1/3">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-64 md:h-full object-cover"
                            />
                          </div>
                          <div className="p-8 md:w-2/3 flex flex-col justify-center">
                            <div className="flex justify-center md:justify-start mb-4">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-6 h-6 text-amber-500 fill-amber-500"
                                />
                              ))}
                            </div>
                            <p className="text-lg text-amber-800 mb-4 italic">
                              "{testimonial.text}"
                            </p>
                            <p className="font-serif text-amber-900 text-xl">
                              - {testimonial.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleNextTestimonial}
                className="absolute right-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg text-amber-700 hover:text-amber-600 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? "bg-amber-700 w-6"
                      : "bg-amber-200"
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-amber-900 mb-6">
            Ready to Step Into Your Story?
          </h2>
          <p className="text-lg text-amber-800 mb-8">
            Let's create something beautiful together. Your perfect pair awaits.
          </p>
          <a
  href="https://wa.me/6285860471801?text=Halo%20Lebouffe%20Shoes,%20saya%20tertarik%20untuk%20memulai%20desain%20sepatu."
  target="_blank"
  rel="noopener noreferrer"
  className="bg-amber-700 text-white px-12 py-4 rounded-full text-md md:text-xl sm:text-base hover:bg-amber-600 transition-colors inline-flex items-center"
>
  Begin Your Design Journey <ChevronRight className="ml-2" />
</a>

        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-amber-900 text-amber-100 py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <Footprints className="w-8 h-8 mb-4" />
            <p className="text-sm">
              Crafting dreams into reality, one step at a time.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg mb-4">Location</h3>
            <p className="text-sm">Bandung, Jawa Barat</p>
          </div>
          <div>
            <h3 className="font-serif text-lg mb-4">Find Us</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="https://shopee.co.id/lebouffeshoes_?categoryId=100532&entryPoint=ShopByPDP&itemId=25586695681"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Shopee
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/lebouffe_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@lebouffeshoes_?_t=8qggka3ca1l&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6285860471801?text=Halo%20Lebouffe%20Shoes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          &copy; 2025 Lebouffe Shoes. All rights reserved Made by{" "}
          <a href="https://instagram.com/temankami" className="hover:underline">
            Teman Kami
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
