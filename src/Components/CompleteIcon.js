function CompleteIcon({stroke, onClick}){
    return(
            <svg 
            onClick={onClick}
            className='complete-tag'
            width="44" 
            height="44" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke={stroke} 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 12l5 5l10 -10" />
            </svg>
        
    )
}

export {CompleteIcon}