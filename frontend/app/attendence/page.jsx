"use client";

import { useEffect, useState } from "react";
import API from "../../services/api";
import Navbar from "../../components/Navbar";
import AttendanceTable from "../../components/AttendanceTable";

export default function AttendancePage() {
  const [records, setRecords] = useState([]);

  const fetchAttendance = async () => {
    try {
      const response = await API.get(
        "/attendance/history"
      );

      setRecords(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  return (
    <>
      <Navbar />

      <div className="p-10 bg-gray-100 min-h-screen">

        <h1 className="text-3xl font-bold mb-8">
          Attendance History
        </h1>

        <AttendanceTable
          records={records}
        />
      </div>
    </>
  );
}