# Work Wave - Job Listing Application

A modern, responsive job listing web application that helps job seekers find their dream jobs. Built with HTML, CSS, and vanilla JavaScript.

![Work Wave](https://img.shields.io/badge/Work%20Wave-Job%20Listing-blue?style=for-the-badge)

## Features

### 🔍 Job Search
- Search jobs by title, keywords, or company name
- Filter jobs by location
- Real-time search with debounce

### 📊 Advanced Filtering
- **Category**: IT & Software, Marketing, Design, Sales, Finance, HR
- **Experience Level**: Fresher, Mid-Level, Senior
- **Job Type**: Full-time, Part-time, Contract, Internship
- **Salary Range**: Under $30k, $30k-$60k, $60k-$100k, $100k+
- Clear all filters option

### 📋 Job Listings
- Display job cards with company info, salary, location, and tags
- Pagination (6 jobs per page)
- Sort by: Newest, Oldest, Salary (High to Low), Salary (Low to High)
- Job count display

### 💼 Job Details
- Detailed job modal with:
  - Job description
  - Requirements
  - Benefits
  - Company overview
- Apply Now button (demo)

### ⭐ Saved Jobs
- Save jobs for later
- Persistent storage using localStorage
- Saved jobs sidebar with quick access
- Remove saved jobs functionality

### 📱 Responsive Design
- Fully responsive layout
- Mobile-friendly navigation
- Adapts to all screen sizes (desktop, tablet, mobile)

## Project Structure

```
job-listing/
├── index.html      # Main HTML structure
├── style.css       # All styles and responsive design
├── script.js       # JavaScript functionality
└── README.md       # Project documentation
```

## Getting Started

1. Clone or download this repository
2. Open `index.html` in any modern web browser
3. Start exploring jobs!

No build step or server required - just open the HTML file directly.

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: 
  - CSS Variables for theming
  - Flexbox and Grid layout
  - Responsive media queries
  - CSS Animations
  - Modern UI design
- **JavaScript (ES6+)**: 
  - DOM manipulation
  - LocalStorage for persistence
  - Event handling
  - Debounce function
  - Array methods for filtering/sorting
- **Font Awesome 6.4.0**: Icons

## Sample Data

The application includes 20 sample jobs across various categories:

| Category | Count |
|----------|-------|
| IT & Software | 7 |
| Marketing | 3 |
| Design | 4 |
| Sales | 2 |
| Finance | 2 |
| HR | 2 |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational purposes.

## Author

Work Wave Team

---

**Note**: This is a frontend demo application. The "Apply Now" functionality shows a demo alert. In a production environment, you would integrate with a backend API and job application system.
