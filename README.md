# Site Portfolio

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)

## About <a name = "about"></a>

My personal site portfolio showing my works and experiences.

## Getting Started <a name = "getting_started"></a>


### Frontend

Clone the project with:

```
git clone https://github.com/pedrohrbarros/site-portfolio.git
```

Move to directory

```
cd site-portfolio/frontend
```

Install al the dependecies

```
npm install --noptional
```

Run the project locally

```
npm run dev
```

### Backend

Clone the project with:

```
git clone https://github.com/pedrohrbarros/site-portfolio.git
```

Move to directory

```
cd site-portfolio/backend
```

Install al the dependecies

```
pip install -r requirements.txt --y
```

Create the local database with Docker or with Railways.

Either, you can connect to an existent database by creating and fulfilling the .env file with the same model as the .example.env file

Collect static files

```
python manage.py collectstatic --noinput
```

Make all the migrations
```
python manage.py makemigrations
```

```
python manage.py migrate
```

Run the server locally
```
python manage.py runserver
```

### Prerequisites

- Python
- Django
- Node.js
- Next.js
- Typescript
- TailwindCSS

## Usage <a name = "usage"></a>

Note: This project is built with TailwindCSS, so it's needed the necessary knowledge to modify it.
