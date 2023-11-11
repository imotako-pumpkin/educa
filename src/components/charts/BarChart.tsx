import { useColorMode } from '@chakra-ui/react'
import { useWindowSize } from 'react-use'
import { BarChart as BC, Bar, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'

import { Data } from '../layouts'

export const BarChart = (props: { data: Data[] }) => {
  const { width, height } = useWindowSize()
  const { colorMode } = useColorMode()
  const color = colorMode === 'light' ? '#0000cd' : '#ffff00'

  return (
    <BC width={width - 150} height={height - 500} data={props.data}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' stroke={color} />
      <YAxis stroke={color} />
      <Tooltip
        cursor={{ stroke: color, strokeWidth: 2 }}
        labelStyle={{ color: 'black' }}
        itemStyle={{ color: 'black' }}
      />
      <Legend />
      <Bar dataKey='value' fill={color} />
    </BC>
  )
}
