import IncidentReport from "../components/IncidentReport";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DemoPage = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="text-center">
                            <IncidentReport /> {/* Remove initialMessages prop */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DemoPage;
