import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./components/HomePage";
import ResumePage from "./components/ResumePage";

function App() {
  const location = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      if (!location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        return;
      }

      const id = location.hash.replace("#", "");
      const target = document.getElementById(id);
      if (!target) {
        return;
      }

      const offset = 98;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    };

    requestAnimationFrame(scrollToHash);
    const retry = window.setTimeout(scrollToHash, 80);
    return () => window.clearTimeout(retry);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll(".reveal"));
    if (!revealElements.length) {
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -60px 0px",
        threshold: 0.15,
      },
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/resume" element={<ResumePage />} />
    </Routes>
  );
}

export default App;
