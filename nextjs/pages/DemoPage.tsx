import IncidentReport from "../components/IncidentReport";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DemoPage = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-orange-100 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-orange-50 rounded-lg shadow-lg p-8">
                        <div className="text-center space-y-4"> {/* Add space to parent */}
                            <h3 className="text-3xl font-bold text-gray-900">Try our Incident Report</h3> {/* Style h3 */}
                            <h4 className="text-xl font-medium text-gray-700">Help your Pastoral Team triage more efficiently.</h4> {/* Style h4 */}
                            <IncidentReport />
                            <h6 className="font-bold text-gray-800">Instructions:</h6> {/* Style h6 */}
                            <div className="text-gray-600 space-y-2"> {/* Style p */}
                                <p>Assume the role of a student.</p>
                                <p>Explain what has happened to you and how it made you feel.</p>
                                <p>The PDF download at the end shows how the incident report can be sent to the pastoral team for triage.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DemoPage;
