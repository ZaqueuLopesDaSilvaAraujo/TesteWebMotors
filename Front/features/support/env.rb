require 'cucumber'
require 'capybara/cucumber'
require 'selenium-webdriver'

Capybara.configure do |config|
    config.default_driver = :selenium_chrome
    config.app_host = 'https://www.webmotors.com.br'
    config.default_max_wait_time = 500
end