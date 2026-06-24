import Navbar from "../../components/Navbar";
import WebcamCapture from "../../components/WebcamCapture";

export default function RecognitionPage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-10">

        <h1 className="text-3xl font-bold text-center mb-8">
          Real-Time Recognition
        </h1>

        <WebcamCapture />
      </div>
    </>
  );
}