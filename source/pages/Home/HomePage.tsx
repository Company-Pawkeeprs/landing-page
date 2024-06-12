/* eslint-disable @next/next/no-img-element */
'use client'

import { BtnLink } from '~/Components/atoms/btn'

import { FaStethoscope } from 'react-icons/fa'
import { MdPerson } from 'react-icons/md'
import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom'
import HeaderTitle from '~/Components/atoms/header-title'
import NavbarHome from '~/Components/molecules/nav-bar-home'
import Footer from '~/Layouts/Footer'
import { ProblemsFacedByBeginners } from './problems-faced-by-beginners'
import { ProblemsFacedByVeterinarians } from './problems-faced-by-veterinarians'
import { Solutions } from './solutions'

export const ButtonsNavBar = () => {
    return (
        <div className="flex items-center justify-center px-20 gap-36">
            <BtnLink
                message="Entre Tutor"
                className="text-black  border-gray-950 hover:bg-yellow-400 rounded-3xl border-3 w-32 mobile:border-3 text-lg z-50"
                href="https://pawkeepr.app.br/tutor/sign-in"
            >
                <MdPerson className="w-6 h-6" />
            </BtnLink>
            <BtnLink
                message="Entre Vet"
                className="rounded-3xl border-3 border-gray-950 hover:bg-gray-600 mobile:border-3 text-lg z-50"
                href="https://pawkeepr.app.br/"
            >
                <FaStethoscope className="w-6 h-4" />
            </BtnLink>
        </div>
    )
}

