import { CartesianGrid, LineChart as LC, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts'

import { Data } from '../layouts'

type LineChartProps = { data: Data[] }

export const LineChart = (props: LineChartProps) => {
  return (
    <LC
      width={500}
      height={300}
      data={props.data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type='monotone' dataKey='value' stroke='#8884d8' activeDot={{ r: 8 }} />
    </LC>
  )
}
