import React, { useState } from 'react';
import auth0 from '../lib/auth0';
import axios from 'axios';
import { useAuth } from '../lib/AuthContext'
import router from 'next/router';

const CreateStatus = () => {
    const auth = useAuth()
    const [dados, setDados] = useState({
        status: 'bem',
        coords:{
            lat: null,
            long: null
        }
    })
    if (auth.isAuthReady && !auth.isAuth) {
        router.push('/')
    }
    const getMyLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                setDados(old => {
                    return {
                        ...old,
                        coords: {
                         lat: position.coords.latitude,   
                         long: position.coords.longitude   
                        }
                    }                        
                })
            })
        }
    }

    const onStatusChannge = evt => {
        const value = evt.target.value
        setDados(old => {
            return {
                ...old,
                status: value
            }
        })
    }

    const save = async () => {
        await axios.post('api/save-status', dados)
        await router.push('/app')
    }
    return (
        <div>
            <h1>Create Status</h1>
            <label className='block'>
            <input type='radio' name='status' value='Nenhum sintoma' onClick={onStatusChannge} />{' '}Estou bem e sem sintomas.</label>
            <label className='block'><input type='radio' name='status' value='Gripe' onClick={onStatusChannge} />{' '}Estou com sintomas de gripe</label>
            <label className='block'><input type='radio' name='status' value='Febre' onClick={onStatusChannge} />{' '}Estou com Febre</label>
            <label className='block'><input type='radio' name='status' value='Gripe e Febre' onClick={onStatusChannge} />{' '}Estou com Febre e sintomas de gripe</label>
            <label className='block'><input type='radio' name='status' value='Covid' onClick={onStatusChannge} />{' '}Estou com sintomas de COVID</label>
            Posição atual: {dados.coords.lat ? 'Encontrada' : 'Não encontrada, clique no botão abaixo'}<br/>
            {/* Sua Posição atual: {JSON.stringify(dados)}*/}
            <button className='rounded bg-green-500 font-bold shadow-xl hover:shadow block w-1/4 text-center mx-left text-white' onClick={getMyLocation}>Pegar minha localização</button>
            <button type='submit' onClick={save} className='rounded bg-pink-500 font-bold shadow-xl hover:shadow block w-1/4 text-center mx-left text-white'>Salvar meu status</button>
        </div>
    )
}

export default CreateStatus

export async function getServerSideProps ({req, res}) {
    const session = await auth0.getSession(req)
    if (session) {
        return {
            props: {
                isAuth: true,
                user: session.user,
            }
        }
    }
    return {
        props: {
            isAuth: false,
            user: {}
        }
    }
}