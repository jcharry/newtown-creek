/* eslint
    "react/no-unescaped-entities": "off"
*/
import React from 'react'; // eslint-disable-line
import ReactSVG from 'react-svg';
import InteractiveMap from 'app/components/Elements/InteractiveMap';
import ExternalLink from 'app/components/Elements/ExternalLink';
import Gallery from 'app/components/Elements/Gallery';

export default {
    introduction: {
        header: 'Introduction',
        subHeader: '',
        position: '00',
        url: 'introduction',
        shouldShowNumber: false,
        active: false,
        pageContent: (
            <div className='pamphlet-page-content'>
                <ReactSVG className='page-badge' path='assets/boat-introduction-img.svg' alt='boat' />
                <p className='heavy'>Urban rivers are arteries.  They are ecosystemic, cultural, and global trade connectors.  Their histories can provide pathways to an embodied understanding of health, development, pollution, and collapse.</p>
                <p>Newtown Creek is a 3.8 mile waterway, home to ribbed mussels, killifish, and muskrats.  It provides maritime access for local and international businesses like Allocco Recycling and Simms Metal Management.  It also happens to be one of the worst sites of industrial contamination in the United States, straddling the boroughs of Queens and Brooklyn in the largest city in the country, New York.</p>
                <p>The traditional field guide format satisfies a desire to identify.  Couched in the language of "Nature" and Natural History, entries point to things -- whether species or stars -- as objects within a rigid taxonomy.</p>
                <p> The design of A Field Guide to the Dark Ecologies of Newtown Creek draws on these roots, but departs radically in the way it organizes and presents you with information, giving more attention to place and ecology, embedding the system of entries in a framework of inquiry and investigation that offers you multiple ways to engage with Newtown Creek.  You are a neo-naturalist.  You are part of Newtown’s community.  This guide is a tool, helping you to add greater dimension to your understanding of this waterway.</p>
                <p>The term "dark ecology" was coined by theorist Timothy Morton in an attempt to be more inclusive of all the factors and agents -- ugly, horrific, catastrophic, as well as endearing, marvelous, and benign -- that constitute an ecology. This guide promotes inclusivity of anthropogenic inuence on Newtown Creek, in addition to its non-human biology and geology.</p>
            </div>
        )
    },
    'whale-creek': {
        header: 'Oil Twitchers & Barge Spotters',
        subHeader: 'A FIELD GUIDE TO WHALE CREEK',
        position: '01',
        url: 'whale-creek',
        shouldShowNumber: true,
        navIcons: [
            '/assets/Icon-Pamphlet.png',
            '/assets/Icon-Audio.png'
        ],
        active: false,
        hasPopup: true,
        hasSvg: true,
        pageContent: (
            <div className='pamphlet-page-content'>
                <p className='heavy'>What does a sludge boat look like, and what does it do? Have you ever watched old automobile carcasses being collected at Sims Metal Management?</p>
                <img alt='whale creek pamphlet' className='body-img' src='/assets/IMG_2152sm.jpg' />
                <p>A Field Guide to Whale Creek situates you between the industrial and the "natural" at the Newtown Creek Nature Walk, designed by George Trakas and built in 2007. Along the edge of the Creek you'll have the perfect vantage point for observing and identifying the industrial, civic and ecological entities that cohabitate near the Whale Creek tributary, from canoes to recycling barges. A Field Guide to Whale Creek lays bare the power and complexity in trying to name what surrounds you.</p>
                <InteractiveMap />
                <h2>Press</h2>
                <p><ExternalLink url='https://hyperallergic.com/385283/an-audio-tour-dredges-up-dark-ecologies-of-nycs-polluted-waterways/'>"An Audio Tour Dredges Up the Dark Ecology of NYC's Newtown Creek"</ExternalLink>, Allison Meier, Hyperallergic, 2017</p>
                <p><ExternalLink url='https://hyperallergic.com/386577/tune-in-to-the-streets-of-new-york-with-these-seven-sound-walks/'>"7 Audio Journeys that Let You Escape New York While Walking Its Streets"</ExternalLink>, Allison Meier, Hyperallergic, 2017"</p>
            </div>
        ),
        popupButtonText: 'EXPEDITION MATERIALS',
        popupButtonIcons: [
            '/assets/Icon-Pamphlet.png',
            '/assets/Icon-Audio.png'
        ],
        popupTitle: 'Use these materials to go out to the Newtown Creek Nature Walk and investigate',
        popupContent: (
            <div className='popup-content'>
                <ol>
                    <li>Download the pamphlet and go identify things at the Newtown Creek Nature Walk.
                        <a href='/assets/031217_FieldGuide_Final_v10-web.pdf' download='031217_FieldGuide_Final_v10-web.pdf'>Download</a>
                    </li>
                    <li>Download the audio experience for a guided walking tour of the site.
                        <ExternalLink url='https://soundcloud.com/user-312883240/sets/whalecreekfieldguide'>Download</ExternalLink>
                    </li>
                </ol>
            </div>
        )
    },
    'newtown-creek-2050': {
        header: 'A Look at Newtown Creek 2050',
        subHeader: '',
        position: '02',
        shouldShowNumber: true,
        url: 'newtown-creek-2050',
        active: false,
        hasPopup: false,
        popupButtonText: 'Coming Soon',
        pageContent: (
            <div className='pamphlet-page-content'>
                <img alt='coming soon' className='page-badge' src='/assets/in-development.png' />
                <p className='heavy'><strong>Newtown Creek has a future.  The question is, who decides what it looks like?</strong></p>
                <p><em>A Look at Newtown Creek 2050</em> will inspire Newtown Creek workers, residents, and business owners to add their vision for the waterway to the process already begun by urban planners, federal agencies, and real estate developers.  The same tools being used in that process -- GIS systems, 3D modelling engines, and speculative visualizations -- will animate the imaginings of these community stakeholders.   A Look at Newtown Creek 2050 will render current efforts and community visions with the same fidelity and potency achieved in brochures that advertise planned and for-sale developments.</p>
            </div>
        )
    },
    'whats-in-it': {
        header: 'What\'s In It?',
        subHeader: '',
        position: '03',
        shouldShowNumber: true,
        url: 'whats-in-it',
        active: false,
        hasPopup: false,
        popupButtonText: 'Coming Soon',
        pageContent: (
            <div className='pamphlet-page-content'>
                <img alt='coming soon' className='page-badge' src='/assets/in-development.png' />
                <p className='heavy'><strong><em>What's in It?: Researching Newtown Creek's Wonders and Dangers</em> will be a citizen science initiative developed in collaboration with middle school classrooms along Newtown Creek.</strong></p>
                <p>You will explore youth-led research questions, apply hands-on methods for carrying out the inquiries, and contribute to the growing body of community-based information that is uncovered along the waterway. <em>What's In It?</em> takes a procedural, systematic approach to gathering useful data about the current state of the Creek, while embodying inclusive definitions of research and science.</p>
            </div>
        )
    },
    'field-guide-model': {
        header: 'A Field Guide as a Model',
        subHeader: '',
        position: '04',
        shouldShowNumber: false,
        navIcons: [
            '/assets/Icon-Pamphlet.png'
        ],
        url: 'field-guide-model',
        active: false,
        hasPopup: true,
        pageContent: (
            <div className='pamphlet-page-content'>
                <img alt='kids on a ladder' style={{ height: 'auto', width: '100%' }} className='page-badge' src='/assets/KIDS.jpg' />
                <p>Floating Studio for Dark Ecologies (FSDE) dreams of an ongoing and open library of citizen-driven field guides. The aim of these guides is to embrace the everythingness that – like it or not, pretty or not, dirty or not – constitutes the place where we are. We believe the first step to change requires an unblinkered intimacy with the present/presence of place. The work we have been doing on Newtown Creek in New York, has, from the start, been conceived as a model for coming to know one's "place" in the anthropogenic landscape.</p>
                <p><em>A Field Guide to the Place Where You Are</em> is an instantiation of that model, further abstracting the form of the experimental field guide.  In its incarnation at 3LD Art and Technology Center in New York City (2017), the subjects of inquiry -- the 3LD site, its infrastructure, and artworks in the interdisciplinary exhibition Works on Water -- reflected the specific present and historical collisions of agents in one space, and also their global attachments to multiple other places and realities, as experienced through their material natures.</p>
                <p><em>A Field Guide to the Place Where You Are</em> at 3LD was a sculptural installation and field guide with which participants investigated their material surrounds from atop a post-natural lifeguard stand (an industrial ladder).  Orange numbered stake flags were placed throughout 3LD, and keyed to a laminated field guide accessible at the top of the ladder along with binoculars.  The field guide wove its entries into a fluid geo-temporality: from the past of Greenwich Street (formerly Manhattan’s western shoreline), to the present linkage between the sprinkler system and upstate reservoirs, to the power grid and its potential for a renewables-fueled future.</p>
                <h2>Press</h2>
                <p><ExternalLink url='https://hyperallergic.com/386582/works-on-water-triennial'>"The Inaugural Triennial on New York's Waterways Drops Anchor"</ExternalLink>, Allison Meier, Hyperallergic, 2017</p>
                <h2>Documentation from <em>A Field Guide to the Place Where You Are</em></h2>
                <Gallery
                    images={[
                        '/assets/a-field-guide-to-the-place-where-you-are/a-field-guide-to-the-place-where-you-are_1.jpg',
                        '/assets/a-field-guide-to-the-place-where-you-are/a-field-guide-to-the-place-where-you-are_2.jpg',
                        '/assets/a-field-guide-to-the-place-where-you-are/a-field-guide-to-the-place-where-you-are_3.jpg',
                        '/assets/a-field-guide-to-the-place-where-you-are/a-field-guide-to-the-place-where-you-are_4.jpg',
                        '/assets/a-field-guide-to-the-place-where-you-are/a-field-guide-to-the-place-where-you-are_5.jpg',
                        '/assets/a-field-guide-to-the-place-where-you-are/a-field-guide-to-the-place-where-you-are_6.jpg',
                        '/assets/a-field-guide-to-the-place-where-you-are/a-field-guide-to-the-place-where-you-are_7.jpg',
                        '/assets/a-field-guide-to-the-place-where-you-are/a-field-guide-to-the-place-where-you-are_8.jpg'
                    ]}
                />
                <p />
            </div>
            ),
        popupButtonText: 'Download the PDF',
        popupButtonIcons: [
            '/assets/Icon-Pamphlet.png'
        ],
        popupTitle: 'Use these materials',
        popupContent: (
            <div className='popup-content'>
                <ol>
                    <li>Download this pamphlet to experience how we turned an industrial theater space into a site filled with natural histories, past, present, and future.
                        <a href='/assets/wow-fieldguide-v6.pdf' download='wow-fieldguide-v6.pdf'>Download</a>
                    </li>
                </ol>
            </div>
        )
    },
    bibliography: {
        header: 'Bibliography',
        subHeader: '',
        position: '05',
        shouldShowNumber: false,
        url: 'bibliography',
        active: false,
        hasPopup: false,
        pageContent: (
            <div className='pamphlet-page-content'>
                <p className='heavy'><strong>This set of materials offers a theoretical and factual background for <em>A Field Guide to the Dark Ecologies of Newtown Creek</em>.  They are presented here for your further learning.</strong></p>
                <ul className='bibliography'>
                    <li>
                        <h3>Newton Creek Ecology</h3>
                        <ul>
                            <li>McLaughlin, John. "Newtown Creek : Restoration Ecology." Lecture, Newtown Creek CAG Meeting, New York, NY, February 6, 2014. Accessed January 15, 2017. <ExternalLink url='https://newtowncreekcag.files.wordpress.com/2014/02/oes-netown-cag-presentation.pdf'>https://newtowncreekcag.files.wordpress.com/2014/02/oes-netown-cag-presentation.pdf</ExternalLink>.</li>
                            <li>"Newtown Creek Map." Map. Newtown Creek Alliance. 2016. Accessed January 15, 2017. <ExternalLink url='http://www.newtowncreekalliance.org/newtown-creek-map/'>http://www.newtowncreekalliance.org/newtown-creek-map/</ExternalLink>.</li>
                            <li>"Newtown Creek Tidal Information." NOAA <em>Tides & Currents</em>. Accessed January 15, 2017. <ExternalLink url='https://tidesandcurrents.noaa.gov/'>https://tidesandcurrents.noaa.gov/</ExternalLink>.</li>
                            <li>"NYS DEC Greenpoint Petroleum Remediation Project." New York State Department of Environmental Conservation. Accessed January 15, 2017. <ExternalLink url='http://nysdecgreenpoint.com/'>http://nysdecgreenpoint.com/</ExternalLink>.</li>
                        </ul>
                    </li>
                    <li>
                        <h3>Newtown Creek History</h3>
                        <ul>
                            <li>Waxman, Mitch. <em>Newtown Creek for the vulgarly curious</em>. Brooklyn, NY: Newtownpentacle.com, 2010.</li>
                            <li>"What Stenches Abound." The New York Times, March 27, 1881. Accessed January 15, 2017. <ExternalLink url='https://timesmachine.nytimes.com/timesmachine/1881/03/27/issue.html'>https://timesmachine.nytimes.com/timesmachine/1881/03/27/issue.html</ExternalLink>.</li>
                        </ul>
                    </li>
                    <li>
                        <h3>The Post-natural</h3>
                        <ul>
                            <li>Marris, Emma. <em>Rambunctious Garden: Saving Nature in a Post-wild World</em>. New York: Bloomsbury, 2011.</li>
                            <li>Morton, Timothy. <em>The Ecological Thought</em>. Cambridge, MA: Harvard University Press, 2010.</li>
                        </ul>
                    </li>
                    <li>
                        <h3>Deep Time</h3>
                        <ul>
                            <li>Ellsworth, Elizabeth Ann, and Jamie Kruse. <em>Making the Geologic Now: Responses to Material Conditions of Contemporary Life</em>. Brooklyn, NY: Punctum Books, 2013.</li>
                            <li>Howe, Cymene and Pandian, Anand. "Lexicon for an Anthropocene Yet Unseen." <em>Theorizing the Contemporary</em>, Cultural Anthropology website, January 22, 2016. <ExternalLink url='https://culanth.org/fieldsights/803-lexicon-for-an-anthropocene-yet-unseen'>https://culanth.org/fieldsights/803-lexicon-for-an-anthropocene-yet-unseen</ExternalLink></li>
                            <li>McPhee, John. <em>Basin and Range</em>. New York: Farrar, Straus, Giroux, 1981.</li>
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
                            <li>Dunne, Anthony, and Fiona Raby. <em>Speculative Everything: Design, Fiction, and Social Dreaming</em>. Cambridge, MA: The MIT Press, 2013.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
};
