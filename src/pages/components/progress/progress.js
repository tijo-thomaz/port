import React from 'react'

export const Progress = ({ done, title, back }) => {
    return (
        <div className='progress'>
            <div
                className={`progress_done ${back}`}
                style={{
                    opacity: 1,
                    width: `${done}%`,
                }}
            ></div>
            <div className='progress_num'>
                <h4>{done}.</h4>
            </div>
            <div className='progress_title'>
                <h3> {title}</h3>
            </div>
        </div>
    )
}
