import { useEffect, useState } from "react";

type UseMatchMediaType = {
  isDesktopSize: boolean;
  isTabletSize: boolean;
  isMobileSize: boolean;
};

type EventType = MediaQueryList | MediaQueryListEvent;

export const useMatchMedia = (): UseMatchMediaType => {
  const mobileQuery = matchMedia("(min-width: 10px) and (max-width: 650px)");
  const tabletQuery = matchMedia("(min-width: 651px) and (max-width: 900px)");
  const desktopQuery = matchMedia("(min-width: 901px)");

  const [isMobileSize, setIsMobileSize] = useState(false);
  const [isTabletSize, setIsTabletSize] = useState(false);
  const [isDesktopSize, setIsDesktopSize] = useState(false);

  const handleMobileMediaChanged = (e: EventType) => {
    setIsMobileSize(e.matches);
  };

  const handleTabletMediaChanged = (e: EventType) => {
    setIsTabletSize(e.matches);
  };

  const handleDesktopMediaChanged = (e: EventType) => {
    setIsDesktopSize(e.matches);
  };

  useEffect(() => {
    handleMobileMediaChanged(mobileQuery);
    handleTabletMediaChanged(tabletQuery);
    handleDesktopMediaChanged(desktopQuery);

    mobileQuery.addEventListener("change", handleMobileMediaChanged);
    tabletQuery.addEventListener("change", handleTabletMediaChanged);
    desktopQuery.addEventListener("change", handleDesktopMediaChanged);

    return () => {
      mobileQuery.removeEventListener("change", handleMobileMediaChanged);
      tabletQuery.removeEventListener("change", handleTabletMediaChanged);
      desktopQuery.removeEventListener("change", handleDesktopMediaChanged);
    };
  }, []);

  return { isMobileSize, isTabletSize, isDesktopSize };
};
