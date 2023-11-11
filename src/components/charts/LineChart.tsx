import { useColorMode } from '@chakra-ui/react'
import { useWindowSize } from 'react-use'
import { CartesianGrid, LineChart as LC, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts'

import { Data } from '../layouts'

export const LineChart = (props: { data: Data[] }) => {
  const { width, height } = useWindowSize()
  const { colorMode } = useColorMode()
  const color = colorMode === 'light' ? '#0000cd' : '#ffff00'

  return (
    <LC
      width={width - 150}
      height={height - 500}
      data={props.data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' stroke={color} />
      <XAxis dataKey='name' stroke={color} />
      <YAxis stroke={color} />
      <Tooltip
        cursor={{ stroke: color, strokeWidth: 2 }}
        labelStyle={{ color: 'black' }}
        itemStyle={{ color: 'black' }}
      />
      <Legend />
      <Line type='monotone' dataKey='value' stroke={color} activeDot={{ r: 8 }} />
    </LC>
  )
}
