# MetaMeal - Complete Project Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture & Technology Stack](#architecture--technology-stack)
3. [Project Structure](#project-structure)
4. [User Flow & Journey](#user-flow--journey)
5. [Frontend Components & Pages](#frontend-components--pages)
6. [Backend API & Controllers](#backend-api--controllers)
7. [Database Models & Schema](#database-models--schema)
8. [ML Integration & Smart Recommendations](#ml-integration--smart-recommendations)
9. [Goal Calculation Service & Smart Filtering](#goal-calculation-service--smart-filtering)
10. [Key Algorithms & Business Logic](#key-algorithms--business-logic)
11. [Integration Points & Data Flow](#integration-points--data-flow)
12. [Security & Authentication](#security--authentication)
13. [API Endpoints Reference](#api-endpoints-reference)

---

## Project Overview

**MetaMeal** is a comprehensive MERN stack nutrition application that combines AI-powered meal planning with traditional Indian culinary wisdom. The platform provides personalized meal recommendations, ML-based workout plans, and health tracking optimized for Indian dietary patterns.

### Core Features
- **AI-Powered Meal Planning**: Smart meal recommendations with health condition filtering
- **ML Workout Recommendations**: 7-category exercise prediction using BMI/BMR data
- **Regional Food Explorer**: Interactive map with 84+ authentic Indian dishes across 28 states
- **Advanced Analytics**: Real-time progress tracking with weekly goal completion analysis
- **Professional Consultations**: Booking system for nutritionists and trainers
- **Smart Goal Calculation**: Automated BMR/TDEE calculations with health condition adjustments

---

## Architecture & Technology Stack

### Frontend (React.js)
- **React 18**: Modern hooks-based component architecture
- **Styled Components**: Dynamic styling with theme support
- **React Router**: SPA navigation with protected routes
- **Leaflet**: Interactive maps for regional food exploration
- **Chart.js**: Analytics visualization and progress tracking

### Backend (Node.js/Express)
- **Express.js + MongoDB**: RESTful API with JWT authentication
- **Mongoose**: ODM with schema validation
- **Python ML Service**: Flask-based workout recommendation engine

### Database & ML
- **MongoDB Atlas**: Cloud database with optimized collections
- **Python Flask**: ML microservice with scikit-learn
- **RandomForestClassifier**: 7-category workout prediction model

---

## Project Structure

```
metameal/
├── client/                          # Frontend React application
│   ├── src/
│   │   ├── components/              # Reusable UI components
│   │   │   ├── BackButton.jsx       # Navigation component
│   │   │   ├── Button.jsx          # Styled button component
│   │   │   ├── Card.jsx            # Card container
│   │   │   ├── Input.jsx           # Form input component
│   │   │   ├── Layout.jsx          # Main layout wrapper
│   │   │   ├── Loading.jsx         # Loading indicator
│   │   │   ├── navbar.jsx          # Navigation bar
│   │   │   ├── Sidebar.jsx         # Sidebar navigation
│   │   │   └── mealcard.jsx        # Meal display card
│   │   ├── pages/                  # Main application pages
│   │   │   ├── Landing.jsx         # Landing page
│   │   │   ├── Login.jsx           # Authentication
│   │   │   ├── Register.jsx        # User registration
│   │   │   ├── Home.jsx            # Dashboard
│   │   │   ├── Profile.jsx         # User profile management
│   │   │   ├── Quiz.jsx            # Onboarding quiz
│   │   │   ├── MealPlan.jsx        # Meal planning interface
│   │   │   ├── Recommendations.jsx  # ML workout recommendations
│   │   │   ├── FoodExplorer.jsx    # Regional food exploration
│   │   │   └── Analytics.jsx       # Progress tracking
│   │   ├── contexts/               # React contexts
│   │   │   └── AuthContext.jsx     # Authentication state
│   │   ├── services/               # API service layer
│   │   │   ├── api.js              # Main API client
│   │   │   └── mlService.js        # ML service integration
│   │   └── utils/                  # Utility functions
│   └── public/                     # Static assets
└── server/                         # Backend Node.js application
    ├── controllers/                # Request handlers
    │   ├── authController.js       # Authentication logic
    │   ├── mealPlanController.js   # Meal plan management
    │   ├── profileController.js    # User profile management
    │   └── analyticsController.js  # Analytics and tracking
    ├── models/                     # Database models
    │   ├── User.js                 # User schema
    │   ├── Food.js                 # Food item schema
    │   └── MealPlan.js            # Meal plan schema
    ├── routes/                     # API route definitions
    ├── services/                   # Business logic services
    │   └── GoalCalculationService.js # Smart goal calculation
    ├── middlewares/                # Express middlewares
    │   ├── authMiddleware.js       # JWT authentication
    │   └── errorMiddleware.js      # Error handling
    ├── config/                     # Configuration files
    │   ├── config.js              # Environment variables
    │   └── database.js            # MongoDB connection
    ├── server.js                   # Main server file
    └── ml_service.py              # Python ML service
```

---

## User Flow & Key Features

### 1. **Registration & Onboarding**
- **Smart Quiz System**: Multi-step profile creation with real-time BMI calculation
- **Goal Setting**: Automatic BMR/TDEE calculation based on demographics
- **Health Condition Assessment**: Dietary restrictions and health conditions
- **Activity Level Profiling**: Fitness level assessment for workout recommendations

### 2. **Dashboard & Analytics**
- **Progress Tracking**: Weekly calorie, protein, and exercise goal monitoring
- **Smart Notifications**: Goal completion alerts and meal reminders
- **Analytics Dashboard**: Comprehensive meal plan statistics and trend analysis
- **Health Metrics**: BMI, BMR, TDEE calculations with goal-based adjustments

### 3. **Meal Planning System**
- **AI-Powered Generation**: Smart meal plans based on user profile and health conditions
- **Nutritional Intelligence**: Advanced food filtering with macro-nutrient balance scoring
- **Health Condition Filtering**: Specialized foods for diabetes, thyroid, and high BP
- **Regional Cuisine Integration**: Authentic Indian dishes with nutritional information

### 4. **ML Workout Recommendations**
- **BMI-Based Predictions**: 7 workout categories from weight gain to therapeutic exercise
- **Personalized Plans**: Intensity and frequency based on fitness level and goals
- **Health Condition Adaptations**: Specialized workouts for users with health conditions
- **Progress Monitoring**: Workout completion tracking and plan adjustments

### 5. **Professional Consultation System**
- **Expert Booking**: Connect with nutritionists, dietitians, and fitness trainers
- **Profile Integration**: Share health data with professionals
- **Session Management**: Track consultations and recommendations
- **Rating System**: User feedback and professional ratings

### 6. **Regional Food Explorer**
- **Interactive Map**: Explore 28 Indian states with 84+ signature dishes
- **Cultural Heritage**: Traditional recipes and cooking methods
- **Nutritional Information**: Detailed calorie, protein, and cooking time data
- **Favorites System**: Save preferred dishes and recipes

---

## Frontend Components & Pages

### Core Components

#### **Layout.jsx**
- **Purpose**: Main application wrapper with sidebar navigation
- **Features**: 
  - Responsive design with mobile-first approach
  - Conditional rendering for authenticated/guest users
  - Integrated sidebar with navigation menu
  - Global loading states management

#### **Sidebar.jsx**
- **Purpose**: Navigation menu with user profile integration
- **Features**:
  - Dynamic menu items based on authentication state
  - User profile preview with avatar
  - Quick access to all major sections
  - Logout functionality

#### **AuthContext.jsx**
- **Purpose**: Global authentication state management
- **Features**:
  - JWT token management
  - User profile caching
  - Login/logout functionality
  - Profile update methods
  - Automatic token refresh

### Key Pages

#### **Home.jsx (Dashboard)**
- **Purpose**: Central hub for user activity and progress
- **Key Features**:
  - **Progress Tracking**: Weekly calories, protein, water, exercise
  - **Smart Goal Display**: Auto-calculated nutrition targets
  - **Today's Meals**: Current meal plan preview
  - **Quick Actions**: Generate meal plan, view recommendations
  - **Health Metrics**: BMI, BMR, TDEE calculations

#### **Profile.jsx**
- **Purpose**: Comprehensive user profile management
- **Key Features**:
  - **Personal Information**: Name, email, avatar
  - **Physical Metrics**: Height, weight, age, gender
  - **Health Preferences**: Activity level, health conditions
  - **Nutrition Goals**: Calorie, protein, carb, fat targets
  - **Smart Goal Preview**: Real-time calculation updates
  - **Meal Plan Generation**: Direct integration with meal planning
  - **Advanced Goal Calculation**: BMR, TDEE, and macro-nutrient calculations
  - **Goal-Based Adjustments**: Calorie adjustments for weight loss/gain
  - **Profile Completeness**: Validation and completion tracking

#### **Quiz.jsx**
- **Purpose**: Multi-step onboarding and profile completion
- **Key Features**:
  - **Multi-step Form**: Progressive data collection
  - **Real-time Validation**: Instant feedback on inputs
  - **Smart Animations**: Smooth transitions between steps
  - **Progress Indicator**: Visual completion tracking
  - **Profile Integration**: Direct profile creation
  - **Real-time BMI Calculation**: Dynamic BMI updates with health categorization
  - **Smart Goal Integration**: Automatic goal setting based on profile
  - **Health Condition Filtering**: Dietary restrictions and health conditions
  - **Activity Level Assessment**: Fitness level and activity preferences

#### **MealPlan.jsx**
- **Purpose**: Interactive meal planning interface
- **Key Features**:
  - **7-Day Rolling Plan**: Automatic meal generation
  - **Smart Filtering**: Health condition-based food selection
  - **Reroll Functionality**: Regenerate meals for specific days
  - **Nutrition Tracking**: Real-time macro calculations
  - **Meal Details**: Recipe, cooking time, nutritional info

#### **Recommendations.jsx**
- **Purpose**: ML-powered workout recommendations
- **Key Features**:
  - **Profile Analysis**: BMI, BMR, TDEE calculations
  - **ML Integration**: Python service for workout predictions
  - **Personalized Plans**: Based on user goals and fitness level
  - **Progress Tracking**: Workout completion monitoring
  - **Smart Notifications**: Success/error handling

#### **FoodExplorer.jsx**
- **Purpose**: Interactive exploration of regional Indian cuisines
- **Key Features**:
  - **Interactive Map**: Leaflet-based India map with 28 states
  - **Regional Cuisines**: State-wise food exploration with 84+ signature dishes
  - **Dish Information**: Nutritional details, recipes, cooking times, difficulty levels
  - **Visual Interface**: Modern card-based design with ratings and categories
  - **Favorites System**: Save preferred dishes and recipes
  - **Cultural Heritage**: Traditional cooking methods and regional specialties

---

## Backend API & Controllers

### Authentication Controller (`authController.js`)

#### **Key Functions**:
- **`register()`**: User registration with validation
  - Email/username uniqueness check
  - Password hashing with bcrypt
  - JWT token generation
  - Profile initialization

- **`login()`**: User authentication
  - Credential validation
  - Password comparison
  - JWT token generation
  - User profile retrieval

- **`getCurrentUser()`**: Token validation and user retrieval
  - JWT verification
  - User profile with preferences
  - Authentication middleware integration

### Meal Plan Controller (`mealPlanController.js`)

#### **Key Functions**:
- **`generateMealPlan()`**: Intelligent meal plan creation
  - **Smart Goal Calculation**: Using Harris-Benedict equation
  - **Health Condition Filtering**: Diabetes, thyroid, high BP
  - **Dietary Preference Handling**: Vegetarian/non-vegetarian
  - **Nutritional Balance**: Macro and micronutrient optimization
  - **7-Day Rolling Plan**: Automatic meal distribution

- **`rerollDay()`**: Day-specific meal regeneration
  - **Enhanced Randomization**: 3-pass shuffling algorithm
  - **Nutritional Targeting**: Meal-specific calorie/protein goals
  - **Dietary Compliance**: Strict adherence to user restrictions
  - **Variety Optimization**: Prevents meal repetition

- **`getActiveMealPlan()`**: Current meal plan retrieval
  - **Meal Formatting**: Detailed nutritional information
  - **Recipe Integration**: Cooking instructions and time
  - **Progress Tracking**: Consumption monitoring

### User Profile Controller (`profileController.js`)

#### **Key Functions**:
- **`getUserProfile()`**: Comprehensive profile retrieval
  - **Personal Information**: Demographics and preferences
  - **Health Metrics**: BMI, BMR, TDEE calculations
  - **Nutrition Goals**: Smart goal integration
  - **Progress History**: Historical tracking data

- **`updateProfile()`**: Profile modification with validation
  - **Smart Goal Recalculation**: Automatic when metrics change
  - **Preference Validation**: Health condition compatibility
  - **Meal Plan Update**: Regeneration trigger on significant changes

### Advanced Dashboard System (`dashboardController.js`)

#### **Weekly Progress Tracking**:
- **Goal Completion Monitoring**: Real-time tracking of daily and weekly nutrition goals
- **Progress Calculation**: Sophisticated algorithms for goal completion percentages
- **Meal Status Updates**: Dynamic meal consumption tracking with nutritional analysis
- **Smart Notifications**: Contextual alerts for goal achievements and reminders

#### **BMR/TDEE Integration**:
- **Automatic Goal Calculation**: Real-time BMR and TDEE calculations based on user profile
- **Activity Level Adjustments**: Dynamic calorie adjustments based on activity multipliers
- **Health Condition Adaptations**: Specialized calculations for diabetes, thyroid, and high BP
- **Goal-Based Modifications**: Calorie adjustments for weight loss, gain, or maintenance

#### **Analytics Dashboard Features**:
- **Progress Visualization**: Weekly progress charts with interactive elements
- **Nutrition Breakdown**: Detailed macro and micronutrient analysis
- **Calorie Trend Analysis**: Historical consumption patterns and trends
- **Goal Achievement Metrics**: Completion rates and progress indicators

### Analytics Controller (`analyticsController.js`)

#### **Comprehensive Analytics Engine**:
- **Meal Plan Statistics**: Weekly and monthly meal consumption analysis
- **Calorie Trend Visualization**: Historical calorie intake patterns
- **Macro-nutrient Breakdown**: Detailed protein, carb, and fat analysis
- **Goal Completion Rates**: Progress tracking with visual indicators
- **Health Condition Impact**: Analytics for users with specific health conditions

### Consultation System (`consultationController.js`)

#### **Professional Booking System**:
- **Professional Categories**: Nutritionists, fitness trainers, dietitians
- **Booking Management**: Schedule consultations with health professionals
- **Profile Integration**: Share user health data with consultants
- **Session History**: Track past consultations and recommendations
- **Rating System**: User feedback and professional ratings

---

## Database Models & Schema

### User Model (`User.js`)

```javascript
{
  username: String,           // Unique identifier
  name: String,              // Full name
  email: String,             // Email address
  password: String,          // Hashed password
  role: String,              // user/nutritionist/admin
  profile: {
    age: Number,             // Age in years
    height: Number,          // Height in cm
    weight: Number,          // Weight in kg
    gender: String,          // male/female/other
    activityLevel: String,   // sedentary/light/moderate/active/very_active
    filters: [String],       // veg/non-veg/diabetes/thyroid/high BP
    goals: [String],         // weight_loss/muscle_gain/maintenance
    allergies: [String],     // Custom food allergies
    avatar: String           // Profile image URL
  },
  preferences: {
    calorieGoal: Number,     // Daily calorie target
    proteinGoal: Number,     // Daily protein target (grams)
    carbGoal: Number,        // Daily carbohydrate target (grams)
    fatGoal: Number,         // Daily fat target (grams)
    mealTypes: [String],     // Preferred meal types
    cuisineTypes: [String]   // Preferred cuisines
  },
  quizCompleted: Boolean,    // Onboarding status
  createdAt: Date,           // Registration timestamp
  updatedAt: Date            // Last modification timestamp
}
```

### Food Model (`Food.js`)

```javascript
{
  name: String,              // Food item name
  filter: [String],          // veg/non-veg/diabetes/thyroid/high BP/normal
  photo: String,             // Image URL
  description: String,       // Food description
  recipe: String,            // Cooking instructions
  cookingTime: Number,       // Preparation time (minutes)
  course: String,            // breakfast/main course/snacks/dessert
  calories: Number,          // Calories per serving
  protein: Number,           // Protein content (grams)
  fats: Number,              // Fat content (grams)
  carbs: Number,             // Carbohydrate content (grams)
  fibre: Number,             // Fiber content (grams)
  sugar: Number,             // Sugar content (grams)
  addedSugar: Number,        // Added sugar (grams)
  sodium: Number,            // Sodium content (mg)
  portionSize: Number        // Serving size (grams)
}
```

### MealPlan Model (`MealPlan.js`)

```javascript
{
  user: ObjectId,            // Reference to User
  name: String,              // Plan name
  startDate: Date,           // Plan start date
  endDate: Date,             // Plan end date
  meals: [{
    day: String,             // Day of week
    date: Date,              // Specific date
    mealType: String,        // breakfast/lunch/dinner/snack
    meal: ObjectId           // Reference to Food
  }],
  preferences: {
    calorieGoal: Number,     // Daily calorie target
    proteinGoal: Number,     // Daily protein target
    carbGoal: Number,        // Daily carb target
    fatGoal: Number          // Daily fat target
  },
  status: String,            // active/completed/cancelled
  isRolling: Boolean,        // Rolling meal plan flag
  createdAt: Date,           // Creation timestamp
  updatedAt: Date            // Last modification timestamp
}
```

---

## ML Integration & Smart Recommendations

### ML Service Architecture (`ml_service.py`)

#### **Technology Stack**:
- **Flask**: Lightweight web framework for ML API
- **Scikit-learn**: Machine learning library
- **RandomForestClassifier**: Primary ML model
- **Pandas**: Data manipulation and analysis
- **NumPy**: Numerical computing
- **PyMongo**: MongoDB integration

#### **Core ML Pipeline**:

1. **Data Loading & Preprocessing**:
   ```python
   # Load dataset from CSV
   dataset_path = '../client/src/final_dataset.csv'
   df = pd.read_csv(dataset_path)
   
   # Feature engineering
   gender_encoder = LabelEncoder()
   df['Gender_encoded'] = gender_encoder.fit_transform(df['Gender'])
   
   # Feature selection
   X = df[['Weight', 'Height', 'Age', 'Gender_encoded']]
   y = df['Exercise Recommendation Plan']
   ```

2. **Model Training**:
   ```python
   # RandomForest with optimized parameters
   model = RandomForestClassifier(
       n_estimators=100,
       random_state=42,
       max_depth=10,
       min_samples_split=5
   )
   model.fit(X, y)
   ```

3. **Prediction Pipeline**:
   ```python
   def predict_workout(user_data):
       # Extract features
       features = np.array([[
           user_data['weight'],
           user_data['height'],
           user_data['age'],
           gender_encoder.transform([user_data['gender']])[0]
       ]])
       
       # Make prediction
       prediction = model.predict(features)[0]
       confidence = model.predict_proba(features).max()
       
       return {
           'workout_plan': prediction,
           'confidence': confidence,
           'recommendations': generate_recommendations(prediction)
       }
   ```

#### **MongoDB Integration**:
- **Real-time User Data**: Fetches user profiles directly from MongoDB
- **Profile Validation**: Ensures data completeness before prediction
- **History Tracking**: Stores recommendation history for analysis

#### **Workout Plan Categories**:
1. **Weight Gain Workouts**: Low-moderate intensity, strength building focus
2. **Gradual Strength Building**: Progressive overload with balanced cardio
3. **Muscle Building**: High-intensity compound exercises with recovery
4. **Fitness Maintenance**: Balanced approach for overall health
5. **Weight Loss Workouts**: High-intensity cardio and strength combination
6. **Low-Impact Fat Loss**: Joint-friendly exercises for safe weight loss
7. **Therapeutic Exercise**: Medical-grade low-impact movements

#### **API Endpoints**:
- **`/health`**: Service health check
- **`/predict-workout`**: Main workout prediction endpoint
- **`/workout-suggestions`**: Alternative recommendation engine

---

## Goal Calculation Service & Smart Filtering

### GoalCalculationService.js - Advanced Algorithm Implementation

#### **Harris-Benedict Equation Implementation**:

```javascript
static calculateBMR(age, height, weight, gender) {
  let bmr = 0;
  if (gender === 'male') {
    bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else if (gender === 'female') {
    bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  } else {
    // For 'other' gender, use average calculation
    const maleBMR = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    const femaleBMR = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    bmr = (maleBMR + femaleBMR) / 2;
  }
  return Math.round(bmr);
}
```

#### **TDEE Calculation with Activity Multipliers**:

```javascript
static calculateTDEE(bmr, activityLevel) {
  const activityMultipliers = {
    'sedentary': 1.2,        // Little/no exercise
    'light': 1.375,          // Light exercise 1-3 days/week
    'moderate': 1.55,        // Moderate exercise 3-5 days/week
    'active': 1.725,         // Heavy exercise 6-7 days/week
    'very_active': 1.9       // Very heavy exercise & physical job
  };
  
  const multiplier = activityMultipliers[activityLevel] || 1.2;
  return Math.round(bmr * multiplier);
}
```

#### **Goal-Based Calorie Adjustment**:

```javascript
static adjustCaloriesForGoals(tdee, fitnessGoals = []) {
  let calorieAdjustment = 0;
  
  // Multiple goal support
  if (fitnessGoals.includes('weight_loss')) {
    calorieAdjustment -= 500; // 1lb/week deficit
  }
  if (fitnessGoals.includes('weight_gain')) {
    calorieAdjustment += 500; // 1lb/week surplus
  }
  if (fitnessGoals.includes('muscle_gain')) {
    calorieAdjustment += 300; // Slight surplus for muscle building
  }
  
  // Ensure minimum safe calories
  const adjustedCalories = tdee + calorieAdjustment;
  return Math.max(1200, adjustedCalories);
}
```

#### **Health Condition Macro Adjustments**:

```javascript
static adjustMacrosForHealthConditions(calories, filters = []) {
  let proteinPercent = 0.25; // 25% of calories from protein
  let carbPercent = 0.45;    // 45% of calories from carbs
  let fatPercent = 0.30;     // 30% of calories from fat
  
  // Diabetes management
  if (filters.includes('diabetes')) {
    carbPercent = 0.35;      // Lower carbs (35%)
    proteinPercent = 0.30;   // Higher protein (30%)
    fatPercent = 0.35;       // Higher healthy fats (35%)
  }
  
  // Thyroid support
  if (filters.includes('thyroid')) {
    proteinPercent = 0.30;   // Higher protein to support metabolism
    carbPercent = 0.40;      // Moderate carbs
    fatPercent = 0.30;       // Standard fats
  }
  
  return {
    protein: Math.round((calories * proteinPercent) / 4), // 4 cal per gram
    carbs: Math.round((calories * carbPercent) / 4),      // 4 cal per gram
    fats: Math.round((calories * fatPercent) / 9)         // 9 cal per gram
  };
}
```

### Smart Food Filtering Algorithm

#### **Enhanced Food Filtering Logic**:

```javascript
const getUserValidFilters = (user) => {
  const validFilters = [];
  const userFilters = user.profile?.filters || [];
  const dietaryPrefs = userFilters.filter(f => ['veg', 'non-veg'].includes(f));
  const healthConditions = userFilters.filter(f => ['diabetes', 'thyroid', 'high BP'].includes(f));
  
  // 1. Handle dietary preferences
  if (dietaryPrefs.includes('veg')) {
    validFilters.push('veg'); // STRICT vegetarian filtering
  } else if (dietaryPrefs.includes('non-veg')) {
    validFilters.push('veg', 'non-veg'); // Both veg and non-veg
  } else {
    validFilters.push('veg', 'non-veg'); // Default to both
  }
  
  // 2. Enhanced food variety strategy
  if (healthConditions.length > 0) {
    // Users WITH health conditions: specific health foods + vetted normal foods
    validFilters.push(...healthConditions);
    validFilters.push('normal');
  } else {
    // Users WITHOUT health conditions: broader variety
    validFilters.push('normal');
    validFilters.push('diabetes', 'thyroid', 'high BP'); // Healthy foods add variety
  }
  
  return validFilters;
};
```

#### **Nutritional Intelligence System**:

```javascript
const isFoodValidForUser = (food, user, nutritionalTargets = null) => {
  // Step 1: Basic filter matching
  const userValidFilters = getUserValidFilters(user);
  const hasValidFilter = food.filter.some(filter => userValidFilters.includes(filter));
  
  // Step 2: Enhanced nutritional intelligence
  let isNutritionallyAppropriate = true;
  
  if (nutritionalTargets && food.filter.includes('normal')) {
    const nutritionalChecks = {
      // Calorie appropriateness
      calorieCheck: food.calories >= 50 && food.calories <= (nutritionalTargets.targetCalories * 1.3),
      // Protein adequacy
      proteinCheck: food.protein >= 3,
      // Fat reasonableness
      fatCheck: food.fats <= 40,
      // Overall nutritional balance
      balanceCheck: (food.protein + food.fats + food.carbs) > 5,
      // No extreme imbalances
      extremeCheck: !(food.fats > 35 && food.carbs > 80)
    };
    
    const passedChecks = Object.values(nutritionalChecks).filter(check => check).length;
    const nutritionalScore = passedChecks / Object.keys(nutritionalChecks).length;
    
    // Health users need stricter normal foods
    const scoreThreshold = user.profile?.filters?.some(f => 
      ['diabetes', 'thyroid', 'high BP'].includes(f)) ? 0.8 : 0.6;
    
    isNutritionallyAppropriate = nutritionalScore >= scoreThreshold;
  }
  
  return hasValidFilter && isNutritionallyAppropriate;
};
```

#### **Advanced Food Scoring System**:

```javascript
function scoreFood(food, targets) {
  const calorieScore = Math.abs(food.calories - targets.calories);
  const proteinScore = Math.abs(food.protein - targets.protein);
  const carbScore = Math.abs(food.carbs - targets.carbs);
  const fatScore = Math.abs(food.fats - targets.fats);
  
  // Lower score = better match
  return calorieScore + proteinScore + carbScore + fatScore;
}
```

#### **Regional Food Explorer Features**:

```javascript
const stateData = {
  // 28 Indian states with authentic regional cuisines
  maharashtra: {
    dishes: [
      { name: "Vada Pav", calories: "320", type: "vegetarian", rating: 4.8 },
      { name: "Puran Poli", calories: "285", type: "vegetarian", rating: 4.7 }
    ]
  },
  // ... comprehensive data for all states
};

// Interactive map features:
// - Leaflet-based India map
// - State-wise dish exploration
// - Nutritional information for each dish
// - Recipe viewing and favorite system
// - Cultural heritage descriptions
```

---

## Key Algorithms & Business Logic

### 1. **Meal Plan Generation Algorithm**

#### **Smart Meal Distribution**:
```javascript
const mealDistribution = {
  breakfast: 0.25,  // 25% of daily calories
  lunch: 0.35,      // 35% of daily calories
  snack: 0.10,      // 10% of daily calories
  dinner: 0.30      // 30% of daily calories
};
```

#### **Enhanced Randomization for Variety**:
```javascript
// 3-pass shuffling for maximum randomness
for (let shuffle = 0; shuffle < 3; shuffle++) {
  for (let f = filteredFoods.length - 1; f > 0; f--) {
    const k = Math.floor(Math.random() * (f + 1));
    [filteredFoods[f], filteredFoods[k]] = [filteredFoods[k], filteredFoods[f]];
  }
}

// Select from larger random pool (10 foods instead of 3)
const poolSize = Math.min(10, filteredFoods.length);
const randomPool = filteredFoods.slice(0, poolSize);
```

#### **Nutritional Scoring System**:
```javascript
function scoreFood(food, targets) {
  return (
    Math.abs(food.calories - targets.calories) +
    Math.abs(food.protein - targets.protein) +
    Math.abs(food.carbs - targets.carbs) +
    Math.abs(food.fats - targets.fats)
  );
}
```

### 2. **Progressive Web App Features**

#### **Real-time Progress Tracking**:
- **Weekly Goal Visualization**: Dynamic progress bars
- **Daily Contributions**: Meal-by-meal tracking
- **Streak Counters**: Motivation through gamification
- **Goal Achievement Notifications**: Instant feedback

#### **Offline Capability**:
- **Service Worker**: Caches essential data
- **Local Storage**: Stores user preferences
- **Sync on Reconnect**: Updates when online

### 3. **Smart Notification System**

#### **Context-Aware Notifications**:
```javascript
// Success notifications for goal achievements
if (dailyCalories >= calorieGoal) {
  toast.success('🎉 Daily calorie goal achieved!');
}

// Warning notifications for health conditions
if (user.hasHealthCondition && selectedFood.sodium > 2000) {
  toast.warning('⚠️ High sodium content - consider alternatives');
}

// Error handling with helpful suggestions
if (mealPlanGeneration.failed) {
  toast.error('Failed to generate meal plan. Try updating your preferences.');
}
```

---

## Integration Points & Data Flow

### 1. **Frontend ↔ Backend Communication**

#### **API Service Layer (`api.js`)**:
```javascript
// Centralized API configuration
const api = axios.create({
  baseURL: 'http://localhost:5003/api',
  headers: { 'Content-Type': 'application/json' }
});

// Automatic token injection
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Global error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
```

### 2. **Backend ↔ ML Service Communication**

#### **ML Proxy Routes (`mlRoutes.js`)**:
```javascript
router.post('/predict-workout', protect, async (req, res) => {
  try {
    const fetch = await import('node-fetch').then(mod => mod.default);
    
    const requestData = {
      ...req.body,
      user_id: req.user._id // Inject authenticated user ID
    };
    
    const response = await fetch('http://localhost:5001/predict-workout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestData)
    });
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to get workout recommendations',
      details: error.message 
    });
  }
});
```

### 3. **Database Integration Pattern**

#### **MongoDB Connection & Error Handling**:
```javascript
// Robust connection with retry logic
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      retryWrites: true
    });
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};
```

---

## Security & Authentication

### 1. **JWT Implementation**

#### **Token Generation**:
```javascript
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};
```

#### **Authentication Middleware**:
```javascript
const protect = async (req, res, next) => {
  let token;
  
  if (req.headers.authorization?.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  
  if (!token) {
    return res.status(401).json({ error: 'Not authorized' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
```

### 2. **Data Validation & Sanitization**

#### **Input Validation**:
```javascript
// Registration validation
if (!username || !email || !password || !name) {
  return res.status(400).json({
    success: false,
    error: 'Please provide all required fields'
  });
}

// Email normalization
const normalizedEmail = email.toLowerCase().trim();
```

#### **Password Security**:
```javascript
// Password hashing
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password, salt);

// Password verification
const isMatch = await bcrypt.compare(password, user.password);
```

---

## API Endpoints Reference

### Authentication Endpoints
- **POST** `/api/auth/register` - User registration
- **POST** `/api/auth/login` - User login
- **GET** `/api/auth/me` - Get current user profile

### Meal Plan Endpoints
- **GET** `/api/meal-plans/active` - Get active meal plan
- **POST** `/api/meal-plans/generate` - Generate new meal plan
- **POST** `/api/meal-plans/reroll-day` - Reroll specific day meals
- **POST** `/api/meal-plans/add-next-day` - Add next day to rolling plan

### ML Service Endpoints
- **GET** `/api/ml/health` - ML service health check
- **POST** `/api/ml/predict-workout` - Get workout recommendations
- **POST** `/api/ml/workout-suggestions` - Alternative recommendations

### User Profile Endpoints
- **GET** `/api/users/profile` - Get user profile
- **PUT** `/api/users/profile` - Update user profile
- **POST** `/api/profile/quiz` - Complete onboarding quiz

### Analytics Endpoints
- **GET** `/api/analytics/nutrition` - Get nutrition statistics
- **GET** `/api/analytics/progress` - Get progress data
- **GET** `/api/dashboard/overview` - Get dashboard overview

---

## Development & Deployment

### Environment Variables
```bash
# Backend (.env)
PORT=5003
MONGO_URI=mongodb+srv://...
JWT_SECRET=your_jwt_secret
NODE_ENV=development

# Frontend (.env)
REACT_APP_API_URL=http://localhost:5003/api
REACT_APP_ML_SERVICE_URL=http://localhost:5001
```

### Running the Application
```bash
# Backend
cd server
npm install
npm start

# Frontend
cd client
npm install
npm start

# ML Service
cd server
python ml_service.py
```

---

## Technical Highlights

### 1. **Performance Optimizations**
- **MongoDB Indexing**: Optimized queries for user and meal data
- **React Memoization**: Component optimization with React.memo
- **Lazy Loading**: Code splitting for better initial load times
- **Caching Strategy**: Local storage for user preferences

### 2. **User Experience Features**
- **Responsive Design**: Mobile-first approach with breakpoints
- **Loading States**: Skeleton screens and progress indicators
- **Error Boundaries**: Graceful error handling and recovery
- **Accessibility**: ARIA labels and keyboard navigation

### 3. **Scalability Considerations**
- **Modular Architecture**: Separation of concerns
- **API Versioning**: Future-proof endpoint design
- **Database Sharding**: Preparation for horizontal scaling
- **Microservices**: ML service as independent component

---

## Project Summary & Technical Highlights

**MetaMeal** is a comprehensive nutrition platform that combines modern AI technology with traditional Indian dietary wisdom. The application uses a sophisticated MERN stack architecture with Python ML integration to provide personalized meal planning and workout recommendations.

### Key Technical Achievements:
- **AI-Powered Meal Planning**: Smart food filtering with nutritional intelligence scoring
- **ML Workout Recommendations**: 7-category exercise prediction using real BMI datasets
- **Cultural Integration**: Interactive map showcasing 84+ authentic Indian dishes across 28 states
- **Advanced Analytics**: Real-time progress tracking with weekly goal completion analysis
- **Professional Network**: Consultation booking system connecting users with health experts

### Core Algorithms:
- **Harris-Benedict Equation**: BMR/TDEE calculations with activity level adjustments
- **Nutritional Intelligence**: Advanced food scoring with macro-nutrient balance
- **Health Condition Filtering**: Specialized meal recommendations for diabetes, thyroid, and high BP
- **Regional Cuisine Explorer**: Interactive map-based food discovery system

### Technical Implementation:
- **Frontend**: React 18 with Styled Components and Leaflet mapping
- **Backend**: Node.js/Express with MongoDB and JWT authentication
- **ML Service**: Python Flask with scikit-learn RandomForestClassifier
- **Database**: MongoDB Atlas with optimized collections and indexes

### Performance & Scalability:
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Error Handling**: Comprehensive error boundaries and graceful degradation
- **Modular Architecture**: Separation of concerns for maintainability
- **Microservices**: ML service as independent, scalable component

---

This comprehensive documentation provides a complete understanding of the MetaMeal project architecture, algorithms, and implementation details. The system combines modern web technologies with advanced nutritional science to deliver personalized health recommendations through intelligent meal planning and ML-powered workout suggestions.
