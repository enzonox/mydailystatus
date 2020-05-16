import React, { useEffect } from 'react';
import auth0 from '../lib/auth0';
import router from 'next/router';
import { checkExists, findChecksNearbyCheckin } from '../model/markers';

const App = props => {
    useEffect(() => {
        if(!props.isAuth) {
            router.push('/')
        }else if (props.forceCreate) {
            router.push('/create-status')
        }
    })
    if(!props.isAuth || props.forceCreate) {
        return null
    }
    return (
        <div>
            <h1 className="font-bold my-4 mx-auto text-center">Status próximos a você</h1>
            <table className='mx-auto my-10'>
                {props.checkins.map(checkin => {
                    return (
                        <tr key={checkin.id}>
                            <td className='font-bold px-4 py-2'>{checkin.id === props.user.sub ? 'Seu Status: -' : 'Status: '} </td>
                            <td className='px-1 py-1'> {checkin.status}</td>
                            {/*<td> | Latitude: {checkin.coords.lat} Longitude {checkin.coords.long}</td> */}
                            <td className='px-1 py-1'>
                               |<a 
                                   className='px-1 py-1 p-1 font-semibold hover:underline hover:text-green-800'
                                    target="_blank" 
                                    href={`https://www.google.com.br/maps/@${checkin.coords.lat},${checkin.coords.long},15z`}> Ver localização 
                                </a>|
                            </td>
                            <td className='px-1 py-1'>{checkin.distance > 0 ? checkin.distance + ' Km de distancia de você.' : ' seu ponto atual'}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default App;

export async function getServerSideProps ({req, res}) {
    let user = {}
    let isAuth = false
    let forceCreate = false
    let checkins = []

    const session = await auth0.getSession(req)
    if (session) {
        isAuth = true
        user = session.user

        const todaysData = await checkExists(session.user.sub)

        if (!todaysData) {
            forceCreate = true
        } else {
            checkins = await findChecksNearbyCheckin(todaysData)
        }
    }

    return {
        props: {
            isAuth,
            user, 
            forceCreate,
            checkins
        }
    }
}