import React from 'react'

const Sobre = () => {
    return (
        <div className='text-left mx-auto'>
            <h1 className='font-bold my-5 text-center'>E o que é o MyDailyStatus?</h1>
            <p className="my-6">
                É um projeto de estudo feito durante o curso <a className='underline' href="https://lp.devpleno.com/fsm-inscricao/">FullStack Master</a>    distribuido pela <a className='underline' href="https://devpleno.com/">DevPleno</a>.
                Ele tem como objetivo identificar de forma anônima, quem possui sintomas de gripes e covid-19, que estão próximos a você, em formato de status diário. A cada dia que se logar no site será pedido seu sintoma e sua localização atrávés do navegador, assim você e as pessoas que tambem se cadastrarem saberão quais tipos de sintomas possuem próximo a elas podendo tomar maior cuidado e precaução.
            </p>

            <h2 className='font-bold my-5 text-center'>O Corona Vírus, o que é?</h2>
            <p className="my-15">
                Coronavírus é uma família de vírus que causam infecções respiratórias. O novo agente do coronavírus foi descoberto em 31/12/19 após casos registrados na China. Provoca a doença chamada de coronavírus (COVID-19).
                Os primeiros coronavírus humanos foram isolados pela primeira vez em 1937. No entanto, foi em 1965 que o vírus foi descrito como coronavírus, em decorrência do perfil na microscopia, parecendo uma coroa.
                A maioria das pessoas se infecta com os coronavírus comuns ao longo da vida, sendo as crianças pequenas mais propensas a se infectarem com o tipo mais comum do vírus. Os coronavírus mais comuns que infectam humanos são o alpha coronavírus 229E e NL63 e beta coronavírus OC43, HKU1.
            </p>

            <h2 className='font-bold my-5 text-center'>Quais são os sintomas</h2>
            <p className='my-15'>
            Os sintomas da COVID-19 podem variar de um simples resfriado até uma pneumonia severa. Sendo os sintomas mais comuns: Tosse, Febre, Coriza, Dor de garganta e Dificuldade para respirar.
            </p>

            <h2 className='font-bold my-5 text-center'>Como se Proteger</h2>
            <p className='my-5'>
                As recomendações de prevenção à COVID-19 são as seguintes:

                Lave com frequência as mãos até a altura dos punhos, com água e sabão, ou então higienize com álcool em gel 70%.
                Ao tossir ou espirrar, cubra nariz e boca com lenço ou com o braço, e não com as mãos.
                Evite tocar olhos, nariz e boca com as mãos não lavadas.
                Ao tocar, lave sempre as mãos como já indicado.
                Mantenha uma distância mínima de cerca de 2 metros de qualquer pessoa tossindo ou espirrando.
                Evite abraços, beijos e apertos de mãos. Adote um comportamento amigável sem contato físico, mas sempre com um sorriso no rosto.
                Higienize com frequência o celular e os brinquedos das crianças.
                Não compartilhe objetos de uso pessoal, como talheres, toalhas, pratos e copos.
                Mantenha os ambientes limpos e bem ventilados.
                Evite circulação desnecessária nas ruas, estádios, teatros, shoppings, shows, cinemas e igrejas. Se puder, fique em casa.
                Se estiver doente, evite contato físico com outras pessoas, principalmente idosos e doentes crônicos, e fique em casa até melhorar.
                Durma bem e tenha uma alimentação saudável.
                Utilize máscaras caseiras ou artesanais feitas de tecido em situações de saída de sua residência. 
            </p>
        </div>
    )
}

export default Sobre

