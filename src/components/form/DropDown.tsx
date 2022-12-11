import CheckIcon from '../../assets/shared/icon-check.svg'
import CSS from 'csstype'
import { useLayoutEffect, useRef } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
interface DropDownProps {
    options: string[];
    defaultValue: string;
    onSelect: () => any;
    children?: JSX.Element;
    isActive: boolean;
    setIsActiveFalse: () => any;
}

function DropDown({options, defaultValue, onSelect, children, isActive, setIsActiveFalse}:DropDownProps) {

    const optionsRef = useRef<HTMLDivElement>(null)

    useOnClickOutside(optionsRef, setIsActiveFalse)

    const OptionsList = () => {
        return(
            <ul>
                {
                    options.map((option:string, i:number) => {
                        return(
                            <li 
                                key={i} 
                                className={`px-4 text-body-l h-[50px] flex items-center justify-between border-b-[1px] border-b-[#97979740] last:border-0`}>
                                <span className={`${option === defaultValue ? "text-purple" : null}`}>{option}</span>
                                {
                                    defaultValue === option ? <img src={CheckIcon} alt="" /> : null
                                }
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    return (
        <div className="relative w-fit gap-2">
            <div className="">
                {children}
            </div>
            <div className={` absolute w-full top-20 rounded-md ${isActive ? `h-[${options.length * 50}px]` : "h-[0px]"} overflow-hidden`} style={{transition: "all 250ms ease-in-out"}} ref={optionsRef}>
                <OptionsList />
            </div>
        </div>
    )
}

export default DropDown