import { Button, ButtonGroup, Heading, Spacer, VStack } from '@chakra-ui/react'
import { useMemo, useState } from 'react'

import { LineChart } from '../charts'
import { Dropzone } from '../form'

type ChartPageLayoutProps = {
  pageTitle: string
  chartType: 'line' | 'bar' | 'pie' | 'area'
  children?: React.ReactNode
}

export type Data = { name: string; value: number }[]

export const ChartPageLayout = (props: ChartPageLayoutProps) => {
  const { pageTitle, chartType, children } = props

  const [data, setData] = useState<Data[]>()

  const chart = useMemo(() => {
    if (data) {
      switch (chartType) {
        case 'line':
          return <LineChart data={data} />
        default:
          break
      }
    }
  }, [chartType, data])

  return (
    <VStack p={[10, 10, 20, 20, 20]}>
      <Heading as='h2' size='2xl'>
        {pageTitle}
      </Heading>
      <Spacer mb={10} />
      {children}
      {data ? chart : <Dropzone setData={setData} />}
      <Spacer mb={10} />
      <ButtonGroup spacing={[10, 10, 20, 20, 20]}>
        <Button variant='outline' colorScheme='teal' size='lg' onClick={() => setData(undefined)}>
          RESET
        </Button>
        <Button colorScheme='teal' size='lg' onClick={() => setData(undefined)}>
          FORMAT
        </Button>
      </ButtonGroup>
    </VStack>
  )
}
