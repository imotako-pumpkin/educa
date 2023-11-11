import { useColorMode } from '@chakra-ui/react'
import { useWindowSize } from 'react-use'
import { AreaChart as AC, Area, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'

import { Data } from '../layouts'

export const AreaChart = (props: { data: Data[] }) => {
  const { width, height } = useWindowSize()
  const { colorMode } = useColorMode()
  const color = colorMode === 'light' ? '#0000cd' : '#ffff00'

  return (
    <AC
      width={width - 150}
      height={height - 500}
      data={props.data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='5%' stopColor={color} stopOpacity={0.8} />
          <stop offset='95%' stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey='name' stroke={color} />
      <YAxis stroke={color} />
      <CartesianGrid strokeDasharray='3 3' />
      <Tooltip
        cursor={{ stroke: color, strokeWidth: 2 }}
        labelStyle={{ color: 'black' }}
        itemStyle={{ color: 'black' }}
      />
      <Area type='monotone' dataKey='value' stroke={color} fillOpacity={1} fill='url(#colorUv)' />
    </AC>
  )
}
