import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to process the input
    setOutput(`AI response to: "${input}"`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Here and Now AI</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <form onSubmit={handleSubmit}>
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your message here..."
              className="mb-4"
              rows={4}
            />
            <Button type="submit" className="w-full">Send</Button>
          </form>
          {output && (
            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">AI Response:</h2>
              <p>{output}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
