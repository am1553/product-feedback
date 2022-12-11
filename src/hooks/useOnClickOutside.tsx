import React, { RefObject, useEffect } from 'react'


function useOnClickOutside(ref : RefObject<HTMLDivElement>, handler : () => any) {

  useEffect(() => {
    const listener = (event: Event) : void => {
        const element = event.target
        function assertIsNode(e: EventTarget | null): asserts e is Node {
            if (!e || !("nodeType" in e)) {
                throw new Error(`Node expected`);
            }
        }
        assertIsNode(element)
        // do nothing if clicking ref's element  or descendent elements
        if(!ref.current || ref.current.contains(element)) {
            return 
        }
        handler()
    }
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
        document.removeEventListener("mousedown", listener)
        document.removeEventListener("touchstart", listener)
    }

  }, [ref, handler])
}

export default useOnClickOutside