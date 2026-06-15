import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";

import { WindowControls } from "#components";
import WindowWrapper from "#hoc/window-wrapper";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const Resume = () => {
  const [page, setPage] = useState(1);
  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>
        <a
          href="files/resume.pdf"
          download
          className="cursor-pointer"
          title="Download Resume"
        >
          <Download className="icon" />
        </a>
      </div>
      <div
        className="relative flex justify-center"
        style={{ overflowY: "auto", height: "100vh" }}
      >
        <>
          <div className="z-10 flex items-center justify-between px-2 w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <button
              onClick={() => setPage(1)}
              disabled={page === 1}
              className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
            >
              <ChevronLeft className="text-neutral-800 size-5" />
            </button>
            <button
              onClick={() => setPage(2)}
              disabled={page === 2}
              className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
            >
              <ChevronRight className="text-neutral-800 size-5" />
            </button>
          </div>
          <Document file="files/resume.pdf" className="px-4">
            <Page pageNumber={page} renderTextLayer renderAnnotationLayer />
          </Document>
        </>
      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
