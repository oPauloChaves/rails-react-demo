# Rails React Demo

### Getting started

- Clone
- Run `docker-compose up`
- Run `yarn install`
- Create db `rails db:create`
- Run migration `rails db:migrate`
- Run seed `rails db:seed`
- Install foreman `gem install foreman`
- Start api and client `foreman start`

### Uploading a file

```sh
curl -X POST \
  http://localhost:3000/api/v1/uploads \
  -H 'Accept: */*' \
  -H 'Content-Type: multipart/form-data' \
  -F 'upload[file]=@/home/paulo/Pictures/no-img.png'
```

### Links

- [Create React App + Rails 6.0 + Custom server deployment](https://medium.com/@eth3rnit3/create-react-app-rails-6-0-custom-server-deployment-part-1-development-configuration-92ce11ea9c56)
- [Create React App + Rails 6.0 + Custom server deployment - part 2](https://medium.com/@eth3rnit3/create-react-app-rails-6-0-4987849b960d)
