<!doctype html>
<html class="no-js" lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Plum Expert : BV</title>
    <meta name="description" content="Plum Expert : BV">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="shortcut icon" type="image/x-icon" href="assets/img/logo/logo1.jpeg">
    <!-- Place favicon.ico in the root directory -->
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- CSS here -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/animate.min.css">
    <link rel="stylesheet" href="assets/css/magnific-popup.css">
    <link rel="stylesheet" href="assets/css/fontawesome-all.min.css">
    <link rel="stylesheet" href="assets/css/tg-flaticon.css">
    <link rel="stylesheet" href="assets/css/swiper-bundle.min.css">
    <link rel="stylesheet" href="assets/css/default.css">
    <link rel="stylesheet" href="assets/css/default-icons.css">
    <link rel="stylesheet" href="assets/css/odometer.css">
    <link rel="stylesheet" href="assets/css/aos.css">
    <link rel="stylesheet" href="assets/css/tg-cursor.css">
    <link rel="stylesheet" href="assets/css/main.css">
</head>

<style>
    .experience__wrap {
        background: #DA8326;
    }
    .cta__area {
        background: #DA8326;
    }
    .team__area {
        background: #DA8326;
    }
    .call__back-area {
        background: #76B6CF;
    }
  
    #gfjhdgfj {
        margin-top: -650px;
    }

    @media (max-width: 768px) {
        #gfjhdgfj {
            margin-top: 0;
        }
    }

    .header-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        background-color: white;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    .translate-container {
        padding: 5px 15px;
        background-color: #f8f9fa;
        border-bottom: 1px solid #e9ecef;
    }

    /* Base styles */
    .swiper-container1.slider1-active {
        width: 100%;
        height: 80vh;
    }

    .swiper-wrapper12 {
        display: flex;
    }

    .slider1__bg {
        width: 100vw;
        height: 80vh;
        position: relative;
        object-fit: cover !important;
    }

    .slider1__bg::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(0);
        transition: all 0.5s ease-in-out;
        z-index: 1;
    }

    .slider1__content {
        position: absolute;
        top: 58%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        z-index: 2;
        width: 100%;
        transition: all 0.5s ease-in-out;
    }

    .initial-content {
        text-align: center;
        padding: 20px;
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 10px;
        transition: all 0.5s ease-in-out;
    }

    .initial-content .title12 {
        font-size: 4rem;
        color: white;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .hover-content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        visibility: hidden;
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .content-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        max-width: 1000px;
        margin: 0 auto;
        height: 100%;
        padding: 0 60px;
    }

    .text-side {
        max-width: 800px;
        text-align: left;
        transform: translateY(30px);
        opacity: 0;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .text-side .title12 {
        font-size: 4rem;
        color: white;
        font-weight: bold;
        margin-bottom: 20px;
        margin-left: -20px;
        line-height: 1.2;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;
    }

    .text-side p {
        font-size: 1.25rem;
        line-height: 1.6;
        color: rgba(255, 255, 255, 0.9);
        opacity: 0;
        margin-left: -20px;
        transform: translateY(20px);
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
    }

    /* Hover effects */
    .slider1__bg:hover::before {
        background-color: rgba(0, 0, 0, 0.75);
        backdrop-filter: blur(6px);
    }

    .slider1__bg:hover .initial-content {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-20px);
        transition: all 0.4s ease-out;
    }

    .slider1__bg:hover .hover-content {
        opacity: 1;
        visibility: visible;
    }

    .slider1__bg:hover .text-side {
        transform: translateY(0);
        opacity: 1;
    }

    .slider1__bg:hover .text-side .title12,
    .slider1__bg:hover .text-side p {
        opacity: 1;
        transform: translateY(0);
    }

    .slider1__nav {
        position: absolute;
        top: 50%;
        width: 100%;
        z-index: 10;
        transform: translateY(-50%);
    }

    .slider1-button-prev,
    .slider1-button-next {
        position: absolute;
        width: 50px;
        height: 50px;
        background: rgba(255, 255, 255, 0.5);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }

    .slider1-button-prev:hover,
    .slider1-button-next:hover {
        background: rgba(255, 255, 255, 0.8);
    }

    .slider1-button-prev {
        left: 20px;
    }

    .slider1-button-next {
        right: 20px;
    }

    .slider1-button-prev i,
    .slider1-button-next i {
        font-size: 24px;
        color: #000;
    }

    @media (max-width: 768px) {
        .slider1-button-prev,
        .slider1-button-next {
            width: 40px;
            height: 40px;
        }

        .slider1-button-prev i,
        .slider1-button-next i {
            font-size: 20px;
        }
    }

    @media (max-width: 767px) {
        .slider1__content {
            margin-top: 2rem;
            width: 80vw;
        }
        
        .content-wrapper {
            padding: 0 30px;
        }
        
        .text-side .title12 {
            font-size: 2.5rem;
            margin-bottom: 15px;
        }
        
        .text-side p {
            font-size: 1rem;
        }
        
        .initial-content .title12 {
            font-size: 2.5rem;
        }
    }
</style>

<body>
    <div class="header-wrapper">
        <div class="translate-container">
            <div id="google_translate_element"></div>
            <script type="text/javascript">
                function googleTranslateElementInit() {
                    new google.translate.TranslateElement({
                        pageLanguage: 'en',
                        layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
                    }, 'google_translate_element');
                }
            </script>
            <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
        </div>
        <?php require 'sections/header.php'; ?>
    </div>

    <main class="main-area fix">
        <!-- HTML Part -->
<section class="slider1__area">
    <div class="swiper-container1 slider1-active">
        <div class="swiper-wrapper swiper-wrapper12">
            <!-- Slide 1 -->
            <div class="swiper-slide slider1__bg" data-background="assets/img/banner/off34.png" style="background: url('assets/img/banner/off34.png') center/cover no-repeat;">
                <div class="slider1__content">
                    <div class="initial-content">
                        <h1 class="title12">Plum Expert</h1>
                        <p>Your Trusted Business Growth Partner for Success</p>
                    </div>
                    <div class="hover-content">
                        <div class="content-wrapper">
                            <div class="text-side">
                                <h1 class="title12">Plum Expert</h1>
                                <p>Your Trusted Business Growth Partner for Success</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Slide 2 -->
            <div class="swiper-slide slider1__bg" data-background="assets/img/banner/U1.png" style="background: url('assets/img/banner/U1.png') center/cover no-repeat;">
                <div class="slider1__content">
                    <div class="initial-content">
                        <h1 class="title12">Coming together is a beginning</h1>
                        <p>Keeping together is progress, Working together is success</p>
                    </div>
                    <div class="hover-content">
                        <div class="content-wrapper">
                            <div class="text-side">
                                <h1 class="title12">Coming together is a beginning</h1>
                                <p>Keeping together is progress, Working together is success</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
</section>

<style>
    /* Base styles */
    .swiper-container1.slider1-active {
        width: 100%;
        height: 80vh;
        position: relative;
        overflow: hidden;
    }

    .swiper-wrapper12 {
        display: flex;
        height: 100%;
    }

    .slider1__bg {
        width: 100%;
        height: 100%;
        position: relative;
        background-position: center !important;
        background-size: cover !important;
    }

    /* Default Overlay - Stronger Effect */
.slider1__bg::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0));
    transition: all 0.5s ease-in-out;
    z-index: 1;
}

