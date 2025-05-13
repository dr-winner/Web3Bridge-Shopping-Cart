# Web3Bridge Shopping Cart

A modern shopping cart application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🛍️ Product display with images, prices, and descriptions
- 🛒 Shopping cart functionality
  - Add/remove items
  - Adjust quantities
  - Real-time total calculation
- 💰 Coupon code support
  - Apply "WEB3BRIDGECOHORTx" for 10% discount
  - Case-sensitive validation
- 💾 Cart persistence using localStorage
- 📱 Responsive design for all devices
- 🎨 Modern UI with Tailwind CSS

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- React Context API
- Local Storage API

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/web3bridge-shopping-cart.git
   cd web3bridge-shopping-cart
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Testing

The application includes unit tests for core functionality. To run the tests:

```bash
npm test
# or
yarn test
```

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
├── context/         # React Context
├── data/            # Mock data
├── types/           # TypeScript types
└── tests/           # Unit tests
```

## Git Workflow

1. Create a new branch for each feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit them:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

3. Push your branch and create a pull request:
   ```bash
   git push origin feature/your-feature-name
   ```

4. After review, merge your changes into the main branch.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
