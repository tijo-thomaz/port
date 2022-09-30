import React from "react"
import Heading from "../../core/component/heading"
import { about } from "../../data/dataConstant"
import { Bio } from "./components/bio"
import { Info } from "./components/info"
import { Price } from "./components/price"
import { Services } from "./components/services"
import { Slider } from "./components/slider"

export const About = () => {
    return (
        <>
            <section className='about'>
                <div className='container'>
                    {about.map((items, index) => {
                        return (
                            <React.Fragment key={index}>
                                <div className='about_details'>
                                    <Info items={items} Heading={Heading} />
                                    <Bio items={items} Heading={Heading} />
                                </div>
                                <Services items={items} Heading={Heading} />
                                <Slider items={items} Heading={Heading} />
                                <Price items={items} Heading={Heading} />
                            </React.Fragment>
                        )
                    })}
                </div>
            </section>
        </>
    )
}