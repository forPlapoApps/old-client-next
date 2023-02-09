import { useEffect, useState } from "react";

const useCurrentUrl = () => {
  const [currentLink, setCurrentLink] = useState<string>('');

  useEffect(() => {
    setCurrentLink(window.location.href)
  }, []);

  return [currentLink]
}

export default useCurrentUrl
