/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react'
import axios from 'axios'
import Router from 'next/router'
import { setCookies } from 'cookies-next'
import { base_url } from '../utils/utils'

const callback = ({query}) => {
    const [access_token, setaccess_token] = useState(null)
    useEffect(() => {
        if(query.code) {
            axios.get(`http://${base_url}/Vehicle/callback?code=${query.code}`)
            .then(({data}) => { 
             setCookies("Token", data.accessToken);
             setaccess_token(data.accessToken);
            })
            .catch(err => {
                console.log('Error:', err);
            })
        }
    },[])

    // redirect to vehicles page
    useEffect(() => {
        if(access_token) {
            Router.push('/vehicles');
        }
    },[access_token])
    return (
        <div>Loading...</div>
    )
}
callback.getInitialProps = async (context) => {
    return { query: context.query }
}

export default callback
