import {XIcon} from '@heroicons/react/outline'
import {LockClosedIcon, MailIcon, UserCircleIcon} from '@heroicons/react/solid'
import classNames from 'classnames'
import Header from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import {getCardList} from '~/lib/controller/signUpController'
import useAutoSlide from '~/utils/hooks/useAutoSlide'
import useSignUp from '~/utils/hooks/useSignUp'

export const getStaticProps = async () => {
  const list = await getCardList()
  return {
    props: {
      arrList: list,
    },
  }
}

function SignUp({arrList}) {
  const {
    cardDetail: {avatar, name, says, transition},
    index,
  } = useAutoSlide(arrList)
  const {
    fileUploaded: {imgName, imgSrc},
    handleUpload,
    openInNewTab,
    clearFile,
  } = useSignUp()
  return (
    <>
      <Header>
        <title>Sign up</title>
      </Header>

      <div className='flex justify-start min-h-screen min-w-scren bg-gray-200'>
        <div className='w-full md:w-1/2 h-screen overflow-y-auto bg-gray-200 animate-sliding-in-left '>
          <Link href='/login' replace>
            <a role='button' className='btn btn-link float-left'>
              Back to login
            </a>
          </Link>
          <form
            action='#'
            className='w-full p-12 text-gray-900 font-mono font-bold'
          >
            <div className='mt-5 relative transition-colors focus-within:text-indigo-500'>
              <div className='absolute inset-y-0 left-0 mx-2 flex items-center justify-center'>
                <MailIcon className='h-7 w-7 pointer-events-none' />
              </div>
              <input
                type='email'
                className='text-black placeholder-opacity-70 block w-full px-10 py-3 md:py-5 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-500 '
                placeholder='EMAIL'
                autoComplete='off'
              />
            </div>
            <div className='mt-5 relative transition-colors focus-within:text-pink-500'>
              <div className='absolute inset-y-0 left-0 mx-2 flex items-center justify-center '>
                <UserCircleIcon className='h-7 w-7  pointer-events-none' />
              </div>
              <input
                type='text'
                className='text-black placeholder-opacity-70 block w-full  px-10 py-3 md:py-5 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-500  '
                placeholder='USERNAME'
                autoComplete='off'
              />
              <span></span>
            </div>
            <div className='mt-5 relative transition-colors focus-within:text-blue-500'>
              <div className='absolute inset-y-0 left-0 mx-2 flex items-center justify-center '>
                <LockClosedIcon className='h-7 w-7  pointer-events-none' />
              </div>
              <input
                type='password'
                className='text-black placeholder-opacity-70 block w-full  px-10 py-3 md:py-5 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-500  '
                placeholder='PASSWORD'
                autoComplete='off'
              />
            </div>
            <div className='mt-5 relative'>
              <label className='btn btn-outline index'>
                <input
                  type='file'
                  className='hidden'
                  accept='image/*'
                  onChange={handleUpload}
                />
                Upload Image
              </label>
              {imgSrc && (
                <>
                  <div className='m-auto flex flex-wrap justify-center items-center'>
                    <div
                      className='relative w-full h-56 my-5 transition-transform hover:shadow-multilayer-pink-left hover:translate-x-4 hover:-translate-y-4 rounded-sm cursor-pointer ring-2 ring-info'
                      id='upload-field'
                      onClick={openInNewTab}
                    >
                      <Image
                        src={imgSrc}
                        alt={imgName}
                        layout='fill'
                        loading='lazy'
                        className='rounded-sm text-center'
                        objectFit='cover'
                        objectPosition='center'
                      />
                    </div>
                    <div className='inline-flex items-center m-auto'>
                      <span>{imgName}</span>
                      <button
                        role='button'
                        className='rounded-full mx-5'
                        onClick={clearFile}
                      >
                        <XIcon className='w-7 h-7 text-error' />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className='mt-10'>
              <input
                role='button'
                type='submit'
                value='CONTINUE'
                className='py-3 lg:text-lg xl:text-2xl bg-purple-600 hover:bg-purple-900 text-white w-full rounded transition-all transform hover:scale-105 hover:drop-shadow-xl cursor-pointer'
              />
            </div>
          </form>
        </div>
        <div className='relative h-screen hidden md:block md:w-1/2 bg-gradient-to-br from-pink-600 to-indigo-800 animate-fade-in'>
          <div className='absolute bottom-0 flex flex-col justify-between items-center h-2/3 w-full'>
            <div className='grid grid-cols-3 grid-rows-2 gap-y-10 text-gray-100'>
              <div className='avatar items-center col-start-2 col-span-2 select-none'>
                <div
                  className={classNames(
                    'rounded-full w-20 h-20 ring ring-primary ring-offset-4',
                    transition && 'animate-sliding-out-left'
                  )}
                >
                  <Image
                    src={avatar}
                    alt='avatar'
                    width={300}
                    height={300}
                    priority
                  />
                </div>
                <div className='px-5 text-xl font-light'>{name}</div>
              </div>
              <div
                className={classNames(
                  'p-5 font-sansz text-lg font-semibold col-span-3',
                  transition && 'animate-sliding-out-left'
                )}
              >
                {says}
              </div>
            </div>
            <div className='py-5 inline-flex items-stretch'>
              {arrList.map((v, i) => (
                <span
                  key={i}
                  className={classNames(
                    'h-3.5 w-3.5 rounded-full mx-2 border-2 border-solid border-black',
                    index === i ? 'bg-transparent' : 'bg-gray-100'
                  )}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

SignUp.getLayout = function getLayout(page) {
  return <>{page}</>
}

export default SignUp
