import React from 'react'
import { Props } from './props.type'

export const SoftwareBrothersLogo: React.FC<Props> = (props) => {
  const { width, height, theme } = props
  const svgWidth = width || '72px'
  const svgHeight = height || '72px'
  return (
    <svg width={svgWidth} height={svgHeight} viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <polygon id="path-1" points="0 0.0011886196 40.3991072 0.0011886196 40.3991072 46.0126533 0 46.0126533" />
      </defs>
      <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Atoms/Logotype/SoftwareBrothers">
          <g id="software-brothers-logo-compact">
            <circle id="Oval" fill={theme.colors.love} fillRule="nonzero" cx="36" cy="36" r="36" />
            <g id="Clipped" transform="translate(14.794521, 11.835616)">
              <g id="Path" />
              <path d="M15.1239452,41.020451 C12.7951716,42.4990938 10.8553199,43.139787 8.58363578,43.139787 C8.36241418,43.139787 6.87095246,43.1552118 5.78982111,42.4503604 C5.04765834,41.964215 4.54098952,41.1690285 4.54098952,40.4463477 C4.54098952,39.0200042 5.62568896,37.9359831 7.5132087,37.7838398 C10.8469944,37.517589 13.0247188,39.0057408 15.0882643,40.6103772 L15.3891732,40.8528556 L15.1239452,41.020451 Z M39.4250185,22.9760169 C39.3631716,22.3115785 39.3370056,21.5829547 39.5391974,20.9648725 C42.3591781,12.3140991 38.0560612,3.78337619 29.3380274,1.04598525 C25.7842095,-0.0689399368 21.7379952,-0.142634352 18.4850862,0.142634352 C14.5685125,0.484956797 10.7482772,1.63435195 7.38832554,3.89510643 C3.49672844,6.51244679 0.780222401,9.92259642 0.116557615,14.7590896 C-0.38297502,18.3950769 0.788547945,21.4593383 2.80689766,24.4320759 C3.08164061,24.8362065 3.71081386,25.4947018 4.16515068,25.4947018 C4.60402579,25.4947018 4.902556,25.0430263 4.77172603,24.622255 C4.56557384,23.9463415 4.3689131,23.267573 4.18180177,22.5861496 C2.67368896,17.0329189 4.53147462,11.4262002 9.00704915,8.02080506 C14.1296374,4.11856691 24.3462691,3.56942466 29.8530218,6.89993678 C33.9729766,9.38890622 36.0781499,14.0518609 34.6045286,18.4961096 C34.2834005,19.4672118 33.7541338,20.0936143 33.6601741,21.0421328 C33.5852442,21.8004721 33.791004,24.2894415 33.8778276,25.9392455 C33.9135085,26.625079 33.9943852,27.3132898 33.9920064,28.0015005 C33.9896277,28.8763246 33.4900951,29.4290327 32.5790427,29.4290327 C30.7807252,29.4290327 30.665357,30.2016354 30.4227268,31.4461201 C30.0564029,33.3158188 29.8030685,35.2473256 29.1322675,37.0088599 C27.739523,40.6721855 23.6397873,43.3917471 20.5212764,41.3901117 C20.8852216,41.0014331 21.2182434,40.6293952 21.4668203,40.3465037 C21.8022208,39.9613909 22.1197808,39.5620148 22.4087961,39.1400548 C23.9906495,36.8376986 24.6281483,34.6209231 24.8208251,33.7912666 C25.5106559,30.8173404 24.5151587,27.3109125 21.3490733,26.0652392 L20.9066301,25.8917007 L21.3264754,25.665863 C21.7566362,25.4369843 22.1768613,25.1899243 22.5860113,24.925353 C27.6622143,21.6186133 28.9181821,18.8122824 29.4533956,17.6129652 C29.8458856,16.7333867 30.4762482,14.0863309 29.0763674,11.8814415 C28.2331088,10.4871907 26.6976406,9.18446365 24.3070201,8.59847418 C21.8628783,7.99822129 19.2224915,8.06359536 16.8318711,8.49149842 C15.4462627,8.74110854 12.3836519,9.60404636 10.3676809,11.5284215 C8.1959033,13.6013741 7.14807413,16.6751444 8.31721837,18.2262929 C8.44329089,18.3938883 8.63121031,18.3808135 8.70614021,18.3665501 C8.90945547,18.3270044 9.07422409,18.178348 9.13431104,17.9802487 C10.1048316,14.7816733 12.5513521,12.5946133 16.2086446,11.6567924 C19.1832425,10.8936986 21.9092635,11.1860991 23.0784077,11.4321433 C24.6376632,11.7602023 25.8079968,12.6813825 26.2088122,13.9448851 C26.5894085,15.1453909 26.6108171,17.213589 23.8277067,20.2517007 C20.5605254,23.8175595 16.3703981,25.3389926 14.0927671,25.9285479 L13.6503239,26.0426554 L13.8406221,25.6242613 C14.3163674,24.5747102 14.7849766,23.5703267 15.2393135,22.6004131 C15.4795649,22.088118 15.7114907,21.5900864 15.9350911,21.1075068 C16.0183465,20.9411001 16.2003191,20.5654963 16.4274875,20.100746 C16.9543755,19.0238567 17.7167575,17.466765 17.9760387,16.9509041 C18.3364158,16.2317893 18.1663368,15.4128303 17.5740338,15.001568 L16.789054,14.4583688 C16.5220516,14.2752054 16.1876343,14.219504 15.8756229,14.3062255 C15.5681267,14.387068 15.3116076,14.5986726 15.1738985,14.8850832 C13.0702745,19.4788203 10.9785737,24.0780012 8.89881708,28.6825796 C8.72041257,29.0855216 8.75371475,29.5443288 8.9892087,29.9104236 C9.3793199,30.5178082 9.87171636,31.062196 10.4521257,31.5269463 C10.5845427,31.6350458 10.7598401,31.6752234 10.9261587,31.635593 C11.0924773,31.5959625 11.2307763,31.4810613 11.3001418,31.3248809 C11.6664658,30.4857155 12.4288477,28.7645943 12.4288477,28.7645943 L12.5121031,28.7325016 C13.9725165,28.1693248 15.5212024,27.8691176 17.0863948,27.8457914 C18.7895633,27.8101328 20.019365,28.249922 20.729415,29.1497071 C21.1016857,29.621589 21.5857566,30.5831823 21.3276648,31.9156249 C21.1147687,33.0115321 20.5973956,34.3083161 19.9170798,35.583705 C19.806469,35.792902 19.5376728,36.2612181 19.518643,36.2956881 C18.9155462,37.3180961 18.1946324,38.2663466 17.3706527,39.1210369 C16.7189303,38.5316649 16.0431957,37.9693676 15.3451668,37.4355743 C14.3342079,36.6594057 12.5204287,35.5658757 10.9825818,35.0654668 C9.59816277,34.6161686 8.52892506,34.3938967 6.81029492,34.5424742 C4.06167607,34.7825753 1.85064948,36.5346006 1.47243191,39.3623267 C1.19887832,41.3960548 2.25741176,43.9717935 4.80264948,45.1461496 C5.92550458,45.6227031 7.1202934,45.9079553 8.33743755,45.9900695 C10.0025463,46.0934795 12.0090024,45.8189083 13.8620306,45.3125564 C15.5770927,44.8442403 17.1779758,43.8648177 18.3506882,43.1385711 C18.5802353,43.2693193 19.2593618,43.723372 19.9706011,44.0549968 C20.7436873,44.4163372 21.5524545,44.657627 21.8581209,44.7396417 C25.501141,45.7202529 30.3228203,44.6861538 32.6016406,40.4724974 C33.9408638,37.9966027 34.8424013,35.2782297 35.8961773,32.6501918 C36.1851926,31.9310769 36.5063207,30.8577534 36.8119871,30.5427692 C37.0974343,30.2503688 37.5374988,30.1933151 38.8303368,30.1933151 C39.865083,30.1933151 40.2825496,29.5645353 40.1552877,28.5328135 C39.9269299,26.6821328 39.5962869,24.8314521 39.4238292,22.9748282 L39.4250185,22.9760169 Z" id="Shape" fill={theme.colors.white} fillRule="nonzero" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default SoftwareBrothersLogo
