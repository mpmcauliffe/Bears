import React, { useContext, } from 'react'
import styled from 'styled-components'
import activeSpeciesContext from '../../context/activeSpeciesContext'


const MapFrame = styled.section`
    position: relative;
    margin: 3rem auto 3rem auto;
    max-width: 76.8rem;
`
const Overlay = styled.img`
    position: absolute; 
    z-index: 10; 
    left: 0;
    max-width: 76.8rem;
    opacity: ${p => p.transparency ? .2 : 1};
`

export const Map = () => {
    //const [mapOverlay, setMapOverlay]   = useState('')
    const speciesContext                            = useContext(activeSpeciesContext)
    const { speciesOverlay, overlayTransparency,
        subspeciesOverlay, showSubOverly, }   = speciesContext
//console.log(subspeciesOverlay)

    return (
        <MapFrame>
            <img 
                alt='map'
                src={require(`./natural_earth.svg`)} />

            {/** */}
            <Overlay 
                alt='bear-overlay'
                src={require(`./overlays/${speciesOverlay}.svg`)} 
                transparency={overlayTransparency} />
            
            {showSubOverly &&
                <Overlay 
                    alt='bear-sub-overlay'
                    src={require(`./${speciesOverlay}/${subspeciesOverlay}.svg`)} />
            }
        </MapFrame>
    )
}
