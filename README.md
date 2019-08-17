# geocode_european_cities
European cities displayed on a map.
Implemented very simple and quick. Can/will be upgraded with docker and oop.

## Requiremends:
installed packages on host:
apache2, php7.2, php7.2-pgsql, nodejs, postgresql postgresql-contrib

you might want to follow along these installation guides:
[postgres](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04)
[php and apache](https://www.vultr.com/docs/configure-php-7-2-on-ubuntu-18-04)
[node.js](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04)

To be able to connect with PDO onto postgres you need to fidle with the php.ini
/etc/php/7.2/php.ini
[how to fidle correctly](https://www.zentut.com/php-pdo/pdo-connecting-to-postgresql/)

At the moment front and backend server need to be started manually.
geocode\_european\_cities/api => php -S localhost:4000
geocode\_european\_cities/web/frontend => npm start (runs on localhost:3000)
