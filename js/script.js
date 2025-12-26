// 1. Embedded Translation Objects
const translations = {
    "es": {
        "navbar_brand": "Transporte y Turismo GIF",
        "nav_servicios": "Servicios",
        "nav_nosotros": "Nosotros",
        "nav_galeria": "Galería",
        "nav_testimonios": "Testimonios",
        "nav_faq": "FAQ",
        "nav_blog": "Blog",
        "nav_contacto": "Contacto",
        "header_title": "Transporte y Turismo GIF",
        "header_subtitle": "Tu socio confiable para viajes y traslados",
        "servicios_title": "Nuestros Servicios",
        "servicios_aeropuerto_title": "Traslados al Aeropuerto",
        "servicios_aeropuerto_desc": "Comienza y termina tu viaje con la comodidad y puntualidad que mereces.",
        "servicios_turismo_title": "Turismo",
        "servicios_turismo_desc": "Descubre nuevos destinos con nuestros tours personalizados y grupales.",
        "servicios_artistas_title": "Artistas",
        "servicios_artistas_desc": "Ofrecemos un servicio discreto y de primera clase para artistas y personalidades.",
        "servicios_viajes_title": "Viajes Nacionales e Internacionales",
        "servicios_viajes_desc": "Cruzamos fronteras para llevarte a tu destino, donde sea que esté.",
        "flota_title": "Nuestra Flota",
        "flota_minivan_title": "Mini Van",
        "flota_minivan_desc": "Ideal para grupos pequeños y familias.",
        "flota_van_title": "Van",
        "flota_van_desc": "Perfecta para grupos medianos y tours.",
        "flota_bus_title": "Bus",
        "flota_bus_desc": "La mejor opción para grandes grupos y eventos.",
        "nosotros_title": "Sobre Nosotros",
        "nosotros_desc1": "Transporte y Turismo GIF es una empresa familiar dedicada a ofrecer soluciones de transporte confiables y de alta calidad. Fundada por Daniel Parra Miranda, nuestra misión es garantizar la seguridad, comodidad y puntualidad en cada uno de nuestros servicios.",
        "nosotros_desc2": "Con años de experiencia en el sector, nos hemos especializado en una amplia gama de servicios, desde traslados ejecutivos y turismo hasta el transporte de artistas, siempre con un enfoque en la satisfacción del cliente.",
        "nosotros_founder_name": "Daniel Parra Miranda",
        "nosotros_founder_role": "Dueño y Fundador",
        "galeria_title": "Galería",
        "testimonios_title": "Testimonios de Clientes",
        "testimonio1_text": "¡Excelente servicio! Muy puntuales y amables. El vehículo estaba impecable. Totalmente recomendados.",
        "testimonio1_author": "- María González",
        "testimonio2_text": "Contraté el servicio para un tour familiar y fue una experiencia maravillosa. El conductor fue muy profesional y conocía muy bien la zona.",
        "testimonio2_author": "- Juan Pérez",
        "testimonio3_text": "El mejor servicio de transporte para artistas. Discreción, seguridad y confort. Siempre los elijo para mis traslados.",
        "testimonio3_author": "- Artista Famoso",
        "faq_title": "Preguntas Frecuentes",
        "faq1_q": "¿Con cuánta antelación debo reservar?",
        "faq1_a": "Recomendamos reservar con al menos 48 horas de antelación para garantizar la disponibilidad, especialmente en temporada alta. Para servicios especiales o grupos grandes, sugerimos una semana de antelación.",
        "faq2_q": "¿Qué métodos de pago aceptan?",
        "faq2_a": "Aceptamos transferencias bancarias, tarjetas de crédito/débito y efectivo. El pago se puede realizar al momento de la reserva o directamente con el conductor.",
        "faq3_q": "¿Sus vehículos cuentan con medidas de seguridad?",
        "faq3_a": "Sí, toda nuestra flota cumple con las normativas de seguridad vigentes. Los vehículos son inspeccionados regularmente y cuentan con cinturones de seguridad para todos los pasajeros, GPS y seguro de viaje.",
        "blog_title": "Nuestro Blog",
        "blog1_title": "5 Consejos para tu Próximo Viaje",
        "blog1_desc": "Descubre cómo prepararte para que tu viaje sea una experiencia inolvidable y sin contratiempos.",
        "blog1_btn": "Leer Más",
        "blog2_title": "Destinos Imperdibles Cerca de Santiago",
        "blog2_desc": "Explora los mejores lugares para una escapada de fin de semana cerca de la capital chilena.",
        "blog2_btn": "Leer Más",
        "blog3_title": "La Comodidad en Nuestros Vehículos",
        "blog3_desc": "Conoce más sobre el equipamiento y las comodidades que ofrecemos en nuestra flota para tu confort.",
        "blog3_btn": "Leer Más",
        "cotizacion_title": "Solicita tu Cotización",
        "form_nombre": "Nombre Completo",
        "form_email": "Email",
        "form_telefono": "Teléfono",
        "form_tipo_servicio": "Tipo de Servicio",
        "form_servicio_option1": "Elegir...",
        "form_servicio_option2": "Traslado al Aeropuerto",
        "form_servicio_option3": "Turismo",
        "form_servicio_option4": "Transporte de Artistas",
        "form_servicio_option5": "Viajes Nacionales/Internacionales",
        "form_servicio_option6": "Otro",
        "form_origen": "Origen",
        "form_destino": "Destino",
        "form_fecha": "Fecha del Viaje",
        "form_pasajeros": "Número de Pasajeros",
        "form_mensaje": "Mensaje Adicional",
        "form_btn": "Enviar Cotización",
        "contact_info_title": "Información de Contacto",
        "contact_info_owner": "Daniel Parra Miranda",
        "contact_info_company_phone": "Empresa: +56926247876",
        "contact_info_personal_phone": "Personal: +56995888109",
        "contact_info_email": "transturgif@gmail.com",
        "instagram_title": "Síguenos en Instagram",
        "instagram_btn": "Ver más en @TransporteTurismoGIF",
        "footer_text": "&copy; 2025 Transporte y Turismo GIF. Todos los derechos reservados.",
        "calculadora_title": "Calcula tu Tarifa",
        "calc_origen": "Origen",
        "calc_destino": "Destino",
        "calc_pasajeros": "Número de Pasajeros",
        "calc_vehiculo": "Tipo de Vehículo",
        "calc_vehiculo_option1": "Elegir...",
        "calc_vehiculo_option2": "Mini Van",
        "calc_vehiculo_option3": "Van",
        "calc_vehiculo_option4": "Bus",
        "calc_btn": "Calcular Tarifa Estimada",
        "calc_resultado_title": "Tarifa Estimada",
        "calc_nota": "Esta es una tarifa estimada. La tarifa final puede variar."
    },
    "en": {
        "navbar_brand": "GIF Transport & Tourism",
        "nav_servicios": "Services",
        "nav_nosotros": "About Us",
        "nav_galeria": "Gallery",
        "nav_testimonios": "Testimonials",
        "nav_faq": "FAQ",
        "nav_blog": "Blog",
        "nav_contacto": "Contact",
        "header_title": "GIF Transport & Tourism",
        "header_subtitle": "Your reliable partner for trips and transfers",
        "servicios_title": "Our Services",
        "servicios_aeropuerto_title": "Airport Transfers",
        "servicios_aeropuerto_desc": "Start and end your trip with the comfort and punctuality you deserve.",
        "servicios_turismo_title": "Tourism",
        "servicios_turismo_desc": "Discover new destinations with our personalized and group tours.",
        "servicios_artistas_title": "Artists",
        "servicios_artistas_desc": "We offer a discreet and first-class service for artists and personalities.",
        "servicios_viajes_title": "National & International Trips",
        "servicios_viajes_desc": "We cross borders to take you to your destination, wherever it may be.",
        "flota_title": "Our Fleet",
        "flota_minivan_title": "Mini Van",
        "flota_minivan_desc": "Ideal for small groups and families.",
        "flota_van_title": "Van",
        "flota_van_desc": "Perfect for medium-sized groups and tours.",
        "flota_bus_title": "Bus",
        "flota_bus_desc": "The best option for large groups and events.",
        "nosotros_title": "About Us",
        "nosotros_desc1": "GIF Transport & Tourism is a family business dedicated to offering reliable, high-quality transportation solutions. Founded by Daniel Parra Miranda, our mission is to ensure safety, comfort, and punctuality in each of our services.",
        "nosotros_desc2": "With years of experience in the sector, we have specialized in a wide range of services, from executive transfers and tourism to artist transportation, always with a focus on client satisfaction.",
        "nosotros_founder_name": "Daniel Parra Miranda",
        "nosotros_founder_role": "Owner and Founder",
        "galeria_title": "Gallery",
        "testimonios_title": "Customer Testimonials",
        "testimonio1_text": "Excellent service! Very punctual and friendly. The vehicle was spotless. Totally recommended.",
        "testimonio1_author": "- María González",
        "testimonio2_text": "I hired the service for a family tour and it was a wonderful experience. The driver was very professional and knew the area very well.",
        "testimonio2_author": "- Juan Pérez",
        "testimonio3_text": "The best transportation service for artists. Discretion, safety, and comfort. I always choose them for my transfers.",
        "testimonio3_author": "- Famous Artist",
        "faq_title": "Frequently Asked Questions",
        "faq1_q": "How far in advance should I book?",
        "faq1_a": "We recommend booking at least 48 hours in advance to ensure availability, especially during high season. For special services or large groups, we suggest one week in advance.",
        "faq2_q": "What payment methods do you accept?",
        "faq2_a": "We accept bank transfers, credit/debit cards, and cash. Payment can be made at the time of booking or directly with the driver.",
        "faq3_q": "Do your vehicles have safety measures?",
        "faq3_a": "Yes, our entire fleet complies with current safety regulations. Vehicles are regularly inspected and have seat belts for all passengers, GPS, and travel insurance.",
        "blog_title": "Our Blog",
        "blog1_title": "5 Tips for Your Next Trip",
        "blog1_desc": "Discover how to prepare for your trip to be an unforgettable and smooth experience.",
        "blog1_btn": "Read More",
        "blog2_title": "Must-See Destinations Near Santiago",
        "blog2_desc": "Explore the best places for a weekend getaway near the Chilean capital.",
        "blog2_btn": "Read More",
        "blog3_title": "Comfort in Our Vehicles",
        "blog3_desc": "Learn more about the equipment and amenities we offer in our fleet for your comfort.",
        "blog3_btn": "Read More",
        "cotizacion_title": "Request Your Quote",
        "form_nombre": "Full Name",
        "form_email": "Email",
        "form_telefono": "Phone",
        "form_tipo_servicio": "Type of Service",
        "form_servicio_option1": "Choose...",
        "form_servicio_option2": "Airport Transfer",
        "form_servicio_option3": "Tourism",
        "form_servicio_option4": "Artist Transport",
        "form_servicio_option5": "National/International Trips",
        "form_servicio_option6": "Other",
        "form_origen": "Origin",
        "form_destino": "Destination",
        "form_fecha": "Date of Travel",
        "form_pasajeros": "Number of Passengers",
        "form_mensaje": "Additional Message",
        "form_btn": "Send Quote",
        "contact_info_title": "Contact Information",
        "contact_info_owner": "Daniel Parra Miranda",
        "contact_info_company_phone": "Company: +56926247876",
        "contact_info_personal_phone": "Personal: +56995888109",
        "contact_info_email": "transturgif@gmail.com",
        "instagram_title": "Follow Us on Instagram",
        "instagram_btn": "See more at @TransporteTurismoGIF",
        "footer_text": "&copy; 2025 GIF Transport & Tourism. All rights reserved.",
        "calculadora_title": "Calculate Your Fare",
        "calc_origen": "Origin",
        "calc_destino": "Destination",
        "calc_pasajeros": "Number of Passengers",
        "calc_vehiculo": "Vehicle Type",
        "calc_vehiculo_option1": "Choose...",
        "calc_vehiculo_option2": "Mini Van",
        "calc_vehiculo_option3": "Van",
        "calc_vehiculo_option4": "Bus",
        "calc_btn": "Calculate Estimated Fare",
        "calc_resultado_title": "Estimated Fare",
        "calc_nota": "This is an estimated fare. The final rate may vary."
    }
};

