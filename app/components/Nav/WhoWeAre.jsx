/*
 * WhoWeAre.jsx
 * Copyright (C) 2017 jamiecharry <jamiecharry@172-16-227-158.DYNAPOOL.NYU.EDU>
 *
 * Distributed under terms of the MIT license.
 */
import React from 'react';
import ExternalLink from 'app/components/Elements/ExternalLink';

const WhoWeAre = () =>
        <div className='nav-content'>
            <h1>Who We Are</h1>
            <p><em><strong>The Floating Studio for Dark Ecologies (FSDE)</strong></em> is a collective of media artists designing experiences that activate "ways of knowing" which differ from those in informative pamphlets or science-based lectures, in order to facilitate alternative means for citizens to engage with urban waterways.</p>
            <p>We seek to foster intimacy and understanding for non-experts, and cultivate community advocacy with a long-term view towards policy and social changes. These could take the form of implementing green infrastructure, and addressing ecological justice, climate change, and human health factors. We have been developing this work with input from the Newtown Creek Alliance, Dr. Sarah Durand (LaGuardia Community College, Creek biologist), Mitch Waxman (Creek historian), and the staff of City Council Districts 33 and 34.</p>
            <h2>Principal Collective</h2>
            <p><em><strong>Nick Hubbard’s</strong></em> work takes many forms including interactive installations, virtual reality experiences, solo performance, and experimental games aimed at promoting the lessons of history to citizens of the present through unconventional uses of technology.  He is a recent graduate of the Interactive Telecommunications Program (ITP), and has trained with the American Conservatory Theater, Theater der Schatten, the Mandala Center, and the People’s Institute.  His work has been supported by Tisch School of the Arts, Google Experiments in Storytelling, and the Puppet Slam Network.</p>
            <p><em><strong>Rebecca Lieberman</strong></em> is an artist and multidisciplinary designer based in Brooklyn, New York. She works at the intersection of technology and storytelling, experimenting with new narrative formats such as virtual reality, computational imaging and participatory installation. Rebecca holds a Masters Degree from NYU’s Interactive Telecommunications Program and a B.A. from the Department of Visual and Environmental Studies at Harvard University.</p>
            <p><em><strong>Marina Zurkow</strong></em> is a media artist focused on near-impossible nature and culture intersections. She uses life science, bio materials, animation, graphics, and technologies to foster intimate connections between people and non-human agents. Zurkow is a 2011 John Simon Guggenheim Memorial Fellow, and has been granted awards from the New York Foundation for the Arts, New York State Council for the Arts, the Rockefeller Foundation, and Creative Capital. She is on faculty at ITP / Tisch School of the Arts, and is represented by bitforms gallery.</p>
            <h2>Collaborators</h2>
            <ul className='collaborators-list'>
                <li><ExternalLink url='https://jcharry.com'>Jamie Charry</ExternalLink> (website developer)</li>
                <li><ExternalLink url='http://ckdols.com'>Chester Dols</ExternalLink> (map designer, fabricator)</li>
                <li><ExternalLink url='https://m.soundcloud.com/janecramer'>Jane Cramer</ExternalLink> (audio engineer)</li>
                <li><ExternalLink url='http://bruces2706.wixsite.com/bruceshackelford'>Bruce Shackelford</ExternalLink> (voiceover actor)</li>
                <li><ExternalLink url='http://articulatedworks.com/justinpeake/'>Justin Peake</ExternalLink> (composer)</li>
                <li><ExternalLink url='http://elizabeth-henaff.net/'>Elizabeth Hénaf</ExternalLink>f (microbiologist)</li>
                <li><ExternalLink url='http://www.ianquate.com/'>Ian Quate</ExternalLink> (landscape architect)</li>
                <li><ExternalLink url='http://connorgfrew.tumblr.com/'>Connor Frew</ExternalLink> (mentee)</li>
                <li><ExternalLink url='http://www.nolongerempty.org/home/who-we-are/team/'>Carol Stakenas</ExternalLink> (project consultant)</li>
            </ul>
        </div>

export default WhoWeAre;
