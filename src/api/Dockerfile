FROM php:7.4-fpm

RUN apt-get update
RUN apt-get install -y wget git
RUN pecl install mongodb
RUN docker-php-ext-enable mongodb

WORKDIR /app

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN wget https://get.symfony.com/cli/installer -O - | bash && mv /root/.symfony/bin/symfony /usr/local/bin/symfony
