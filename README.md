# IELTS Institute Homepage

A modern, professional homepage for a fictional IELTS Institute built with React JS and Node.js. This project features a fully responsive design with clean, modular code structure.

## 🚀 Features

- **Modern Design**: Professional and clean UI with a modern color scheme
- **Fully Responsive**: Optimized for both mobile and desktop devices
- **Modular Components**: Clean, reusable React components
- **Interactive Elements**: Smooth animations and hover effects
- **Backend API**: Node.js server with RESTful endpoints
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## 📋 Sections Included

- **Navbar**: Logo, navigation menu, and CTA button
- **Hero Section**: Compelling headline, sub-text, CTA buttons, and visual elements
- **Features Section**: 4 feature cards showcasing key services
- **Student Testimonials**: 3 student success stories with ratings
- **Footer**: Contact information, links, and social media

## 🛠 Tech Stack

### Frontend
- React 18.2.0
- Tailwind CSS 3.3.0
- React Router DOM 6.8.1
- Custom CSS with Google Fonts (Inter)

### Backend
- Node.js
- Express.js 4.18.2
- CORS for cross-origin requests
- Helmet for security
- Morgan for logging

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ielts-institute-homepage
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```

3. **Start the development servers**
   ```bash
   npm run dev
   ```

   This will start both the React frontend (port 3000) and Node.js backend (port 5000) concurrently.

### Alternative Setup

If you prefer to run the servers separately:

**Frontend only:**
```bash
cd client
npm install
npm start
```

**Backend only:**
```bash
cd server
npm install
npm run dev
```

## 📁 Project Structure

```
ielts-institute-homepage/
├── client/                 # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Navbar.js
│   │   │   ├── Hero.js
│   │   │   ├── Features.js
│   │   │   ├── Testimonials.js
│   │   │   └── Footer.js
│   │   ├── App.js          # Main App component
│   │   ├── index.js        # React entry point
│   │   └── index.css       # Global styles with Tailwind
│   ├── tailwind.config.js  # Tailwind configuration
│   ├── postcss.config.js   # PostCSS configuration
│   └── package.json
├── server/                 # Node.js backend
│   ├── index.js           # Express server
│   └── package.json
├── package.json           # Root package.json
└── README.md
```

## 🎨 Design Choices

### Color Scheme
- **Primary Blue**: `#3b82f6` (Tailwind's blue-500) - Professional, trustworthy
- **Secondary Cyan**: `#0ea5e9` (Tailwind's sky-500) - Modern, approachable
- **Neutral Grays**: Various shades for text hierarchy and backgrounds
- **Accent Colors**: Used sparingly for highlights and CTAs

### Typography
- **Font Family**: Inter (Google Fonts) - Clean, modern, highly readable
- **Font Weights**: 300-800 range for proper hierarchy
- **Responsive Sizing**: Fluid typography that scales with screen size

### Layout
- **Grid System**: CSS Grid and Flexbox for responsive layouts
- **Container**: Max-width of 7xl (1280px) with proper padding
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Breakpoints**: Mobile-first approach with sm, md, lg, xl breakpoints

### Interactive Elements
- **Hover Effects**: Subtle scale transforms and color transitions
- **Smooth Animations**: 200-300ms transition durations
- **Visual Feedback**: Clear hover states and focus indicators
- **Loading States**: Prepared for future API integration

## 📱 Responsiveness

The design is fully responsive across all device sizes:

- **Mobile (320px+)**: Single column layout, stacked elements
- **Tablet (768px+)**: Two-column grids, adjusted spacing
- **Desktop (1024px+)**: Multi-column layouts, full feature display
- **Large Desktop (1280px+)**: Centered content with max-width container

## 🔧 Available Scripts

### Root Level
- `npm run dev` - Start both frontend and backend concurrently
- `npm run install-all` - Install dependencies for all packages
- `npm run build` - Build the React app for production

### Frontend (client/)
- `npm start` - Start React development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Backend (server/)
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

## 🌐 API Endpoints

The backend provides the following RESTful endpoints:

- `GET /api/health` - Health check
- `GET /api/features` - Get features data
- `GET /api/testimonials` - Get testimonials data
- `GET /api/stats` - Get statistics data
- `POST /api/contact` - Submit contact form
- `POST /api/newsletter` - Subscribe to newsletter

## 🚀 Deployment

### Frontend Deployment
1. Build the React app: `npm run build`
2. Deploy the `client/build` folder to your hosting service
3. Popular options: Vercel, Netlify, AWS S3, GitHub Pages

### Backend Deployment
1. Set environment variables (PORT, NODE_ENV)
2. Deploy to platforms like Heroku, Railway, DigitalOcean, or AWS
3. Ensure CORS is configured for your frontend domain

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Created as part of an assignment for a modern IELTS Institute homepage.

---

**Note**: This is a fictional IELTS Institute website created for demonstration purposes. All content, testimonials, and contact information are placeholder data.
