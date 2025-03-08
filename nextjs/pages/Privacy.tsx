import IncidentReport from "../components/IncidentReport";
import LeadCaptureSection from "../components/LeadCaptureSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Privacy = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-grey-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
                    
                        <div className="text-center space-y-4"> {/* Add space to parent */}
                            <h3 className="text-3xl font-bold text-gray-900">Privacy Policy</h3> {/* Style h3 */}
                            <div className="text-gray-600 space-y-2"> {/* Style p */}
                              <p>Assume the role of a student.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Privacy;
