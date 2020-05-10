import { getConnection } from 'typeorm'

export interface Analytics {
  categories: {
    [id: string]: { threadCount: number; postCount: number }
  }
}

const Analytics = async (): Promise<Analytics> => {
  const res = await getConnection()
}