/* Hover Effect - More Intense */
.slider1__bg:hover::before {
    background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 0.2));
}

    


/* Mobile Responsiveness */
@media (max-width: 767px) {
    .slider1-button-prev,
    .slider1-button-next {
        width: 35px;  /* Even smaller on mobile */
        height: 35px;
    }

    .slider1-button-prev i,
    .slider1-button-next i {
        font-size: 16px;
    }

    .slider1-button-prev {
        left: 10px;
    }

    .slider1-button-next {
        right: 10px;
    }
}

    
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container1', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.slider1-button-next',
            prevEl: '.slider1-button-prev',
        },
        on: {
            init: function() {
                document.querySelector('.slider1__nav').style.display = 'block';
            }
        }
    });
});
</script>
        <!-- about-area -->
<section class="about__area section-py-130" style="margin-top:-7rem">
    <div class="container">
        <div class="row align-items-center justify-content-center">
            <div class="col-lg-6 col-md-9">
                <div class="about__img-wrap">
                    <div class="about__images">
                        <img src="assets/img/images/b2345.avif" alt="img" style="height:600px" data-aos="fade-up" data-aos-delay="400">
                    </div>
                    <div class="experience__wrap" data-aos="fade-left" data-aos-delay="400">
                        <h2 class="count">5+</h2>
                        <span>Of Experience <br> in This Field</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-6" data-aos="fade-left" data-aos-delay="400">
                <div class="about__content">
                    <div class="section__title mb-15">
                        <!-- Updated animation for the title -->
                        <h2 class="title animated-title" data-aos="fade-right" data-aos-delay="300">A Commitment to Innovation and Sustainability</h2>
                    </div>
                    <p>Plum Expert BV is a pioneering firm that seamlessly merges creativity and functionality to redefine excellence. We are committed to driving innovation and implementing sustainable solutions across all our consulting services.</p>
                    <div class="about__inner-wrap">
                        <div class="about__list-box">
                            <div class="about__list-box-item">
                                <div class="icon">
                                    <i class="flaticon-growth"></i>
                                </div>
                                <div class="content">
                                    <h4 class="title" style="color: #BADAE5;">Investment <br> Planning</h4>
                                </div>
                            </div>
                            <div class="about__list-box-item">
                                <div class="icon">
                                    <i class="flaticon-pie-chart-1"></i>
                                </div>
                                <div class="content">
                                    <h4 class="title" style="color: #BADAE5;">Business <br> Statistics Rate</h4>
                                </div>
                            </div>
                        </div>
                        <div class="about__inner-content">
                            <p>Transform your business with innovative consulting. We ensure long-term sustainable success.</p>
                            <ul class="list-wrap about__list-item">
                                <li>
                                    <div class="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path d="M11.5252 3.5L5.30301 9.72222L2.47473 6.89394" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    Business Competitive Analysis
                                </li>
                                <li>
                                    <div class="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path d="M11.5252 3.5L5.30301 9.72222L2.47473 6.89394" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    Fast Growing Sales
                                </li>
                                <li>
                                    <div class="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path d="M11.5252 3.5L5.30301 9.72222L2.47473 6.89394" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    Financing Project Investment
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</section>

<!-- Add AOS (Animate On Scroll) Library -->
<link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css">
<script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>

