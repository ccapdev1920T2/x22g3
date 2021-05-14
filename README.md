# x22g3 - Animo.sys 2.0

Redesigned animo.sys - the enrollment system of DLSU.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installing

1. Open your terminal
1. Clone the repository: https://github.com/ccapdev1920T2/x22g3
1. Edit the values of `.env.example` and rename it to `.env` (contact the authors for the value of each key)
1. `npm install` - installs all dependencies
1. `npm run build` - compiles the sass files into a `main.css` file in `/public/css`
1. `npm start` - starts the server

After running the above steps, you should see the following on the terminal:

```
App listening at port 8080
Connected at localhost/animo-sys
```

Open your browser and go to `localhost:8080`. You should see the page below:

<img src="./public/assets/login.jpeg"></img>

### Inserting dummy data

`npm run populate` - populates the database with dummy data from the `data` folder by running the script found in `/populate/index.js`.

### Deployment

This application is deployed at https://animo-sys.herokuapp.com/

## Authors

- **Dela Cruz, Gab**
- **Gubat, Angeline**
- **Ramos, Rethaniel**
