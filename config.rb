
# Reload the browser automatically whenever files change
configure :development do
   activate :livereload
end


set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

set :partials_dir, 'partials'
activate :directory_indexes

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :relative_assets
  set :relative_links, true
end

# Deployment config

activate :deploy do |deploy|
  deploy.method = :git
end
