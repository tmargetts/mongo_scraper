# The Onion Scraper

## Description

This is an application that scrapes news article from the infamous news media website The Onion. When visting The Onion Scraper, it will display the following:

* Headline - the title of the article

* Summary - a short summary of the article

* URL - the url to the original article

Users will be able to leave comments on the articles displayed and revisit them later, as well as be able to delete comments left on articles. 

The comments are then saved to a database as well and associated with their articles.

## Development

This application was built using the following NPM packages below:

* express
* express-handlebars
* body-parser
* cheerio
* request
* mongoose

The front end is designed utilizing the materialize framework.

The databsae utilized is mongoDB. 

## Demo

The Onion Scraper is deployed via heroku and can be accessed from the link below:

[The Onion Scraper](https://afternoon-reaches-26947.herokuapp.com/)
