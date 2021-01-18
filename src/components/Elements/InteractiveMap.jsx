import React from 'react'
import { ReactSVG } from 'react-svg'

class InteractiveMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: '',
    }
    this.entryText = {
      A: [
        'A. The Rock (Structures)',
        'The unofficial gateway to the Newtown Creek Nature Walk, this souvenir from Deep Time was unearthed beneath McGuinness Blvd.  A "glacial erratic" rolling towards the Atlantic Ocean from the Adirondack Mountains, it was left behind by the retreating Laurentide Ice Sheet 17,000 years ago.',
      ],
      B: [
        'B. Floatable (Toxins / Pollutants)',
        'Marine trash, marine debris, floatable debris, commonly called "floatables", is defined by the US Environmental Protection Agency (EPA), as "foreign matter [such as plastic bags or aluminum cans] that may float or remain suspended in the water column."  Floatables cause harm to Newtown Creek\'s ecology.',
      ],
      C: [
        'C. Spartina (Plants)',
        '<em>Spartina alterniflora</em>, seen at various points along Newtown Creek, was reintroduced both in an effort to restore habitats and as a tool in remediation.  Its foliage reduces wakes and its presence can improve nutrient imbalances.  Compare this soft boundary to the ubiquitous, impenetrable bulkheads.',
      ],
      D: [
        'D. Recycling barge (Vehicles)',
        "Sims Metal Management Ltd. is a multi-national corporation spanning five continents.  During the day you'll see long, slender barges like theirs carrying heaps of plastic and scrap metal to and fro, utilizing creekside maritime access.  A barge can travel nearly 10 times as far as a truck on one gallon of fuel.",
      ],
      E: [
        'E. Mussels (Animals)',
        "Ribbed Mussels have been incorporated into remediation efforts, such as the Newtown Creek Alliance's Living Dock, due to their ability to filter out phytoplankton and excessive debris. Along with other species like oysters and clams, they have been losing habitat, but their renewed presence on the Creek is a hopeful sign.  Find them when the tide is right, occupying the triangular bays cut into the steps.",
      ],
      F: [
        'F. Killifish (Animals)',
        "It may be a surprise that today you could see a fish in Newtown Creek, and tomorrow you could see it in your neighbor's aquarium.  The small, carp-like killifish, who spend their whole lives in the Creek, eating insects, being eaten by Egrets, are one of the key organisms in the ecology of this waterway.  And yet the EPA is not testing them for toxicity.",
      ],
      G: [
        'G. Blue Crab (Animals)',
        'Blue Crabs have it hard enough, paddling with their ten legs trying to avoid seagulls, but they also have humans to contend with.  They are a classic staple, along with Old Bay Seasoning, in diets up and down the Eastern Seaboard.  On Newtown Creek they are an indicator of risks posed to human health, which DOH and EPA advisories spell out.  So do not eat them.',
      ],
      H: [
        'H. Digester Eggs (Structures)',
        'Eight shiny spaceships glow against the night sky in North Brooklyn.  These behemoths are the Digester Eggs, fashioned out of steel and able to process around 1.5 million gallons of sludge per day with heat, time, and "burping", converting it to reusable energy (CO2, water, methane, and biosolids).  They arrived in 2010 as part of the Wastewater Treatment Plant renovation.',
      ],
      I: [
        'I. CSO (Structures)',
        'Rainwater is taken up through storm drains into New York City\'s massive combined sewer system.  It mixes with raw sewage, and, ideally, travels to treatment plants.  But when the plants cannot accept it, which can happen with just an extra 1/10 of an inch, it is rerouted to Combined Sewer Overflows that discharge pathogens such as <em>E. coli</em>.  CSOs may be submerged, but there are green "Caution!" signs that alert you to their presence.',
      ],
      J: [
        'J. Sludge vessel (Vehicles)',
        'Picture 1.2 billion gallons of sludge.  Since 1930 the NYC DEP has operated "sludge boats" to transport approximately that amount per year of soupy organic residue from the wastewater treatment process.  Now it goes to dewatering facilities to be converted into biosolids, which is preferable to the old practice, abandoned in 1992, of depositing the sludge offshore into the open ocean.',
      ],
      K: [
        'K. Japanese Knotweed (Plants)',
        'We all want to see more plant life along Newtown Creek, and flowers enliven its often dull shorelines.  But the small greenish-white blooms of Japanese Knotweed that appear in late summer warn of an invasive species that can grow upright 10 to 15 feet, forming dense thickets that can crowd out native plants and break through sidewalks.',
      ],
      L: [
        'L. Algal Mat (Toxins / Pollutants)',
        'Tarpaper-like forms you may observe adrift on the water are actually laminated cyanobacterial algae and sediment. Their appearance may be stimulated by raw sewage outflow, which induces blooms of algae, or they may break off from the Creek bottom by oxygen bubbling.  Oxygen-poor conditions due to CSOs produce more of these questionable "welcome mats."',
      ],
      M: [
        'M. Black Mayonnaise (Toxins / Pollutants)',
        "If you were to scoop up the sediment from the 15-25 foot layer lining Newtown Creek's bottom (don't!), you’d have a toxic admixture the consistency of mayonnaise.  Oil, arsenic, polychlorinated biphenyls, and incinerated ash are some of the organic and inorganic pollutants that the EPA is quantifying in their Superfund assessment.",
      ],
      N: [
        'N. Bird watcher (People)',
        "In the evenings, perhaps in a canoe from the North Brooklyn Boat Club, you may be able to spot birdwatchers (it's true!), out enjoying the Green Herons, Egrets, and Kingfishers that rely on the Creek.  You may see a UPS employee at Plank Road, in Maspeth, admiring an Osprey as it dives to snag a fish.  You're glimpsing a mixed-use waterway.",
      ],
    }

    this.svgLoaded = this.svgLoaded.bind(this)
  }

  svgLoaded(_, svg) {
    const ids = [
      { id: 'Group-A', key: 'A' },
      { id: 'Group-B', key: 'B' },
      { id: 'Group-C', key: 'C' },
      { id: 'Group-D', key: 'D' },
      { id: 'Group-E', key: 'E' },
      { id: 'Group-F', key: 'F' },
      { id: 'Group-G', key: 'G' },
      { id: 'Group-H', key: 'H' },
      { id: 'Group-I', key: 'I' },
      { id: 'Group-J', key: 'J' },
      { id: 'Group-K', key: 'K' },
      { id: 'Group-L', key: 'L' },
      { id: 'Group-M', key: 'M' },
      { id: 'Group-N', key: 'N' },
    ]
    ids.forEach(({ id, key }) => {
      const group = document.getElementById(id)
      group.style.cursor = 'pointer'
      group.addEventListener('mouseover', (e) => {
        group.children[0].style.fill = '#EAE730' // eslint-disable-line
        group.children[1].style.fill = '#0C2D5C'
        this.setState({
          selected: key,
        })
      })
      group.addEventListener('mouseout', (e) => {
        group.children[0].style.fill = '#0C2D5C' // eslint-disable-line
        group.children[1].style.fill = '#EAE730'
        this.setState({
          selected: null,
        })
      })
    })
  }

  render() {
    return (
      <div className="map-container">
        <p className="map-instructions">
          This map reveals, in detail, the human and non-human entities that
          share Whale Creek. Roll over the letters to learn about killifish,
          black mayonnaise, and more.
        </p>
        <ReactSVG
          src="assets/Map-FinalSpread.svg"
          afterInjection={this.svgLoaded}
          className="interactive-map-svg"
        />
        <div className="map-entry">
          {this.entryText[this.state.selected] &&
            this.entryText[this.state.selected].map((text, i) => {
              if (i === 0) {
                return (
                  <p key={i}>
                    <span>{text.toUpperCase()}</span>
                  </p>
                )
              }
              return <p key={i} dangerouslySetInnerHTML={{ __html: text }} />
            })}
        </div>
      </div>
    )
  }
}

export default InteractiveMap
