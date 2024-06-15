import React, { useState } from 'react';
import feedbacksvg from "/src/assets/svg/feedback.svg";

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === '' || email === '' || feedback === '') {
      setError('All fields are required');
      return;
    }
    try {
      const response = await fetch('http://localhost:3000/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, feedback }),
      });

      if (response.ok) {
        console.log('Feedback submitted successfully');
        setName('');
        setEmail('');
        setFeedback('');
        setSubmitted(true);
        setError('');
      } else {
        console.error('Failed to submit feedback');
        setError('Failed to submit feedback');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error submitting feedback');
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4 text-white md:mb-auto mb-20">
      <div className='flex items-center gap-2 mb-4'>
        <img className='invert border rounded-full p-3 bg-gray-400' width="70px" src={feedbacksvg} alt="Feedback" />
        <h2 className="text-4xl font-bold">Send feedback</h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="shadow-md rounded md:px-8 pt-6 pb-8 mb-4"
        data-netlify="true"
        name="feedbackForm"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="YouTubis-feedback" value="feedbackForm" />
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
        {error && (
          <div className="mb-4 text-red-500">
            {error}
          </div>
        )}
        <div className="mb-4">
          <label className='block text-white text-sm font-bold mb-2' htmlFor="name">
            Your Name:
          </label>
          <input
            placeholder="Enter your name..."
            className='border rounded w-full py-2 px-3 text-white bg-custom-dark mb-2 focus:outline-none focus:ring-0'
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className='block text-white text-sm font-bold mb-2' htmlFor="email">
            Your Email:
          </label>
          <input
            placeholder="Enter your email id..."
            className='border rounded w-full py-2 px-3 text-white bg-custom-dark mb-2 focus:outline-none focus:ring-0'
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="block text-white text-sm font-bold mb-2" htmlFor="feedback">
            Your Feedback:
          </label>
          <textarea
            className="border rounded w-full py-2 px-3 h-32 text-white bg-custom-dark leading-tight focus:outline-none focus:ring-0"
            id="feedback"
            name="feedback"
            placeholder="Enter your feedback here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
        {submitted && (
          <div className="mt-4 text-green-500">
            Thank you for your feedback!
          </div>
        )}
      </form>
    </div>
  );
};

export default Feedback;
