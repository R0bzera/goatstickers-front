import Header from "../components/layout/header";
import ProductGrid from "../components/layout/gridPrincipal";
import Banner from "../components/layout/banner";
import Category from "../components/layout/categorys";
import Feature2 from "../components/layout/grid2";
import Footer from "../components/layout/footer";




function Home() {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="mt-8">
          <ProductGrid />
        </div>
        <Banner />
        <Category />
        <Feature2 />
        <div className="mt-16">
          <Footer />
        </div>
      </div>
    );
  }
  
  export default Home;