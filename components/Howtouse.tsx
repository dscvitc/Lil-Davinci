import React from 'react'

function Howtouse() {
    const style={
        height:"auto",
        color:"white",
        backgroundColor:"black",
        padding:"40px",
    }
    const steps="text-white p-2 flex md:flex-col md:text-center md:justify-center items-center flex-row md:text-left"
    const bigNum="w-auto md:text-7xl text-[11vw] mx-[12vw] md:mx-auto"
    const CustButton="border-0 bg-transparent m-0 text-teal-400 inline p-[4px]"
    
    return (
        <div style={style}>
            <div className='underline decoration-solid underline-offset-8 decoration-teal-400 w-full text-3xl pb-6'>
            How to use?
            </div>
            <div className="flex md:flex-row justify-around pt-0 text-l flex-col text-l">
                <div className={steps}>
                    <div className={bigNum}> 01</div>
                    <p>Click on <button className={CustButton}> Create </button> button</p>
                </div>
                <div className={steps}><div className={bigNum}> 02 </div><p><button className={CustButton}> Upload </button> or Select Image</p></div>
                <div className={steps}><div className={bigNum}> 03 </div><p><button className={CustButton}> Apply </button> the Style and Mint NFT</p></div>
            </div>
        </div>
            
    )
}

export default Howtouse