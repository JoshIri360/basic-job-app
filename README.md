# Jobs App

Welcome to Jobs App! This React Native application allows users to browse developer jobs from popular platforms such as LinkedIn, Indeed, Glassdoor, and more. With an elegant UI/UX design, dynamic data fetching from the JSearch Rapid API, and features like job details page, custom hooks for data fetching, dynamic stylesheet, responsive design across devices, search functionality, and pagination, this app provides a seamless job browsing experience.
![jobs](https://github.com/JoshIri360/basic-job-app/assets/91752742/e17b09e4-74f8-4c4c-86c2-9953d2850dcc)

## Screens

### 1. Job Listings
- This screen displays a list of developer jobs fetched from various platforms.
- Users can scroll through the list to view different job postings.
- The job listings are displayed in a visually appealing manner with important details such as job title, company, location, and date posted.

### 2. Job Details
- Upon selecting a specific job listing from the Job Listings screen, users are directed to the Job Details screen.
- Here, users can view comprehensive details about the selected job, including job description, required skills, company information, and application instructions.
- The screen layout is optimized for readability and ease of navigation.

### 3. Search
- The Search screen allows users to search for specific developer jobs based on keywords, location, or other criteria.
- Users can enter their search query and filter options to find relevant job listings.
- The search results are dynamically updated as the user types, providing real-time feedback.

## Features

- **Dynamic Data Fetching**: Utilizes custom hooks for fetching job data dynamically from the JSearch Rapid API, ensuring up-to-date job listings.
- **Responsive Design**: Offers a responsive design that adapts to various screen sizes and orientations, providing a consistent user experience across devices.
- **Custom Stylesheet**: Implements dynamic stylesheet to enhance the UI/UX and ensure a visually pleasing interface.
- **Search Functionality**: Enables users to search for specific job listings based on keywords, location, or other criteria, enhancing usability.
- **Pagination**: Implements pagination for efficient navigation through large sets of job listings, improving performance and user experience.

## Installation

To run the Jobs App on your local machine, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the necessary dependencies.
4. Ensure you have Expo CLI installed globally on your machine. If not, you can install it using `npm install -g expo-cli`.
5. Run `npm start` to start the Expo development server.
6. Open the Expo Go app on your mobile device and scan the QR code displayed in the terminal.
7. Alternatively, you can run the app on an Android or iOS emulator/simulator by following the instructions provided by Expo.

## Dependencies

The following dependencies are used in this project:

- `@react-navigation/native`: ^6.0.6
- `@react-navigation/stack`: ^6.0.11
- `expo`: ~44.0.0
- `expo-font`: ~10.0.4
- `expo-status-bar`: ~1.2.0
- `react`: 17.0.1
- `react-dom`: 17.0.1
- `react-native`: 0.64.3
- `react-native-gesture-handler`: ~2.1.0
- `react-native-safe-area-context`: 3.3.2
- `react-native-web`: 0.17.1

## Development

For development purposes, you can use the provided scripts:

- `npm start`: Starts the Expo development server.
- `npm run android`: Starts the app on an Android emulator/device.
- `npm run ios`: Starts the app on an iOS simulator/device.
- `npm run web`: Starts the app in a web browser.
- `npm run eject`: Ejects the app from Expo, allowing for further customization.

## Contributors

- [Joshua Aideloje](https://github.com/JoshIri360)

Feel free to contribute to this project by submitting bug fixes, feature enhancements, or suggestions for improvement!
