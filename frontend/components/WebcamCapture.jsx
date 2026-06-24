"use client";

import {
  useRef,
  useState,
  useEffect
} from "react";
import Webcam from "react-webcam";
import API from "../services/api";

export default function WebcamCapture() {
  const webcamRef = useRef(null);

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const captureAndRecognize = async () => {
    // Prevent duplicate requests
    if (loading) return;

    // Check webcam ready
    if (!webcamRef.current) return;

    const imageSrc =
      webcamRef.current.getScreenshot();

    if (!imageSrc) return;

    setLoading(true);

    try {
      const response = await API.post(
        "/recognize",
        {
          image: imageSrc,
        }
      );

      setResult(response.data);
    } catch (error) {
      console.log(
        "Recognition Error:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      captureAndRecognize();
    }, 2000);

    return () =>
      clearInterval(interval);
  }, [loading]);

  return (
    <div className="flex flex-col items-center gap-6">

      <Webcam
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="rounded-lg shadow-lg"
      />

      <button
        onClick={captureAndRecognize}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Detect Face
      </button>

      {loading && (
        <p>Processing...</p>
      )}

      {result && (
        <div className="bg-white shadow-lg p-6 rounded w-[400px]">

          <h2 className="text-xl font-bold mb-4">
            Detection Result
          </h2>

          <p>
            <strong>Name:</strong>{" "}
            {result.name}
          </p>

          <p>
            <strong>Role:</strong>{" "}
            {result.role}
          </p>

          <p>
            <strong>Age:</strong>{" "}
            {result.age}
          </p>

          <p>
            <strong>Gender:</strong>{" "}
            {result.gender}
          </p>
        </div>
      )}
    </div>
  );
}