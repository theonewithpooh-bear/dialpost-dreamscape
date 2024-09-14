import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { HomeIcon } from 'lucide-react';

const ListedBuildings = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-6 text-green-800">Listed Buildings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <HomeIcon className="h-6 w-6 mr-2 text-pink-600" />
              Hazel Cottage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>A charming 17th-century cottage with a thatched roof, exemplifying traditional Sussex architecture.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <HomeIcon className="h-6 w-6 mr-2 text-yellow-600" />
              Alma Cottage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>A picturesque 19th-century cottage with distinctive features and a well-preserved exterior.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <HomeIcon className="h-6 w-6 mr-2 text-purple-600" />
              Dial Post House
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>An elegant 18th-century manor house with significant historical and architectural importance.</p>
          </CardContent>
        </Card>
      </div>
      <Link to="/" className="mt-6 inline-block text-green-600 hover:text-green-800 font-semibold">
        &larr; Back to Home
      </Link>
    </div>
  );
};

export default ListedBuildings;
