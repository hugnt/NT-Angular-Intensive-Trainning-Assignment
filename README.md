# Basic Todos App

A modern, feature-rich todo application built with Angular 20 and styled with Tailwind CSS. This application demonstrates modern Angular development patterns including signals, standalone components, and dependency injection.

## 🚀 Features

- ✅ **Add new todos** - Create tasks with a simple input field
- ✏️ **Edit todos inline** - Click on any todo text to edit it directly
- ✅ **Mark todos complete** - Check/uncheck todos to track completion
- 🗑️ **Delete todos** - Remove todos you no longer need
- 🔍 **Filter todos** - View all, active, or completed todos
- 📊 **Task statistics** - See counts of active, completed, and total tasks
- 💾 **Local storage** - Todos persist between browser sessions
- 🌐 **External API integration** - Loads initial data from DummyJSON API
- 🎨 **Modern UI** - Beautiful gradient design with smooth animations

## 🛠️ Technology Stack

- **Framework**: Angular 20.3.0
- **Language**: TypeScript 5.9.2
- **Styling**: Tailwind CSS 4.1.16
- **State Management**: Angular Signals
- **HTTP Client**: Angular HttpClient
- **Testing**: Jasmine & Karma
- **Build Tool**: Angular CLI

## 📁 Project Structure

```
src/
├── app/
│   ├── components/           # Reusable UI components
│   │   ├── header/          # App header component
│   │   ├── create-task/     # Task creation form
│   │   ├── filter-bar/      # Filter buttons (All/Active/Completed)
│   │   ├── task-list/       # Main todo list display
│   │   └── task-stats/      # Statistics display
│   ├── models/              # TypeScript interfaces
│   │   └── todo.model.ts    # Todo data models
│   ├── services/            # Business logic services
│   │   └── todo.ts          # Main todo service with state management
│   ├── app.config.ts        # App configuration
│   ├── app.ts               # Root component
│   └── app.html             # Main app template
├── main.ts                  # Application bootstrap
├── index.html               # HTML entry point
└── styles.scss              # Global styles
```

## 🏗️ Architecture Highlights

### Modern Angular Patterns

- **Standalone Components**: All components use the new standalone component API
- **Angular Signals**: Reactive state management using signals for better performance
- **Dependency Injection**: Clean service injection using the `inject()` function
- **Computed Values**: Derived state using `computed()` for filtered todos and statistics

### State Management

The application uses a centralized `TodoService` that manages all todo operations:

- **Reactive State**: Uses Angular signals for reactive state updates
- **Local Storage**: Automatic persistence to browser storage
- **External API**: Initial data loading from DummyJSON API
- **Computed Properties**: Automatically calculated filtered todos and statistics

### Component Architecture

- **Header**: Displays the app title
- **CreateTask**: Input form for adding new todos
- **FilterBar**: Navigation buttons for filtering todos
- **TaskList**: Main list displaying todos with inline editing
- **TaskStats**: Statistics showing task counts

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd basic-todos-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:4200`

### Available Scripts

- `npm start` - Start the development server
- `npm run build` - Build the app for production
- `npm test` - Run unit tests
- `npm run watch` - Build in watch mode for development

## 🎯 Usage Guide

### Adding Todos

1. Type your task in the input field at the top
2. Press Enter or click the "Add" button
3. Your todo will appear in the list below

### Managing Todos

- **Complete a todo**: Click the checkbox next to any todo
- **Edit a todo**: Click on the todo text, edit it, and press Enter
- **Delete a todo**: Click the "✕" button next to any todo

### Filtering Todos

Use the filter buttons to view different sets of todos:
- **All**: Shows all todos
- **Active**: Shows only incomplete todos
- **Completed**: Shows only completed todos

### Statistics

The app displays real-time statistics:
- Active todos count
- Completed todos count
- Total todos count

## 🔧 Configuration

### API Configuration

The app loads initial data from the DummyJSON API. You can modify the API endpoint in `src/app/services/todo.ts`:

```typescript
private loadDataFromAPI() {
  this.httpClient
    .get<TodoListResult>('https://dummyjson.com/todos')
    .subscribe((result: TodoListResult) => {
      this.todos.set(result.todos);
    });
}
```

### Styling

The app uses Tailwind CSS for styling. You can customize the design by:

1. Modifying utility classes in component templates
2. Adding custom styles in component `.scss` files
3. Extending Tailwind configuration (if needed)

## 🧪 Testing

Run the test suite with:

```bash
npm test
```

The application includes unit tests for:
- Components functionality
- Service methods
- Todo operations

## 🏗️ Building for Production

Create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🔄 Data Persistence

- **Local Storage**: Todos are automatically saved to browser local storage
- **API Integration**: Initial data is loaded from external API
- **Automatic Sync**: Changes are immediately persisted locally

## 🎨 Design Features

- **Modern UI**: Clean, gradient-based design with rounded corners
- **Responsive**: Works well on desktop and mobile devices
- **Smooth Animations**: Hover effects and transitions for better UX
- **Visual Feedback**: Clear visual states for completed/active todos
- **Accessibility**: Proper ARIA labels and semantic HTML

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Add tests for new functionality
5. Commit your changes: `git commit -m 'Add feature'`
6. Push to the branch: `git push origin feature-name`
7. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Angular team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- DummyJSON for providing the demo API