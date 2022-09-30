import React from 'react'
import UnderDevelopment from '../../core/component/under-development';
import SideContent from '../components/side';
import Main from './components/main';



export default function Layout() {
    return (
        <React.Fragment>
            <section className='main-div'>
                <UnderDevelopment />
                {/* <div className='side'>  
                <SideContent />
                </div>
                <Main /> */}
            </section>
        </React.Fragment>
    );
}

