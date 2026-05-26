"use client";
import { useEffect, useState } from "react";

export default function ContactForm() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Load the Jobber stylesheet
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css";
    link.media = "screen";
    document.head.appendChild(link);

    // Load the Jobber embed script
    const script = document.createElement("script");
    script.src = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
    script.setAttribute("clienthub_id", "84a14c43-a448-469a-af0c-e8dbcd932291-2205606");
    script.setAttribute(
      "form_url",
      "https://clienthub.getjobber.com/client_hubs/84a14c43-a448-469a-af0c-e8dbcd932291/public/work_request/embedded_work_request_form?form_id=2205606",
    );
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      const existingLink = document.querySelector(
        'link[href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css"]',
      );
      if (existingLink) existingLink.remove();
      const existingScript = document.querySelector(
        'script[src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js"]',
      );
      if (existingScript) existingScript.remove();
    };
  }, []);

  if (!isClient) {
    return (
      <div style={{ width: "100%", height: "500px" }} className="flex items-center justify-center bg-gray-100">
        <div className="text-gray-600">Loading form...</div>
      </div>
    );
  }

  return (
    <div>
      <div id="84a14c43-a448-469a-af0c-e8dbcd932291-2205606"></div>
    </div>
  );
}
{
  /* <div style="position:fixed;top:0px;left:0px;right:0px;bottom:0px;">
  <div
    data-fillout-id="uujVj8vBHDus"
    data-fillout-embed-type="fullscreen"
    style="width:100%;height:100%;"
    data-fillout-inherit-parameters
  ></div>
  <script src="https://server.fillout.com/embed/v1/"></script>
</div>; */
}
