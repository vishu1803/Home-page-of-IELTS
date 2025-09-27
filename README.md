# IELTS Institute Homepage

A modern, professional homepage for a fictional IELTS Institute built with React JS and Node.js. This project features a fully responsive design with advanced animations, 3D effects, and comprehensive CI/CD pipeline.

## 🚀 Features

- **Modern Design**: Professional and clean UI with a modern color scheme
- **Fully Responsive**: Optimized for both mobile and desktop devices
- **Advanced Animations**: Framer Motion animations and scroll-triggered effects
- **3D Elements**: Three.js integration with floating particles and interactive backgrounds
- **Loading Screen**: Advanced animated loading screen with progress tracking
- **Modular Components**: Clean, reusable React components
- **Interactive Elements**: Smooth animations, hover effects, and micro-interactions
- **Backend API**: Node.js server with RESTful endpoints
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **CI/CD Pipeline**: Automated testing, building, and deployment
- **Docker Support**: Containerized deployment with Docker and Docker Compose
- **Multiple Deployment Options**: Vercel, Railway, Netlify, Heroku support

## 📋 Sections Included

- **Navbar**: Logo, navigation menu, and CTA button
- **Hero Section**: Compelling headline, sub-text, CTA buttons, and visual elements
- **Features Section**: 4 feature cards showcasing key services
- **Student Testimonials**: 3 student success stories with ratings
- **Footer**: Contact information, links, and social media

## 🛠 Tech Stack

### Frontend
- **React 18.2.0** - Modern React with hooks
- **Tailwind CSS 3.3.0** - Utility-first CSS framework
- **React Router DOM 6.8.1** - Client-side routing
- **Framer Motion 10.16.16** - Advanced animations
- **Three.js 0.158.0** - 3D graphics and effects
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for Three.js
- **React Spring 9.7.3** - Physics-based animations
- **React Intersection Observer** - Scroll-triggered animations
- **Lottie React 2.4.0** - Lottie animations
- **Custom CSS** with Google Fonts (Inter)

### Backend
- **Node.js** - JavaScript runtime
- **Express.js 4.18.2** - Web framework
- **CORS 2.8.5** - Cross-origin resource sharing
- **Helmet 7.0.0** - Security middleware
- **Morgan 1.10.0** - HTTP request logger
- **Dotenv 16.3.1** - Environment variables

### DevOps & Deployment
- **GitHub Actions** - CI/CD pipeline
- **Docker** - Containerization
- **Vercel** - Frontend deployment
- **Railway** - Backend deployment
- **Jest** - Testing framework
- **ESLint** - Code linting
- **Trivy** - Security scanning

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
│   │   │   ├── About.js
│   │   │   ├── Contact.js
│   │   │   ├── Footer.js
│   │   │   ├── LoadingScreen.js
│   │   │   ├── ThreeBackground.js
│   │   │   └── __tests__/  # Component tests
│   │   ├── App.js          # Main App component
│   │   ├── index.js        # React entry point
│   │   ├── index.css       # Global styles with Tailwind
│   │   └── setupTests.js   # Test configuration
│   ├── tailwind.config.js  # Tailwind configuration
│   ├── postcss.config.js   # PostCSS configuration
│   └── package.json
├── server/                 # Node.js backend
│   ├── index.js           # Express server
│   ├── __tests__/         # Server tests
│   └── package.json
├── .github/
│   └── workflows/         # GitHub Actions CI/CD
│       ├── ci.yml
│       ├── deploy-frontend.yml
│       └── deploy-backend.yml
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose setup
├── nginx.conf             # Nginx configuration
├── vercel.json            # Vercel deployment config
├── railway.json           # Railway deployment config
├── DEPLOYMENT.md          # Deployment guide
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

## 🧪 Testing

The project includes comprehensive testing:

### Frontend Tests
- Component unit tests with React Testing Library
- Jest test runner with coverage reporting
- Mock implementations for external dependencies

### Backend Tests
- API endpoint testing with Supertest
- Unit tests for server functionality
- Integration tests for full request/response cycle

### Running Tests
```bash
# Frontend tests
cd client
npm test

# Backend tests
cd server
npm test

# All tests with coverage
npm run test:coverage
```

## 🔄 CI/CD Pipeline

The project includes automated CI/CD with GitHub Actions:

