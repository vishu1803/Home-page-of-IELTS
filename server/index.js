const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'IELTS Institute API is running',
    timestamp: new Date().toISOString()
  });
});

// Mock data endpoints
app.get('/api/features', (req, res) => {
  const features = [
    {
      id: 1,
      title: "Speaking Practice",
      description: "Interactive speaking sessions with AI-powered pronunciation analysis",
      icon: "microphone"
    },
    {
      id: 2,
      title: "Mock Tests",
      description: "Comprehensive practice tests that simulate real IELTS conditions",
      icon: "test"
    },
    {
      id: 3,
      title: "AI Band Score",
      description: "Advanced AI algorithms analyze your performance",
      icon: "brain"
    },
    {
      id: 4,
      title: "Writing Feedback",
      description: "Detailed feedback on your writing tasks",
      icon: "edit"
    }
  ];
  
  res.json(features);
});

app.get('/api/testimonials', (req, res) => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      score: "Band 8.5",
      location: "London, UK",
      text: "The AI-powered speaking practice was incredible! I improved from Band 6.5 to 8.5 in just 3 months."
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      score: "Band 7.0",
      location: "Dubai, UAE",
      text: "The mock tests were exactly like the real exam. I felt confident and prepared on test day."
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      score: "Band 8.0",
      location: "Madrid, Spain",
      text: "The comprehensive program covered everything I needed. The band score predictions were accurate."
    }
  ];
  
  res.json(testimonials);
});

app.get('/api/stats', (req, res) => {
  const stats = {
    successRate: 98,
    totalStudents: 10000,
    averageRating: 4.9,
    countries: 50
  };
  
  res.json(stats);
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // In a real application, you would save this to a database
  console.log('Contact form submission:', { name, email, message });
  
  res.json({ 
    success: true, 
    message: 'Thank you for your message. We will get back to you soon!' 
  });
});

// Newsletter subscription endpoint
app.post('/api/newsletter', (req, res) => {
  const { email } = req.body;
  
  // In a real application, you would save this to a database
  console.log('Newsletter subscription:', { email });
  
  res.json({ 
    success: true, 
    message: 'Successfully subscribed to our newsletter!' 
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!' 
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Route not found' 
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
});
