import useSWR from 'swr'

const fetcher = url => fetch(url).then(res => res.json())

export function getData(){
    const {data, error} = useSWR('/api/hello', fetcher, {refreshInterval: 1000})

    return{
        isLoading: !data && !error,
        names: data,
        isError: error
    }
}

export default {getData}