import { MapAreaStyle, MapLayoutStyle, MapStyle, StrokeStyle } from "./style.css"

type Props = {
    style?: any
    children: any
}

const Map = ({style, children}: Props) => {

    return (
        
        <svg className={MapStyle} style={{...style}} width="374" height="603" viewBox="0 0 374 603" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
                <g className={MapAreaStyle}>
                    <path d="M96.9079 552.869L111.813 582.676L83.3582 603H59.9442L37.2891 560.998L96.9079 552.869Z" fill="#231F20"/>
                    {/* <path d="M91.488 550.159L106.393 579.967L77.9383 600.29H54.5243L31.8691 558.288L91.488 550.159Z" strokeMiterlimit="10"/> */}
                    <path d="M91.488 550.159L106.393 579.967L77.9383 600.29H54.5243L31.8691 558.288L91.488 550.159Z" stroke="#231F20" strokeMiterlimit="10"/>

                    <path d="M241.213 10.2295L266.957 6.16481L374 214.82L361.805 285.275L374 306.954V395.104L301.509 443.121L312.349 462.09L270.345 476.994L260.86 460.735L251.375 463.445L247.31 470.219L225.63 481.059L220.21 470.219L115.877 528.48L75.2282 517.641L30.5141 544.739L12.8994 510.867L21.0292 497.318L12.8994 476.98L10.1895 458.025L31.869 425.508L23.7392 410.604L46.7738 386.215L54.9036 401.119L64.3884 372.666L67.0984 338.794H83.3581V311.696L35.934 216.852L69.8083 193.819L35.934 145.042L60.3235 71.8777L184.981 31.6777L198.531 44.7796L216.891 45.8364V33.2087L243.245 20.3913L241.213 10.2295Z" fill="#231F20"/>
                    <path d="M231.728 4.80991L257.473 0.745193L364.516 209.4L352.321 279.855L364.516 301.534V389.684L292.025 437.702L302.864 456.67L260.86 471.574L251.375 455.315L241.89 458.025L237.826 464.8L216.146 475.639L210.726 464.8L106.393 523.061L65.7438 512.221L21.0297 539.32L3.41503 505.447L11.5449 491.898L3.41503 471.561L0.705078 452.606L22.3847 420.088L14.2548 405.184L37.2894 380.796L45.4192 395.7L54.904 367.247L57.614 333.374H73.8737V306.276L26.4496 211.433L60.3239 188.399L26.4496 139.623L50.8391 66.458L175.497 26.258L189.046 39.36L207.406 40.4168V27.7891L233.761 14.9717L231.728 4.80991Z" stroke="#231F20" strokeMiterlimit="10"/>
                </g>
                
                <g className={StrokeStyle}>
                    <path d="M198.247 471.764V393.518H125.363V368.602H54.9043" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M361.127 355.053H229.749V328.483H179.561V393.518" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M73.873 306.276H227.459V273.393H207.555V220.917H270.344V176.991H208.015H142.773V229.047H168.721L169.304 306.276" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M355.165 191.163H270.344" strokeMiterlimit="10"/>
                    <path d="M198.246 328.483V306.276" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M142.774 176.991H54.9043" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M172.109 176.991V111.17H160.592V32.3687" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                
            </g>
            {
                children
            }
        </svg>
        
    )

}

export default Map