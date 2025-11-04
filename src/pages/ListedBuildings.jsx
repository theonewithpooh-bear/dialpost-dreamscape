import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { HomeIcon } from 'lucide-react';

const ListedBuildings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-5xl font-bold mb-8 text-foreground">Listed Buildings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-shadow border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-card-foreground">
                <HomeIcon className="h-6 w-6 mr-3 text-primary" />
                Hazel Cottage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">A charming 17th-century cottage with a thatched roof, exemplifying traditional Sussex architecture.</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-shadow border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-card-foreground">
                <HomeIcon className="h-6 w-6 mr-3 text-primary" />
                Alma Cottage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">A picturesque 19th-century cottage with distinctive features and a well-preserved exterior.</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-shadow border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-card-foreground">
                <HomeIcon className="h-6 w-6 mr-3 text-primary" />
                Dial Post House
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">An elegant 18th-century manor house with significant historical and architectural importance.</p>
            </CardContent>
          </Card>
        </div>
        <Link to="/" className="mt-8 inline-flex items-center text-primary hover:opacity-80 font-semibold transition-opacity">
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ListedBuildings;