<!-- Custom CSS for Title Animation -->
<style>
    .animated-title {
        opacity: 0;
        transform: translateX(-20px);
        animation: fadeInLeft 1s ease-out forwards;
        transition: all 0.4s ease;
        display: inline-block;
        position: relative;
        padding: 2px 5px;
    }

    .animated-title:hover {
        transform: translateY(-5px);
        color: #4a90e2;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }

    @keyframes fadeInLeft {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    /* Add smooth transition for initial state */
    .title {
        transition: all 0.4s ease;
    }
</style>

<!-- Initialize AOS -->
<script>
    AOS.init({
        duration: 1000,
        once: true,
    });
</script>

        <!-- services-area -->
        <!-- Services Section -->
        <section class="services__area fix section-py-130 services__bg" data-background="assets/img/bg/services_bg.png" data-aos="fade-down" data-aos-delay="200" style="margin-bottom:10rem;">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8">
                <div class="section__title text-center mb-50">
                    <span class="sub-title" style="color: #BADAE5;">Our Dedicated Services</span>
                    <h2 class="title">Services Offered</h2>
                </div>
            </div>
        </div>

        <!-- Custom Slider Container -->
        <div class="services-slider-container">
            <button id="prevServiceBtn" class="slider-btn">&#10094;</button>
            <div id="servicesSlider" class="services-slider"></div>
            <button id="nextServiceBtn" class="slider-btn">&#10095;</button>
        </div>
    </div>
    
    <div class="services__shape-wrap">
        <img src="assets/img/services/services_shape01.svg" alt="shape" data-aos="fade-down-left" data-aos-delay="400">
        <img src="assets/img/services/services_shape02.svg" alt="shape" data-aos="fade-up-right" data-aos-delay="400">
    </div>
</section>

<!-- JavaScript for Slider -->
<script>
    document.addEventListener('DOMContentLoaded', function () {
        let services = [
            {
                img: "assets/img/services/s3.avif",
                title: "Advisor",
                description: "Viability evaluation for new markets or products through comprehensive feasibility studies.",
                icon: "flaticon-investment",
                link: "advisory.php"
            },
            {
                img: "assets/img/services/s4.avif",
                title: "Assurance",
                description: "Implementing control systems to minimize stockouts and enhance vendor relationships.",
                icon: "flaticon-report",
                link: "assurance.php"
            },
            {
                img: "assets/img/services/s5.avif",
                title: "Business Service",
                description: "Helping clients integrate ERP systems to streamline business operations.",
                icon: "flaticon-target",
                link: "business-services-&-outsourcing.php"
            },
            {
                img: "assets/img/services/vision2.avif",
                title: "Tax",
                description: "Detailed financial planning, budgeting, and investment strategies to maximize returns.",
                icon: "flaticon-accountant",
                link: "tax.php"
            }
        ];

        let index = 0;
        const servicesToShow = 3;
        const servicesContainer = document.getElementById("servicesSlider");

        function renderServices() {
            servicesContainer.innerHTML = "";
            let visibleServices = services.slice(index, index + servicesToShow);

            visibleServices.forEach(service => {
                const serviceElement = document.createElement("div");
                serviceElement.classList.add("service-card");

                serviceElement.innerHTML = `
                    <div class="services__item shine__animate-item">
                        <div class="services__thumb shine__animate-link">
                            <a href="${service.link}"><img src="${service.img}" alt="${service.title}"></a>
                            <div class="services__icon">
                                <i class="${service.icon}"></i>
                            </div>
                        </div>
                        <div class="services__content">
                            <h3 class="title"><a href="${service.link}">${service.title}</a></h3>
                            <p>${service.description}</p>
                            <a href="${service.link}" class="link-btn" style="color: #BADAE5;">Read More</a>
                        </div>
                        <div class="services__item-shape"></div>
                    </div>
                `;
                servicesContainer.appendChild(serviceElement);
            });
        }

        function nextService() {
            if (index < services.length - servicesToShow) {
                index++;
            } else {
                index = 0;
            }
            renderServices();
        }

        function prevService() {
            if (index > 0) {
                index--;
            } else {
                index = services.length - servicesToShow;
            }
            renderServices();
        }

        document.getElementById("nextServiceBtn").addEventListener("click", nextService);
        document.getElementById("prevServiceBtn").addEventListener("click", prevService);

        setInterval(nextService, 5000);
        renderServices();
    });
</script>


<!-- Custom CSS -->
<style>
    .services-slider-container {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        max-width: 100%;
        overflow: hidden;
        padding: 20px;
    }

    .services-slider {
        display: flex;
        gap: 20px;
        width: 100%;
        justify-content: center;
    }

    .service-card {
        width: 30%;
        background: #fff;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .service-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    }

    .services__thumb img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    .services__content {
        padding: 20px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .services__content .title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
        color: rgba(118,182,207,0.9);
    }

    .services__content p {
        color: #666;
        font-size: 14px;
        line-height: 1.6;
        min-height: 60px;
        max-height: 60px;
        overflow: hidden;
        text-align: center;
        margin-bottom: 20px;
    }

    .link-btn {
        display: inline-block;
        padding: 10px 20px;
        background-color: rgba(118,182,207,0.9);
        color: white;
        text-decoration: none;
        border-radius: 4px;
        font-size: 14px;
        font-weight: bold;
        transition: background-color 0.3s ease;
    }

    .link-btn:hover {
        background-color: rgba(90,150,180,1);
    }

    .slider-btn {
        background: rgba(0, 0, 0, 0.4);
        color: white;
        border: none;
        padding: 8px 12px;
        cursor: pointer;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 18px;
        border-radius: 4px;
        z-index: 10;
        transition: background 0.3s ease, transform 0.3s ease;
    }

    .slider-btn:hover {
        background: rgba(0, 0, 0, 0.6);
    }

    #prevServiceBtn { left: 10px; }
    #nextServiceBtn { right: 10px; }

    @media (max-width: 1024px) {
        .service-card { width: 45%; }
    }

    @media (max-width: 768px) {
        .service-card { width: 100%; }
        .slider-btn { padding: 6px 10px; font-size: 16px; }
    }
</style>



        <!-- cta-area -->
        <section class="cta__area" style="margin-top:-200px">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-8">
                        <div class="cta__content">
                            <div class="section__title white-title">
                                <h2 class="title">Let's discuss about how we can help make your business better!</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="cta__btn">
                            <a href="#" class="tg-btn tg-hover-btn">Let's Make a Schedule <img src="assets/img/icons/right_arrow.svg" alt="" class="injectable"></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cta__shape-wrap">
                <img src="assets/img/images/cta_shape01.svg" alt="shape" data-aos="fade-up-right" data-aos-delay="400">
                <img src="assets/img/images/cta_shape02.svg" alt="shape" data-aos="fade-up" data-aos-delay="400">
                <img src="assets/img/images/cta_shape03.svg" alt="shape">
            </div>
        </section>
        <!-- cta-area-end -->

        <!-- history-area -->
        <section class="history__area section-py-130">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6 col-md-10">
                        <div class="history__img-wrap">
                            <img src="assets/img/images/g2356.avif" alt="img0" style=""  data-aos="fade-down-right" data-aos-delay="400">
                            <!--<img src="assets/img/images/grow1i.jpg" alt="img" data-aos="fade-up" data-aos-delay="400">-->
                            <!--<img src="assets/img/images/history_shape.svg" alt="shape" class="shape" data-aos="fade-down-right" data-aos-delay="400">-->
                           
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="history__content">
                            <div class="section__title mb-20">
                                <!-- <span class="sub-title">Behind Our History</span> -->
                                <h2 class="title">Our Vision
                                </h2>
                                         <p>At the heart of our consulting services, we envision a future where innovation, excellence, and client-centric solutions drive the success of businesses and individuals alike. We believe that in today's fast-paced and ever-evolving financial landscape, having a trusted partner who understands both the challenges and opportunities is essential to achieving sustainable growth.
<br>
<br>
Our mission is simple yet powerful: to empower businesses and individuals by providing smart, customized financial solutions that foster long-term success. We are committed to delivering unparalleled expertise and value, tailored to each client's unique needs, goals, and circumstances. Whether you're looking to streamline operations, optimize your financial strategies, or navigate complex economic challenges, our team of experienced professionals is here to guide you every step of the way.
                            </p>
                            </div>
                   
                            
                            
                            <!--<div class="progress__wrap">-->
                            <!--    <div class="progress__item">-->
                            <!--        <h6 class="title">Consulting</h6>-->
                            <!--        <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">-->
                            <!--            <div class="progress-bar wow slideInLeft" data-wow-delay=".2s" style="width: 100%"><span></span></div>-->
                            <!--        </div>-->
                            <!--    </div>-->
                            <!--    <div class="progress__item">-->
                            <!--        <h6 class="title">Investment</h6>-->
                            <!--        <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">-->
                            <!--            <div class="progress-bar wow slideInLeft" data-wow-delay=".2s" style="width: 100%"><span></span></div>-->
                            <!--        </div>-->
                            <!--    </div>-->
                            <!--    <div class="progress__item">-->
                            <!--        <h6 class="title">Project Completed Rate</h6>-->
                            <!--        <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">-->
                            <!--            <div class="progress-bar wow slideInLeft" data-wow-delay=".2s" style="width: 100%"><span></span></div>-->
                            <!--        </div>-->
                            <!--    </div>-->
                            <!--</div>-->
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- history-area-end -->

       

        <section style="padding: 50px 15px; background-color: #f8f8f8;">
    <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
        <h2 class="title1">Latest Blog Posts</h2>
        <div class="blog-slider-container">
            <button id="prevBtn" class="slider-btn">&#10094;</button>
            <div id="blogPosts" class="blog-slider"></div>
            <button id="nextBtn" class="slider-btn">&#10095;</button>
        </div>
    </div>
</section>

<script>
    document.addEventListener('DOMContentLoaded', function () {
        fetch('get_recent_posts.php')
            .then(response => response.json())
            .then(data => {
                const blogPostsContainer = document.getElementById('blogPosts');
                let index = 0; // Track current slide
                const blogsToShow = 3; // Number of blogs to display at a time
                let blogs = data.slice(0, 6); // Load up to 6 posts for navigation

                function renderBlogs() {
                    blogPostsContainer.innerHTML = ""; // Clear container
                    blogPostsContainer.style.transition = "transform 0.5s ease-in-out"; // Smooth transition effect

                    let visibleBlogs = blogs.slice(index, index + blogsToShow);
                    visibleBlogs.forEach(post => {
                        const postElement = document.createElement('div');
                        postElement.classList.add('blog-card');

                        postElement.innerHTML = `
                            <img src="${post.img_url}" alt="${post.title}" class="blog-image">
                            <div class="blog-content">
                                <h3 class="blog-title">${post.title}</h3>
                                <p class="blog-excerpt">${post.content.substring(0, 100)}...</p>
                                <div class="blog-footer">
                                    <a href="blog-details.php?id=${post.id}" class="blog-read-more">Read Blog</a>
                                </div>
                            </div>
                        `;
                        blogPostsContainer.appendChild(postElement);
                    });
                }

                function nextSlide() {
                    index = (index + 1) % (blogs.length - (blogsToShow - 1));
                    renderBlogs();
                }

                function prevSlide() {
                    index = (index - 1 + blogs.length - (blogsToShow - 1)) % (blogs.length - (blogsToShow - 1));
                    renderBlogs();
                }

                document.getElementById("nextBtn").addEventListener("click", nextSlide);
                document.getElementById("prevBtn").addEventListener("click", prevSlide);

                setInterval(nextSlide, 6000); // Auto-slide every 4 seconds

                renderBlogs(); // Initial render
            })
            .catch(error => console.error('Error:', error));
    });
</script>

<style>
    .title1 {
        font-size: 28px;
        font-weight: bold;
        color: rgba(118,182,207,0.9); /* Light Blue */
        text-align: center;
        margin-bottom: 30px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .blog-slider-container {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        max-width: 100%;
        overflow: hidden;
        padding: 20px;
    }

    .blog-slider {
        display: flex;
        gap: 20px;
        width: 100%;
        justify-content: center;
    }

    .blog-card {
        width: 30%;
        background: #fff;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .blog-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    }

    .blog-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    .blog-content {
        padding: 20px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .blog-title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
        color:rgba(118,182,207,0.9);
    }

    .blog-excerpt {
        color: #666;
        font-size: 14px;
        line-height: 1.6;
        min-height: 60px;
        max-height: 60px;
        overflow: hidden;
        text-align: center;
    }

    .blog-footer {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .blog-read-more {
        display: inline-block;
        padding: 10px 20px;
        background-color: rgba(118,182,207,0.9);
        color: white;
        text-decoration: none;
        border-radius: 4px;
        font-size: 14px;
        font-weight: bold;
        transition: background-color 0.3s ease;
    }

    .blog-read-more:hover {
        background-color: rgba(90,150,180,1);
    }

    /* Navigation Buttons */
    .slider-btn {
        background: rgba(0, 0, 0, 0.4);
        color: white;
        border: none;
        padding: 8px 12px; /* Smaller size */
        cursor: pointer;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 18px;
        border-radius: 4px;
        z-index: 10;
        transition: background 0.3s ease, transform 0.3s ease;
    }

    .slider-btn:hover {
        background: rgba(0, 0, 0, 0.6);
    }

    #prevBtn { left: 10px; }
    #nextBtn { right: 10px; }

    /* Responsive */
    @media (max-width: 1024px) {
        .blog-card {
            width: 45%;
        }
    }

    @media (max-width: 768px) {
        .blog-card {
            width: 100%;
        }

        .slider-btn {
            padding: 6px 10px; /* Even smaller on mobile */
            font-size: 16px;
        }
    }
</style>



        <!-- team-area -->
        <section class="team__area fix section-py-130">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="section__title white-title mb-50 mb-md-30">
                            <span class="sub-title">MEET OUR TEAM</span>
                            <h2 class="title">Partner Profiles</h2>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="section__content white-content mb-50">
                            <p>At Plum Expert BV, we believe in empowering businesses to make informed choices that drive success.</p>

                        </div>
                    </div>
                </div>
      <style>
  .team__thumb-three {
    display: inline-block;
    overflow: hidden;
    position: relative;
    perspective: 1000px; /* Add perspective for 3D effect */
  }

  .team__thumb-three img {
    transition: transform 0.4s ease, filter 0.4s ease, box-shadow 0.4s ease;
    width: 100%;
    height: auto;
    transform: scale(1) rotate3d(0, 0, 0, 0); /* Initial normal state */
    will-change: transform, filter, box-shadow;
  }

  .team__thumb-three:hover img {
    transform: scale(1.15) rotate3d(1, 1, 0, 15deg); /* Smooth zoom-in with 3D tilt */
    filter: brightness(1.1); /* Slightly brighten the image */
    box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.3), -10px -20px 30px rgba(0, 0, 0, 0.2); /* 3D shadow effect */
  }
</style>
                <div class="row gutter-y-30 justify-content-center">
                     <h3 class="title text-white"> Netherland Team</h3>
 <div class="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay="400">
                <div class="team__item-three" style="background:#ffffff00; border:1px solid #dfe1ed00;box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.06);">
                    <div class="team__thumb-three">
                        <img src="IMG-20241122-WA0007.jpg" alt="img">
                    </div>
                    <div class="team__content-three">
                        <h2 class="title text-white"><a href="#">Pradip Chananaa</a></h2>
                        <span class="text-white">Operations Expert</span>
                        <div class="team__social-three">
                            <!--<ul class="list-wrap">
                                <li><a href="https://www.facebook.com/" target="_blank"><img src="assets/img/icons/facebook.svg" alt="" class="injectable text-white"></a></li>
                                <li><a href="https://x.com/home" target="_blank"><img src="assets/img/icons/twitter.svg" alt="" class="injectable text-white"></a></li>
                                <li><a href="https://www.instagram.com/" target="_blank"><img src="assets/img/icons/instagram.svg" alt="" class="injectable text-white"></a></li>
 
                            </ul>-->
                        </div>
                    </div>
                </div>
            </div>      
            
             <div class="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay="400">
                <div class="team__item-three" style="background:#ffffff00; border:1px solid #dfe1ed00; box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.06);">
                    <div class="team__thumb-three">
                         <img src="https://legalblue.com/assets/images/adv24.jpeg" alt="img">
                    </div>
                    <div class="team__content-three">
                        <h2 class="title text-white"><a href="#">Karnik Rajat</a></h2>
                        <span class="text-white">Legal Expert
</span>
                        <div class="team__social-three">
                           <!-- <ul class="list-wrap">
                                <li><a href="https://www.facebook.com/" target="_blank"><img src="assets/img/icons/facebook.svg" alt="" class="injectable text-white"></a></li>
                                <li><a href="https://x.com/home" target="_blank"><img src="assets/img/icons/twitter.svg" alt="" class="injectable text-white"></a></li>
                                <li><a href="https://www.instagram.com/" target="_blank"><img src="assets/img/icons/instagram.svg" alt="" class="injectable text-white"></a></li>
 
                            </ul>-->
                        </div>
                    </div>
                </div>
            </div>      

                         <div class="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay="400">
                <div class="team__item-three" style="background:#ffffff00; border:1px solid #dfe1ed00;box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.06);">
                    <div class="team__thumb-three">
                                <img src="assets/img/team/ca2.jpg" alt="img">
                    </div>
                    <div class="team__content-three">
                        <h2 class="title text-white"><a href="#">CA Sunila</a></h2>
                        <span class="text-white">Financial Advisor
</span>
                        <div class="team__social-three">
                           <!-- <ul class="list-wrap">
                                <li><a href="https://www.facebook.com/" target="_blank"><img src="assets/img/icons/facebook.svg" alt="" class="injectable text-white"></a></li>
                                <li><a href="https://x.com/home" target="_blank"><img src="assets/img/icons/twitter.svg" alt="" class="injectable text-white"></a></li>
                                <li><a href="https://www.instagram.com/" target="_blank"><img src="assets/img/icons/instagram.svg" alt="" class="injectable text-white"></a></li>
 
                            </ul>-->
                        </div>
                    </div>
                </div>
            </div>  
            
                                     <div class="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay="400">
                <div class="team__item-three" style="background:#ffffff00; border:1px solid #dfe1ed00;box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.06);">
                    <div class="team__thumb-three">
                                <img src="assets/img/team/ashiachanna.jpg" alt="img">
                    </div>
                    <div class="team__content-three">
<h2 class="title text-white"><a href="index.php">Aashia Chanana
                                </a></h2>                        <span class="text-white">Financial Advisor
</span>
                        <div class="team__social-three">
                           <!-- <ul class="list-wrap">
                                <li><a href="https://www.facebook.com/" target="_blank"><img src="assets/img/icons/facebook.svg" alt="" class="injectable text-white"></a></li>
                                <li><a href="https://x.com/home" target="_blank"><img src="assets/img/icons/twitter.svg" alt="" class="injectable text-white"></a></li>
                                <li><a href="https://www.instagram.com/" target="_blank"><img src="assets/img/icons/instagram.svg" alt="" class="injectable text-white"></a></li>
 
                            </ul>-->
                        </div>
                    </div>
                </div>
            </div>  

            

                </div>
                
                
                <div class="row gutter-y-30 justify-content-center mt-4">
                     <h3 class="title text-white"> Indian Team</h3>
                    <div class="col-xl-4 col-lg-4 col-md-6"data-aos="fade-up" data-aos-delay="400">
                        <div class="team__item">
                            <!--<div class="team__thumb">-->
                            <!--    <img src="assets/img/team/vinod.jpeg" alt="img">-->
                            <!--</div>-->
                            <div class="team__content">
                                <h2 class="title"><a href="index.php">CA Vinod
                                </a></h2>
                                <span></span>
                            </div>
                           
                            <div class="team__shape">
                                <!--<img src="assets/img/team/team_shape.svg" alt="shape">-->
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6" data-aos="fade-right" data-aos-delay="400">
                        <div class="team__item">
                            <!--<div class="team__thumb">-->
                            <!--    <img src="assets/img/team/ca2.jpg" alt="img">-->
                            <!--</div>-->
                            <div class="team__content">
                                <h2 class="title"><a href="index.php">Sanjana Garg
                                </a></h2>
                                <span></span>
                            </div>
                         
                            <div class="team__shape">
                                <!--<img src="assets/img/team/team_shape.svg" alt="shape">-->
                            </div>
                        </div>
                    </div>
                                        <div class="col-xl-4 col-lg-4 col-md-6" data-aos="fade-right" data-aos-delay="400">
                        <div class="team__item">
                            <!--<div class="team__thumb">-->
                            <!--    <img src="assets/img/team/ashiachanna.jpg" alt="img">-->
                            <!--</div>-->
                            <div class="team__content">
                                <h2 class="title"><a href="index.php">Aashia Chanana
                                </a></h2>
                                <span></span>
                            </div>
                         
                            <div class="team__shape">
                                <!--<img src="assets/img/team/team_shape.svg" alt="shape">-->
                            </div>
                        </div>
                    </div>

                </div>
                
                
            </div>
            <div class="team__shape-wrap">
                <!--<img src="assets/img/team/team_shape01.svg" alt="shape" data-aos="fade-down-left" data-aos-delay="400">-->
                <!--<img src="assets/img/team/team_shape02.svg" alt="shape" data-aos="fade-up-right" data-aos-delay="400">-->
                <img src="assets/img/team/team_shape03.svg" alt="shape" class="rightToLeft" style="padding-top:2rem">
            </div>
        </section>
        <!-- team-area-end -->

       <!-- faq-area -->
<section class="faq__area section-py-130">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-5">
                <div class="faq__content">
                    <div class="section__title mb-20" id="gfjhdgfj" >
                        <span class="sub-title">Need more clarity? We're here to help</span>
                        <h2 class="title">Got Questions? We've got the answers.</h2>
                    </div>
                    <p>If you have any questions about our consulting services, feel free to explore the answers to some of the most common queries we receive from our clients.</p>
                    <div class="faq__img">
                        <img src="assets/img/images/b12.avif" alt="img" style="width:500px" data-aos="fade-up" data-aos-delay="400">
                    </div>
                    <div class="shape">
                        <!--<img src="assets/img/images/faq_shape.svg" alt="shape" data-aos="fade-up-right" data-aos-delay="400">-->
                    </div>
                </div>
            </div>
            
            
          <div class="col-lg-7">
    <div class="faq__wrap">
        <div class="accordion" id="accordionExample" st >
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        What consulting services does Plum Expert BV offer?
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>We offer business consultancy services focused on strategic guidance, process optimization, market research, financial advisory, and sustainability initiatives across various industries.</p>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        How can Plum Expert help my business?
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>Plum Expert helps businesses by providing customized solutions that address specific challenges, improve efficiency, reduce costs, and drive growth. We leverage innovative strategies to create lasting impacts.</p>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        What industries does Plum Expert specialize in?
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>Plum Expert works with businesses across a wide range of industries, including but not limited to manufacturing, technology, healthcare, retail, and sustainability-focused organizations.</p>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        How do I get in touch with Plum Expert for consultancy services?
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>You can contact us via our website's contact form, email, or phone. Our team will be happy to discuss your business needs and how we can assist you.</p>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Can Plum Expert help with sustainability initiatives?
                    </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>Yes, we specialize in helping businesses implement sustainable practices that reduce environmental impact. We provide strategies for waste reduction, resource optimization, and carbon footprint management.</p>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        What makes Plum Expert different from other business consultancies?
                    </button>
                </h2>
                <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>Plum Expert stands out by providing personalized, results-driven consultancy services that align with the specific goals and values of each client. Our leadership team has extensive experience across industries, and we are committed to helping businesses achieve long-term success with a focus on sustainability.</p>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        Does Plum Expert provide support for startups?
                    </button>
                </h2>
                <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>Yes, we work with startups to help them navigate early-stage challenges, optimize processes, and implement scalable growth strategies. Our services are tailored to the unique needs of new businesses.</p>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                        How does Plum Expert approach diversity and inclusion?
                    </button>
                </h2>
                <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>We are committed to creating an inclusive environment that values diverse backgrounds and perspectives. We focus on fostering equality and ensuring all voices are heard and respected within the organization and in our client relationships.</p>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                        How can my business benefit from Plum Expert's ESG initiatives?
                    </button>
                </h2>
                <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>Plum Expert helps businesses implement effective Environmental, Social, and Governance (ESG) practices that align with industry standards. We assist with reducing environmental impacts, promoting social responsibility, and ensuring strong governance.</p>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                        Does Plum Expert offer ongoing support after the consultancy engagement?
                    </button>
                </h2>
                <div id="collapseTen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>Yes, we provide ongoing support to ensure that the solutions we implement continue to deliver positive results. Our team is available for follow-up consultations, monitoring, and adjustment as needed.</p>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                        What is the process for working with Plum Expert?
                    </button>
                </h2>
                <div id="collapseEleven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>The process typically involves an initial consultation to understand your business needs, followed by a tailored strategy and action plan. We collaborate closely with you to implement the solutions and provide ongoing support.</p>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                        Is Plum Expert global or local?
                    </button>
                </h2>
                <div id="collapseTwelve" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>Plum Expert operates globally, serving clients across multiple regions. We adapt our solutions to meet the unique needs of businesses in different markets.</p>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                        Can Plum Expert assist with digital transformation projects?
                    </button>
                </h2>
                <div id="collapseThirteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>Yes, we specialize in helping businesses adapt to the digital age by implementing digital solutions that improve operational efficiency, enhance customer experience, and enable data-driven decision-making.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

            
            
        </div>
    </div>
</section>
<!-- faq-area-end -->

<section style="width: 100vw; margin: 20px 0; position: relative; left: 50%; transform: translateX(-50%);">
  <div style="min-height: 180px; background: #76B6CF; color: white; display: flex; justify-content: center; align-items: center; text-align: center; position: relative; overflow: hidden; transition: all 0.5s ease; border-radius: 12px; box-shadow: 0 8px 32px rgba(118,182,207,0.2); padding: 20px 0;" class="main-panel">
    <div class="particles" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; opacity: 0.1;"></div>
    
    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; 
         background: linear-gradient(45deg, rgba(118,182,207,0.8) 0%, rgba(118,182,207,0.9) 100%);
         transition: all 0.5s ease;" class="gradient-overlay"></div>

    <div style="position: relative; z-index: 1; display: flex; flex-direction: row; gap: 40px; padding: 0 20px; max-width: 1200px; width: 100%;" class="content-wrapper">
      <div style="flex: 1; transform: translateY(0); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);" class="content-section">
        <h2 style="color: white; margin-bottom: 20px; font-size: 1.4em; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; text-shadow: 0 2px 4px rgba(0,0,0,0.1);" class="section-title">
          What can we help you achieve?
        </h2>
        <a href="careers.php" class="interactive-button" style="display: inline-block; padding: 14px 32px; background: rgba(255,255,255,0.15); color: white; text-decoration: none; border-radius: 8px; font-size: 0.95em; font-weight: 600; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); position: relative; overflow: hidden; letter-spacing: 0.5px;">
          <span style="position: relative; z-index: 2;">LET'S GET TO WORK</span>
          <div class="button-glow" style="position: absolute; top: 50%; left: 50%; width: 0; height: 0; background: rgba(255,255,255,0.2); border-radius: 50%; transform: translate(-50%, -50%); transition: all 0.5s ease;"></div>
        </a>
      </div>
      <div style="flex: 1; transform: translateY(0); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);" class="content-section">
        <h2 style="color: white; margin-bottom: 20px; font-size: 1.4em; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; text-shadow: 0 2px 4px rgba(0,0,0,0.1);" class="section-title">
          Where will your career take you?
        </h2>
        <a href="contact.php" class="interactive-button" style="display: inline-block; padding: 14px 32px; background: rgba(255,255,255,0.15); color: white; text-decoration: none; border-radius: 8px; font-size: 0.95em; font-weight: 600; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); position: relative; overflow: hidden; letter-spacing: 0.5px;">
          <span style="position: relative; z-index: 2;">COME FIND OUT</span>
          <div class="button-glow" style="position: absolute; top: 50%; left: 50%; width: 0; height: 0; background: rgba(255,255,255,0.2); border-radius: 50%; transform: translate(-50%, -50%); transition: all 0.5s ease;"></div>
        </a>
      </div>
    </div>
  </div>

  <style>
    @media (max-width: 768px) {
      .content-wrapper {
        flex-direction: column !important;
        gap: 30px !important;
      }
      
      .content-section {
        padding: 0 15px;
      }

      .section-title {
        font-size: 1.2em !important;
      }

      .interactive-button {
        padding: 12px 24px !important;
        font-size: 0.9em !important;
        width: 100% !important;
        max-width: 280px;
      }
    }

    @keyframes particleAnimation {
      0% { transform: translateY(0) translateX(0); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateY(-100px) translateX(50px); opacity: 0; }
    }

    .particles::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%);
      animation: pulse 4s infinite;
    }

    @keyframes pulse {
      0% { transform: scale(1); opacity: 0.5; }
      50% { transform: scale(1.2); opacity: 0.7; }
      100% { transform: scale(1); opacity: 0.5; }
    }

    .interactive-button:hover {
      background: rgba(255,255,255,0.25) !important;
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }

    .content-section:hover {
      transform: translateY(-3px);
    }

    .section-title {
      position: relative;
    }

    .section-title::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 2px;
      background: rgba(255,255,255,0.5);
      transition: width 0.3s ease;
    }

    .content-section:hover .section-title::after {
      width: 60px;
    }

    @media (max-width: 480px) {
      .content-wrapper {
        gap: 25px !important;
      }
      
      .section-title {
        font-size: 1.1em !important;
      }

      .interactive-button {
        padding: 10px 20px !important;
        font-size: 0.85em !important;
      }
    }
  </style>

  <script>
    function createParticle() {
      const particles = document.querySelector('.particles');
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: 8px;
        height: 8px;
        background: rgba(255,255,255,0.5);
        border-radius: 50%;
        pointer-events: none;
        animation: particleAnimation 3s ease-in-out forwards;
      `;
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = '100%';
      particles.appendChild(particle);
      setTimeout(() => particle.remove(), 3000);
    }

    setInterval(createParticle, 300);

    const buttons = document.querySelectorAll('.interactive-button');
    const mainPanel = document.querySelector('.main-panel');

    buttons.forEach(button => {
      button.addEventListener('mouseover', (e) => {
        const glow = button.querySelector('.button-glow');
        glow.style.width = '300px';
        glow.style.height = '300px';
      });

      button.addEventListener('mouseout', (e) => {
        const glow = button.querySelector('.button-glow');
        glow.style.width = '0';
        glow.style.height = '0';
      });

      button.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
          position: absolute;
          width: 10px;
          height: 10px;
          background: rgba(255,255,255,0.4);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          animation: ripple 0.6s linear forwards;
        `;
        
        const rect = button.getBoundingClientRect();
        ripple.style.left = (e.clientX - rect.left) + 'px';
        ripple.style.top = (e.clientY - rect.top) + 'px';
        
        button.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      });
    });

    mainPanel.addEventListener('mousemove', (e) => {
      const rect = mainPanel.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      const gradientOverlay = document.querySelector('.gradient-overlay');
      gradientOverlay.style.background = `
        radial-gradient(
          circle at ${x * 100}% ${y * 100}%,
          rgba(118,182,207,0.7) 0%,
          rgba(118,182,207,0.9) 70%
        )
      `;
    });

    mainPanel.addEventListener('click', (e) => {
      if (e.target === mainPanel || e.target.classList.contains('gradient-overlay')) {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
          position: absolute;
          width: 20px;
          height: 20px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          animation: ripple 1s linear forwards;
        `;
        
        ripple.style.left = (e.clientX - mainPanel.offsetLeft) + 'px';
        ripple.style.top = (e.clientY - mainPanel.offsetTop) + 'px';
        
        mainPanel.appendChild(ripple);
        setTimeout(() => ripple.remove(), 1000);
      }
    });

    const style = document.createElement('style');
    style.textContent = `
      @keyframes ripple {
        0% {
          width: 0;
          height: 0;
          opacity: 0.5;
        }
        100% {
          width: 500px;
          height: 500px;
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  </script>
</section>


     <!-- Why Choose Us -->
<section class="py-5 bg-light" id="why-choose-us" style="position: relative; overflow: hidden;">
  <div class="container">
    <div class="row text-center">
      <div class="col-12">
          
          
        <!-- New Heading and Subheading -->
        <h2 class="display-4" style="color: #ffffff; font-weight: bold; font-size: 2.5rem; margin-bottom: 1.5rem;">Beyond Consulting, We Deliver Results</h2>
        <p style="color: #ffffff; font-size: 1.5rem;">Strategic insights backed by data-driven execution.</p>
        
        
      </div>
    </div>
    <br>
    <div class="row">
        
      <!-- Left Side - Accordion Points -->
      <div class="col-md-6">
          
          
        <div class="accordion" id="accordionExample">
          <!-- Accordion Item 1 - Open by Default (Larger) -->
          
          <div class="accordion-item custom-card">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button custom-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <span class="point-title">Comprehensive Business Solutions</span>
                <i class="bi bi-chevron-down point-icon"></i>
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                From strategy and financial advisory to digital transformation, we cover all aspects of business growth.
              </div>
            </div>
          </div>
          

          <!-- Accordion Item 2 - Closed by Default (Smaller) -->
          <div class="accordion-item custom-card">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button custom-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <span class="point-title">Industry Expertise</span>
                <i class="bi bi-chevron-down point-icon"></i>
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Our consultants bring years of experience across diverse industries, ensuring tailored solutions for every challenge.
              </div>
            </div>
          </div>

          <!-- Accordion Item 3 - Closed by Default -->
          <div class="accordion-item custom-card">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button custom-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <span class="point-title">Data-Driven Insights</span>
                <i class="bi bi-chevron-down point-icon"></i>
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                We leverage in-depth market research and analytics to make informed business decisions.
              </div>
            </div>
          </div>

          <!-- Accordion Item 4 - Closed by Default -->
          <div class="accordion-item custom-card">
            <h2 class="accordion-header" id="headingFour">
              <button class="accordion-button custom-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                <span class="point-title">Scalable & Sustainable Strategies</span>
                <i class="bi bi-chevron-down point-icon"></i>
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Whether you're expanding, optimizing, or transforming, we provide practical, long-term solutions.
              </div>
            </div>
          </div>

          <!-- Accordion Item 5 - Closed by Default -->
          <div class="accordion-item custom-card">
            <h2 class="accordion-header" id="headingFive">
              <button class="accordion-button custom-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                <span class="point-title">Expert Team</span>
                <i class="bi bi-chevron-down point-icon"></i>
              </button>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Our team consists of highly skilled professionals with years of experience in the industry.
              </div>
            </div>
          </div>

          <!-- Accordion Item 6 - Closed by Default -->
          <div class="accordion-item custom-card">
            <h2 class="accordion-header" id="headingSix">
              <button class="accordion-button custom-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                <span class="point-title">Quality Service</span>
                <i class="bi bi-chevron-down point-icon"></i>
              </button>
            </h2>
            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                We ensure top-notch quality in every aspect of our service, tailored to exceed your expectations.
              </div>
            </div>
          </div>

          <!-- Accordion Item 7 - Closed by Default -->
          <div class="accordion-item custom-card">
            <h2 class="accordion-header" id="headingSeven">
              <button class="accordion-button custom-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                <span class="point-title">Customer Satisfaction</span>
                <i class="bi bi-chevron-down point-icon"></i>
              </button>
            </h2>
            <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Our clients' happiness is our top priority, and we go above and beyond to deliver exceptional results.
              </div>
            </div>
          </div>
        </div>
        
        
      </div>

      <!-- Right Side - Vector Icons -->
      <div class="col-md-6">
        <div class="d-flex flex-column align-items-center p-5"  >
        <img src="assets/img/wcu-icon.png"  >
        </div>
      </div>
    </div>
  </div>

  <!-- Adding a pseudo-element for image opacity -->
  <style>
  
/* Remove scaling from the first card and hover effects on others */
.custom-card {
  background: transparent;
  border: none;
  margin-bottom: 10px;
  transition: transform 0.3s ease-in-out;
  /* Ensures uniform height for all accordion items */
  height: 100%; 
}

/* Ensure that all accordion bodies have consistent height */
.accordion-body {
  font-size: 1rem;
  color: white !important; 
  padding: 20px!important;
  border-radius: 10px;
  margin-top: 10px;
  transition: max-height 0.2s ease-in-out;
  background: #DA8326; /* Set background to orange */
  /* Ensure consistent height */
  min-height: 100px; 
}

/* Optional: Ensure the accordion is always the same size */
.accordion-item {
  height: auto;
}

.custom-btn {
  color: #76B6CF;
  font-weight: bold;
  font-size: 1.2rem;
  background-color: white !important;
  border: 2px solid #DA8326;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

/* Remove any hover scale for consistency */
.custom-btn:hover {
  background-color: #76B6CF;
  color: #000;
  transform: none;
}

/* Remove icon rotation effect on collapse */
.custom-btn.collapsing .point-icon,
.custom-btn:focus .point-icon {
  transform: none;
}

/* Optional: Styling to ensure consistent padding/margin */
#why-choose-us .container {
  padding: 30px;
}

#why-choose-us {
  position: relative;
  overflow: hidden;
  background-image: url('assets/img/950.jpg'); /* Corrected image path */
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Ensures the background stays fixed */
}

#why-choose-us::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Set your opacity here */
  z-index: 1;
}

#why-choose-us .container {
  position: relative;
  z-index: 2; /* Ensures content stays above the overlay */
}

  </style>
  
</section>



     <!-- Why Choose Us -->
     
     <br>   <br>   <br>
      

        <!-- testimonial-area -->
        <section class="testimonial__area fix" style="margin-bottom:18rem;">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-10">
                        <div class="testimonial__wrap">
                            <div class="swiper-container fix testimonial-active" style="margin-top:-10rem;">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="testimonial__item">
                                            <div class="testimonial__icon">
                                                <img src="assets/img/icons/quote.svg" alt="icon" class="injectable">
                                            </div>
                                            <div class="testimonial__content">
                                                <p>"Plum Expert BV has been instrumental in transforming our business strategies. Their insightful advice and tailored solutions helped us streamline operations, improve financial performance, and navigate legal complexities with ease."</p>
                                                <div class="testimonial__rating">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                                <div class="testimonial__content-bottom">




                                                    <h4 class="title">Ms. Sarah </h4>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testimonial__item">
                                            <div class="testimonial__icon">
                                                <img src="assets/img/icons/quote.svg" alt="icon" class="injectable">
                                            </div>
                                            <div class="testimonial__content">
                                                <p>"The team at Plum Expert BV not only helped us with sound advice but also delivered actionable solutions that made a significant impact. Their deep expertise in financial and operational strategies set them apart from other firms."</p>
                                                <div class="testimonial__rating">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                                <div class="testimonial__content-bottom">
                                                    <h4 class="title">Mr. Anand </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testimonial__item">
                                            <div class="testimonial__icon">
                                                <img src="assets/img/icons/quote.svg" alt="icon" class="injectable">
                                            </div>
                                            <div class="testimonial__content">
                                                <p>"Working with Plum Expert BV was a game changer for our company. Their personalized approach and attention to detail ensured that we tackled both short-term and long-term challenges effectively."</p>
                                                <div class="testimonial__rating">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                                <div class="testimonial__content-bottom">
                                                    <h4 class="title">Ms. Aabira</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testimonial__item">
                                            <div class="testimonial__icon">
                                                <img src="assets/img/icons/quote.svg" alt="icon" class="injectable">
                                            </div>
                                            <div class="testimonial__content">
                                                <p>"Plum Expert BV helped us achieve new heights in both our operations and legal compliance. Their expertise in regulatory matters and operational efficiency has been invaluable to our growth."</p>
                                                <div class="testimonial__rating">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                                <div class="testimonial__content-bottom">
                                                    <h4 class="title">Mr. Rohan </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="swiper testimonial__nav">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <button><img src="assets/img/images/testi_avatar01.png" alt="img"></button>
                                        </div>
                                        <div class="swiper-slide">
                                            <button><img src="assets/img/images/testi_avatar02.png" alt="img"></button>
                                        </div>
                                        <div class="swiper-slide">
                                            <button><img src="assets/img/images/testi_avatar03.png" alt="img"></button>
                                        </div>
                                        <div class="swiper-slide">
                                            <button><img src="assets/img/images/testi_avatar04.png" alt="img"></button>
                                        </div>
                                    </div>
                                </div>
                                <div class="testimonial__nav-two">
                                    <button class="testimonial-button-prev"><img src="assets/img/icons/right_arrow.svg" alt="" class="injectable"></button>
                                    <button class="testimonial-button-next"><img src="assets/img/icons/right_arrow.svg" alt="" class="injectable"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="testimonial__shape-wrap">
                <img src="assets/img/images/testi_shape01.svg" alt="shape">
                <img src="assets/img/images/testi_shape02.svg" alt="shape">
                <!--<img src="assets/img/images/testi_shape03.svg" alt="shape" data-aos="fade-up-right" data-aos-delay="400">-->
                <img src="assets/img/images/testi_shape04.svg" alt="shape">
                <img src="assets/img/images/testi_shape05.svg" alt="shape">
                <img src="assets/img/images/map.svg" alt="shape" class="big-shape">
            </div>
        </section>
        <!-- testimonial-area-end -->
        
        


 
 
       

        <!-- call-back-area -->
        <section class="call__back-area fix section-py-130" style="margin-top:-350px">
            <div class="container">
                <div class="call__back-wrap">
                    <div class="row align-items-center" style="gap:5.5rem">
                        <div class="col-lg-6" data-aos="fade-left" data-aos-delay="400">
                            <div class="call__back-img">
                                <img src="assets/img/images/b45.avif" alt="img">
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="call__back-content">
                                <div class="section__title white-title mb-15">
                                    <h2 class="title">Get free business consultation today!</h2>
                                </div>
                                <p>Ever find yourself staring at your computer screen a consulting to come to mind?Oftentimes.</p>
                                <form action="#" class="call__back-form">
                                    <div class="form-grp">
                                        <input type="text" placeholder="Name *">
                                    </div>
                                    <div class="form-grp">
                                        <input type="email" placeholder="E-mail *">
                                    </div>
                                    <div class="form-grp">
                                        <input type="text" placeholder="Subject *">
                                    </div>
                                    <div class="form-grp">
                                        <textarea name="comments" placeholder="Comments"></textarea>
                                    </div>
                                    <button type="submit" style="background:#f2f2f2; color:#292929e6;">Submit Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="call__back-shape">
                <!--<img src="assets/img/images/call_back_shape01.svg" alt="shape" data-aos="fade-down-right" data-aos-delay="400">-->
                <!--<img src="assets/img/images/call_back_shape02.svg" alt="shape">-->
                <!--<img src="assets/img/images/call_back_shape03.svg" alt="shape" class="alltuchtopdown">-->
                <!--<img src="assets/img/images/call_back_shape04.svg" alt="shape" class="rightToLeft">-->
                <!--<img src="assets/img/images/call_back_shape05.svg" alt="shape" data-aos="fade-up-left" data-aos-delay="400">-->
            </div>
        </section>
        <!-- call-back-area-end -->


    </main>
    <!-- main-area-end -->

<?php require 'sections/footer.php'; ?>


    <!-- JS here -->
    <script src="assets/js/vendor/jquery-3.6.0.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/jquery.magnific-popup.min.js"></script>
    <script src="assets/js/jquery.odometer.min.js"></script>
    <script src="assets/js/jquery.appear.js"></script>
    <script src="assets/js/swiper-bundle.min.js"></script>
    <script src="assets/js/jquery.parallaxScroll.min.js"></script>
    <script src="assets/js/jquery.marquee.min.js"></script>
    <script src="assets/js/tg-cursor.min.js"></script>
    <script src="assets/js/ajax-form.js"></script>
    <script src="assets/js/svg-inject.min.js"></script>
    <script src="assets/js/wow.min.js"></script>
    <script src="assets/js/aos.js"></script>
    <script src="assets/js/main.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
    // Initialize SVG injection
    if (typeof SVGInject !== 'undefined') {
        SVGInject(document.querySelectorAll("img.injectable"));
    }

    

    // Initialize accordion with typing effect
    const accordionButtons = document.querySelectorAll(".accordion-button");

    accordionButtons.forEach((button) => {
        button.addEventListener("click", function() {
            const targetId = button.getAttribute("data-bs-target");
            const collapseTarget = document.querySelector(targetId);
            
            if (!collapseTarget) return;
            
            const paragraph = collapseTarget.querySelector(".accordion-body p");
            if (!paragraph) return;

            if (collapseTarget.classList.contains("show")) return;

            const originalText = paragraph.dataset.originalText || paragraph.textContent.trim();
            paragraph.dataset.originalText = originalText;
            paragraph.textContent = "";

            let index = 0;
            let isTyping = true;

            function typeEffect() {
                if (!isTyping) return;

                if (index < originalText.length) {
                    paragraph.textContent += originalText.charAt(index);
                    index++;
                    setTimeout(typeEffect, 30);
                }
            }

            setTimeout(() => {
                isTyping = true;
                typeEffect();
            }, 300);

            collapseTarget.addEventListener('hidden.bs.collapse', function() {
                isTyping = false;
                paragraph.textContent = originalText;
            }, { once: true });
        });
    });const faqSubTitle = document.querySelector('.faq__content .section__title .sub-title');
const originalText = "Need more clarity? We're here to help";

// Initialize variables for the animation
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100; // Speed of typing
const deletingSpeed = 50; // Speed of deleting
const pauseEnd = 2000; // Pause at the end before deleting

function animateText() {
    // Get the text to display based on current index
    const currentText = originalText.substring(0, charIndex);
    
    // Update the text content
    faqSubTitle.textContent = currentText;
    
    // Add a blinking cursor effect
    faqSubTitle.style.borderRight = isDeleting ? 'none' : '2px solid #000';

    if (!isDeleting) {
        // Typing forward
        if (charIndex < originalText.length) {
            charIndex++;
            setTimeout(animateText, typingSpeed);
        } else {
            // Reached the end, pause then start deleting
            isDeleting = true;
            setTimeout(animateText, pauseEnd);
        }
    } else {
        // Deleting
        if (charIndex > 0) {
            charIndex--;
            setTimeout(animateText, deletingSpeed);
        } else {
            // Finished deleting, start typing again
            isDeleting = false;
            setTimeout(animateText, typingSpeed);
        }
    }
}

// Add some CSS for the cursor effect
const style = document.createElement('style');
style.textContent = `
    .faq__content .section__title .sub-title {
        display: inline-block;
        border-right: 2px solid transparent;
    }
`;
document.head.appendChild(style);

// Start the animation
animateText();
});


    </script>
</body>
</html>