const HomePage = () => {
    return (
        <>
            <NavbarHome />
            <section className="bg-primary-500 pt-16 relative" id="hero">
                <HeaderTitle title="HOME" />
                <div className="bg-overlay-pattern absolute inset-0 z-10"/>

                <div className="grid grid-cols-1 px-4 m-0 web:grid-cols-2 relative z-20">
                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="\home\ilustracao5.png"
                                className="w-8/12 ml-24 mt-3"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                    <Zoom>
                        <div className="col-span-1 pl-9 pr-4 pt-10 mt-5">
                            <h1 className=" pt-10 font-sans text-4xl font-bold text-white lg:text-4xl text-left">
                                    Descubra a simplicidade<br/>
                                    e o poder de seus atendimentos!
                            </h1>
                            <p className="pb-4 pt-2 font-sans text-lg font-semibold text-white lg:text-2xl text-left">
                                {`
                                    Imagine realizar uma consulta completa de forma simples e intuitiva, 
                                    sem que você precise perder tempo aprendendo sobre o aplicativo? 
                                    Com nosso aplicativo inovador, você terá acesso a recursos poderosos 
                                    na palma da sua mão.
                                `}
                            </p>
                            <ButtonsNavBar />
                        </div>
                    </Zoom>
                </div>
                <div className="flex flex-col items-center justify-end h-full relative z-20">
                    <h1 className = " pb-2 font-sans text-5xl font-bold text-white lg:text-5xl">Qual é o nosso</h1>
                </div>
                <div className="fixed inset-x-0 bottom-0 z-20">
                    <Footer />
                </div>
            </section>

            <section className="bg-gray-200 pb-14 flex flex-col items-center justify-center">
                
                <h1 className = "font-sans pb-12 text-5xl font-bold text-stone-800 lg:text-5xl">Diferencial?</h1>
                <div className="flex space-x-10">
                    <Zoom>
                        <div className="py-12 px-4 flex flex-col rounded-3xl w-80 h-80 bg-white shadow-2xl">
                            <div className=" pb-2 flex mb-2">
                                <img src="\home\icon1.png" alt="Ícone" className="w-20 h-20" />
                                <h2 className="pl-2 text-3xl font-sans font-bold text-black">Prontuário<br/>Atualizado</h2>
                            </div>

                            <p className="text-lg text-left font-sans font-semibold">
                            Registros médicos atualizados automaticamente em todas as consultas. Acesse as informações de qualquer lugar.
                            </p>
                        </div>

                        <div className="pt-11 pb-12 px-3 flex flex-col rounded-3xl w-80 h-80 bg-white shadow-2xl">
                            <div className="flex mb-2">
                                <img src="\home\icon2.png" alt="Ícone" className="w-24 h-24" />
                                <h2 className="pl-2 pt-2 text-3xl font-sans font-bold text-black">Segurança e<br/>Privacidade</h2>
                            </div>

                            <p className="text-lg text-left font-sans font-semibold">
                            Investimos em segurança de dados para garantir a confidencialidade das informações médicas dos animais.
                            </p>
                        </div>

                        <div className="py-12 px-4 flex flex-col rounded-3xl w-80 h-80 bg-white shadow-2xl">
                            <div className=" pb-2 flex mb-2">
                                <img src="\home\icon3.png" alt="Ícone" className="w-20 h-20" />
                                <h2 className="pl-3 text-3xl font-sans font-bold text-black">Preços<br/>Acessíveis</h2>
                            </div>

                            <p className="text-lg text-left font-sans font-semibold">
                            Marca que reflete os valores dos veterinários, com um modelo de preço acessível, fortalecendo a conexão com os clientes.
                            </p>
                        </div>
                        
                        <div className="py-12 px-4 flex flex-col rounded-3xl w-80 h-80 bg-white shadow-2xl">
                            <div className=" pb-2 flex mb-2">
                                <img src="\home\icon4.png" alt="Ícone" className="w-20 h-20" />
                                <h2 className="pl-2 text-3xl font-sans font-bold text-black">Aplicação<br/>Responsiva</h2>
                            </div>

                            <p className="text-lg text-left font-sans font-semibold">
                            Acesse à PawKeepr em qualquer dispositivo móvel e conte com suporte técnico contínuo e treinamento para maximizar o uso da plataforma.
                            </p>
                        </div>
                    </Zoom>
                </div>
            </section>

            <section className="pb-0 bg-white">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-1 p-4 place-items-center md:mt-0 md:grid-cols-2">
                    <Zoom>
                        <div className="pl-4 flex flex-col col-span-1 text-left">
                            <h1 className="pb-3 font-sans text-5xl text-secondary-500 text-left font-bold lg:text-5xl">Conheça a Pawkeepr</h1>
                            <p className="font-sans text-lg font-semibold lg:text-2xl">
                                {`
                                  Nossa startup revoluciona o mercado, oferecendo uma plataforma 
                                  exclusiva para médicos veterinários domiciliares e iniciantes. 
                                  De forma simples e intuitiva para esses profissionais, proporcionamos 
                                  cuidados de qualidade aos animais de estimação no conforto de seus lares, 
                                  preenchendo uma lacuna no setor tradicional das clínicas.
                                `}
                            </p>
                        </div>
                    </Zoom>
                    <Slide left>
                        <div className="flex justify-center items-center col-span-1">
                            <img
                                src="\home\ilustracao2.png"
                                className="w-7/12"
                                alt="..."
                            />
                        </div>
                    </Slide>
                </div>
            </section>

            <section className="section bg-primary-500">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-1 p-4 mt-5 web:grid-cols-2">
                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="/landing-page-01.jpg"
                                className="w-100"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                    <ProblemsFacedByVeterinarians />
                </div>
            </section>

            <section className="pb-0 bg-white section hero-section">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-1 p-4 place-items-center md:mt-0 md:grid-cols-2">
                    <div className="flex items-center col-span-1 text-center">
                        <ProblemsFacedByBeginners />
                    </div>
                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="/icon-pet/cat_secondary.png"
                                className="w-100 h-[90%] !border-none rounded-3xl"
                                alt="..."
                            />
                        </div>
                    </Slide>
                </div>
            </section>

            <section className="section bg-primary-500">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-1 p-4 mt-5 web:grid-cols-2">
                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="/icon-pet/dog_primary.png"
                                className="w-100 h-[90%] !border-none rounded-3xl"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                    <Zoom>
                        <div className="col-span-1 pt-5 text-center mt-lg-5">
                            <p className="p-4 font-sans text-lg font-semibold text-white lg:text-2xl">
                                {`
                                   PawKeepr: a solução personalizada para veterinários oferecendo
                                   cuidados de qualidade em residências de animais de estimação.
                             
                                `}
                            </p>
                            <p className="p-4 font-sans text-lg font-semibold text-white lg:text-2xl">{`
                                    Nossa plataforma adapta-se às necessidades específicas desses profissionais,
                                    proporcionando usabilidade excepcional, identidade exclusiva e preços
                                    acessíveis, focando totalmente nos melhores cuidados para os bichinhos, em 
                                    qualquer localidade.
                                `}</p>
                            <p className="p-4 font-sans text-lg font-semibold text-white lg:text-2xl">{`      
                                   Compatível com tablets, celulares e computadores, simplifica o gerenciamento 
                                   de informações e a comunicação com os clientes, permitindo que os veterinários 
                                   acessem rapidamente as informações médicas dos pets e sincronizem automaticamente 
                                   os dados, colaborar eficientemente com os tutores.
                                   `}</p>
                        </div>
                    </Zoom>
                </div>
            </section>

            <section className="pb-0 bg-white section hero-section">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-1 p-4 place-items-center md:mt-0 md:grid-cols-2">
                    <div className="col-span-1 pt-5 text-center mt-lg-5">
                        <Solutions />
                        <Zoom>
                            <p className="p-4 font-sans text-lg font-semibold lg:text-2xl">
                                {`
                                Em resumo, a PawKeepr promove cuidados de qualidade e acessíveis 
                                por meio de uma abordagem centrada no cliente para o compartilhamento 
                                de informações médicas.
                                `}
                            </p>
                        </Zoom>
                    </div>
                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="/icon-pet/jabuti-secondary.png"
                                className="w-100 "
                                alt="..."
                            />
                        </div>
                    </Slide>
                </div>
            </section>

            <section className="section bg-primary-500">
                <h2 className="p-1 font-sans text-lg font-semibold text-center text-white lg:text-2xl">
                    Por que usar?
                </h2>
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-1 web:grid-cols-2">
                    <Zoom right>
                        <div className="col-span-1 pt-5 mt-5 text-center mt-lg-5">
                            <div className="w-3/4 m-5 shadow-md bg-secondary rounded-xl">
                                <p className="p-4 font-sans text-lg font-semibold text-white lg:text-2xl">
                                    {`
                                 1. Com nosso app, você terá acesso
                                 instantâneo às informações médicas
                                 dos seus pacientes, eliminando a
                                 espera por transferências de arquivos
                                 ou consultas adicionais, garantindo
                                 um atendimento mais eficiente e
                                 preciso.
                                
                                    `}
                                </p>
                            </div>
                        </div>
                    </Zoom>
                    <Slide left>
                        <div className="hidden col-span-1 lg:block">
                            <img
                                src="/bg-three.jpg"
                                className="w-[75%]"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                </div>
                <div className="grid grid-cols-1 p-2 web:grid-cols-2">
                    <Slide right>
                        <div className="col-span-1">
                            <img
                                src="/Sem título.jpg"
                                className="w-100"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                    <Zoom left>
                        <div className="col-span-1 pt-5 text-center mt-lg-5">
                            <div className="w-3/4 m-2 shadow-md bg-secondary rounded-xl">
                                <p className="p-4 font-sans text-lg font-semibold text-white lg:text-2xl">
                                    {`
                                 2. Nossa plataforma sincroniza 
                                automaticamente os dados das consultas, 
                                garantindo registros sempre atualizados 
                                e disponíveis, economizando tempo e 
                                aumentando a eficiência do atendimento.
                                
                                    `}
                                </p>
                            </div>
                        </div>
                    </Zoom>
                </div>
                <div className="grid grid-cols-1 p-4 web:grid-cols-2">
                    <Zoom right>
                        <div className="col-span-1 pt-5 text-center mt-lg-5">
                            <div className="w-3/4 m-2 shadow-md bg-secondary rounded-xl">
                                <p className="p-4 font-sans text-lg font-semibold text-white lg:text-2xl">
                                    {`
                                 3. Facilitamos a colaboração entre veterinário e
                                 clientes, permitindo que ambos
                                 compartilhem insights e informações
                                 vitais para o cuidado dos pets.
                                
                                    `}
                                </p>
                            </div>
                        </div>
                    </Zoom>
                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="/landing-page-01.jpg"
                                className="w-100"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                </div>
                <div className="grid grid-cols-1 p-4 web:grid-cols-2">
                    <Slide right>
                        <div className="col-span-1">
                            <img
                                src="/icon-pet/teiu-primary.png"
                                className="w-[60%]"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                    <Zoom left>
                        <div className="col-span-1 pt-5 text-center mt-lg-5">
                            <div className="w-3/4 m-2 shadow-md bg-secondary rounded-xl">
                                <p className="p-4 font-sans text-lg font-semibold text-white lg:text-2xl">
                                    {`
                                 4. Investimos significativamente 
                                 em protocolos de segurança de 
                                 dados para garantir a privacidade 
                                 das informações médicas dos pets, 
                                 protegendo seus registros contra 
                                 acessos não autorizados.
                                
                                    `}
                                </p>
                            </div>
                        </div>
                    </Zoom>
                </div>
                <div className="grid grid-cols-1 p-4 web:grid-cols-2">
                    <Zoom right>
                        <div className="col-span-1 pt-5 text-center mt-lg-5">
                            <div className="w-3/4 m-2 shadow-md bg-secondary rounded-xl">
                                <p className="p-4 font-sans text-lg font-semibold text-white lg:text-2xl">
                                    {`
                                 5 .Com uma interface intuitiva e 
                                amigável, o PawKeepr oferece uma 
                                experiência de usuário fluida, 
                                simplificando o gerenciamento de  
                                informações médicas de pets por 
                                apenas $0,99 por consulta.
                                
                                    `}
                                </p>
                            </div>
                        </div>
                    </Zoom>
                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="/Sem título2.jpg"
                                className="w-100"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                </div>
            </section>

            <section className="pb-0 bg-white section hero-section">
                <div className="grid grid-cols-1 p-4 web:grid-cols-2">
                    <Zoom>
                        <div className="col-span-1 pt-5 text-center mt-lg-5">
                            <p className="p-2 font-sans text-lg font-semibold lg:text-2xl">
                                {`Roadmap`}
                            </p>
                            <div className="flex justify-start w-3/6">
                                <div className="m-2 shadow-md bg-secondary rounded-xl">
                                    <p className="p-3 font-sans text-lg font-semibold text-white lg:text-xl">
                                        {`Inteligência Artificial Abril de 2025`}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-end w-4/6">
                                <div className="m-2 shadow-md bg-secondary rounded-xl">
                                    <p className="p-3 font-sans text-lg font-semibold text-white lg:text-xl">
                                        {`VetMovel e Telemedicina Dezembro de 2024`}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-end w-5/6">
                                <div className="m-2 shadow-md bg-secondary rounded-xl">
                                    <p className="p-3 font-sans text-lg font-semibold text-white lg:text-xl">
                                        {`Secretaria Inteligente Agosto de 2024`}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-end w-6/6">
                                <div className="m-2 shadow-md bg-secondary rounded-xl">
                                    <p className="p-3 font-sans text-lg font-semibold text-white lg:text-xl">
                                        {`Consultas veterinárias Abril de 2024`}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="/Sem título2.jpg"
                                className="w-100"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                </div>
            </section>

            <section className="section bg-primary-500">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-1 p-4 mt-5 web:grid-cols-2">
                    <Slide left>
                        <div className="col-span-1 rounded-md">
                            <div className="flex justify-center">
                                <div className="bg-white flex flex-col gap-4 items-center justify-center rounded-lg p-4 w-1/2 h-[400px]">
                                    <h3 className="text-gray-500 lg:text-5xl">
                                        Grátis
                                    </h3>
                                    <p className="lg:text-4xl text-primary">
                                        $ 0,00
                                    </p>
                                    <p className="lg:text-xl">
                                        Faça 30 consultas grátis
                                    </p>
                                    <p className="lg:text-md">
                                        Tenha acesso a todos os recursos sem
                                        limitação
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex justify-center">
                                <div className="bg-white flex flex-col gap-4 items-center justify-center rounded-lg p-4 w-1/2 h-[400px]">
                                    <h3 className="text-gray-500 lg:text-5xl">
                                        Premium
                                    </h3>
                                    <p className="lg:text-4xl text-primary">
                                        $ 0,99
                                    </p>
                                    <p className="text-gray-700 lg:text-xl">
                                        Pague menos de 1 dólar por consulta
                                        realizada.
                                    </p>
                                    <p className="text-gray-700 lg:text-md">
                                        Tenha acesso a todos os recursos sem
                                        limitação
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
            </section>
        </>
    )
}

export default HomePage
