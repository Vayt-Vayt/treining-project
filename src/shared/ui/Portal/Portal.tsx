import React, { FC } from 'react';
import { createPortal } from 'react-dom';


interface PortalProps {
    children: React.ReactNode;
    element?: HTMLElement;
}

export const Portal:FC<PortalProps> = ({ children, element = document.body }) => {
    return createPortal(children, element)
};


// const Portal = ({ children }) => {
//     const ref = useRef();
//     const [mounted, setMounted] = useState(false);
  
//     useEffect(() => {
//       console.log("Portal отработал", document.querySelector("#app"));
//       ref.current = document.querySelector("#root") || undefined;
//       setMounted(true);
//     }, []);
  
//     return mounted && ref.current ? createPortal(children, ref.current) : null;
//   };