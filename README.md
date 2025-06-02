# REST API Test Automation Framework (TAF)

## 🌟 Overview

This comprehensive REST API Test Automation Framework provides a robust, scalable, and maintainable solution for API testing, designed to streamline and standardize API test development across different services and environments.

## ✨ Key Features

- **🔧 Modular Architecture**: Highly extensible and easy to maintain
- **🛡️ Strong Typing**: Powered by TypeScript for type safety
- **🥒 BDD Support**: Cucumber-based Behavior-Driven Development
- **🌐 Multi-Environment**: Flexible configuration across different environments
- **📊 Comprehensive Logging**: Detailed request and response logging
- **🚀 Easy Integration**: Simple setup and configuration

## 📂 Project Structure

```
taf_rest_api_template/
│
├── serviceContracts/             # API Service Contract Definitions
│   └── serviceName.json          # Swagger-like contract specifications
│
├── src/
│   ├── config/                   # Configuration Management
│   │   └── environments.ts       # Environment and service configs
│   │
│   ├── models/                   # Data Transfer Objects (DTOs)
│   │   ├── common.models.ts      # Shared data models
│   │   └── serviceName.model.ts  # Service-specific models
│   │
│   ├── services/                 # Service Interaction Layer
│   │   ├── base.service.ts       # Core API interaction functionality
│   │   └── specific.service.ts   # Service-specific implementations
│   │
│   ├── features/                 # BDD Feature Specifications
│   │   └── serviceName/
│   │       └── feature.feature
│   │
│   ├── stepDefinitions/          # Test Implementation
│   │   └── feature.stepDefinition.ts
│   │
│   └── utils/                    # Utility Functions
│       └── utils.ts
│
├── package.json
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm (v8+)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-org/taf_rest_api_template.git
   cd taf_rest_api_template
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Configure Environments
   - Edit `src/config/environments.ts`
   - Set up service endpoints and credentials

## 🧪 Running Tests

```bash
# Run tests in different environments
npm run test:dev        # Development environment
npm run test:stage      # Staging environment
npm run test:uat        # UAT environment

# Run specific feature
npm run test -- --name "Feature Name"

# Generate test reports
npm run report
```

## 🏗️ Framework Components

### 1. Service Contracts
- Located in `serviceContracts/`
- JSON-based API specification
- Provides a clear contract for service interactions

### 2. Configuration Management
- Centralized environment configuration
- Supports multiple environment setups
- Manages:
  - Endpoint mappings
  - Authentication details
  - Logging configurations

### 3. Models (DTOs)
- Type-safe data representations
- Shared and service-specific models
- Ensures consistent data handling

### 4. Services Layer
- **Base Service**: Core API interaction methods
  - HTTP method support (GET, POST, PUT, DELETE)
  - Request/response logging
  - Error handling
- **Specific Services**: Tailored endpoint interactions

### 5. Testing Approach
- Cucumber-based Behavior-Driven Development
- Support for:
  - Positive test scenarios
  - Negative test scenarios
  - Complex validation logic

## 📝 Best Practices

- Keep service contracts up-to-date
- Write clear, descriptive feature files
- Use meaningful naming conventions
- Implement comprehensive logging
- Handle edge cases systematically
- Provide detailed error handling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit changes with descriptive messages
4. Push to your branch
5. Create a Pull Request

## 🛠️ Troubleshooting

- Verify all dependencies are installed
- Check environment configurations
- Validate service contract accuracy
- Review step definition implementations

## 🔍 Debugging Tips

- Use verbose logging
- Check network configurations
- Validate test data
- Verify authentication mechanisms

## 📄 License

MIT License

## 🌈 Future Roadmap

- [ ] Add more comprehensive reporting
- [ ] Implement advanced mocking capabilities
- [ ] Enhance cross-environment testing support
- [ ] Create more utility helpers

## 📞 Support

For issues or questions, please open a GitHub issue or contact the maintainers.