// 2. Updated, synchronous setLanguage function
function setLanguage(lang) {
    const translation = translations[lang];
    if (translation) {
        document.querySelectorAll('[data-key]').forEach(elem => {
            const key = elem.getAttribute('data-key');
            if (translation[key]) {
                elem.innerHTML = translation[key];
            }
        });
        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);
    }
}

// 3. Simplified event listeners and initial load
document.addEventListener('DOMContentLoaded', () => {
    // Language switcher
    document.querySelectorAll('.lang-switcher').forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const lang = event.target.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Set initial language
    const savedLang = localStorage.getItem('language') || 'es';
    setLanguage(savedLang);
});


// Scroll reveal animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
window.addEventListener("scroll", reveal);

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if(targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Formulario de cotización
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
    quoteForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Gracias por tu solicitud de cotización. Nos pondremos en contacto contigo pronto.');
        this.reset();
    });
}

// Calculadora de Tarifas (Simulada)
const fareCalculatorForm = document.getElementById('fareCalculatorForm');
if (fareCalculatorForm) {
    fareCalculatorForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const passengers = parseInt(document.getElementById('calc_pasajeros').value) || 1;
        const vehicle = document.getElementById('calc_vehiculo').value;
        
        let baseFare = 50; // Tarifa base en USD
        
        switch(vehicle) {
            case 'minivan':
                baseFare *= 1.2;
                break;
            case 'van':
                baseFare *= 1.5;
                break;
            case 'bus':
                baseFare *= 2.5;
                break;
        }
        
        let totalFare = baseFare + (passengers * 10) + (Math.random() * 20); // Agrega un factor aleatorio
        
        const fareAmount = document.getElementById('fareAmount');
        fareAmount.textContent = `~$${totalFare.toFixed(0)} USD`;
        
        const fareResult = document.getElementById('fareResult');
        fareResult.style.display = 'block';
    });
}