### Continuous Integration
- **Code Quality**: ESLint and Prettier checks
- **Testing**: Automated test execution
- **Security**: Trivy vulnerability scanning
- **Build Verification**: Production build testing

### Continuous Deployment
- **Frontend**: Auto-deploy to Vercel on main branch
- **Backend**: Auto-deploy to Railway on main branch
- **Docker**: Multi-platform container builds
- **Monitoring**: Health checks and error tracking

### Workflow Files
- `.github/workflows/ci.yml` - Main CI pipeline
- `.github/workflows/deploy-frontend.yml` - Frontend deployment
- `.github/workflows/deploy-backend.yml` - Backend deployment

## 🚀 Deployment

### Quick Deploy Options

#### Option 1: Vercel + Railway (Recommended)
1. **Frontend (Vercel)**:
   - Connect GitHub repository to Vercel
   - Set build command: `cd client && npm run build`
   - Set output directory: `client/build`
   - Add environment variable: `REACT_APP_API_URL`

2. **Backend (Railway)**:
   - Connect GitHub repository to Railway
   - Set root directory: `server`
   - Railway auto-detects Node.js and deploys

#### Option 2: Docker Deployment
```bash
# Build and run with Docker Compose
docker-compose up -d

# Or build individual containers
docker build -t ielts-institute .
docker run -p 3000:3000 -p 5000:5000 ielts-institute
```

#### Option 3: Manual Deployment
1. **Frontend**: Build and deploy `client/build` to any static hosting
2. **Backend**: Deploy `server/` to any Node.js hosting platform
3. **Environment**: Set required environment variables

### Environment Variables

#### Frontend (.env)
```
REACT_APP_API_URL=https://your-backend-url.com
```

#### Backend (.env)
```
NODE_ENV=production
PORT=5000
CORS_ORIGIN=https://your-frontend-url.com
```

### Deployment Platforms
- **Frontend**: Vercel, Netlify, AWS S3, GitHub Pages
- **Backend**: Railway, Heroku, DigitalOcean, AWS EC2
- **Full Stack**: Docker, Kubernetes, AWS ECS

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎯 Key Features Implemented

### UI/UX Features
1. **Advanced Animations**: Framer Motion with scroll-triggered effects
2. **3D Background Elements**: Three.js floating particles and interactive backgrounds
3. **Loading Screen**: Multi-step animated loading with progress tracking
4. **Smooth Transitions**: Page transitions and micro-interactions
5. **Scroll Animations**: Elements animate as they come into view
6. **Parallax Effects**: Background elements move at different speeds

### Technical Features
1. **Modular Component Structure**: Each section is a separate, reusable component
2. **Responsive Grid System**: Using Tailwind's responsive utilities
3. **Professional Color Scheme**: Blue and gray palette for trust and professionalism
4. **Interactive Elements**: Hover effects and smooth transitions
5. **Clean Typography**: Inter font for modern, readable text
6. **Mobile-First Design**: Optimized for mobile devices first
7. **Accessibility**: Proper semantic HTML and ARIA attributes
8. **SEO Optimized**: Meta tags and structured data
9. **Performance Optimized**: Lazy loading and code splitting
10. **Cross-Browser Compatible**: Works on all modern browsers

### Development Features
1. **Hot Reloading**: Instant updates during development
2. **Code Linting**: ESLint for code quality
3. **Automated Testing**: Jest and React Testing Library
4. **CI/CD Pipeline**: Automated testing and deployment
5. **Docker Support**: Containerized development and deployment
6. **Environment Configuration**: Separate configs for dev/prod

## 🚀 Live Demo

- **Frontend**: [View Live Demo](https://your-vercel-app.vercel.app)
- **Backend API**: [API Documentation](https://your-railway-app.railway.app/api/health)
- **GitHub Repository**: [View Source Code](https://github.com/vishu1803/Home-page-of-IELTS)

## 📊 Project Status

- ✅ **Frontend**: Complete with advanced animations
- ✅ **Backend**: Complete with RESTful API
- ✅ **Testing**: Unit and integration tests
- ✅ **CI/CD**: Automated pipeline setup
- ✅ **Docker**: Containerization ready
- ✅ **Deployment**: Multiple platform support
- ✅ **Documentation**: Comprehensive guides

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
