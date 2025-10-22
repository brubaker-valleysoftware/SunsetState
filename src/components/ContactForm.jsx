"use client";
import { useEffect, useState } from "react";

export default function ContactForm() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Load the Fillout script dynamically
    const script = document.createElement("script");
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://server.fillout.com/embed/v1/"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  // Only render the form container after client-side hydration
  if (!isClient) {
    return (
      <div style={{ width: "100%", height: "500px" }} className="flex items-center justify-center bg-gray-100">
        <div className="text-gray-600">Loading form...</div>
      </div>
    );
  }

  return (
    <div>
      <div
        style={{ width: "100%", minHeight: "500px", }}
        data-fillout-id="uujVj8vBHDus"
        data-fillout-embed-type="fullscreen"
        data-fillout-inherit-parameters
        data-fillout-dynamic-resize
      ></div>
    </div>
  );
}
{/* <div style="position:fixed;top:0px;left:0px;right:0px;bottom:0px;">
  <div
    data-fillout-id="uujVj8vBHDus"
    data-fillout-embed-type="fullscreen"
    style="width:100%;height:100%;"
    data-fillout-inherit-parameters
  ></div>
  <script src="https://server.fillout.com/embed/v1/"></script>
</div>; */}