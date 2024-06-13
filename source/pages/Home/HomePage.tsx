/* eslint-disable @next/next/no-img-element */
'use client'

import { BtnLink } from '~/Components/atoms/btn'

import { MdPerson } from 'react-icons/md'
import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom'
import HeaderTitle from '~/Components/atoms/header-title'
import NavbarHome from '~/Components/molecules/nav-bar-home'
import Footer from '~/Layouts/Footer'

export const ButtonsNavBar = () => {
    return (
        <div className="flex items-center justify-center px-20 gap-36">
            <BtnLink
                message="Entre Tutor"
                className="z-50 w-32 text-lg text-black border-gray-950 hover:bg-secondary-500 rounded-3xl border-1 mobile:border-1"
                href="https://pawkeepr.app.br/tutor/sign-in"
            >
                <MdPerson className="w-6 h-6" />
            </BtnLink>
            {/* <BtnLink
                message="Entre Vet"
                className="z-50 text-lg rounded-3xl border-3 border-gray-950 hover:bg-gray-600 mobile:border-3"
                href="https://pawkeepr.app.br/"
            >
                <FaStethoscope className="w-6 h-4" />
            </BtnLink> */}
        </div>
    )
}

const HomePage = () => {
    return (
        <>
            <NavbarHome />
            <section className="relative pt-16 bg-primary-500" id="hero">
                <HeaderTitle title="Principal" />
                <div className="absolute inset-0 z-10 bg-overlay-pattern" />

                <div className="relative z-20 grid grid-cols-1 px-4 m-0 web:grid-cols-2">
                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="\home\ilustracao5.png"
                                className="w-8/12 mt-3 ml-24"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                    <Zoom>
                        <div className="col-span-1 pt-10 pr-4 mt-5 pl-9">
                            <h1 className="pt-10 font-sans text-4xl font-bold text-left text-white lg:text-4xl">
                                Descubra a simplicidade
                                <br />e o poder de seus atendimentos!
                            </h1>
                            <p className="pt-2 pb-4 font-sans text-lg font-semibold text-left text-white lg:text-2xl">
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
                <div className="relative z-20 flex flex-col items-center justify-end h-full">
                    <h1 className="pb-2 font-sans text-5xl font-bold text-white lg:text-5xl">
                        Qual é o nosso
                    </h1>
                </div>
                <div className="fixed inset-x-0 bottom-0 z-20">
                    <Footer />
                </div>
            </section>

            <section className="flex flex-col items-center justify-center bg-gray-200 pb-14">
                <h1 className="pb-12 font-sans text-5xl font-bold text-stone-800 lg:text-5xl">
                    Diferencial?
                </h1>
                <div className="flex space-x-10">
                    <Zoom>
                        <div className="flex flex-col px-4 py-12 bg-white shadow-2xl rounded-3xl w-80 h-80">
                            <div className="flex pb-2 mb-2 ">
                                <img
                                    src="\home\icon1.png"
                                    alt="Ícone"
                                    className="w-20 h-20"
                                />
                                <h2 className="pl-2 font-sans text-3xl font-bold text-black">
                                    Prontuário
                                    <br />
                                    Atualizado
                                </h2>
                            </div>

                            <p className="font-sans text-lg font-semibold text-left">
                                Registros médicos atualizados automaticamente em
                                todas as consultas. Acesse as informações de
                                qualquer lugar.
                            </p>
                        </div>

                        <div className="flex flex-col px-3 pb-12 bg-white shadow-2xl pt-11 rounded-3xl w-80 h-80">
                            <div className="flex mb-2">
                                <img
                                    src="\home\icon2.png"
                                    alt="Ícone"
                                    className="w-24 h-24"
                                />
                                <h2 className="pt-2 pl-2 font-sans text-3xl font-bold text-black">
                                    Segurança e<br />
                                    Privacidade
                                </h2>
                            </div>

                            <p className="font-sans text-lg font-semibold text-left">
                                Investimos em segurança de dados para garantir a
                                confidencialidade das informações médicas dos
                                animais.
                            </p>
                        </div>

                        <div className="flex flex-col px-4 py-12 bg-white shadow-2xl rounded-3xl w-80 h-80">
                            <div className="flex pb-2 mb-2 ">
                                <img
                                    src="\home\icon3.png"
                                    alt="Ícone"
                                    className="w-20 h-20"
                                />
                                <h2 className="pl-3 font-sans text-3xl font-bold text-black">
                                    Preços
                                    <br />
                                    Acessíveis
                                </h2>
                            </div>

                            <p className="font-sans text-lg font-semibold text-left">
                                Marca que reflete os valores dos veterinários, com
                                um modelo de preço acessível, fortalecendo a conexão
                                com os clientes.
                            </p>
                        </div>

                        <div className="flex flex-col px-4 py-12 bg-white shadow-2xl rounded-3xl w-80 h-80">
                            <div className="flex pb-2 mb-2 ">
                                <img
                                    src="\home\icon4.png"
                                    alt="Ícone"
                                    className="w-20 h-20"
                                />
                                <h2 className="pl-2 font-sans text-3xl font-bold text-black">
                                    Aplicação
                                    <br />
                                    Responsiva
                                </h2>
                            </div>

                            <p className="font-sans text-lg font-semibold text-left">
                                Acesse à PawKeepr em qualquer dispositivo móvel e
                                conte com suporte técnico contínuo e treinamento
                                para maximizar o uso da plataforma.
                            </p>
                        </div>
                    </Zoom>
                </div>
            </section>

            <section className="pb-0 bg-white">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-2 p-4 mobile:grid-cols-1 place-items-center tablet:mt-0">
                    <Zoom>
                        <div className="flex flex-col col-span-1 pl-4 text-left">
                            <h1 className="pb-3 font-sans text-4xl font-bold text-left text-secondary-500 lg:text-4xl">
                                Conheça a Pawkeepr
                            </h1>
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
                        <div className="flex items-center justify-center col-span-1">
                            <img
                                src="\home\ilustracao2.png"
                                className="w-7/12"
                                alt="..."
                            />
                        </div>
                    </Slide>
                </div>
            </section>

            {/*<section className="section bg-primary-500">
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
            </section>*/}

            <section className="pb-8 bg-white">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-1 px-4 pt-10 place-items-center md:mt-0 md:grid-cols-2">
                    <div className="flex flex-col col-span-1 text-left">
                        <p className="pl-1 font-sans text-2xl font-bold text-left text-secondary-500 lg:text-2xl">
                            Plataforma inovadora
                        </p>
                        <h1 className="pt-0 pb-4 font-sans text-5xl font-bold text-left text-primary-500 lg:text-5xl">
                            Por que usar Pawkeepr?
                        </h1>
                        <ul className="pl-3 space-y-4 list-none">
                            <li className="flex items-center justify-start font-sans text-2xl font-semibold text-black">
                                <img
                                    src="\home\icon-checked.png"
                                    alt="Icon"
                                    className="w-5 h-5 mr-2"
                                />
                                <span>Prontuário atualizado</span>
                            </li>
                            <li className="flex items-center justify-start font-sans text-2xl font-semibold text-black">
                                <img
                                    src="\home\icon-checked.png"
                                    alt="Icon"
                                    className="w-5 h-5 mr-2"
                                />
                                <span>Atendimento eficiente</span>
                            </li>
                            <li className="flex items-center justify-start font-sans text-2xl font-semibold text-black">
                                <img
                                    src="\home\icon-checked.png"
                                    alt="Icon"
                                    className="w-5 h-5 mr-2"
                                />
                                <span>Marketing e networking</span>
                            </li>
                            <li className="flex items-center justify-start font-sans text-2xl font-semibold text-black">
                                <img
                                    src="\home\icon-checked.png"
                                    alt="Icon"
                                    className="w-5 h-5 mr-2"
                                />
                                <span>Administração do Negócio</span>
                            </li>
                            <li className="flex items-center justify-start font-sans text-2xl font-semibold text-black">
                                <img
                                    src="\home\icon-checked.png"
                                    alt="Icon"
                                    className="w-5 h-5 mr-2"
                                />
                                <span>Compatibilidade móvel</span>
                            </li>
                            <li className="flex items-center justify-start font-sans text-2xl font-semibold text-black">
                                <img
                                    src="\home\icon-checked.png"
                                    alt="Icon"
                                    className="w-5 h-5 mr-2"
                                />
                                <span>Comunicação facilitada</span>
                            </li>
                            <li className="flex items-center justify-start font-sans text-2xl font-semibold text-black">
                                <img
                                    src="\home\icon-checked.png"
                                    alt="Icon"
                                    className="w-5 h-5 mr-2"
                                />
                                <span>Segurança de dados</span>
                            </li>
                            <li className="flex items-center justify-start font-sans text-2xl font-semibold text-black">
                                <img
                                    src="\home\icon-checked.png"
                                    alt="Icon"
                                    className="w-5 h-5 mr-2"
                                />
                                <span>Interface intuitiva</span>
                            </li>
                            <li className="flex items-center justify-start font-sans text-2xl font-semibold text-black">
                                <img
                                    src="\home\icon-checked.png"
                                    alt="Icon"
                                    className="w-5 h-5 mr-2"
                                />
                                <span>Identidade única</span>
                            </li>
                            <li className="flex items-center justify-start font-sans text-2xl font-semibold text-black">
                                <img
                                    src="\home\icon-checked.png"
                                    alt="Icon"
                                    className="w-5 h-5 mr-2"
                                />
                                <span>Preço acessível</span>
                            </li>
                        </ul>
                    </div>
                    <Slide left>
                        <div className="flex items-center justify-center col-span-1">
                            <img
                                src="\home\ilustracao4.png"
                                className="w-10/12"
                                alt="..."
                            />
                        </div>
                    </Slide>
                </div>
            </section>

            {/*<section className="section bg-primary-500">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-2 gap-4 p-4 mt-5 phone:grid-cols-1">
                    <Slide left>
                        <div className="col-span-1">
                            <PricingCard
                                title="Grátis"
                                price="0,00"
                                subtitle="Faça 30 consultas grátis"
                                details="Tenha acesso a todos os recursos sem limitação"
                            />
                        </div>
                        <div className="col-span-1">
                            <PricingCard
                                title="Premium"
                                price="0,99"
                                subtitle="Pague menos de 1 dólar por consulta realizada."
                                details="Tenha acesso a todos os recursos sem limitação"
                            />
                        </div>
                    </Slide>
                </div>
            </section>*/}

            <section className="pt-4 pb-12 bg-white ">
                <h1 className="flex justify-center pb-8 font-sans text-5xl font-bold text-primary-500 lg:text-5xl">
                    Verifique nosso Roadmap
                </h1>
                <div className="grid grid-cols-1 py-4 pl-16 pr-12 web:grid-cols-2">
                    <Zoom>
                        <div className="col-span-1 space-y-5 text-center mt-lg-5">
                            <div className="flex justify-start w-4/6">
                                <div className="m-2 shadow-md bg-secondary rounded-xl">
                                    <p className="p-3 font-sans text-lg font-semibold text-white lg:text-xl">
                                        {`Inteligência Artificial Abril de 2025`}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start w-4/6">
                                <div className="m-2 shadow-md bg-secondary rounded-xl">
                                    <p className="p-3 font-sans text-lg font-semibold text-white lg:text-xl">
                                        {`VetMovel e Telemedicina Dezembro de 2024`}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start w-5/6">
                                <div className="m-2 shadow-md bg-secondary rounded-xl">
                                    <p className="p-3 font-sans text-lg font-semibold text-white lg:text-xl">
                                        {`Secretaria Inteligente Agosto de 2024`}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start w-6/6">
                                <div className="m-2 shadow-md bg-secondary rounded-xl">
                                    <p className="p-3 font-sans text-lg font-semibold text-white lg:text-xl">
                                        {`Consultas veterinárias Abril de 2024`}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    <Slide left>
                        <div className="flex justify-center col-span-1">
                            <img
                                src="/home/ilustracao1.png"
                                className="w-10/12"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                </div>
            </section>
        </>
    )
}

export default HomePage
