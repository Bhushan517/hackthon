# 💕 Romantic Hackathon Website

A beautiful, animated website for a romantic hackathon event built with React, Vite, and Framer Motion.

## ✨ Features

- **Romantic Theme**: Beautiful design with love and hackathon elements
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Glass morphism, neumorphic elements, and gradient backgrounds
- **Interactive Components**: Hover effects, scroll animations, and smooth transitions
- **Complete Sections**: Hero, About, Features, Timeline, Prizes, Contact, and Footer

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   - The website will open automatically at `http://localhost:3000`
   - Or manually navigate to the URL shown in the terminal

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 🔐 **Authentication System**

The website now includes a complete authentication system with:

- **Beautiful Login Page** - Romantic design with smooth animations
- **Registration Form** - Complete signup with partner information
- **Form Validation** - Real-time error checking and password strength
- **Smooth Transitions** - Animated switching between login/register
- **Demo Credentials** - Test the system with provided sample data

### **Demo Login Credentials:**
- **Email:** `demo@romantichack.com`
- **Password:** `demo123456`
- **Partner Email:** `partner@romantichack.com`

### **Authentication Features:**
- ✨ **Glass Morphism Design** - Beautiful translucent forms
- 💕 **Romantic Theme** - Hearts, gradients, and love elements
- 🔒 **Secure Forms** - Password strength indicators and validation
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎭 **Smooth Animations** - Framer Motion powered transitions
- 👥 **Partner Integration** - Built for couples to register together

## 🎨 Design Features

### Color Scheme
- **Romantic Colors**: Pink, rose, and warm tones
- **Hackathon Colors**: Blue, purple, and tech-inspired hues
- **Gradients**: Beautiful color transitions throughout

### Typography
- **Romantic Font**: Dancing Script for romantic elements
- **Modern Font**: Inter for clean, readable text

### Animations
- **Scroll Animations**: Elements animate as they come into view
- **Hover Effects**: Interactive elements respond to user interaction
- **Floating Elements**: Hearts and other elements float in the background
- **Smooth Transitions**: All animations use smooth easing functions

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar with smooth scrolling
│   ├── Hero.jsx            # Hero section with call-to-action
│   ├── About.jsx           # About the hackathon
│   ├── Features.jsx        # Unique features showcase
│   ├── Timeline.jsx        # Event timeline with visual elements
│   ├── Prizes.jsx          # Prize categories and amounts
│   ├── Contact.jsx         # Registration form and contact info
│   ├── Footer.jsx          # Footer with links and newsletter
│   ├── Auth.jsx            # Authentication container component
│   ├── Login.jsx           # Beautiful login form
│   ├── Register.jsx        # Complete registration form
│   └── DemoAuth.jsx        # Demo credentials showcase
├── App.jsx                 # Main application component
├── main.jsx                # Application entry point
└── index.css               # Global styles and Tailwind imports
```

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Framer Motion**: Powerful animation library
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **PostCSS**: CSS processing and autoprefixer

## 🎯 Key Components

### Hero Section
- Animated title with romantic typography
- Floating background elements
- Statistics showcase
- Call-to-action buttons

### Timeline
- Visual timeline with alternating layout
- Color-coded events
- Detailed activity breakdowns
- Smooth scroll animations

### Prizes
- Main prize categories (1st, 2nd, 3rd place)
- Special category awards
- Additional rewards and opportunities
- Interactive prize cards

### Contact Form
- Comprehensive registration form
- Partner information fields
- Experience level selection
- Project idea submission

## 🎨 Customization

### Colors
Modify the color scheme in `tailwind.config.js`:
```javascript
colors: {
  romantic: {
    50: '#fdf2f8',
    // ... more shades
  },
  hackathon: {
    50: '#f0f9ff',
    // ... more shades
  }
}
```

### Animations
Customize animations in `tailwind.config.js`:
```javascript
animation: {
  'float': 'float 6s ease-in-out infinite',
  'glow': 'glow 2s ease-in-out infinite alternate',
  // ... more animations
}
```

### Content
Update the content in each component file to match your event details.

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interactions
- Adaptive layouts for all screen sizes

## 🌟 Performance Features

- **Lazy Loading**: Components animate only when in view
- **Optimized Animations**: Smooth 60fps animations
- **Efficient Rendering**: React best practices for performance
- **CSS Optimizations**: Tailwind CSS for minimal bundle size

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Import your GitHub repository
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💕 About the Project

This website was created for a romantic hackathon event where couples can code together, build amazing projects, and strengthen their relationships through technology. The design emphasizes both the romantic and technical aspects of the event, creating a unique and engaging user experience.

---

**Made with 💕 and ☕ for couples who code together!**
