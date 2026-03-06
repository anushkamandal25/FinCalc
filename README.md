# Investment Calculator

An interactive, browser-based investment calculator built with React and Vite. This project helps users estimate the future value of investments based on periodic contributions, interest rates, and time. It also includes graphical visualization, PDF export, and responsive UI with Bootstrap.

##  Features

- **Compound Interest Calculation**: Compute the future value of investments with regular monthly contributions.
- **Interactive Form**: Users can input initial investment, monthly contribution, annual interest rate, and investment duration.
- **Chart Visualization**: Displays a line chart showing investment growth over time.
- **Export Options**: Generate and download the report as a PDF using `html2canvas` and `jspdf`.
- **Responsive Design**: Built with Bootstrap and React Bootstrap for mobile-friendly layouts.
- **Linting**: ESLint configured for code quality.

##  Project Structure

```
investment-calc/
├── public/                # Static assets and index.html
├── src/
│   ├── assets/            # Images, icons, etc.
│   ├── App.css
│   ├── App.jsx            # Root component
│   ├── index.css          # Global styles
│   ├── index.jsx          # Entry point
│   ├── InvestmentForm.css # Styles for the form
│   └── InvestmentForm.jsx # Main form component with logic and chart
├── .eslintrc.js or eslint.config.js
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

##  Technologies Used

- [React 19](https://react.dev)
- [Vite](https://vitejs.dev) as build tool and dev server
- [Bootstrap 5](https://getbootstrap.com) & [React Bootstrap](https://react-bootstrap.github.io)
- [Chart.js](https://www.chartjs.org) via [react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2)
- [html2canvas](https://html2canvas.hertzen.com) & [jsPDF](https://github.com/parallax/jsPDF) for PDF export
- ESLint for linting

##  Getting Started

### Prerequisites

- Node.js v16+ (recommended)
- npm or Yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/investment-calc.git
   cd investment-calc
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the App

- **Development mode:**
  ```bash
  npm run dev
  ```
  Open [http://localhost:5173](http://localhost:5173) in your browser.

- **Production build:**
  ```bash
  npm run build
  npm run preview   # serve built files locally
  ```



##  Usage

1. Enter values in the form fields (initial investment, monthly contribution, annual return, years).
2. Click **Calculate** to see the projected investment value and the chart.
3. Optionally, click **Export as PDF** to download a summary report.

>  The chart updates live as inputs change.

##  Calculation Logic

The form uses a standard compound interest formula with monthly contributions:

- Convert annual interest rate to a monthly rate.
- Iterate over each month to compute the balance.
- Store values for chart plotting.

##  Deployment

You can deploy the built files (`dist/` after running `npm run build`) to any static hosting service like Netlify, Vercel, GitHub Pages, or your own server.
