import React from 'react'
import { StaticIconProps } from '.'

export const Elite = (props: StaticIconProps) => {
  const { fill = '#fff' } = props
  return (
    <g style={{ transform: 'scale(0.01)', zIndex: 2 }}>
      <g style={{ transform: 'translate(-253px, -232px)' }}>
        <path
          d='M254.566 20.055c-59.624 0-99.147 26.426-125.21 65.767-25.084 37.862-36.733 88.14-37.583 136.746 35.068 17.25 55.994 35.297 65.088 54.416 8.03 16.882 4.974 34.41-5.042 47.96 22.02 19.97 59.516 32.352 98.135 32.972 38.86.624 77.95-10.4 102.942-33.174-5.034-5.972-8.774-12.36-10.582-19.37-2.54-9.836-.836-20.485 4.687-30.134 10.514-18.37 33.286-34.804 70.354-52.71-.878-46.03-12.275-96.24-37.225-134.714-25.985-40.068-65.52-67.76-125.564-67.76zm-75.748 125.982c46.19 10.87 94.98 10.703 145.752.205-25.867 37.59-123.918 37.62-145.752-.205zm-20.312 13.53c7.698 30.39 30.63 47.76 73.336 45.984l-1.112 33.59c-39.39 20.126-72.635 1.99-103.71-19.048h-.002c-4.848-30.567-.204-54.706 31.488-60.526zm186.69 0c31.69 5.82 36.333 29.958 31.486 60.525h-.002c-31.076 21.04-64.32 39.174-103.71 19.047l-1.11-33.59c42.707 1.776 65.637-15.594 73.335-45.984zM250.97 252.19c12.102 21.818 21.704 43.634 26.47 65.45-13.016 9.698-36.32 11.107-52.938 0 6.443-21.816 14.19-43.632 26.47-65.45zM100.405 353.108c-50.152 13.628-82.55 33.813-82.55 56.204 0 41.018 106.523 74.352 237.697 74.352s237.698-33.334 237.698-74.35c0-22.312-32.12-42.58-81.965-56.205 17.23 8.88 27.518 19.25 27.518 30.444 0 32.13-82.31 58.546-183.247 58.546-100.937 0-182.662-26.418-182.662-58.545 0-11.253 10.112-21.534 27.518-30.443h-.004zm62.54 2.637l-14.903 23.41c6.624 5.312 14.328 9.978 22.855 13.955l10.898-28.796c-6.58-2.48-12.888-5.336-18.848-8.57zm177.605.53c-5.772 3.14-11.804 5.894-18.038 8.28l10.703 28.477c8.005-3.6 15.612-7.817 22.666-12.676l-15.33-24.08zm-140.905 13.673L188.3 399.924c9.524 3.093 19.698 5.462 30.253 7.064l3.87-32.513c-7.754-1.09-15.377-2.6-22.778-4.528zm105.04.287c-7.468 1.95-15.113 3.434-22.85 4.48l3.823 32.126c10.274-1.605 20.384-3.967 30.112-7.11l-11.086-29.496zm-63.654 6.045l-3.893 32.712c9.87.637 19.92.623 29.947-.07l-3.873-32.535c-4.52.206-9.045.287-13.558.215-2.878-.047-5.752-.167-8.62-.323z'
          fill={fill}
          style={{ filter: 'url(#shadow)' }}
        />
      </g>
    </g>
  )
}
