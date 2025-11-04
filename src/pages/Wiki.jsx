import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, HomeIcon, BeerIcon, TreePine, BookIcon } from 'lucide-react';

const Wiki = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-5xl font-bold mb-8 text-foreground">Dial Post Wiki</h1>
      
        <div className="bg-card p-8 rounded-xl shadow-lg border border-border space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-card-foreground flex items-center">
              <MapPinIcon className="h-6 w-6 mr-3 text-primary" />
              Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Dial Post is a village in the Horsham District of West Sussex, England. It is part of the West Grinstead civil parish and has a population of around 100. The village is located at 50.96377°N 0.35651°W.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-card-foreground flex items-center">
              <BookIcon className="h-6 w-6 mr-3 text-primary" />
              History
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The village dates back 500 years. The origin of the name is uncertain, but Dial Post house, dated 1712, post-dates the settlement name. Dial Post farm comprised 300 acres in c. 1710. The Crown Inn, a public house, is recorded as having been established as early as the 1600s.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-card-foreground flex items-center">
              <HomeIcon className="h-6 w-6 mr-3 text-primary" />
              Landmarks
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Dial Post has four Grade II listed buildings in its village centre:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                New Lodge
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Hazel Cottage
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Alma Cottage
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Dial Post House
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              A new village hall was completed in 2010, built with the help of a £50,000 grant from the Sussex Downs and Low Weald LEADER programme.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-card-foreground flex items-center">
              <TreePine className="h-6 w-6 mr-3 text-primary" />
              Nature
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The ruins of medieval Knepp Castle lie between Dial Post and Southwater, part of the Knepp Estate rewilding project. This pioneering project spans 3,500 acres of Sussex countryside and offers wildlife safaris and educational tours.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-card-foreground flex items-center">
              <BeerIcon className="h-6 w-6 mr-3 text-primary" />
              Local Amenities
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              The village has several amenities:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                The Crown Inn (public house)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Knepp Wilding Kitchen (café and barbecue)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Blakers Yard (commercial space and dwellings)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                A Garden Centre
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              There is no church in Dial Post itself. The ecclesiastical parish centres on the Grade I listed St George's Church in West Grinstead.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-card-foreground flex items-center">
              <MapPinIcon className="h-6 w-6 mr-3 text-primary" />
              Transport
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Dial Post was originally on the main A24 road linking London, Epsom, Leatherhead, Horsham, and Worthing. A straighter bypass now exists to the east of the village.
            </p>
          </section>
        </div>

        <Link to="/" className="mt-8 inline-flex items-center text-primary hover:opacity-80 font-semibold transition-opacity">
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Wiki;
