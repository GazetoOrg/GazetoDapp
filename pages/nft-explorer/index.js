import { useEffect, useState } from 'react';
import { useAccount, useEnsName, useNetwork } from 'wagmi';
import Head from 'next/head';
import SearchBar from '../../components/SearchBar';
import ArticleCard from '../../components/ArticleCard';
import { useContractCall } from '../../hooks/contract/useContractCall';
import NftCard from '../../components/Nft';
import Spinner from '../../components/Spinner';

const articles = [
  {
    guid: '0',
    title: 'Tezos: Web3’s Gritty Underground Art Scene',
    description:
      'Underneath the noise of conspicuous digital consumerism, though, lies a dark, growing...',
    cover:
      'https://s32659.pcdn.co/wp-content/uploads/2021/12/nft-free.jpg.optimal.jpg',
    authorAddress: '0x903lkdkj..ab2',
    publishedAt: 'August 25th, 2022',
  },
  {
    guid: '1',
    title: 'Is NFT Star Daniel Allan Web3’s First Breakout Music...',
    description:
      'Fourteen-hour days on Discord, failures and massive risks: what it takes to be successful in Web3.',
    cover:
      'https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416__480.png',
    authorAddress: '0x903lkdkj..ab2',
    publishedAt: 'August 17th, 2022',
  },
  {
    guid: '2',
    title: 'Music NFTs Breakout Moment?',
    description:
      'Anyone who’s been involved in the web3 space for the past 18 months has heard that music NFTs are going to take over',
    cover: 'https://i.imgur.com/aUlCoR2.jpeg',
    authorAddress: '0x903lkdkj..ab2',
    publishedAt: 'June 30th, 2022',
  },
];

const NftExplorer = () => {
  const [elements, setElements] = useState([]);

  const args = [];
  const watch = true;
  const { data: articleLength, isLoading } = useContractCall(
    'totalSupply',
    args,
    watch
  );
  const renderArticles = () => {
    const length = Number(articleLength);
    if (length === 0) return null;
    const elem = [];
    for (let i = 0; i < length; i++) {
      elem.push(<ArticleCard key={i} id={i} />);
      setElements(elem);
    }
  };

  useEffect(() => {
    renderArticles();
  }, [articleLength]);

  return (
    <>
      <Head>
        <title>Feed | Gazeto</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div>
        <main className='flex-col items-center justify-center mt-8 max-w-3xl mx-auto sm:px-6 lg:px-8'>
          <div className='m-3'>
            <SearchBar />
            {articles?.length ? (
              <>
                <div className='sm:mb-18 sm:pb-16'>
                  {elements}
                </div>
              </>
            ) : isLoading ? (
              <div>
                <Spinner color={'black'} loading={true} />
              </div>
            ) : (
              <div>
                <h1 className={'p-20 text-center'}>No NFTs available</h1>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};
export default NftExplorer;
