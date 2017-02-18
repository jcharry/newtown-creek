import React from 'react'; // eslint-disable-line
import OilBargeSvg from 'app/components/OilBargeSvg';
import Isvg from 'react-inlinesvg';
import ReactSVG from 'react-svg';
import InteractiveMap from 'app/components/Elements/InteractiveMap';

export default {
    '01-introduction': {
        header: 'Introduction',
        subHeader: '',
        position: '01',
        url: '01-introduction',
        active: false,
        pageContent: (
            <div className='pamphlet-page-content'>
                <img src='assets/introduction-page.png' alt='boat' />
                <p><strong>Urban rivers are arteries.  They are ecosystemic, cultural, and global trade connectors.  Their histories can provide pathways to embodied understanding of health, development, pollution, and collapse.  Newtown Creek is a 3.8 mile waterway, home to ribbed mussels, killifish, and muskrats.  It provides maritime access for local and international businesses like Allocco Recycling and Simms Metal Management.  It also happens to be one of the worst sites of industrial contamination in the United States, straddling the boroughs of Queens and Brooklyn in the largest city in the country, New York.</strong></p>
                <p>The traditional field guide format satisfies a desire to identify.  Couched in the language of “Nature” and Natural History, entries point to things – whether species or stars – as objects within a rigid taxonomy. </p>
                <p> The design of A Field Guide to the Dark Ecologies of Newtown Creek draws on these roots, but departs radically in the way it organizes and presents you with information, giving more attention to place and ecology, embedding the system of entries in a framework of inquiry and investigation that offers you multiple ways to engage with Newtown Creek.  You are a neo-naturalist.  You are part of Newtown’s community.  This guide is a tool, helping you to add greater dimension to your understanding of this waterway.</p>
                <p>The term “Dark Ecology” was coined by theorist Timothy Morton in an attempt to be more inclusive to all of the factors and agents -- ugly, horrific, catastrophic, as well as endearing, marvelous, benign -- that constitute an ecology.  In addition to the natural biology and geology of Newtown Creek, this guide promotes inclusivity of anthropogenic agents within the site.  Our intention is to foster a post-natural understanding of the complex relationship between ecology, industry, development, human and non-human health.</p>
            </div>
        )
    },
    '02-twitchers-spotters': {
        header: 'Oil Twitchers & Barge Spotters',
        subHeader: 'A FIELD GUIDE TO WHALE CREEK',
        position: '02',
        url: '02-twitchers-spotters',
        active: false,
        hasPopup: true,
        hasSvg: true,
        pageContent: (
            <div className='pamphlet-page-content'>
                <p>What does a sludge boat look like, and what does it do? Have you ever watched old automobile carcasses being collected at Sims Metal Management?</p>
                <p>A Field Guide to Whale Creek situates you between the industrial and the “natural” at the Newtown Creek Nature Walk, designed by George Trakas and built in 2007.  Along the edge of the Creek you’ll have the perfect vantage point for observing and identifying the industrial, civic and ecological entities that cohabitate at Whale Creek, from canoes to killifish to recycling barges. A Field Guide to Whale Creek lays bare the power and complexity in trying to name what surrounds you.</p>
                <InteractiveMap />
            </div>
        ),
        popupButtonText: 'Want To Participate?',
        popupContent: (
            <div className='popup-content'>
                <ol>
                    <li>Download the pamphlet and go identify things at the Newtown Creek Nature Walk.
                        <a href=''>Download</a>
                    </li>
                    <li>Download the audio experience for a guided walking tour of the site.
                        <a href=''>Download</a>
                    </li>
                </ol>
            </div>
        )
    },
    '03-phantom-smells': {
        header: 'The Order of the Phantom Smells',
        subHeader: '',
        position: '03',
        url: '03-phantom-smells',
        active: false,
        hasPopup: false,
        pageContent: (
            <div className='pamphlet-page-content'>
                <img src='assets/coming-soon-badge.png' alt='coming soon'/>
                <p><strong>Welcome to The Order of the Phantom Smells.</strong></p>
                <p>Inspired by the work of an actual 1890 "smelling committee" organized for nefarious purposes in Greenpoint, Brooklyn, you are about to embark on a nighttime hunt for the olfactory ghosts that haunt the waters and shores of Newtown Creek.  The Order of the Phantom Smells will be created in collaboration with historian Mitch Waxman, and will provoke you to link invisible, odorous traces to the invisible processes and systems that have resulted in the wicked problems plaguing the waterway today.</p>

                <p>"The waters of Newtown Creek run through a region that gives out more disgusting smells per square inch than any other portion of the world can furnish in a square mile." - New York Times, March 27, 1881.
                </p>
            </div>
        )
        // popupButtonText: 'Coming Soon'
    },
    '04-whats-in-it': {
        header: 'What\'s In It?',
        subHeader: '',
        position: '04',
        url: '04-whats-in-it',
        active: false,
        hasPopup: false,
        popupButtonText: 'Coming Soon',
        pageContent: (
            <div className='pamphlet-page-content'>
                <img src='assets/coming-soon-badge.png' alt='boat' />
                <p><strong>What’s in It?: Researching Newtown Creek’s Wonders and Dangers will be a citizen science initiative developed in collaboration with middle school classrooms along Newtown Creek.</strong></p>
                <p>You will explore youth-led research questions, apply hands-on methods for carrying out the inquiries, and contribute to the growing body of community-based information that is uncovered along the waterway.  What’s In It? takes a procedural, systematic approach to gathering useful data about the current state of the Creek, while embodying inclusive definitions of research and science.</p>
            </div>
        )
    },
    '05-newtown-creek-2050': {
        header: 'A look at Newtown Creek 2050',
        subHeader: '',
        position: '05',
        url: '05-newtown-creek-2050',
        active: false,
        hasPopup: false,
        popupButtonText: 'Coming Soon',
        pageContent: (
            <div className='pamphlet-page-content'>
                <img src='assets/coming-soon-badge.png' alt='boat' />
                <p><strong>Newtown Creek has a future.  The question is, who decides what it looks like?</strong></p>
                <p>A Look at Newtown Creek 2050 will inspire Newtown Creek workers, residents, and business owners to add their vision for the waterway to the process already begun by urban planners, federal agencies, and real estate developers.  The same tools being used in that process -- GIS systems, 3D modelling engines, and speculative visualizations -- will animate the imaginings of these community stakeholders.   A Look at Newtown Creek 2050 will render current efforts and community visions with the same fidelity and potency achieved in brochures that advertise planned and for-sale developments.</p>
            </div>
        )
    },
    '06-bibliography': {
        header: 'Bibliography',
        subHeader: '',
        position: '06',
        url: '06-bibliography',
        active: false,
        hasPopup: false
    }
};
