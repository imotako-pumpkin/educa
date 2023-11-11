import { Button, Heading, VStack } from '@chakra-ui/react'
import { useMemo, useState } from 'react'

import { LineChart } from '../charts'
import { DropzoneModal } from '../form'

type ChartPageLayoutProps = {
  pageTitle: string
  chartType: 'line' | 'bar' | 'pie'
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
    <VStack>
      <Heading as='h2' size='2xl'>
        {pageTitle}
      </Heading>
      {children}
      {data ? chart : <DropzoneModal setData={setData} />}
      <Button colorScheme='teal' size='md' onClick={() => setData(undefined)}>
        RESET
      </Button>
    </VStack>
  )
}
