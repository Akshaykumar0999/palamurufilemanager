// NavigationGuard.js
import { useEffect } from "react";
import { unstable_useBlocker as useBlocker } from "react-router-dom";

const NavigationGuard = ({ when }) => {
  const blocker = useBlocker(when);

  useEffect(() => {
    if (blocker.state === "blocked") {
      const proceed = window.confirm(
        "You have unsaved changes. Are you sure you want to leave?"
      );
      if (proceed) blocker.proceed();
      else blocker.reset();
    }
  }, [blocker]);

  return null;
};

export default NavigationGuard;
