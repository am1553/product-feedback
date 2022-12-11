import React, { useState } from 'react'
import ArrowDown from '../../assets/shared/icon-arrow-down.svg'
import ArrowUp from '../../assets/shared/icon-arrow-up.svg'
import DropDown from '../form/DropDown'
import useOnClickOutside from '../../hooks/useOnClickOutside'

function FilterVotes() {

    const [active, setActive] = useState<boolean>(false)
    const options = ["Most Votes", "Med Votes", "Lowest Votes"]
    
    const handleClick = () => {
        setActive(true)
    }

    const handleSelect = () => {

    }

  return (
    <div>
        <DropDown options = {options} defaultValue = {"Most Votes"} onSelect = {handleSelect} isActive={active} setIsActiveFalse={() : void => setActive(false)} >
            <button onClick={handleClick} className="flex items-center gap-2  h-[72px] rounded-md px-4" >
                <h4 className='text-body-m'>Sort by : <span className='font-bold'>Most Upvotes</span></h4>
                <img src={ active ? ArrowUp : ArrowDown} alt="" />
            </button>
        </DropDown>
        
    </div>
  )
}

export default FilterVotes