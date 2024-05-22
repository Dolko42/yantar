import ApiKey from "@/app/ui/ApiKey";
import { getUserInfo } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import { userDataResponse } from "../../../../types";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import CodeBlock from "@/app/ui/CodeBlock";

export default async function Page() {
  const user = await currentUser();
  const apiKey: string = process.env.YANTAR_API_KEY!;

  if (!user) return <div>Not signed in.</div>;

  const userData: userDataResponse = await getUserInfo(apiKey, user.id);

  const pythonCode = `import requests

  payload = {
      "text": text, # Same as LLM output, but this text could be anything
      "api_key": "your_api_key",
      "amount_of_ads": 4
  }
  # Send POST request
  response = requests.post("https://backend.yantar.yazero.io/api/get-ads", json=payload).json()`;

  const javascriptCode = `const axios = require('axios');

  const text = get_stuff(other_text); // Assume get_stuff is defined and returns the text
  const apiKey = "your_api_key";
  
  const payload = {
    text: text, // Same as LLM output, but this text could be anything
    api_key: apiKey,
    amount_of_ads: 4
  };
  
  // Send POST request
  axios.post("https://backend.yantar.yazero.io/api/get-ads", payload)
    .then(response => {
      const ads = response.data;
      console.log(ads);
    })
    .catch(error => {
      console.error('Error fetching ads:', error);
    });
  `;

  const jsonCode = `{
  "success": true/false,
  "traceback": "empty, or some error",
  "data": [
    {
      "id": 67,
      "one_liner": "Engage customers on any channel, any time.",
      "link": "https://backend.yantar.yazero.io/ads/string.67",
      "cta": "Try now",
      "similarity": 1.16018666442667
    },
    {
      "id": 58,
      "one_liner": "Make it beautiful. Make it Squarespace.",
      "link": "https://backend.yantar.yazero.io/ads/string.58",
      "cta": "Start a free trial",
      "similarity": 1.16239605100477
    }, ...
  ]
  }
  `;

  const adCode = `{adData.data.map((ad) => (
    <div key={ad.id} className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h3 className="text-lg font-semibold mb-2">{ad.one_liner}</h3>
      <a href={ad.link} target="_blank" className="text-blue-500 hover:underline">
        {ad.cta}
      </a>
    </div>
  ))}`;

  const badgeCode = `<span className="px-3 py-[2px] bg-gray-200 text-gray-500 text-[10px] font-medium rounded">
  Sponsored
</span>`;

  const adData = {
    success: true,
    traceback: "empty, or some error",
    data: [
      {
        id: 67,
        one_liner: "Engage customers on any channel, any time.",
        link: "https://backend.yantar.yazero.io/ads/string.67",
        cta: "Try now",
        similarity: 1.16018666442667,
      },
      {
        id: 58,
        one_liner: "Make it beautiful. Make it Squarespace.",
        link: "https://backend.yantar.yazero.io/ads/string.58",
        cta: "Start a free trial",
        similarity: 1.16239605100477,
      },
    ],
  };

  return (
    <div className="p-4 lg:p-6 mt-2 lg:mt-4 min-h-screen">
      <h1 className="text-skin-base text-5xl">Developers</h1>
      <p className="text-skin-muted max-w-[35ch] mt-2">
        This short guide will show you how to get relavant ads based on the
        prompts your users submit.
      </p>
      <h3 className="text-skin-base text-2xl mt-10 font-semibold">
        1. Copy your API key
      </h3>
      <div className="md:grid md:grid-cols-4 text-skin-base border-b pb-1 border-skin-base mt-6 hidden">
        <span className="uppercase col-span-1">Name</span>
        <span className="uppercase col-span-2">Key</span>
        <span className="uppercase col-span-1 text-right">Created at</span>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-4 text-skin-base border-b pb-1 border-skin-base mt-6">
        <span className="col-span-1 font-semibold">Publishable key</span>
        <div className="col-span-2 font-mono cursor-pointer text-skin-base py-6 px-2 rounded-lg my-2 bg-white md:py-0 md:px-0 md:rounded-none md:bg-transparent md:my-0">
          <ApiKey apiKey={userData.api_key} />
        </div>
        <span className="uppercase col-span-1 md:text-right md:hidden">
          Created at
        </span>
        <span className="col-span-1 md:text-right font-semibold">Feb 7</span>
      </div>
      <div className="mt-20">
        <h3 className="text-skin-base text-2xl mt-6 font-semibold">
          2. Use our API to get the ads
        </h3>
        <p className="text-skin-muted mt-3">
          2.1 [Python] Suppose you have this function to get an LLM response in
          your app:
        </p>
        <CodeBlock
          code="text = get_llm_response(prompt_text)"
          language="python"
          copy={false}
        />
        <p className="text-skin-muted mt-6">
          2.2 To get relevant ads for your AI app, you can use our API:
        </p>
        <Tabs mt="1rem">
          <TabList gap="0.75rem">
            <Tab
              color="#6366F1"
              bg="#EEF2FF"
              _hover={{ color: "#000AFF" }}
              _selected={{ color: "white", bg: "#000AFF" }}
              py="0.5rem"
              px="2rem"
              borderRadius="0.25rem"
            >
              Python
            </Tab>
            <Tab
              color="#6366F1"
              bg="#EEF2FF"
              _hover={{ color: "#000AFF" }}
              _selected={{ color: "white", bg: "#000AFF" }}
              py="0.5rem"
              px="2rem"
              borderRadius="0.25rem"
            >
              JavaScript
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <CodeBlock code={pythonCode} language="python" copy={true} />
            </TabPanel>
            <TabPanel>
              <CodeBlock
                code={javascriptCode}
                language="javascript"
                copy={true}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <div className="mt-20">
        <h3 className="text-skin-base text-2xl mt-6 font-semibold">
          3. Handle response
        </h3>
        <p className="text-skin-muted mt-3">
          3.1 You will receive a JSON object with ads matching your LLM output.
        </p>
        <p className="text-skin-muted mt-3">
          The JSON object will have the following structure:
        </p>
        <CodeBlock code={jsonCode} language="javascript" copy={true} />
        <p className="text-skin-muted mt-6">
          3.2 [Tailwind + React] Render returned ads:
        </p>
        <CodeBlock code={adCode} language="javascript" copy={true} />
      </div>
      <p className="text-skin-muted mt-6">
        {`3.3 [Tailwind + React] Add "Sponsored" badge:`}
      </p>
      <CodeBlock code={badgeCode} language="javascript" copy={true} />

      <div className="mt-20">
        <h3 className="text-skin-base text-2xl mt-6 font-semibold">
          Examples of rendered ads:
        </h3>
        {adData.data.map((ad) => (
          <div key={ad.id} className="bg-white shadow-md rounded-lg p-6 my-4">
            <span className="px-3 py-[2px] bg-gray-200 text-gray-500 text-[10px] font-medium rounded">
              Sponsored
            </span>
            <h3 className="text-lg font-semibold mb-2">{ad.one_liner}</h3>
            <a
              href={ad.link}
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              {ad.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
