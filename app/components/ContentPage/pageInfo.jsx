import React from 'react'; // eslint-disable-line
// import OilBargeSvg from 'app/components/OilBargeSvg';
// import Isvg from 'react-inlinesvg';
import ReactSVG from 'react-svg';
import InteractiveMap from 'app/components/Elements/InteractiveMap';
import ExternalLink from 'app/components/Elements/ExternalLink';

export default {
    '01-introduction': {
        header: 'Introduction',
        subHeader: '',
        position: '01',
        url: '01-introduction',
        active: false,
        pageContent: (
            <div className='pamphlet-page-content'>
                <ReactSVG className='page-badge' path='assets/boat-introduction-img.svg' alt='boat' />
                <p className='heavy'>Urban rivers are arteries.  They are ecosystemic, cultural, and global trade connectors.  Their histories can provide pathways to embodied understanding of health, development, pollution, and collapse.  Newtown Creek is a 3.8 mile waterway, home to ribbed mussels, killifish, and muskrats.  It provides maritime access for local and international businesses like Allocco Recycling and Simms Metal Management.  It also happens to be one of the worst sites of industrial contamination in the United States, straddling the boroughs of Queens and Brooklyn in the largest city in the country, New York.</p>
                <p>The traditional field guide format satisfies a desire to identify.  Couched in the language of “Nature” and Natural History, entries point to things – whether species or stars – as objects within a rigid taxonomy. </p>
                <p> The design of A Field Guide to the Dark Ecologies of Newtown Creek draws on these roots, but departs radically in the way it organizes and presents you with information, giving more attention to place and ecology, embedding the system of entries in a framework of inquiry and investigation that offers you multiple ways to engage with Newtown Creek.  You are a neo-naturalist.  You are part of Newtown’s community.  This guide is a tool, helping you to add greater dimension to your understanding of this waterway.</p>
                <p>The term “Dark Ecology” was coined by theorist Timothy Morton in an attempt to be more inclusive to all of the factors and agents -- ugly, horrific, catastrophic, as well as endearing, marvelous, benign -- that constitute an ecology.  In addition to the natural biology and geology of Newtown Creek, this guide promotes inclusivity of anthropogenic agents within the site.  Our intention is to foster a post-natural understanding of the complex relationship between ecology, industry, development, human and non-human health.</p>
            </div>
        )
    },
    '02-whale-creek': {
        header: 'Oil Twitchers & Barge Spotters',
        subHeader: 'A FIELD GUIDE TO WHALE CREEK',
        position: '02',
        url: '02-whale-creek',
        active: false,
        hasPopup: true,
        hasSvg: true,
        pageContent: (
            <div className='pamphlet-page-content'>
                <p className='heavy'>What does a sludge boat look like, and what does it do? Have you ever watched old automobile carcasses being collected at Sims Metal Management?</p>
                <p>A Field Guide to Whale Creek situates you between the industrial and the “natural” at the Newtown Creek Nature Walk, designed by George Trakas and built in 2007.  Along the edge of the Creek you'll have the perfect vantage point for observing and identifying the industrial, civic and ecological entities that cohabitate at Whale Creek, from canoes to killifish to recycling barges. A Field Guide to Whale Creek lays bare the power and complexity in trying to name what surrounds you.</p>
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
    '03-newtown-creek-2050': {
        header: 'A look at Newtown Creek 2050',
        subHeader: '',
        position: '03',
        url: '03-newtown-creek-2050',
        active: false,
        hasPopup: false,
        popupButtonText: 'Coming Soon',
        pageContent: (
            <div className='pamphlet-page-content'>
                <ReactSVG className='page-badge' path='assets/coming-soon-badge.svg' alt='coming soon' />
                <p className='heavy'><strong>Newtown Creek has a future.  The question is, who decides what it looks like?</strong></p>
                <p>A Look at Newtown Creek 2050 will inspire Newtown Creek workers, residents, and business owners to add their vision for the waterway to the process already begun by urban planners, federal agencies, and real estate developers.  The same tools being used in that process -- GIS systems, 3D modelling engines, and speculative visualizations -- will animate the imaginings of these community stakeholders.   A Look at Newtown Creek 2050 will render current efforts and community visions with the same fidelity and potency achieved in brochures that advertise planned and for-sale developments.</p>
            </div>
        )
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
                <ReactSVG className='page-badge' path='assets/coming-soon-badge.svg' alt='coming soon' />
                <p className='heavy'><strong>What’s in It?: Researching Newtown Creek’s Wonders and Dangers will be a citizen science initiative developed in collaboration with middle school classrooms along Newtown Creek.</strong></p>
                <p>You will explore youth-led research questions, apply hands-on methods for carrying out the inquiries, and contribute to the growing body of community-based information that is uncovered along the waterway.  What’s In It? takes a procedural, systematic approach to gathering useful data about the current state of the Creek, while embodying inclusive definitions of research and science.</p>
            </div>
        )
    },
    '05-phantom-smells': {
        header: 'The Order of the Phantom Smells',
        subHeader: '',
        position: '05',
        url: '05-phantom-smells',
        active: false,
        hasPopup: false,
        pageContent: (
            <div className='pamphlet-page-content'>
                <ReactSVG className='page-badge' path='assets/coming-soon-badge.svg' alt='coming soon' />
                <p className='heavy'><strong>Welcome to The Order of the Phantom Smells.</strong></p>
                <p>Inspired by the work of an actual 1890 "smelling committee" organized for nefarious purposes in Greenpoint, Brooklyn, you are about to embark on a nighttime hunt for the olfactory ghosts that haunt the waters and shores of Newtown Creek.  The Order of the Phantom Smells will be created in collaboration with historian Mitch Waxman, and will provoke you to link invisible, odorous traces to the invisible processes and systems that have resulted in the wicked problems plaguing the waterway today.</p>

                <p>"The waters of Newtown Creek run through a region that gives out more disgusting smells per square inch than any other portion of the world can furnish in a square mile." - New York Times, March 27, 1881.
                </p>
            </div>
        )
        // popupButtonText: 'Coming Soon'
    },
    '06-bibliography': {
        header: 'Bibliography',
        subHeader: '',
        position: '06',
        url: '06-bibliography',
        active: false,
        hasPopup: false,
        pageContent: (
            <div className='pamphlet-page-content'>
                <p className='heavy'><strong>This set of materials offers a theoretical and factual background for A Field Guide to the Dark Ecologies of Newtown Creek.  They are presented here for your further learning.</strong></p>
                <ul className='bibliography'>
                    <li>
                        <h3>Newton Creek Ecology</h3>
                        <ul>
                            <li>McLaughlin, John. "Newtown Creek : Restoration Ecology." Lecture, Newtown Creek CAG Meeting, New York, NY, February 6, 2014. Accessed January 15, 2017. <ExternalLink url='https://newtowncreekcag.files.wordpress.com/2014/02/oes-netown-cag-presentation.pdf'>https://newtowncreekcag.files.wordpress.com/2014/02/oes-netown-cag-presentation.pdf</ExternalLink>.</li>
                            <li>"Newtown Creek Map." Map. Newtown Creek Alliance. 2016. Accessed January 15, 2017. <ExternalLink url='http://www.newtowncreekalliance.org/newtown-creek-map/'>http://www.newtowncreekalliance.org/newtown-creek-map/</ExternalLink>.</li>
                            <li>"Newtown Creek Tidal Information." NOAA Tides & Currents. Accessed January 15, 2017. <ExternalLink url='https://tidesandcurrents.noaa.gov/'>https://tidesandcurrents.noaa.gov/</ExternalLink>.</li>
                            <li>"NYS DEC Greenpoint Petroleum Remediation Project." New York State Department of Environmental Conservation . Accessed January 15, 2017. <ExternalLink url='http://nysdecgreenpoint.com/'>http://nysdecgreenpoint.com/</ExternalLink>.</li>
                        </ul>
                    </li>
                    <li>
                        <h3>Newtown Creek History</h3>
                        <ul>
                            <li>Waxman, Mitch. Newtown Creek for the vulgarly curious. Brooklyn, NY: Newtownpentacle.com, 2010.</li>
                            <li>"What Stenches Abound." The New York Times, March 27, 1881. Accessed January 15, 2017. <ExternalLink url='https://timesmachine.nytimes.com/timesmachine/1881/03/27/issue.html'>https://timesmachine.nytimes.com/timesmachine/1881/03/27/issue.html</ExternalLink>.</li>
                        </ul>
                    </li>
                    <li>
                        <h3>The Post-natural</h3>
                        <ul>
                            <li>Marris, Emma. Rambunctious Garden: Saving Nature in a Post-wild World. New York: Bloomsbury, 2011.</li>
                            <li>Morton, Timothy. The Ecological Thought. Cambridge, MA: Harvard University Press, 2010.</li>
                        </ul>
                    </li>
                    <li>
                        <h3>Deep Time</h3>
                        <ul>
                            <li>Ellsworth, Elizabeth Ann, and Jamie Kruse. Making the Geologic Now: Responses to Material Conditions of Contemporary Life. Brooklyn, NY: Punctum Books, 2013.</li>
                            <li>Howe, Cymene and Pandian, Anand. "Lexicon for an Anthropocene Yet Unseen." Theorizing the Contemporary, Cultural Anthropology website, January 22, 2016. <ExternalLink url='https://culanth.org/fieldsights/803-lexicon-for-an-anthropocene-yet-unseen'>https://culanth.org/fieldsights/803-lexicon-for-an-anthropocene-yet-unseen</ExternalLink></li>
                            <li>McPhee, John. Basin and Range. New York: Farrar, Straus, Giroux, 1981.</li>
                        </ul>
                    </li>
                    <li>
                        <h3>Superfunds & Brownfields</h3>
                        <ul>
                            <li>"Meeting Notes & Presentations." Newtown Creek Community Advisory Group. April 24, 2016. Accessed January 15, 2017. <ExternalLink url='https://newtowncreekcag.wordpress.com/cag-notes/'>https://newtowncreekcag.wordpress.com/cag-notes/</ExternalLink>.</li>
                            <li>"Newtown Creek Brownfield Opportunity Area (BOA)." Newtown Creek Alliance. Accessed January 15, 2017. <ExternalLink url='http://www.newtowncreekalliance.org/boa/'>http://www.newtowncreekalliance.org/boa/</ExternalLink>.</li>
                            <li>"Newtown Creek Superfund Site Profile." Environmental Protection Agency. Accessed January 15, 2017. <ExternalLink url='http://cumulis.epa.gov/supercpad/cursites/csitinfo.cfm?id=0206282'>http://cumulis.epa.gov/supercpad/cursites/csitinfo.cfm?id=0206282</ExternalLink>.</li>
                            <li>"Superfund." Environmental Protection Agency. December 23, 2016. Accessed January 15, 2017. <ExternalLink url='https://www.epa.gov/superfund'>https://www.epa.gov/superfund</ExternalLink>.</li>
                        </ul>
                    </li>
                    <li>
                        <h3>Speculative Design</h3>
                        <ul>
                            <li>Dunne, Anthony, and Fiona Raby. Speculative Everything: design, fiction, and social dreaming. Cambridge, MA: The MIT Press, 2013.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
};
