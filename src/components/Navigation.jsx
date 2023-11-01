'use client'
import Link from 'next/link'
import { signIn, useSession, signOut } from 'next-auth/react'
import { redirect } from 'next/dist/server/api-utils'

const Navigation = () => {
  const { data: session, status } = useSession()

  return (
    <nav className="bg-slate-600 flex justify-evenly items-center py-10 text-slate-50 font-extrabold text-2xl">
      <div>
        <Link href="/">Home</Link>
      </div>
      {status === 'authenticated' ? (
        <>
          <div>
            <Link href="/dashboard">dashboard</Link>
          </div>
          <div>
            <button
              onClick={async () => {
                await signOut()
              }}
              className="w-full bg-orange-600 p-5 rounded-2xl"
            >
              Logout
            </button>
          </div>
        </>
      ) : (
        <div>
          <button
            onClick={() => signIn()}
            className="w-full bg-orange-600 p-5 rounded-2xl"
          >
            Sing in
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navigation
