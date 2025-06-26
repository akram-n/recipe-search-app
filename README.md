# Recipe Search Application

A full-stack web application that helps users find recipes based on ingredients they have available. Built with Next.js frontend and Spring Boot backend, using the Spoonacular API for recipe data.

## 🚀 Features

- **Ingredient-based Search**: Enter ingredients you have and discover recipes you can make
- **Recipe Details**: View detailed recipe information including ingredients, instructions, and nutritional data
- **Responsive Design**: Modern, mobile-friendly interface built with Tailwind CSS
- **Real-time Search**: Fast recipe discovery with loading states and error handling
- **Docker Support**: Easy deployment with Docker containerization

## 🛠 Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

### Backend
- **Spring Boot 3.4.2** - Java framework
- **Maven** - Build tool and dependency management
- **Spoonacular API** - Recipe data source

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration

## 📁 Project Structure

```
recipe-search/
├── Frontend/                 # Next.js application
│   ├── app/                 # App router pages
│   ├── components/          # React components
│   ├── lib/                # API utilities
│   └── public/             # Static assets
├── Backend/                 # Spring Boot application
│   ├── src/main/java/      # Java source code
│   └── pom.xml             # Maven configuration
├── docker-compose.yml      # Docker services
└── README.md              # Project documentation
```

## 🚦 Getting Started

### Prerequisites

- **Node.js** 18+ and npm
- **Java** 17+
- **Maven** 3.6+
- **Docker** (optional)
- **Spoonacular API Key** - Get one from [Spoonacular API](https://spoonacular.com/food-api)

### Environment Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd recipe-search
   ```

2. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```
   SPOONACULAR_API_KEY=your_api_key_here
   ```

### Running with Docker (Recommended)

1. **Build and start services**
   ```bash
   docker-compose up --build
   ```

2. **Access the application**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:8080](http://localhost:8080)

### Running Locally

#### Backend Setup

1. **Navigate to Backend directory**
   ```bash
   cd Backend
   ```

2. **Build the application**
   ```bash
   ./mvnw clean package
   ```

3. **Run the Spring Boot application**
   ```bash
   ./mvnw spring-boot:run
   ```

   Or run the built JAR:
   ```bash
   java -jar target/recipesearch.jar
   ```

   The backend will be available at [http://localhost:8080](http://localhost:8080)

#### Frontend Setup

1. **Navigate to Frontend directory**
   ```bash
   cd Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

   The frontend will be available at [http://localhost:3000](http://localhost:3000)

## 🔧 API Endpoints

- `GET /api/recipes?ingredients={ingredients}` - Search recipes by ingredients
- `GET /api/recipes/{id}/information` - Get detailed recipe information

## 🏗 Build for Production

### Frontend
```bash
cd Frontend
npm run build
npm run start
```

### Backend
```bash
cd Backend
./mvnw clean package
java -jar target/recipesearch.jar
```

## ⚙️ Configuration

### Backend Configuration
Key configuration in [`Backend/src/main/resources/application.properties`](Backend/src/main/resources/application.properties):
- `spoonacular.api.key` - Spoonacular API key
- `server.port` - Server port (default: 8080)

### Frontend Configuration
- [`Frontend/next.config.mjs`](Frontend/next.config.mjs) - Next.js configuration
- [`Frontend/tailwind.config.mjs`](Frontend/tailwind.config.mjs) - Tailwind CSS configuration
- [`Frontend/lib/api.js`](Frontend/lib/api.js) - API configuration

## 🧪 Testing

### Backend Tests
```bash
cd Backend
./mvnw test
```

### Frontend Linting
```bash
cd Frontend
npm run lint
```

## 📱 Usage

1. **Enter Ingredients**: Type ingredients you have available (e.g., "chicken, tomato, cheese")
2. **Search Recipes**: Click "Find Recipes" to discover matching recipes
3. **View Details**: Click on any recipe card to see detailed information
4. **Follow Instructions**: Get step-by-step cooking instructions and ingredient lists

## 🌐 Deployment

The application is configured for deployment on:
- **Frontend**: Vercel (configured in [`Frontend/next.config.mjs`](Frontend/next.config.mjs))
- **Backend**: Render or any cloud platform supporting Java applications

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Spoonacular API](https://spoonacular.com/food-api) for recipe data
- [Next.js](https://nextjs.org/) for the amazing React framework
- [Spring Boot](https://spring.io/projects/spring-boot) for the robust backend framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
