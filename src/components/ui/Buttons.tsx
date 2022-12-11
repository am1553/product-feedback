interface ButtonProps {
    text: string;
    onClick: () => any;
    children?:JSX.Element
}

export const PurpleButton = ({text, onClick}: ButtonProps) => {
    return(
        <button className="bg-purple h-11 w-40 rounded-md text-white hover:bg-opacity-70 transition-colors">
            Button 1
        </button>
    )
}

export const BlueButton = ({text, onClick}: ButtonProps) => {
    return(
        <button className="bg-blue h-11 w-40 rounded-md text-white hover:bg-opacity-70 transition-colors">
            Button 2
        </button>
    )
}

export const NavyBlueButton = ({text, onClick}: ButtonProps) => {
    return(
        <button className="bg-navy-blue h-11 w-40 rounded-md text-white hover:bg-opacity-70 transition-colors">
            Button 3
        </button>
    )
}

export const RedButton = ({text, onClick}: ButtonProps) => {
    return(
        <button className="bg-red h-11 w-40 rounded-md text-white hover:bg-opacity-70 transition-colors">
            Button 4
        </button>
    )
}

export const BackButton = ({text, onClick}: ButtonProps) => {
    return(
        <button className="bg-navy-blue h-[53px] w-40 text-white hover:underline rounded-md flex items-center justify-center gap-4">
            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#fff" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
            Go Back
        </button>
    )
}
