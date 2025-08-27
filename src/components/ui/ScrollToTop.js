import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setScrollProgress(scrollPercent);
      setShowScrollTop(scrollTop > 300); // Show button after scrolling 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Route change scroll to top - invisible component */}
      <div style={{ display: "none" }} />

      {/* Scroll to top button with vertical progress indicator */}
      {showScrollTop && (
        <div className="fixed bottom-24 right-8 z-50 flex flex-col items-center cursor-pointer" onClick={scrollToTop}>
          {/* Vertical progress indicator */}
          <div className="flex gap-2 flex-col items-center justify-center">
            <div className="w-1 h-12 bg-kajaria-blue-200 relative cursor-pointer overflow-hidden">
              {/* Progress fill */}
              <div
                className="absolute bottom-0 w-full bg-kajaria-blue-700 transition-all duration-300 ease-out"
                style={{
                  height: `${scrollProgress}%`,
                  minHeight: "0%",
                  maxHeight: "100%",
                }}
              />
            </div>
            <div className="text-md font-bold text-kajaria-blue-700 text-center [writing-mode:vertical-lr] rotate-180">
              Scroll to top
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
