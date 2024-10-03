import { useEffect, useState } from 'react';

function useScrollOpacity(sectionCount: number, noTransitionSections: number[] = []): string[] {
  const [visibleSections, setVisibleSections] = useState<number[]>([0]);

  const handleScroll = () => {
    const sections = document.querySelectorAll<HTMLElement>('.scroll-section');
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop === 0) {
      setVisibleSections([0]);
    } else {
      sections.forEach((section, index) => {
        if (index === 0) return;
        const rect = section.getBoundingClientRect();
        const sectionStart = rect.top;

        if (sectionStart < windowHeight * 0.6 && !visibleSections.includes(index)) {
          setVisibleSections((prev) => [...prev, index]);
        }
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return Array.from({ length: sectionCount }).map((_, index) => {
    if (noTransitionSections.includes(index)) {
      return 'opacity-100';
    }
    return visibleSections.includes(index) || index === 0
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-16';
  });
}

export default useScrollOpacity;
