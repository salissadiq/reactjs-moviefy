import React from 'react'
import {Link} from 'react-router-dom'

export default function SideBar() {

  // const headerNavs = [
  //   {
  //     text: 'Home',
  //     path: '/'
  //   },
  //   {
  //     text: 'Movies',
  //     path: '/movie'
  //   },
  //   {
  //     text: 'TV Series',
  //     path:'/tv'
  //   }
  // ]

  // const {pathname}= useLocation()
  // const headerRef = useRef(null)

  // const active = headerNavs.map(nav => nav.path === pathname )

  return (
    <div className="top-0 left-0 bottom-0 absolute bg-primary h-screen w-14 text-white">
      <div className="flex flex-col gap-20 justify-center items-center py-5 px-5">
      <svg className="p-2" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_444_1185)">
        <g filter="url(#filter0_d_444_1185)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3806 9.28615V46.0584C13.3805 47.1675 13.8902 48.1952 14.723 48.7648C15.5558 49.3343 16.5891 49.3621 17.4444 48.8378L47.4732 30.4517C48.3695 29.9026 48.9289 28.8345 48.9289 27.6723C48.9289 26.51 48.3695 25.4419 47.4732 24.8928L17.4444 6.50668C16.5891 5.98242 15.5558 6.01016 14.723 6.57974C13.8902 7.14932 13.3805 8.17699 13.3806 9.28615Z" stroke="url(#paint0_linear_444_1185)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <g filter="url(#filter1_d_444_1185)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2083 45.4207L48.6377 40.4115C49.7366 40.2605 50.6852 39.6155 51.136 38.7129C51.5869 37.8103 51.4736 36.7828 50.8377 36.007L28.5324 8.76265C27.8663 7.94952 26.732 7.54087 25.5806 7.6992C24.4291 7.85752 23.4472 8.55716 23.0253 9.5199L8.90114 41.7734C8.49827 42.6921 8.66652 43.712 9.34423 44.4594C10.0219 45.2069 11.1095 45.5719 12.2083 45.4207Z" stroke="url(#paint1_linear_444_1185)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </g>
        <defs>
        <filter id="filter0_d_444_1185" x="5.07944" y="2.44261" width="52.1519" height="58.4593" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_444_1185"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_444_1185" result="shape"/>
        </filter>
        <filter id="filter1_d_444_1185" x="-4" y="0" width="64.0034" height="58.614" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_444_1185"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_444_1185" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_444_1185" x1="14.283" y1="6.13215" x2="55.2841" y2="41.0114" gradientUnits="userSpaceOnUse">
        <stop stop-color="#0FEFFD"/>
        <stop offset="0.515718" stop-color="#FF00F5"/>
        <stop offset="0.776042" stop-color="#0FEFFD" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint1_linear_444_1185" x1="8.96075" y1="44.9563" x2="37.9296" y2="-0.413882" gradientUnits="userSpaceOnUse">
        <stop stop-color="#0FEFFD"/>
        <stop offset="0.515718" stop-color="#FF00F5"/>
        <stop offset="0.776042" stop-color="#0FEFFD" stop-opacity="0"/>
        </linearGradient>
        <clipPath id="clip0_444_1185">
        <rect width="56" height="56" fill="white"/>
        </clipPath>
        </defs>
      </svg>

      <div className="flex flex-col gap-20">
        <Link to="/">
          {/* Home icon */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.661 9.28654L19.3299 7.52867V2.66831H15.999V5.0154L11.9998 2L2.33504 9.28654C2.13572 9.47136 2.01566 9.72614 2 9.99751V21.126C2.00098 21.6057 2.3894 21.9945 2.86916 21.996H21.1268C21.6066 21.9945 21.995 21.6057 21.996 21.126V9.9984C21.9806 9.72672 21.8605 9.47158 21.661 9.28654Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
        </Link>

        {/* MOvie list icon */}
        <Link to="/movie">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 22V2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 2V22" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.33337 2H16.6667V10H7.33337V2Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.33337 14H16.6667V22H7.33337V14Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.00004 4.00002C5.00004 4.06595 4.98049 4.13039 4.94386 4.18521C4.90724 4.24003 4.85518 4.28275 4.79427 4.30798C4.73336 4.33321 4.66634 4.33981 4.60168 4.32695C4.53702 4.31409 4.47762 4.28234 4.43101 4.23572C4.38439 4.18911 4.35264 4.12971 4.33978 4.06505C4.32692 4.00039 4.33352 3.93337 4.35875 3.87246C4.38398 3.81155 4.4267 3.75949 4.48152 3.72286C4.53633 3.68624 4.60078 3.66669 4.66671 3.66669C4.75511 3.66669 4.8399 3.70181 4.90241 3.76432C4.96492 3.82683 5.00004 3.91161 5.00004 4.00002Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.00004 9.33333C5.00004 9.39926 4.98049 9.46371 4.94386 9.51852C4.90724 9.57334 4.85518 9.61606 4.79427 9.64129C4.73336 9.66652 4.66634 9.67312 4.60168 9.66026C4.53702 9.6474 4.47762 9.61565 4.43101 9.56904C4.38439 9.52242 4.35264 9.46302 4.33978 9.39836C4.32692 9.3337 4.33352 9.26668 4.35875 9.20577C4.38398 9.14486 4.4267 9.0928 4.48152 9.05618C4.53633 9.01955 4.60078 9 4.66671 9C4.75511 9 4.8399 9.03512 4.90241 9.09763C4.96492 9.16014 5.00004 9.24493 5.00004 9.33333Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.00004 14.6666C5.00004 14.7326 4.98049 14.797 4.94386 14.8518C4.90724 14.9067 4.85518 14.9494 4.79427 14.9746C4.73336 14.9998 4.66634 15.0064 4.60168 14.9936C4.53702 14.9807 4.47762 14.949 4.43101 14.9023C4.38439 14.8557 4.35264 14.7963 4.33978 14.7317C4.32692 14.667 4.33352 14.6 4.35875 14.5391C4.38398 14.4782 4.4267 14.4261 4.48152 14.3895C4.53633 14.3529 4.60078 14.3333 4.66671 14.3333C4.75511 14.3333 4.8399 14.3684 4.90241 14.4309C4.96492 14.4935 5.00004 14.5782 5.00004 14.6666Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.00004 20C5.00004 20.0659 4.98049 20.1304 4.94386 20.1852C4.90724 20.24 4.85518 20.2828 4.79427 20.308C4.73336 20.3332 4.66634 20.3398 4.60168 20.3269C4.53702 20.3141 4.47762 20.2823 4.43101 20.2357C4.38439 20.1891 4.35264 20.1297 4.33978 20.065C4.32692 20.0004 4.33352 19.9334 4.35875 19.8725C4.38398 19.8115 4.4267 19.7595 4.48152 19.7229C4.53633 19.6862 4.60078 19.6667 4.66671 19.6667C4.75511 19.6667 4.8399 19.7018 4.90241 19.7643C4.96492 19.8268 5.00004 19.9116 5.00004 20Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.6667 4.00002C19.6667 4.06595 19.6471 4.13039 19.6105 4.18521C19.5739 4.24003 19.5218 4.28275 19.4609 4.30798C19.4 4.33321 19.333 4.33981 19.2683 4.32695C19.2036 4.31409 19.1442 4.28234 19.0976 4.23572C19.051 4.18911 19.0193 4.12971 19.0064 4.06505C18.9935 4.00039 19.0001 3.93337 19.0254 3.87246C19.0506 3.81155 19.0933 3.75949 19.1481 3.72286C19.203 3.68624 19.2674 3.66669 19.3333 3.66669C19.4217 3.66669 19.5065 3.70181 19.569 3.76432C19.6315 3.82683 19.6667 3.91161 19.6667 4.00002Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.6667 9.33333C19.6667 9.39926 19.6471 9.46371 19.6105 9.51852C19.5739 9.57334 19.5218 9.61606 19.4609 9.64129C19.4 9.66652 19.333 9.67312 19.2683 9.66026C19.2036 9.6474 19.1442 9.61565 19.0976 9.56904C19.051 9.52242 19.0193 9.46302 19.0064 9.39836C18.9935 9.3337 19.0001 9.26668 19.0254 9.20577C19.0506 9.14486 19.0933 9.0928 19.1481 9.05618C19.203 9.01955 19.2674 9 19.3333 9C19.4217 9 19.5065 9.03512 19.569 9.09763C19.6315 9.16014 19.6667 9.24493 19.6667 9.33333Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.6667 14.6666C19.6667 14.7326 19.6471 14.797 19.6105 14.8518C19.5739 14.9067 19.5218 14.9494 19.4609 14.9746C19.4 14.9998 19.333 15.0064 19.2683 14.9936C19.2036 14.9807 19.1442 14.949 19.0976 14.9023C19.051 14.8557 19.0193 14.7963 19.0064 14.7317C18.9935 14.667 19.0001 14.6 19.0254 14.5391C19.0506 14.4782 19.0933 14.4261 19.1481 14.3895C19.203 14.3529 19.2674 14.3333 19.3333 14.3333C19.4217 14.3333 19.5065 14.3684 19.569 14.4309C19.6315 14.4935 19.6667 14.5782 19.6667 14.6666Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.6667 20C19.6667 20.0659 19.6471 20.1304 19.6105 20.1852C19.5739 20.24 19.5218 20.2828 19.4609 20.308C19.4 20.3332 19.333 20.3398 19.2683 20.3269C19.2036 20.3141 19.1442 20.2823 19.0976 20.2357C19.051 20.1891 19.0193 20.1297 19.0064 20.065C18.9935 20.0004 19.0001 19.9334 19.0254 19.8725C19.0506 19.8115 19.0933 19.7595 19.1481 19.7229C19.203 19.6862 19.2674 19.6667 19.3333 19.6667C19.4217 19.6667 19.5065 19.7018 19.569 19.7643C19.6315 19.8268 19.6667 19.9116 19.6667 20Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </Link>
        <Link to="/tv">
          {/* TV list */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.48071 4H21.5192V17.9615H2.48071V4Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.173 4V17.9615" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.7114 11.6154H18.9807" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.7114 14.1539H18.9807" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.3461 8.125C18.4089 8.125 18.4702 8.14361 18.5224 8.17848C18.5746 8.21334 18.6153 8.2629 18.6393 8.32088C18.6633 8.37886 18.6696 8.44266 18.6573 8.50421C18.6451 8.56576 18.6149 8.6223 18.5705 8.66668C18.5261 8.71105 18.4696 8.74127 18.408 8.75352C18.3465 8.76576 18.2827 8.75948 18.2247 8.73546C18.1667 8.71145 18.1172 8.67078 18.0823 8.61859C18.0474 8.56641 18.0288 8.50507 18.0288 8.44231C18.0288 8.35815 18.0622 8.27744 18.1217 8.21794C18.1813 8.15843 18.262 8.125 18.3461 8.125" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.75 20.5L6.28846 17.9615" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.2499 20.5L17.7114 17.9615" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </Link>

        <Link to="/favorite">
        {/* Favorite */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M12 2L14.5 9.17778H22L16.1667 13.8222L18.25 21L12 16.7778L5.75 21L7.83333 13.8222L2 9.17778H9.5L12 2Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </Link>
      </div>
      </div>
    </div>
  )
}
