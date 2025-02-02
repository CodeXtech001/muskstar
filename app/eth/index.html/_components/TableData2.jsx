"use client"
import { useEffect, useState } from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { cn } from "@/lib/utils";

function TableData2() {

  // Function to randomly pick between "In Process" and "Complete"
const getRandomStatus = () => {
  return Math.random() > 0.7 ? "In process" : "Complete";}  

// Function to generate a random uppercase hex-like string (15 chars)
const generateHexCode = () => {
  return [...Array(15)]
    .map(() => "0123456789ABCDEF"[Math.floor(Math.random() * 16)])
    .join("");
};

// Function to generate a mixed alphanumeric string (22 chars)
const generateMixedCode = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return [...Array(22)]
    .map(() => chars[Math.floor(Math.random() * chars.length)])
    .join("");
};

// Function to generate a random number between 0.000005 and 5
const generateRandomNumber = () => {
  return (Math.random() * (3 - 0.0005) + 0.0005).toFixed(4);
};

  const [data, setData] = useState([]);

  // Load saved data on mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("ethtableData")) || [];
    setData(savedData);
  }, []);

  // Function to add new row
  const addNewRow = () => {
    const newRow = {
      id: Date.now(),
      hexCode: generateHexCode(),
      mixedCode: generateMixedCode(),
      amount: generateRandomNumber(),
      status: getRandomStatus()
    };

    // setData((prevData) => {
    //   const updatedData = [ newRow,...prevData];

    //   // Save to localStorage
    //   localStorage.setItem("ethtableData", JSON.stringify(updatedData));

    //   return updatedData;
    // });

    // Remove after 1min seconds
    setTimeout(() => {
      setData((prevData) => {
        const filteredData = prevData.filter((item) => item.id !== newRow.id);
        localStorage.setItem("ethtableData", JSON.stringify(filteredData));
        return filteredData;
      });
    }, 100000);
  };

  // Start adding data at random intervals (2 to 6 seconds)
  useEffect(() => {
    const interval = setInterval(addNewRow, Math.random() * (6000 - 2000) + 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div  className="scrollbar scrollbar-[#FF7F0A] scrollbar-[#FDF4EE] h-64 overflow-y-scroll mt-6">
      <Table>
      <TableHeader>
        <TableRow>
          <TableHead >Hash</TableHead>
          <TableHead>Participant Wallet</TableHead>
          <TableHead>Value</TableHead>
          <TableHead >Receive ETH</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
      {data.map((row) => (
          <TableRow className="text-[#5b627c] " key={row.id}>
          <TableCell>{row.hexCode}...</TableCell>
          <TableCell className="font-medium ">{row.mixedCode}...</TableCell>
          <TableCell >{row.amount}</TableCell>
          <TableCell >{row.amount * 2}</TableCell>
          <TableCell className={cn("text-right",{"text-green-500": row.status === "Complete"},
                                    {"text-yellow-500": row.status === "In process"}
                                   )}>{row.status}</TableCell>
        </TableRow>
        ))}                           
      </TableBody>
    </Table>
    </div>
  )
}

export default TableData2