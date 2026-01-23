// Default Language
let currentLang = localStorage.getItem('lang') || 'ar'; // Default to Arabic

const translations = {
    en: {
        company_name: "Broge Al Shariaa",
        tagline: "Home Clean Service",
        nav_home: "Home",
        nav_services: "Services",
        nav_about: "Profile",
        nav_quality: "Quality",
        nav_contact: "Contact",

        // Promo Banner
        promo_title: "Home cleaning made easy",
        promo_item_1: "Set frequency as needed",
        promo_item_2: "Top-rated professionals",
        promo_item_3: "Advanced equipment",

        // Hero
        hero_title: "Welcome to Broge cleaning service",
        hero_subtitle: "Home cleaning service in Riyadh, K.S.A",
        hero_price: "25 Riyals per hour until Feb 10, 2026. Book Online",
        hero_card_title: "What are you looking for?",

        // Service Short Names (for Hero Card)
        xs_pest: "Pest Control",
        xs_manpower: "Manpower",
        xs_cleaning: "Cleaning",
        xs_hvac: "HVAC",
        xs_facade: "Facade",
        xs_landscape: "Landscape",

        // About
        about_title: "Profile",
        about_desc: "We cover all basic services including Manpower Supply, Support Services, Operation & Maintenance, and many others. Each of the service sections specializes in serving our customers and focuses on serving them individually with the principle of achieving the highest results. To pursue excellence in all operations by improving quality standards and procedures and developing competitive people that can best render a world class service to clients.",
        mission_title: "Our Mission",
        mission_desc: "To be the best and most respected industrial service provider striving to reflect the highest ethical and professional standards that can deliver a world class customer experience to client.",
        vision_title: "Our Vision",
        vision_desc: "By upholding basic human values, respecting nature and helping the weak and disadvantaged through several activities, we hope to develop the new chain of our team.",
        values_title: "Our Values",
        values_desc: "Upholding basic human values, continuity, transparency, and trust.",

        // Why Us
        why_title: "Why To Work With Us?",
        why_subtitle: "We have set our goals high to serve our clients better",
        why_step_title: "Always A Step Ahead",
        why_step_desc: "Remain “Always A Step Ahead in Service” by closely working with our clients to understand their needs and providing customized service to fulfill their needs with utmost care.",
        why_satisfaction_title: "Stakeholders Satisfaction",
        why_satisfaction_desc: "To satisfy each of our stakeholders by a systematic strategic review and improvement in the services we provide.",
        why_expand_title: "Expand the Business",
        why_expand_desc: "Expand the business by collaborating and associating with other partners and consolidating our presence in already penetrated markets.",
        why_empower_title: "Empower Human Resources",
        why_empower_desc: "Empower human resources to promote entrepreneurship, team spirit leading to value enhancement for our Customers and Stakeholders.",

        // Quality Policy
        quality_section_title: "Quality Policy",
        quality_standards: "Quality Standards",
        quality_standards_desc: "Delivering optimal quality standards to the customer.",
        quality_expectations: "Expectations",
        quality_expectations_desc: "Striving to exceed customer’s expectations.",
        quality_objectives: "Quality Objectives",
        quality_objectives_desc: "Recognizing defined quality objectives.",
        quality_improvements: "Improvements",
        quality_improvements_desc: "Pursuing continuous improvements.",

        // Services
        services_title: "Our Specialized Services",
        services_subtitle: "Comprehensive solutions for all your requirements",

        // Pest Control
        service_pest_title: "Pest Control & Disinfection Services",
        service_pest_desc: "Broge Al Shariaa offers pest control services in the Kingdom of Saudi Arabia. We have 6 years of experience in pest control with the help of qualified professional staff. Our motto is to ensure safe and effective solutions for pest control with guaranteed results. The presence of pests can affect any place, whether it is a warehouse, office, school, hospital, hotel, home, or commercial center, so there will be a risk of pest spread. We adhere to policies regarding insecticide uses and apply them accordingly.",
        service_pest_list: "Disinfection and Fumigation, Bed bug cleaning, Flying & crawling insect control, Birds Control, Rodent and termite control.",

        // Landscaping
        service_landscaping_title: "Landscaping",
        service_landscaping_desc: "Broge Al Shariaa is a renowned establishment that has been transforming outdoor spaces into lush and inviting havens for over a decade. With a commitment to enhancing the natural beauty of residential and commercial properties, Broge Al Shariaa offers a comprehensive range of landscaping services that cater to the diverse needs and desires of their clients. Their team of skilled landscape architects and horticultural experts work closely with customers to bring their outdoor visions to life.",
        service_landscaping_list: "Garden Designs, Gardening Construction, Indoor Plants Maintenance, Turf Care, Irrigation System.",

        // Maintenance
        service_maintenance_title: "Maintenance & Operation",
        service_maintenance_desc: "Broge Al Shariaa Operations & Maintenance Services is a reputable establishment specializing in providing comprehensive solutions for the upkeep and efficient management of critical infrastructure and industrial facilities. With a proven track record spanning over two decades, we have earned a reputation for excellence in ensuring the smooth and uninterrupted operation of various types of facilities, including power plants, water treatment plants, transportation networks, and manufacturing facilities.",
        service_maintenance_list: "Electrical Services, Plumbing Services, Paint Jobs, Gypsum Services.",

        // Facility Management
        service_facility_title: "Facility Management",
        service_facility_desc: "If you are looking for facility management companies to keep your environment clean and maintain productivity, then you should choose our service. Our core competency is facility management, where we display the highest degree of efficiency in our customers’ facilities while maintaining safety and comfort for tenants. This approach makes us one of the best facility services providers in the Kingdom. We have a range of integrated programs that include predictive and corrective maintenance.",
        service_facility_list: "Operation & Maintenance, Civil & Architectural, Electrical Maintenance, Light Electrical Systems, Mechanical Maintenance, Air Conditioning, Cleaning & Disinfection, Gardens & Landscaping.",

        // Cleaning
        service_cleaning_title: "Cleaning Services",
        service_cleaning_desc: "Your workspace should be a safe place where you, your employees and your business can thrive. We help your business grow by providing a safe environment for your staff and clients. Contact us today and watch your business take off with our higher standard of clean. Broge Al Shariaa ensures you make the right first impression by thoroughly cleaning your office building. This includes lobbies, conference rooms, open office areas and more.",
        service_cleaning_list: "Floors Cleaning, Glass Cleaning, High Rise Cleaning, Office Cleaning, Road Cleaning, Sanitization, Garbage Removal.",

        // Manpower
        service_manpower_title: "Manpower Solutions",
        service_manpower_desc: "With a commitment to excellence and a proven track record, we specialize in providing businesses across various industries with the skilled workforce they need to thrive in today’s competitive market. Whether you are seeking temporary staffing solutions, permanent hires, or project-specific talent, our company is dedicated to connecting you with top-tier professionals who possess the skills and expertise required to meet your specific needs.",
        service_manpower_list: "Temporary & Permanent Staffing, Contracting Staffing, Outsourcing Services, Recruitment Services, Employee Leasing, Payroll Services.",

        // Logistics
        service_logistics_title: "Logistics",
        service_logistics_desc: "Broge Al Shariaa specializes in providing all of your logistics requirements and solutions, including sea and air freight, 3PL warehousing, customs clearance, transportation & distribution, and tailor-made solutions to meet your specific needs. We provide complete solutions for all logistics requirements from flexible multi-modal transportation to freight forwarding and warehousing facilities in Saudi Arabia and worldwide.",
        service_logistics_list: "Freight Forwarding, Third Party Logistics (3PL), Air & Sea Charter, Project Cargo, Transportation & Distribution, Supply Chain Services.",

        // WhatsApp Banner
        whatsapp_title: "Looking for customized solution?",
        whatsapp_desc: "Chat with us on WhatsApp for instant quote and support.",
        whatsapp_btn: "Chat on WhatsApp",

        // Footer
        footer_contact: "Contact Information",
        footer_links: "Quick Links",
        rights_reserved: "All Rights Reserved. Broge Al Shariaa Est.",
    },
    ar: {
        company_name: "مؤسسة برج الشريعة",
        tagline: "خدمة تنظيف المنازل",
        nav_home: "الرئيسية",
        nav_services: "خدماتنا",
        nav_about: "الملف التعريفي",
        nav_quality: "الجودة",
        nav_contact: "اتصل بنا",

        // Promo Banner
        promo_title: "تنظيف المنزل أصبح سهلاً",
        promo_item_1: "حدد التكرار حسب الحاجة",
        promo_item_2: "محترفون ذوو تصنيف عالي",
        promo_item_3: "معدات متطورة",

        // Hero
        hero_title: "مرحبا بكم في خدمة تنظيف برج الشريعة",
        hero_subtitle: "خدمة تنظيف المنازل في الرياض، المملكة العربية السعودية",
        hero_price: "25 ريال بالساعة حتى 10 فبراير 2026. احجز الآن",
        hero_card_title: "عن ماذا تبحث؟",

        // Service Short Names (for Hero Card)
        xs_pest: "مكافحة الآفات",
        xs_manpower: "القوى العاملة",
        xs_cleaning: "النظافة",
        xs_hvac: "التكييف",
        xs_facade: "الواجهات",
        xs_landscape: "تنسيق الحدائق",

        // About
        about_title: "الملف التعريفي",
        about_desc: "نحن نغطي جميع الخدمات الأساسية بما في ذلك توريد القوى العاملة وخدمات الدعم والتشغيل والصيانة وغيرها الكثير. يتخصص كل قسم من أقسام الخدمة لدينا في خدمة عملائنا ويركز على خدمتهم بشكل فردي بمبدأ تحقيق أعلى النتائج. نسعى للتميز في جميع العمليات من خلال تحسين معايير وإجراءات الجودة وتطوير الكوادر التنافسية لتقديم خدمة عالمية المستوى للعملاء.",
        mission_title: "مهمتنا",
        mission_desc: "ان نكون أفضل مقدم خدمات للتشغيل والصيانة وأكثرها احتراما ونسعى جاهدين لعكس اعلى المعايير الأخلاقية والمهنية ونوفر أفضل تجربة للعملاء.",
        vision_title: "رؤيتنا",
        vision_desc: "التمسك بالقيم الإنسانية، واحترام الطبيعة ومساعدة الضعفاء والمحرومين من خلال العديد من الأنشطة، نأمل في تطوير سلسلة جديدة لفريقنا.",
        values_title: "قيمنا",
        values_desc: "التمسك بالقيم الإنسانية، والاستمرارية، والشفافية، والثقة.",

        // Why Us
        why_title: "لماذا اخترتنا؟",
        why_subtitle: "لقد وضعنا اهدافنا عالية لخدمة عملائنا بشكل أفضل.",
        why_step_title: "دائما خطوة لألمام",
        why_step_desc: "نحافظ على خطوه لألمام دائما في الخدمة من خلال العمل عن كثب مع عملائنا لفهم احتياجاتهم وتقديم رغباتهم بأقصى قدر من العناية.",
        why_satisfaction_title: "رضاء العمالء",
        why_satisfaction_desc: "إلرضاء العمالء لدينا من خالل مراجعة اسرتاتيجية ومنهجية واضحة وتحسني الخدمات المقدمة لهم من قبلنا.",
        why_expand_title: "توسيع االعمال",
        why_expand_desc: "توسيع نطاق االعمال من خالل التعاون واالرتباط مع رشكاء اخرين وتعزيز وجودنا في األسواق التي تم دخولنا فيها بالفعل.",
        why_empower_title: "الموارد البرشية",
        why_empower_desc: "تمكني الموارد البرشية لتعزيز روح المبادرة وروح الفريق مما يودي الي تعزيز القيمة لعمالئنا.",

        // Quality Policy
        quality_section_title: "سياسات الجودة",
        quality_standards: "معايري الجودة",
        quality_standards_desc: "تقديم معايري الجودة للعمالء.",
        quality_expectations: "التوقعات",
        quality_expectations_desc: "السعي لتجاوز توقعات العمالء.",
        quality_objectives: "أهداف الجودة",
        quality_objectives_desc: "التعرف على اهداف الجودة المحددة.",
        quality_improvements: "تحسينات",
        quality_improvements_desc: "السعي إلى التحسينات المستمرة.",

        // Services translations
        services_title: "خدماتنا المتخصصة",
        services_subtitle: "حلول شاملة لجميع متطلباتك",

        // Pest
        service_pest_title: "مكافحة آفات الحشرات",
        service_pest_desc: "نحن بروج الشريعة نقدم خدمات مكافحة الحشرات في المملكة العربية السعودية ولدينا 6 سنوات من الخبرة في مكافحة الآفات بمساعدة موظفين محترفين مؤهلين وشعارنا هو ضمان الحلول االمنة والفعالة لمكافحة الآفات مع نتائج مضمونة. يمكن ان يوثر وجود الآفات في أي الأماكن سواء كان مستودع، او مكاتب او مدارس او مستشفيات او فنادق او منازل او المراكز التجارية فسيكون خطر انتشار الآفات. نحن ملتزمون بضمان اماكنكم خالية من الآفات في بيئة مثالية ونظيفة.",
        service_pest_list: "التطهيم والتبخيم، تنظيف بق الفراش، مكافحة الحشرات الطائرة والزاحفة، مراقبة الطيور، مكافحة القوارض والنمل الأبيض.",

        // Landscaping
        service_landscaping_title: "تنسيق الحدائق",
        service_landscaping_desc: "نحن بروج الشريعة ومن خلال تركيزنا الثابت على رؤية المملكة العربية السعودية نقوم بأعمال تنسيق الحدائق في أبرز المجمعات التجارية والمباني الخاصة والعامة والطرقات في جميع انحاء المملكة العربية السعودية واهتمامنا في تقديم خدمات عالية الجودة المصممة للحفاظ على المناظر الخضراء والتي وضعت ثقة عملائنا بنا.",
        service_landscaping_list: "تصميم الحدائق، بناء البستنة، صيانة النباتات الداخلية والخارجية، رعاية العشب والتقليم، نظام الري.",

        // Maintenance
        service_maintenance_title: "الصيانة والتشغيل",
        service_maintenance_desc: "بروج الشريعة لخدمات التشغيل والصيانة هي مؤسسة مرموقة متخصصة في تقديم حلول شاملة للصيانة واإلدارة الفعالة للبنية التحتية الحيوية والمرافق الصناعية. بفضل سجل حافل يمتد ألكثر من عقدين من الزمن، اكتسبت شركة بروج الشريعة لخدمات التشغيل والصيانة سمعة طيبة في ضمان التشغيل السلس وغير المنقطع لمختلف أنواع المرافق، بما في ذلك محطات توليد الطاقة ومحطات معالجة المياه وشبكات النقل ومرافق التصنيع.",
        service_maintenance_list: "الخدمات الكهربائية، خدمات السباكة، وظائف الطلاء، خدمات الجبس.",

        // Facility
        service_facility_title: "إدارة المرافق",
        service_facility_desc: "إذا كنت تبحث عن شركات إدارة المرافق للحفاظ على نظافة بيئتك والحفاظ على اإلنتاجية، فعليك اختيار خدمتنا. كفاءتنا األساسية هي إدارة المرافق، حيث نعرض أعلى درجة من الكفاءة في مرافق عملائنا مع الحفاظ على سالمة وراحة المستأجرين. وهذا النهج يجعلنا أحد أفضل مقدمي خدمات المرافق في المملكة. لدينا مجموعة من البرامج المتكاملة التي تشمل الصيانة التنبؤية والتصحيحية.",
        service_facility_list: "التشغيل والصيانة، المدنية والمعمارية، الصيانة الكهربائية، األنظمة الكهربائية الخفيفة، الصيانة الميكانيكية، تكييف، التنظيف والتطهير، الحدائق والمناظر الطبيعية.",

        // Cleaning
        service_cleaning_title: "النظافة والتعقيم",
        service_cleaning_desc: "يجب أن تكون مساحة العمل الخاصة بك مكانا آمنا حيث يمكنك أنت وموظفيك وعملك أن تزدهروا. نحن نساعد عملك على النمو من خلال توفير بيئة آمنة لموظفيك وعملائك. اتصل بنا اليوم وشاهد أعمالك تنطلق مع أعلى معايير التنظيف لدينا. تضمن لك بروج الشريعة ترك االنطباع األول الصحيح من خلال التنظيف الشامل لمبنى مكتبك. يتضمن ذلك الردهات وقاعات المؤتمرات ومناطق المكاتب المفتوحة والمزيد.",
        service_cleaning_list: "تنظيف األرضيات، تنظيف الزجاج، تنظيف المباني الشاهقة، تنظيف المكاتب، تنظيف الطرق، التعقيم، إزالة القمامة.",

        // Manpower
        service_manpower_title: "توريد القوى العاملة",
        service_manpower_desc: "مع االلتزام بالتميز وسجل حافل، نحن متخصصون في تزويد الشركات في مختلف الصناعات بالقوى العاملة الماهرة التي تحتاجها لتزدهر في السوق التنافسية اليوم. سواء كنت تبحث عن حلول توظيف مؤقتة، أو تعيينات دائمة، أو مواهب خاصة بالمشروع، فإن شركتنا ملتزمة بربطك بالمحترفين من الدرجة األولى الذين يمتلكون المهارات والخبرة المطلوبة لتلبية احتياجاتك الخاصة.",
        service_manpower_list: "التوظيف المؤقت والدائم، التوظيف التعاقدي، خدمات االستعانة بمصادر خارجية، خدمات التوظيف، تأجير الموظفين، خدمات الرواتب.",

        // Logistics
        service_logistics_title: "اللوجستية",
        service_logistics_desc: "تتخصص برج الشريعة في توفير جميع متطلباتك وحلولك اللوجستية، بما في ذلك الشحن البحري والجوي والتخزين من طرف ثالث والتخليص الجمركي والنقل والتوزيع والحلول المصممة خصيصا لتلبية احتياجاتك الخاصة. نحن نقدم حلولا كاملة لجميع المتطلبات اللوجستية بدءا من النقل المرن متعدد الوسائط وحتى مرافق الشحن والتخزين في المملكة العربية السعودية وفي جميع أنحاء العالم.",
        service_logistics_list: "شحن البضائع، لوجستيات الطرف الثالث (3PL)، ميثاق الهواء والبحري، شحن المشروع، النقل والتوزيع، خدمات سلسلة التوريد.",

        // WhatsApp Banner
        whatsapp_title: "هل تبحث عن حلول مخصصة؟",
        whatsapp_desc: "تحدث معنا عبر الواتساب للحصول على عرض سعر فوري.",
        whatsapp_btn: "تواصل عبر الواتساب",

        // Footer
        footer_contact: "معلومات الاتصال",
        footer_links: "روابط سريعة",
        rights_reserved: "جميع الحقوق محفوظة. مؤسسة برج الشريعة للتشغيل والصيانة.",
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langToggleBtn = document.getElementById('lang-toggle');
    const mobileLangToggleBtn = document.getElementById('mobile-lang-toggle');
    const html = document.documentElement;
    const langText = document.getElementById('lang-text');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Default Language - Force Arabic as default
    // Reset to Arabic for all users (one-time migration)
    const LANG_VERSION = 'v2_arabic_default';
    if (localStorage.getItem('langVersion') !== LANG_VERSION) {
        localStorage.setItem('lang', 'ar');
        localStorage.setItem('langVersion', LANG_VERSION);
    }
    let currentLang = localStorage.getItem('lang') || 'ar';

    function updateLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);

        // Update Direction
        if (lang === 'ar') {
            html.setAttribute('dir', 'rtl');
            html.setAttribute('lang', 'ar');
            html.classList.add('font-arabic');
            html.classList.remove('font-sans');
            langText.textContent = 'English';
            if (mobileLangToggleBtn) mobileLangToggleBtn.textContent = 'English';
        } else {
            html.setAttribute('dir', 'ltr');
            html.setAttribute('lang', 'en');
            html.classList.add('font-sans');
            html.classList.remove('font-arabic');
            langText.textContent = 'العربية';
            if (mobileLangToggleBtn) mobileLangToggleBtn.textContent = 'العربية';
        }

        // Update Text Content
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update List Content (New logic for Checklists)
        document.querySelectorAll('[data-i18n-list]').forEach(element => {
            const key = element.getAttribute('data-i18n-list');
            if (translations[lang][key]) {
                // Split by comma or specific delimiter used in translations
                const items = translations[lang][key].split(/,|،/); // Split by English or Arabic comma
                element.innerHTML = items.map(item => `
                    <li class="flex items-start gap-3">
                        <i data-lucide="check" class="w-5 h-5 text-secondary shrink-0 mt-1"></i>
                        <span class="text-gray-700">${item.trim()}</span>
                    </li>
                `).join('');
                // Re-init icons for new content
                if (typeof lucide !== 'undefined') lucide.createIcons();
            }
        });
    }

    // Toggle Handlers
    function toggleLanguage() {
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        updateLanguage(newLang);
    }

    if (langToggleBtn) langToggleBtn.addEventListener('click', toggleLanguage);
    if (mobileLangToggleBtn) mobileLangToggleBtn.addEventListener('click', () => {
        toggleLanguage();
        mobileMenu.classList.add('hidden'); // Close menu after toggle
    });

    // Mobile Menu Toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Preloader Logic
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.style.opacity = '0';
                document.documentElement.classList.add('loaded');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500); // Wait for transition to finish
            }, 1000); // Min display time
        });
    }

    // Initialize
    updateLanguage(currentLang);
});
