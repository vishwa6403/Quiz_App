import React, { useState } from 'react';
import { FaFileExcel } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import * as XLSX from "xlsx";
import { addQuestion } from '../../../../redux/slice/adminSlice';
import { toast } from 'react-toastify';

const UploadExcel = () => {
    const dispatch = useDispatch();
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");

    // Handle File Selection
    const handleFileSelection = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setFileName(selectedFile.name);
        }
    };

    // Handle File Upload on Button Click
    const handleUpload = () => {
        if (!file) {
            // alert("Please select a file first!");
            toast.error("Please select a file first");
            return;
        }

        const reader = new FileReader();
        reader.readAsBinaryString(file);

        reader.onload = (event) => {
            const data = event.target.result;
            const workbook = XLSX.read(data, { type: "binary" });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(sheet);

            const questions = jsonData.map((row) => ({
                questionText: String(row["Question"] || "").trim(),
                optionA: String(row["Option A"] || "").trim().toUpperCase(),
                optionB: String(row["Option B"] || "").trim().toUpperCase(),
                optionC: String(row["Option C"] || "").trim().toUpperCase(),
                optionD: String(row["Option D"] || "").trim().toUpperCase(),
                correctOption: String(row["Correct Option"] || "").trim().toUpperCase(),
            }));

            // console.log("🚀 Parsed Questions:", questions);
            questions.forEach((question) => dispatch(addQuestion(question)));

            setFile(null);
            setFileName("");
            document.getElementById("fileInput").value = "";
        };
    };

    return (
        <div className="upload-section">
            <h3><FaFileExcel /> Upload Questions via Excel</h3>
            <input type="file" accept=".xlsx, .xls" id="fileInput" name={fileName} onChange={handleFileSelection} />
            {file && <p className="file-name">Selected File: {fileName}</p>}
            <button className="upload-btn" onClick={handleUpload} >Upload</button>
        </div>
    );
};

export default UploadExcel;