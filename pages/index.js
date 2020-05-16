import React from 'react';

const Index = () => {
    return (
        <div  className='text-center mx-auto'>
           <h1 className="font-bold my-5">É novo por aqui?</h1>
            <p className='my-16'>Descubra quais casos com sintomas de gripe e covid-19 estão próximos a você!</p>
            <p className='my-16'>Basta logar e inserir seu status diáriamente. Divulgue o site para que mais pessoas possam informar seus sintomas.</p>
            <p className='my-16'>O seu status será visualizado de forma anônima para as outras pessoas.</p>
            <a href='/api/login' className='py-4 px-2 rounded bg-pink-800 font-bold shadow-xl hover:shadow block w-1/4 text-center mx-auto text-white'>
                Comece por aqui
            </a>
        </div>
    )
}

export default Index;