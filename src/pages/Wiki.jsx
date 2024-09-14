import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPinIcon, HomeIcon, BeerIcon, TreePine, BookIcon } from 'lucide-react';

const Wiki = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-6 text-green-800">Dial Post Wiki</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-700 flex items-center">
            <MapPinIcon className="h-6 w-6 mr-2" />
            Overview
          </h2>
          <p className="text-green-600 mb-4">
            Dial Post is a village in the Horsham District of West Sussex, England. It is part of the West Grinstead civil parish and has a population of around 100. The village is located at 50.96377°N 0.35651°W.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-700 flex items-center">
            <BookIcon className="h-6 w-6 mr-2" />
            History
          </h2>
          <p className="text-green-600 mb-4">
            The village dates back 500 years. The origin of the name is uncertain, but Dial Post house, dated 1712, post-dates the settlement name. Dial Post farm comprised 300 acres in c. 1710. The Crown Inn, a public house, is recorded as having been established as early as the 1600s.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-700 flex items-center">
            <HomeIcon className="h-6 w-6 mr-2" />
            Landmarks
          </h2>
          <p className="text-green-600 mb-4">
            Dial Post has four Grade II listed buildings in its village centre:
          </p>
          <ul className="list-disc list-inside text-green-600 mb-4">
            <li>New Lodge</li>
            <li>Hazel Cottage</li>
            <li>Alma Cottage</li>
            <li>Dial Post House</li>
          </ul>
          <p className="text-green-600 mb-4">
            A new village hall was completed in 2010, built with the help of a £50,000 grant from the Sussex Downs and Low Weald LEADER programme.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-700 flex items-center">
            <TreePine className="h-6 w-6 mr-2" />
            Nature
          </h2>
          <p className="text-green-600 mb-4">
            The ruins of medieval Knepp Castle lie between Dial Post and Southwater, part of the Knepp Estate rewilding project. This pioneering project spans 3,500 acres of Sussex countryside and offers wildlife safaris and educational tours.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-700 flex items-center">
            <BeerIcon className="h-6 w-6 mr-2" />
            Local Amenities
          </h2>
          <p className="text-green-600 mb-4">
            The village has several amenities:
          </p>
          <ul className="list-disc list-inside text-green-600 mb-4">
            <li>The Crown Inn (public house)</li>
            <li>Knepp Wilding Kitchen (café and barbecue)</li>
            <li>Blakers Yard (commercial space and dwellings)</li>
            <li>A Garden Centre</li>
          </ul>
          <p className="text-green-600 mb-4">
            There is no church in Dial Post itself. The ecclesiastical parish centres on the Grade I listed St George's Church in West Grinstead.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-700 flex items-center">
            <MapPinIcon className="h-6 w-6 mr-2" />
            Transport
          </h2>
          <p className="text-green-600 mb-4">
            Dial Post was originally on the main A24 road linking London, Epsom, Leatherhead, Horsham, and Worthing. A straighter bypass now exists to the east of the village.
          </p>
        </section>

        <Link to="/" className="text-green-600 hover:text-green-800 font-semibold">
          &larr; Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default Wiki;
