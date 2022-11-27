import type { NextPage } from 'next'
import { Layout } from '../components/layout'
import { useUserApi } from '../hooks/useUserApi'

const Page: NextPage = () => {
	const { isFetched, isLoading, isSuccess, isError, data, refetch } = useUserApi({ id: 1 })

	console.log({ isFetched, isLoading, isSuccess, isError, data })

	return (
		<Layout>
			<button onClick={() => refetch()}>button</button>
		</Layout>
	)
}

export default Page
