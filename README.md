# Feedback App

This is a simple React application for gathering and displaying user feedback. It allows users to provide feedback by selecting options like "good," "neutral," or "bad" and displays statistics based on the feedback received.

## Getting Started

To get started with this application, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>

 ## How to Use
1. Upon loading the application, you will see feedback options: "good," "neutral," and "bad."
2. Click on any option to leave feedback.
3. The statistics section will update dynamically to display the total count of each feedback option provided.


## Components
### App Component
The App component is the root component of the application. It manages the state for feedback counts and renders other components.

### Section Component
The Section component is a simple wrapper component used for structuring layout.

### FeedbackOptions Component
The FeedbackOptions component displays feedback options as buttons. Users can click these buttons to leave feedback.

### Statistics Component
The Statistics component displays statistics based on the feedback received. It receives feedback counts as props and renders them accordingly.