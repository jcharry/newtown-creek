import React from 'react'; // eslint-disable-line
import OilBargeSvg from 'app/components/OilBargeSvg';

export default {
    '01-introduction': {
        header: 'Introduction',
        subHeader: '',
        position: '01',
        url: '01-introduction',
        active: false
    },
    '02-twitchers-spotters': {
        header: 'Oil Twitchers & Barge Spotters',
        subHeader: 'A Field Guide to Whale Creek',
        position: '02',
        url: '02-twitchers-spotters',
        active: false,
        hasPopup: true,
        hasSvg: true,
        pageContent: [
            {
                tag: 'svg',
                content: <OilBargeSvg key='oil-barge-svg' />
            },
            {
                tag: 'h2',
                text: 'Urban Rivers are arteries'
            },
            {
                tag: 'img',
                src: 'img.jpg',
                alt: 'test'
            },
            {
                tag: 'p',
                text: 'They are ecosystemic, cultural, and global trade connectors. Their histories can provide pathways to embodied understanding of health, development, pollution, and collapse. Newtown Creek is a waterway home to ribbed mussels, killifish, and muskrats. It also happens to be one of the worst sites'
            },
            {
                tag: 'p',
                text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus'
            }
        ],
        popupButtonText: 'Download',
        popupContent: [
            {
                linkText: 'Download',
                restOfSentence: 'the pamphlet and go identify things at the Newton Creek Nature Walk',
                url: 'pdf.pdf'
            },
            {
                linkText: 'Go on the audio walk',
                restOfSentence: 'lorem ipsum dolor sit'
            },
            {
                linkText: 'Attend our next event',
                restOfSentence: 'on November 21, 2016'
            }
        ]
    },
    '03-phantom-smells': {
        header: 'The Order of the Phantom Smells',
        subHeader: 'Chasing the Ghosts of Industry and Toilets of Newtown Creek',
        position: '03',
        url: '03-phantom-smells',
        active: false,
        hasPopup: true,
        popupButtonText: 'Coming Soon'
    },
    '04-whats-in-it': {
        header: 'What\'s In It',
        subHeader: 'Researching Newtown Creek\'s Wonders and Dangers',
        position: '04',
        url: '04-whats-in-it',
        active: false,
        hasPopup: true,
        popupButtonText: 'Coming Soon'
    },
    '05-whats-in-it-for-you': {
        header: 'What\'s In It (For You)?',
        subHeader: 'A Look at Newtown Creek 2050',
        position: '05',
        url: '05-whats-in-it-for-you',
        active: false,
        hasPopup: true,
        popupButtonText: 'Coming Soon'
    },
    '06-index': {
        header: 'Index',
        subHeader: '',
        position: '06',
        url: '06-index',
        active: false
    },
    '07-bibliography': {
        header: 'Bibliography',
        subHeader: '',
        position: '07',
        url: '07-bibliography',
        active: false
    }
};
