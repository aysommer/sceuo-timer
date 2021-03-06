import React from 'react';

import './Icon/Icon.css';

export enum Icons {
    Start,
    Pause,
    Stop,
    Sun,
    Moon
}

interface IIcon {
    type: Icons
}

export const Icon: React.FC<IIcon> = React.memo(({ type }: IIcon) =>
    <span className="icon">
        {
            type === Icons.Start && <>
                <svg x="0px" y="0px" viewBox="0 0 494.148 494.148">
                    <g>
                        <path d="M405.284,201.188L130.804,13.28C118.128,4.596,105.356,0,94.74,0C74.216,0,61.52,16.472,61.52,44.044v406.124
                            c0,27.54,12.68,43.98,33.156,43.98c10.632,0,23.2-4.6,35.904-13.308l274.608-187.904c17.66-12.104,27.44-28.392,27.44-45.884
                            C432.632,229.572,422.964,213.288,405.284,201.188z"/>
                    </g>
                </svg>
            </>
        }
        {
            type === Icons.Pause && <>
                <svg x="0px" y="0px" viewBox="0 0 512 512">
                    <g>
                        <path d="M181.333,0H74.667c-17.643,0-32,14.357-32,32v448c0,17.643,14.357,32,32,32h106.667c17.643,0,32-14.357,32-32V32
                            C213.333,14.357,198.976,0,181.333,0z"/>
                    </g>
                    <g>
                        <path d="M437.333,0H330.667c-17.643,0-32,14.357-32,32v448c0,17.643,14.357,32,32,32h106.667c17.643,0,32-14.357,32-32V32
                            C469.333,14.357,454.976,0,437.333,0z"/>
                    </g>
                </svg>
            </>
        }
        {
            type === Icons.Stop && <>
                <svg version="1.1" x="0px" y="0px" viewBox="0 0 493.56 493.56">
                    <g>
                        <path d="M438.254,0H58.974C27.502,0,0.006,25.992,0.006,57.472v379.256c0,31.48,27.496,56.832,58.968,56.832h379.28
                            c31.468,0,55.3-25.352,55.3-56.832V57.472C493.554,25.992,469.722,0,438.254,0z"/>
                    </g>
                </svg>
            </>
        }
        {
            type === Icons.Sun && <>
                <svg x="0px" y="0px" viewBox="0 0 302.4 302.4">
                    <g>
                        <path d="M204.8,97.6C191.2,84,172,75.2,151.2,75.2s-40,8.4-53.6,22.4c-13.6,13.6-22.4,32.8-22.4,53.6s8.8,40,22.4,53.6
                            c13.6,13.6,32.8,22.4,53.6,22.4s40-8.4,53.6-22.4c13.6-13.6,22.4-32.8,22.4-53.6S218.8,111.2,204.8,97.6z"/>
                        <path d="M151.2,51.6c5.6,0,10.4-4.8,10.4-10.4V10.4c0-5.6-4.8-10.4-10.4-10.4c-5.6,0-10.4,4.8-10.4,10.4v30.8
                            C140.8,46.8,145.6,51.6,151.2,51.6z"/>
                        <path d="M236.4,80.8l22-22c4-4,4-10.4,0-14.4s-10.4-4-14.4,0l-22,22c-4,4-4,10.4,0,14.4C225.6,84.8,232,84.8,236.4,80.8z" />
                        <path d="M292,140.8h-30.8c-5.6,0-10.4,4.8-10.4,10.4c0,5.6,4.8,10.4,10.4,10.4H292c5.6,0,10.4-4.8,10.4-10.4
                            C302.4,145.6,297.6,140.8,292,140.8z"/>
                        <path d="M236,221.6c-4-4-10.4-4-14.4,0s-4,10.4,0,14.4l22,22c4,4,10.4,4,14.4,0s4-10.4,0-14.4L236,221.6z" />
                        <path d="M151.2,250.8c-5.6,0-10.4,4.8-10.4,10.4V292c0,5.6,4.8,10.4,10.4,10.4c5.6,0,10.4-4.8,10.4-10.4v-30.8
                            C161.6,255.6,156.8,250.8,151.2,250.8z"/>
                        <path d="M66,221.6l-22,22c-4,4-4,10.4,0,14.4s10.4,4,14.4,0l22-22c4-4,4-10.4,0-14.4C76.8,217.6,70.4,217.6,66,221.6z" />
                        <path d="M51.6,151.2c0-5.6-4.8-10.4-10.4-10.4H10.4c-5.6,0-10.4,4.8-10.4,10.4s4.8,10.4,10.4,10.4h30.8
                            C46.8,161.6,51.6,156.8,51.6,151.2z"/>
                        <path d="M66,80.8c4,4,10.4,4,14.4,0s4-10.4,0-14.4l-22-22c-4-4-10.4-4-14.4,0s-4,10.4,0,14.4L66,80.8z" />
                    </g>
                </svg>
            </>
        }
        {
            type === Icons.Moon && <>
                <svg x="0px" y="0px" viewBox="0 0 480 480">
                    <g>
                        <path d="M459.782,347.328c-4.288-5.28-11.488-7.232-17.824-4.96c-17.76,6.368-37.024,9.632-57.312,9.632
                            c-97.056,0-176-78.976-176-176c0-58.4,28.832-112.768,77.12-145.472c5.472-3.712,8.096-10.4,6.624-16.832
                            S285.638,2.4,279.078,1.44C271.59,0.352,264.134,0,256.646,0c-132.352,0-240,107.648-240,240s107.648,240,240,240
                            c84,0,160.416-42.688,204.352-114.176C464.55,360.032,464.038,352.64,459.782,347.328z"/>
                    </g>
                </svg>
            </>
        }
    </span>
)