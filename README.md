# ATM Machine

This is a simple ATM machine application built using React. It allows users to make deposits and withdrawals from their account balance. The application validates the transactions and updates the account balance accordingly.

## Prerequisites

Make sure you have the following installed:

- React
- ReactDOM
- Babel (for development only)
- Bootstrap CSS

## Getting Started

1. Clone the repository or download the code files.
2. Open the `index.html` file in a web browser.

## Usage

1. Upon opening the application, you will see the current account balance displayed.
2. Select an option from the dropdown menu to indicate whether you want to make a deposit or a withdrawal.
3. Enter the amount you want to deposit or withdraw in the input field.
4. If the entered amount is valid (greater than zero and less than or equal to the account balance for withdrawals), the submit button will be enabled.
5. Click the submit button to perform the transaction.
6. The account balance will be updated based on the transaction, and the new balance will be displayed.

## Code Overview

- `index.html`: This file is the entry point of the application. It includes the necessary dependencies, such as React, ReactDOM, and Bootstrap CSS. It also loads the `app.jsx` file using Babel for JSX compilation.
- `app.jsx`: This file contains the main React component, `Account`. It manages the state of the application, handles user inputs, and updates the account balance. It renders the `ATMDeposit` component based on the selected mode (deposit or withdrawal).
- `ATMDeposit`: This component displays the input fields for the transaction amount and the submit button. It receives props from the `Account` component and updates the state accordingly.

## Development

I have added styling to the app in the `styles.css` file. I also attempted to cleaar the number-input input element after submitting, but was unsuccessful. If you want to modify or enhance the code, follow these steps:

1. Install the required dependencies mentioned in the Prerequisites section.
2. Make the necessary changes to the code.
3. Run the application using a local development server or open the `index.html` file directly in a web browser.

## License

This project is licensed under the [MIT License](LICENSE).