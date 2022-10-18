import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SalesCountDownBanner from "../components/SalesCountDownBanner";
import NavBar from "../components/NavBar";
import Link from "next/link";
import PromoBanner1 from "../components/PromoBanner1";
import CategoriesBanner from "../components/CategoriesBanner";
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>
          Fashion Nova | Fashion Online For Women | Affordable Women's Clothing
          | Fashion Nova
        </title>
        <link rel="shortcut icon" href="./favicon.png" type="image/png" />
      </Head>
      <Banner />
      <Header />
      <NavBar />
      <main className="">
        <CategoriesBanner />
        <SalesCountDownBanner />
        <PromoBanner1 />
      </main>
    </div>
  );
}
