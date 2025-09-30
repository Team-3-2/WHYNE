import { useState, useCallback } from "react";

type UseToggleReturn = {
  isOn: boolean;
  toggle: () => void;
  setOn: () => void;
  setOff: () => void;
};

const useToggle = (initialValue = false): UseToggleReturn => {
  const [isOn, setIsOn] = useState<boolean>(initialValue);

  const toggle = useCallback(() => setIsOn((prev) => !prev), []);
  const setOn = useCallback(() => setIsOn(true), []);
  const setOff = useCallback(() => setIsOn(false), []);

  return { isOn, toggle, setOn, setOff };
};

export default useToggle;
