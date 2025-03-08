import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Privacy = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-grey-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
                    
                        <div className="text-left space-y-4"> {/* Add space to parent */}
                            <h2 className="text-3xl font-bold text-gray-900">Privacy Policy</h2> {/* Style h3 */}
                            <div className="text-gray-600 space-y-2"> {/* Style p */}
                              <p className="mb-4"><strong>Effective Date:</strong> 1st January 2025</p>

        <p className="mb-4">At PodBubble AI, accessible from www.podbubble.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by www.podbubble.com and how we use it.</p>

        <p className="mb-8">We are committed to protecting your personal data and complying with UK data protection laws, including the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>

        <h4 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Information We Collect</h4>

        <p className="mb-4">We may collect the following types of information:</p>

        <ul className="list-disc pl-6 mb-8">
            <li><strong className="font-medium">Personal Information:</strong> This may include your name, email address, postal address, phone number, and any other information you voluntarily provide to us (e.g., when you sign up for a newsletter, make a purchase, or contact us).</li>
            <li><strong className="font-medium">Usage Data:</strong> We may collect information on how you access and use our website, including your IP address, browser type, operating system, pages visited, and the time and date of your visit.</li>
            <li><strong className="font-medium">Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to track activity on our website and hold certain information. You can set your browser to refuse all or some browser cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.</li>
        </ul>

        <h4 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">How We Use Your Information</h4>

        <p className="mb-4">We use the information we collect for the following purposes:</p>

        <ul className="list-disc pl-6 mb-8">
            <li>To provide, operate, and maintain our website.</li>
            <li>To improve, personalize, and expand our website.</li>
            <li>To understand and analyze how you use our website.</li>
            <li>To develop new products, services, features, and functionality.</li>
            <li>To communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
            <li>To send you emails.</li>
            <li>To find and prevent fraud.</li>
            <li>To meet our legal obligations.</li>
        </ul>

         <h4 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Legal Basis for Processing</h4>

        <p className="mb-4">We will only process your personal information when we have a lawful basis to do so. These include:</p>

        <ul className="list-disc pl-6 mb-8">
            <li><strong className="font-medium">Consent:</strong> You have given us clear consent to process your personal data for a specific purpose.</li>
            <li><strong className="font-medium">Contract:</strong> Processing is necessary for a contract we have with you, or because you have asked us to take specific steps before entering into a contract.</li>
            <li><strong className="font-medium">Legitimate Interests:</strong> Processing is necessary for our legitimate interests or the legitimate interests of a third party, unless there is a good reason to protect your personal data which overrides those legitimate interests.</li>
            <li><strong className="font-medium">Legal Obligation:</strong> Processing is necessary for us to comply with the law.</li>
        </ul>
        
        <h4 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Data Retention</h4>
        <p className="mb-8">We will retain your personal information only for as long as necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.</p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Data Security</h2>

        <p className="mb-8">We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure. Therefore, we cannot guarantee its absolute security.</p>

        <h4 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Your Rights</h4>

        <p className="mb-4">Under UK data protection law, you have the following rights:</p>

        <ul className="list-disc pl-6 mb-8">
            <li><strong className="font-medium">The right to access:</strong> You can request copies of your personal data.</li>
            <li><strong className="font-medium">The right to rectification:</strong> You can request that we correct any information you believe is inaccurate or incomplete.</li>
            <li><strong className="font-medium">The right to erasure:</strong> You can request that we erase your personal data under certain conditions.</li>
            <li><strong className="font-medium">The right to restrict processing:</strong> You can request that we restrict the processing of your personal data under certain conditions.</li>
            <li><strong className="font-medium">The right to object to processing:</strong> You can object to our processing of your personal data under certain conditions.</li>
            <li><strong className="font-medium">The right to data portability:</strong> You can request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
        </ul>

        <p className="mb-8">If you would like to exercise any of these rights, please contact us using the information provided below.</p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Third-Party Links</h2>

        <p className="mb-8">Our website may contain links to other websites. We are not responsible for the privacy practices of those other websites. We encourage you to read the privacy policies of every website that collects personal information.</p>

        <h4 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Changes to This Privacy Policy</h4>        <p className="mb-8">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Contact Us</h2>

        <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>

        <p className="mb-2">PodBubble Ltd trading as PodBubble AI</p>
        <p className="mb-2">hello@podbubble.com</p>                    
        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Privacy;
