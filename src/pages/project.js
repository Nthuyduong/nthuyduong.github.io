import { Link, useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Naviga from "../components/layout/naviga";
import { useEffect, useRef, useState } from "react";
import Aguri from "./aguri";
import Alio from "./alio";
import BeautyBlog from "./beauty_blog";
import Cake from "./cake";
import Fashion from "./fashion";

let isAction = false;
const ProjectDetail = () => {

    const params = useParams();
    const { pathname } = useLocation();

    const headerRef = useRef(null);
    const headerMobileRef = useRef(null);

    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [openNavDropdown, setOpenNavDropdown] = useState(false);

    useEffect(() => {
        setOpenMobileMenu(false);
        setOpenNavDropdown(false);
    }, [pathname]);

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])


    let prevScrollpos = 0;

    const controlNavbar = () => {
        var currentScrollPos = window.pageYOffset;
        if (headerRef.current) {
            if (prevScrollpos > currentScrollPos) {
                headerRef.current.style.top = "0";
                headerMobileRef.current.style.top = "0";
            } else {
                headerRef.current.style.top = "-75px";
                headerMobileRef.current.style.top = "-105px";
                setOpenMobileMenu(false);
                setOpenNavDropdown(false);
            }
            prevScrollpos = currentScrollPos;
        }
    }
    const arrays = [
        { id: 1, name: 'aguri', component: <Aguri />},
        { id: 2, name: 'alio', component: <Alio />},
        { id: 3, name: 'fashion', component: <Fashion />},
        { id: 4, name: 'cake', component: <Cake />},
        { id: 5, name: 'beauty_blog', component: <BeautyBlog />}
    ];

    const [project, setProject] = useState(params.id);

    const [active, setActive] = useState(0);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const currentIndex = arrays.findIndex(item => item.name === project);

        const desItems = document.querySelectorAll('.design-item');
        const currentItems = desItems[currentIndex];

        const items = currentItems.querySelectorAll('.project-item');
        setTotal(items.length);
        setActive(0);
        document.addEventListener('scroll', handleScroll);
    
        return () => {
          document.removeEventListener('scroll', handleScroll);
        }
      }, [project]);
    
      const handleScroll = () => {
        if (isAction) return;
        const scrollY = window.scrollY;
        let currentIndex = arrays.findIndex(item => item.name === project);
        if (currentIndex < 0) {
            currentIndex = 0;
        } else if (currentIndex >= arrays.length) {
            currentIndex = arrays.length - 1;
        }

        const wrp = document.querySelector('.design-wrp');
        const desItems = document.querySelectorAll('.design-item');
        const currentItems = desItems[currentIndex];
        
        const items = currentItems.querySelectorAll('.project-item');
        if (wrp.clientHeight !== desItems[currentIndex].clientHeight) {
            wrp.style.height = `${desItems[currentIndex].clientHeight}px`;
        }
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          const itemHeight = item.clientHeight;
          if (item.offsetTop <= scrollY + itemHeight / 2 && item.offsetTop + itemHeight > scrollY + itemHeight / 2) {
            setActive(i);
            return;
          }
          setActive(items.length - 1);
        }
    }

    //Back-to-top function
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    }

    const handleProject = (name) => {
        window.history.pushState({}, '', `/designs/${name}`);
        const wrp = document.querySelector('.design-wrp');
        if (wrp) {
            const currentIndex = arrays.findIndex(item => item.name === name);
            let position = currentIndex;
            if (currentIndex < 0) {
                position = 0;
            } else if (currentIndex >= arrays.length) {
                position = arrays.length - 1;
            }
           
            wrp.style.transform = `translateX(${position * -(100 / arrays.length)}%)`;
        }
    }

    useEffect(() => {
        if (arrays.findIndex(item => item.name === project) >= 0) {
            if (project) {
                handleProject(project);
            }
        } else {
            window.history.pushState({}, '', '/designs/aguri');
        }
        
    }, [project]);

    const handleNext = () => {
        
        const wrp = document.querySelector('.design-wrp');
        wrp.style.transition = 'transform 0.5s ease-in-out';
        let currentIndex = arrays.findIndex(item => item.name === project);
        if (currentIndex < 0) {
            currentIndex = 0;
        }
        if (currentIndex < arrays.length - 1) {
            setProject(arrays[currentIndex + 1].name);
        } else {
            setProject(arrays[0].name);
        }
    }

    const handlePrev = () => {
        const wrp = document.querySelector('.design-wrp');
        wrp.style.transition = 'transform 0.5s ease-in-out';
        let currentIndex = arrays.findIndex(item => item.name === project) || 0;
        if (currentIndex > 0) {
            setProject(arrays[currentIndex - 1].name);
        } else {
            setProject(arrays[arrays.length - 1].name);
        }
    }
    

    return (
        <>
            <div ref={headerMobileRef} className={`sticky header-mobile inset-y-0 left-0 flex items-center md:hidden flex-col w-full ${openMobileMenu ? 'header-mobile-open' : ''}`}>
                {/*Mobile menu button*/}

                <div className="w-full flex flex-col header-mobile-menu py-4">
                    <Link to="/" className="cursor-text-wrp text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 text-4xl font-medium" aria-current="page">Home</Link>
                </div>
            </div>
            <div ref={headerRef} className="container-fluid my-header sticky flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden w-full md:block">
                    <div className="flex items-center justify-center w-full">

                        <div onClick={handlePrev}><img className="icon-ssm img-smile" src="./images/icons/previous-page.svg" alt="smile" loading="lazy" /></div>

                        <div className="mx-auto px-4 py-4">
                            <Link to="/" className="cursor-text-wrp text-sm scroll-text" data-replace="BACK HOME" aria-current="page">
                                <span className="">BACK HOME
                                </span>
                            </Link>
                        </div>

                        <div onClick={handleNext}><img className="icon-ssm img-smile" src="./images/icons/next-page.svg" alt="smile" loading="lazy" /></div>

                    </div>
                </div>
            </div>
            <div className={`page-body-wrapper`}>
                <div className="overflow-hidden">
                    <div className="design-container">
                        <div className="flex design-wrp" style={{
                            width: 100 * arrays.length + '%',
                        }}>
                            {arrays.map((item, index) => {
                                return (
                                    <div key={index} className="design-item">
                                        {item.component}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="back-to-top btt2 body_text hidden md:block" onClick={() => { scrollToTop() }}>Back to top</div>
            <div className="top-to-btm hidden md:block">
                
                <div className="">
                    <div className="body_text position">{active + 1}/{total}</div>
                </div>
            </div>
        </>
        
    );
}

export default ProjectDetail;