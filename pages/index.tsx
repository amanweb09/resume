// import { Inter } from '@next/font/google'
import { NextPage } from 'next'
import { ChevronRightIcon, ArrowUpIcon, SunIcon, ArrowDownTrayIcon, ArrowTopRightOnSquareIcon, BellIcon, ArrowSmallUpIcon } from '@heroicons/react/24/outline'
import { skills } from '../constants/skills'
import SkillCard from '../components/SkillCard'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../constants/projects'
import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head'

const Home: NextPage = () => {

    const [showMessage, setShowMessage] = useState(false)


    useEffect(() => {

        AOS.init();

        document.body.classList.add('dark')
        window.localStorage.setItem('theme', 'dark')

        setShowMessage(true)

        setTimeout(() => {
            setShowMessage(false)
        }, 2500)

    }, [])

    const date = new Date()
    const currentTime = `${date.getHours()}:${date.getMinutes()}${date.getHours() > 24 ? 'pm' : 'am'}`

    function handleTheme(): void {
        const defaultTheme: string = 'dark'
        const currentTheme: string = window.localStorage.getItem('theme') || defaultTheme

        if (currentTheme === 'dark') {
            window.localStorage.setItem('theme', 'light')
            document.body.classList.remove('dark')
            return;
        }

        document.body.classList.add('dark')
        window.localStorage.setItem('theme', 'dark')
    }

    function handleMessages(): void {

    }

    return (
        <>
        <Head>
            <title>Aman Khanna - Web Developer</title>
        </Head>
        <div className='flex overflow-hidden dark:bg-black dark:text-white text-black bg-white w-full min-h-screen transition-all'>

            {/* sidebar */}
            <div
                data-aos="fade-right"
                className="flex items-center border-4 border-solid dark:border-indigo-500 border-indigo-200 shadow-xl w-1/4 hidden sm:block bg-bg3">

                <div className='px-4 text-white fixed mt-6'>

                    <a
                        className='flex px-4 py-2 rounded-md w-max dark:bg-white dark:text-black bg-blue-message text-white shadow-lg mt-4 hover:scale-125 transition-all hover:bg-green-custom'
                        href="#who-am-i">
                        <ArrowTopRightOnSquareIcon className='w-4 h-4' />
                        <span className='font-bold ml-2'>Who am I?</span>
                    </a>

                    <a
                        className='flex px-4 py-2 rounded-md w-max dark:bg-white dark:text-black bg-blue-message text-white shadow-lg mt-4 hover:scale-125 transition-all hover:bg-green-custom'
                        href="#specialization">
                        <ArrowTopRightOnSquareIcon className='w-4 h-4' />
                        <span className='font-bold ml-2'>What Do I Specialize In?</span>
                    </a>

                    <a
                        className='flex px-4 py-2 rounded-md w-max dark:bg-white dark:text-black bg-blue-message text-white shadow-lg mt-4 hover:scale-125 transition-all hover:bg-green-custom'
                        href="#projects">
                        <ArrowTopRightOnSquareIcon className='w-4 h-4' />
                        <span className='font-bold ml-2'>My Projects</span>
                    </a>

                    <a
                        className='flex px-4 py-2 rounded-md w-max  text-white shadow-lg mt-4 hover:scale-125 transition-all bg-gray-300 rounded-md border border-gray-600 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0'
                        href="#">
                        <ArrowSmallUpIcon className='w-4 h-4' />
                        <span className='font-bold ml-2'>Scroll to Top</span>
                    </a>

                </div>

            </div>

            {/* theme */}
            {!showMessage && (
                <div
                    style={{ zIndex: '999' }}
                    onClick={handleTheme}
                    className="fixed flex-center right-2 top-10 border w-14 h-14 rounded-md shadow-xl bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0">
                    <SunIcon
                        className='w-8 h-8 dark:text-white text-black' />
                </div>
            )}


            <div className='flex-1'>
                <section className="w-full relative h-screen flex flex-col justify-between">

                    {/* header */}
                    <div
                        data-aos="flip-down"
                        className='w-full h-1/4 bg-gradient-to-r dark:from-indigo-500 from-indigo-200 dark:via-purple-500 via-purple-200 dark:to-pink-500 to-pink-200 shadow-b-md flex flex-col items-center justify-center'>

                        <div
                            style={{ right: showMessage ? '10px' : '-500px' }}
                            className={`fixed bottom-2 transition-all`}>
                            <div
                                className={`message w-48 h-12 shadow-xl text-white bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 p-2 mb-2 rounded-md bg-white flex border-l-8 border-l-solid border-l-green-200 flex items-center`}>
                                <BellIcon className='w-8 h-8' />
                                <span className='font-bold'>Hey!</span>
                            </div>
                            <div
                                className={`message w-64 h-12 shadow-xl text-white bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 p-2 mb-2 rounded-md bg-white flex border-l-8 border-l-solid border-l-green-200 flex items-center`}>
                                <BellIcon className='w-8 h-8' />
                                <span className='font-bold'>You've Got a Message!</span>
                            </div>

                        </div>

                        <a href="#">
                            <div
                                data-aos="zoom-in"
                                className="absolute flex-center sm:w-40 bg-dark-head text-white top-2 left-2 rounded-md text-xs sm:p-4 p-2 hover:bg-green-custom shadow-lg font-semibold">
                                <ArrowDownTrayIcon className='w-4 h-4 text-white' />
                                Resume
                            </div>
                        </a>

                        <div className="w-20 h-20 rounded-full border-2 dark:border-white overflow-hidden">
                            <img src="/images/photo.jpg" alt="profile" className='' />
                        </div>
                        <h1 className=' dark:text-gray-100 text-black mt-4 flex items-center'>
                            AMAN KHANNA
                            <ChevronRightIcon className='w-4 h-4 dark:text-gray-300 text-gray-500' />
                        </h1>
                    </div>

                    {/* *************** */}


                    {/* text message */}
                    <div
                        className="flex flex-col justify-between items-center w-full message-container bg-bg1 bg-opacity-25">

                        <div className='my-4'>
                            <span className="text-xs font-semibold text-gray-400">New Message</span>
                            <span className="text-xs text-gray-400 block">Today, {currentTime}</span>
                        </div>

                        <div className=''>

                            {/* messsages */}
                            <div className='px-4'>
                                <div
                                    data-aos="fade-right"
                                    className="sm:w-3/4 bg-gradient-to-r from-yellow-200 via-orange-200 to-red-200 shadow-lg dark:from-yellow-600 dark:via-orange-500 dark:to-red-500 p-4 rounded-md max-w-3/4 sm:max-w-1/2">
                                    Hi, <img src="/images/hands.png" className='w-4 inline-block' alt="" /> <br /><br />
                                    I'm Aman Khanna, a <span className="text-lg font-semibold underline">Full-Stack Web Developer</span>
                                    , who is looking for growth oriented opportunities to grow and become a helping hand to the company.
                                </div>
                                <div
                                    data-aos="fade-right"
                                    className="bg-gradient-to-r from-yellow-200 via-orange-200 to-red-200 shadow-lg dark:from-yellow-600 dark:via-orange-500 dark:to-red-500 p-4 rounded-md w-max max-w-3/4 mt-4">
                                    Here is what is do...
                                </div>

                            </div>

                            <div className='flex items-center relative mt-4 mx-4'>
                                <input
                                    placeholder='Type a message'
                                    className='outline-none border border-gray-600 rounded-md flex-1 bg-transparent py-2 mt-2 px-2'
                                    type="text" />
                                <div
                                    className="bg-green-custom flex ml-4 cursor-pointer items-center justify-center w-8 h-8 rounded-full">
                                    <ArrowUpIcon className='w-5 h-5 text-white' />
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-8 dark:bg-dark-head bg-light-head p-4 w-full">
                                <a
                                    // data-aos="fade-up"
                                    href="#">
                                    <div className="w-16 sm:w-24 h-10 sm:h-14 rounded-full dark:bg-white bg-gray-100 flex-center hover:scale-125 transition-all">
                                        <img src="/images/github.png" alt="" className='h-8 sm:h-10' />
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="w-16 sm:w-24 h-10 sm:h-14 rounded-full bg-amber-500 flex-center hover:scale-125 transition-all">
                                        <img src="/images/whatsapp.png" alt="" className='h-8 sm:h-10' />
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="w-16 sm:w-24 h-10 sm:h-14 rounded-full bg-blue-general flex-center hover:scale-125 transition-all">
                                        <img src="/images/mail.png" alt="" className='h-8 sm:h-10' />
                                    </div>
                                </a>
                                <div className="w-16 sm:w-24 h-10 sm:h-14 w-12 h-8 rounded-full dark:bg-green-custom bg-green-custom/50 flex-center">
                                    <div className="w-2 h-2 rounded-full  bg-light-head"></div>
                                    <div className="w-2 h-2 rounded-full mx-1 bg-light-head"></div>
                                    <div className="w-2 h-2 rounded-full  bg-light-head"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section data-aos="fade-right" id='who-am-i' className=' py-10 px-4 dark:bg-dark-head bg-light-head'>
                    <h1 className='text-xl'><span className='text-green-custom'>WHO</span> AM I?</h1>

                    <p className='text-justify mt-4'>
                        I am a full-stack web developer, who has been working for 2 years. I specialize in various technologies like React.js, Next.js, Node.js, and lots more. I worked on several collaborative projects and now looking forward to assist a prestigious organize in developing industry-level projects.
                    </p>
                </section>

                <section id='specialization' className=" py-6 px-4">
                    <h1 data-aos="fade-up" className='text-xl'>WHAT DO I <span className="text-blue-general dark:text-blue-300">SPECIALIZE</span> IN?</h1>

                    <div className='flex flex-col mt-10'>
                        {
                            skills.map((skill, ix) => {
                                return (
                                    <SkillCard
                                        data-aos="fade-right"
                                        key={ix}
                                        icon={skill.icon}
                                        text={skill.text} />
                                )
                            })
                        }
                    </div>
                </section>

                <section data-aos="fade-left" className="flex text-white flex-col items-end px-4 py-6">
                    <div className="w-max bg-blue-message p-2 rounded-md block">What have you built?</div>
                    <div className="w-max bg-blue-message p-2 rounded-md block my-2">What have you built?</div>
                    <div className="w-max bg-blue-message p-2 rounded-md block">??</div>
                    <div className="w-max bg-blue-message p-2 rounded-md block mt-2">??</div>
                </section>

                <section id='projects'>
                    {
                        projects.map((project) => {
                            return <ProjectCard
                                title={project.title}
                                githubLink={project.githubLink}
                                stack={project.stack}
                                image={project.image}
                                key={project.title} />
                        })
                    }
                </section>

                <footer className='dark:bg-dark-head bg-light-head py-2 text-center'>
                    Designed and Rendered with love from Next.js 13
                </footer>
            </div>

        </div>
        </>
    )
}

export default Home