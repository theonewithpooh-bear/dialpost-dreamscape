import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, HomeIcon, BeerIcon, TreePine, BookIcon, TruckIcon } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const Wiki = () => {
  const sections = [
    { id: 'overview', title: 'Overview', icon: MapPinIcon },
    { id: 'history', title: 'History', icon: BookIcon },
    { id: 'landmarks', title: 'Landmarks', icon: HomeIcon },
    { id: 'nature', title: 'Nature', icon: TreePine },
    { id: 'amenities', title: 'Local Amenities', icon: BeerIcon },
    { id: 'transport', title: 'Transport', icon: TruckIcon },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-5xl font-bold mb-8 text-foreground">Dial Post Wiki</h1>
        
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents - Sidebar */}
          <aside className="lg:col-span-1">
            <Card className="sticky top-24 border-border">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4 text-card-foreground">Contents</h2>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors py-2"
                    >
                      <section.icon className="h-4 w-4 mr-2" />
                      {section.title}
                    </a>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Accordion type="multiple" defaultValue={['overview', 'history', 'landmarks']} className="space-y-4">
              <AccordionItem value="overview" id="overview" className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-xl font-semibold text-card-foreground hover:text-primary">
                  <div className="flex items-center">
                    <MapPinIcon className="h-5 w-5 mr-3 text-primary" />
                    Overview
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                  <div className="space-y-4">
                    <p>
                      Dial Post is a village in the Horsham District of West Sussex, England. It is part of the West Grinstead civil parish and has a population of around 100.
                    </p>
                    <div className="bg-secondary/50 p-4 rounded-lg">
                      <h3 className="font-semibold text-card-foreground mb-2">Location</h3>
                      <p className="flex items-center">
                        <MapPinIcon className="h-4 w-4 mr-2 text-primary" />
                        50.96377°N 0.35651°W
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="history" id="history" className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-xl font-semibold text-card-foreground hover:text-primary">
                  <div className="flex items-center">
                    <BookIcon className="h-5 w-5 mr-3 text-primary" />
                    History
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                  <div className="space-y-4">
                    <p>
                      The village dates back 500 years. The origin of the name is uncertain, but Dial Post house, dated 1712, post-dates the settlement name.
                    </p>
                    <div className="bg-secondary/50 p-4 rounded-lg space-y-2">
                      <h3 className="font-semibold text-card-foreground mb-3">Historical Facts</h3>
                      <div className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                        <p>Dial Post farm comprised 300 acres in c. 1710</p>
                      </div>
                      <div className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                        <p>The Crown Inn is recorded as having been established as early as the 1600s</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="landmarks" id="landmarks" className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-xl font-semibold text-card-foreground hover:text-primary">
                  <div className="flex items-center">
                    <HomeIcon className="h-5 w-5 mr-3 text-primary" />
                    Landmarks
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                  <div className="space-y-4">
                    <p className="mb-4">
                      Dial Post has four Grade II listed buildings in its village centre:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {['New Lodge', 'Hazel Cottage', 'Alma Cottage', 'Dial Post House'].map((building) => (
                        <div key={building} className="bg-secondary/50 p-4 rounded-lg">
                          <div className="flex items-center">
                            <HomeIcon className="h-4 w-4 mr-2 text-primary" />
                            <span className="font-medium text-card-foreground">{building}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-accent/20 border-l-4 border-accent p-4 rounded-lg mt-4">
                      <p>
                        A new village hall was completed in 2010, built with the help of a £50,000 grant from the Sussex Downs and Low Weald LEADER programme.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="nature" id="nature" className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-xl font-semibold text-card-foreground hover:text-primary">
                  <div className="flex items-center">
                    <TreePine className="h-5 w-5 mr-3 text-primary" />
                    Nature
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                  <div className="space-y-4">
                    <p>
                      The ruins of medieval Knepp Castle lie between Dial Post and Southwater, part of the Knepp Estate rewilding project.
                    </p>
                    <div className="bg-secondary/50 p-4 rounded-lg">
                      <h3 className="font-semibold text-card-foreground mb-2">Knepp Estate</h3>
                      <p>This pioneering project spans 3,500 acres of Sussex countryside and offers wildlife safaris and educational tours.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="amenities" id="amenities" className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-xl font-semibold text-card-foreground hover:text-primary">
                  <div className="flex items-center">
                    <BeerIcon className="h-5 w-5 mr-3 text-primary" />
                    Local Amenities
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                  <div className="space-y-4">
                    <p className="mb-4">The village has several amenities:</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        'The Crown Inn (public house)',
                        'Knepp Wilding Kitchen (café and barbecue)',
                        'Blakers Yard (commercial space and dwellings)',
                        'A Garden Centre'
                      ].map((amenity) => (
                        <div key={amenity} className="flex items-center bg-secondary/50 p-3 rounded-lg">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          <span className="text-sm">{amenity}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-accent/20 border-l-4 border-accent p-4 rounded-lg mt-4">
                      <p>
                        There is no church in Dial Post itself. The ecclesiastical parish centres on the Grade I listed St George's Church in West Grinstead.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="transport" id="transport" className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-xl font-semibold text-card-foreground hover:text-primary">
                  <div className="flex items-center">
                    <TruckIcon className="h-5 w-5 mr-3 text-primary" />
                    Transport
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <p>
                      Dial Post was originally on the main A24 road linking London, Epsom, Leatherhead, Horsham, and Worthing. A straighter bypass now exists to the east of the village.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Link to="/" className="mt-8 inline-flex items-center text-primary hover:opacity-80 font-semibold transition-opacity">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wiki;
