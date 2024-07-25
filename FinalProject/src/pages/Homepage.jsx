const HomePage = () => {
  return (
    <div className="homesection">
      <header className="groceryheader">
        <h1 className="welcomeHeader">Welcome to ShopShip!</h1>
      </header>
      <main>
        <section className="promosection">
          <h2 className="currentPromoHeader">Promotions and Deals!</h2>
          <div className="promotionlist">
            <div className="promoitem">
              <h3 className="promoItemHeader">Milk</h3>
              <p>25% off (Gallons only, excludes all other sizes)</p>
            </div>
            <div className="promoitem">
              <h3 className="promoItemHeader">Asparagus</h3>
              <p>Only $2.99/lb when you buy 2 or more</p>
            </div>
            <div className="promoitem">
              <h3 className="promoItemHeader">Strawberries</h3>
              <p>$2.99 per pound</p>
            </div>
            <div className="promoitem">
              <h3 className="promoItemHeader">Dinner Rolls</h3>
              <p>Buy 2 get 1 free</p>
            </div>
            <div className="promoitem">
              <h3 className="promoItemHeader">Whipped Cream</h3>
              <p>Save $.50 (Limit 4)</p>
            </div>
            <div className="promoitem">
              <h3 className="promoItemHeader">Oranges</h3>
              <p>Up to $3 off select varieties</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
