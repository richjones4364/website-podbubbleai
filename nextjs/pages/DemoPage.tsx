import { Bot, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import IncidentReport from '../components/IncidentReport';

const DemoPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-orange-500 text-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Experience PodBubble in Action
              </h1>
              <p className="mt-4 text-xl">
                Try our Student Incident Report Agent and see how it can support your pastoral team.
              </p>
              <Link 
                href="/" 
                className="mt-8 inline-flex items-center text-white bg-orange-600 hover:bg-orange-700 px-5 py-3 rounded-md text-base font-medium"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
        
        {/* Demo container */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center">
                <Bot className="h-8 w-8 text-orange-500" />
                <h2 className="ml-3 text-2xl font-bold text-gray-900">PodBubble AI Assistant</h2>
              </div>
              <p className="mt-2 text-gray-600">
                This demo shows how an AI agent can support your pastoral team in triaging student self-referrals.
              </p>
            </div>
            <div id="chat-demo-container" className="p-6 h-[500px] bg-gray-50">
              
              <div className="flex items-center justify-center h-full border-2 border-dashed border-gray-300 rounded-lg">
                <div className="text-center">
                  <Bot className="mx-auto h-12 w-12 text-gray-400" />
                  <IncidentReport />
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 px-6 py-4">
              <div className="text-sm">
                <p className="font-medium text-gray-900">How to use this demo:</p>
                <ul className="mt-2 list-disc pl-5 text-gray-600">
                  <li>Play the role of a student reporting an incident.</li>
                  <li>You will be guided to explain what has happened to you and who was involved.</li>
                  <li>You will be encouraged to share your feelings regarding the incident.</li>
                  <li>At the end of the chat, your report will be shared with the pastoral team.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-3xl font-extrabold text-gray-900">How It Works</h2>
            <div className="mt-6 grid gap-8 md:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Select your AI Staff member</h3>
                <p className="mt-2 text-gray-600">
                  You decide which AI staff member you wish to employ in your school. 
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Train Your AI</h3>
                <p className="mt-2 text-gray-600">
                  We build and train your AI on your school's policies, procedures, and curriculum.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Automate & Save Time</h3>
                <p className="mt-2 text-gray-600">
                  Watch as routine tasks are handled automatically, freeing up your staff to focus on what matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export const getServerSideProps = async () => {
  // Fetch any data needed for the page here
  return {
    props: {}, // will be passed to the page component as props
  };
};

export default DemoPage;