import React from 'react'
import SideImage from '../../../assets/images/imgside.jpg'
import { side, socialIcon } from '../../../data/dataConstant'
import { RiMoneyDollarCircleLine } from "react-icons/ri"
import { FiDownloadCloud } from "react-icons/fi"
import Progress from '../progress'
export const SideContent = () => {
    return (
        <section className='side-content'>
            <div className='side-content_top'>
                <div className='side-content_top_img'>
                    <img  className='img-width' src={SideImage} alt="tijo" />
                    <div className='side-content_top_img_name'>
                        <h3>Tijo Thomas</h3>
                        <span>Front End Developer</span>
                    </div>
                </div>
                <div className='side-content_top_social'>
                    {socialIcon.map(item => <div key={item.id} className={item.class}>
                        <span>{item.icon}</span>
                    </div>)}
                </div>
            </div>
            <div className="side-content_bottom">
                <div className='side-content_bottom_skills'>
                    {side.map((item) => (
                        <div key={item.id} className='sideContent_skill_box'>
                            <Progress title={item.text} done={item.num} back={item.class} />
                        </div>
                    ))}
                </div>
                <div className='sideContent_bottom_buttonGroup'>
                    <button className='sm_button'>
                        <span>
                            <FiDownloadCloud className='button_bicon' />
                        </span>
                    </button>
                    <button className='button'>
                        <RiMoneyDollarCircleLine className='button_bicon' />
                        <span>HIRE ME</span>
                    </button>
                </div>
            </div>
        </section>
    )
}
