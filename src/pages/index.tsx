import type { NextPage } from "next"
import React from 'react';

import Head from "next/head"
import { useState } from "react"
import { Wallet } from "../components/Wallet"
import Back from "../components/Back"
import Image from "next/image"

import { Game } from "../components/Game"
import { BigNumber, Contract, ethers, providers, utils } from "ethers"

import {
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react"


const Home: NextPage = () => {
  const textColor = useColorModeValue("gray.700", "white")
  const [library, setLibrary] = useState<ethers.providers.Web3Provider>()
  const [account, setAccount] = useState<string>("")
  const [provider, setProvider] = useState()

  return (    
    <div className="container max-w-full">
  <Head>
    <title>ArBet - Blackjack</title>
    <meta name="description" content="blackjack dApp" />
    <link rel="stylesheet" href="/styles.css" />
  </Head>

  <main className="bg-[#1a202c] pb-1 text-white">
    <nav className="px-8 md:px-8 lg:fixed sm:flex md:flex w-full z-20 top-0 py-8">
      <div className="container flex justify-between items-center mx-auto">
        <a href="https://www.arbet.casino/" target="_blank" rel="noreferrer">
          <Back/>
        </a>
        <div className="flex justify-end pr-0">
          <Wallet
            account={account}
            setAccount={setAccount}
            setProvider={setProvider}
            provider={provider}
            setLibrary={setLibrary}
            library={library!}
          />
        </div>
      </div>
    </nav>

    <div className="mx-auto md:mt-20 lg:mt-12 pb-8">
      <Game library={library!} account={account} />
    </div>
  </main>
</div>

  )
}

export default Home
