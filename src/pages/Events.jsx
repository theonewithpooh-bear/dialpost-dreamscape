import React from 'react';

const Events = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-5xl font-bold mb-8 text-foreground">Events</h1>
        <div className="bg-card p-12 rounded-xl shadow-lg border border-border max-w-2xl mx-auto">
          <p className="text-xl text-muted-foreground mb-8 chewy-regular">
            Pardon our honeypots, but there are currently no organised events.
          </p>
          <img
            src="https://lh7-rt.googleusercontent.com/slidesz/AGV_vUfLSxINj58aam6IL6QTnRJMiSMRz1Hy_QPbAOvCXLPV6e_CZeM-J_PteebyCN_0CO24hlg3O_5G7eQHdS-1hTjIoxX-rBTYIhB9D3QLLB33sZG9j41fa_q4mHX0kKbGzBfTo3iTXdmBPLF5FbcIq6Oee_Udb1o=s2048?key=p0s8EYPn5tdVK48MLi7dOQ"
            alt="Confused Pooh"
            className="mx-auto w-48 h-48 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
