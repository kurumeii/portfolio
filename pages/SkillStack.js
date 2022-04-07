import Image from 'next/image'
import Head from 'next/head'
import classNames from 'classnames'
import {useContext} from 'react'
import Layout, {ThemeContext} from '~/components/layout/layout'

export default function SkillStack() {
  const {theme} = useContext(ThemeContext)
  return (
    <>
      <Head>
        <title>My skill</title>
      </Head>
      <section id='skill' className='py-20 bg-transparent'>
        <div className='container max-w-6xl mx-auto'>
          <div className='grid grid-cols-4 gap-4 m-10 sm:grid-cols-8 sm:gap-6 sm:px-8 xl:px-0'>
            <div
              className={classNames(
                'flex flex-col items-center justify-center col-start-3 col-span-4 px-8 py-12 space-y-4 overflow-hidden rounded-lg drop-shadow-lg',
                theme ? ' bg-gray-700 text-white' : ' bg-white text-black'
              )}
            >
              <Image
                src={'/undraw_programmer_re_owql.svg'}
                alt='coding'
                width={500}
                height={500}
              ></Image>
              <h2 className='text-xl font-bold inline-flex'>Web dev stack</h2>
              <p className=''>I have enough knowledge writing code in</p>
              <ul className='list-none flex flex-col'>
                <li>
                  Vanilla JS{' '}
                  <Image
                    src='/images/misc/javascript-logo-svgrepo-com.svg'
                    alt='javascript-logo'
                    width={25}
                    height={25}
                  />
                </li>
                <li>
                  JQuery{' '}
                  <Image
                    src='/images/misc/jquery-logo.svg'
                    alt='jquery-logo'
                    width={25}
                    height={25}
                  />
                </li>
                <li>
                  React JS{' '}
                  <Image
                    src='/images/misc/reactjs-icon.svg'
                    alt='react-logo'
                    width={35}
                    height={35}
                  />
                </li>
                <li>
                  .NET CORE MVC/ .NET MVC 5{' '}
                  <Image
                    src='/images/misc/dot-net-core.svg'
                    alt='dotnet-logo'
                    width={35}
                    height={35}
                  />
                </li>
                <li>
                  Node JS
                  <br />
                  <small>With framework like Express, NextJS</small>{' '}
                  <Image
                    src='/images/misc/nodejs.svg'
                    alt='node-logo'
                    width={60}
                    height={60}
                  />
                </li>
              </ul>
            </div>
            <div
              className={classNames(
                'flex flex-col items-center col-start-3 col-span-4 px-8 py-12 space-y-4 overflow-hidden rounded-lg drop-shadow-lg',
                theme ? ' bg-gray-700 text-white' : ' bg-white text-black'
              )}
            >
              <Image
                src={'/undraw_programmer_re_owql.svg'}
                alt='coding'
                width={500}
                height={500}
              ></Image>
              <h2 className='text-xl font-bold inline-flex'>Web dev stack</h2>
              <p className=''>I have enough knowledge writing code in</p>
              <ul className='list-disc flex flex-col'>
                <li>
                  Vanilla JS{' '}
                  <Image
                    src='/images/misc/javascript-logo-svgrepo-com.svg'
                    alt='javascript-logo'
                    width={25}
                    height={25}
                  />
                </li>
                <li>
                  JQuery{' '}
                  <Image
                    src='/images/misc/jquery-logo.svg'
                    alt='jquery-logo'
                    width={25}
                    height={25}
                  />
                </li>
                <li>
                  React JS{' '}
                  <Image
                    src='/images/misc/reactjs-icon.svg'
                    alt='react-logo'
                    width={25}
                    height={25}
                  />
                </li>
                <li>
                  .NET CORE MVC/ .NET MVC 5{' '}
                  <Image
                    src='/images/misc/dot-net-core.svg'
                    alt='dotnet-logo'
                    width={25}
                    height={25}
                  />
                </li>
                <li>
                  Node JS
                  <br />
                  <small>With framework like Express, NextJS</small>{' '}
                  <Image
                    src='/images/misc/nodejs.svg'
                    alt='node-logo'
                    width={60}
                    height={60}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
SkillStack.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
